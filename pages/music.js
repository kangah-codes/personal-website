import Layout from "../components/Layout";
import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import Image from "next/image";
import { cards } from "../data/data";
import { getPlaiceholder } from "plaiceholder";

const isDev = process.env.NODE_ENV === "development";

const getImagesFromPlaiceholders = (...classNames) =>
	Promise.all(
		classNames.map(async (className) => {
			const { css, img } = await getPlaiceholder(
				isDev
					? `/albums/${className}`
					: `https://storage.googleapis.com/kangah-album-covers/${className}`,
				{ size: 4 }
			);

			return { css, ...img };
		})
	);

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -10 + Math.random() * 20,
	delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
	`perspective(1500px) rotateX(30deg) rotateY(${
		r / 10
	}deg) rotateZ(${r}deg) scale(${s})`;

export const getStaticProps = async () => {
	const images = await getImagesFromPlaiceholders(...cards);

	return {
		props: {
			images,
		},
	};
};

export default function Home({ images }) {
	const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
	const [props, set] = useSprings(cards.length, (i) => ({
		...to(i),
		from: from(i),
	})); // Create a bunch of springs using the helpers above
	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useDrag(
		({
			args: [index],
			down,
			movement: [mx],
			direction: [xDir],
			velocity,
		}) => {
			const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
			const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
			if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
			set((i) => {
				if (index !== i) return; // We're only interested in changing spring-data for the current spring
				const isGone = gone.has(index);
				const x = isGone
					? (200 + window.innerWidth) * dir
					: down
					? mx
					: 0; // When a card is gone it flys out left or right, otherwise goes back to zero
				const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
				const scale = down ? 1.1 : 1; // Active cards lift up a bit
				return {
					x,
					rot,
					scale,
					delay: undefined,
					config: {
						friction: 50,
						tension: down ? 800 : isGone ? 200 : 500,
					},
				};
			});
			if (!down && gone.size === cards.length)
				setTimeout(() => gone.clear() || set((i) => to(i)), 600);
		}
	);

	return (
		<Layout hFull={false}>
			<div className="w-full flex flex-col mx-auto max-w-7xl pb-10 pt-48 xl:pt-36 px-8">
				<p
					className="text-5xl text-center text-gradient animate-gradient-x bg-gradient-to-r from-baseColour
					via-pink-600 to-baseColour font-semibold"
				>
					My music
				</p>
				<div className="max-w-md text-xl mt-4 text-white mx-auto text-center">
					Below are a collection of some of my favourite albums.
					Genres here range from pop, to rock, to indie, to R&B,
					alternative and soul. Hope you find something you&apos;ll
					like in this pile. Swipe through to have a look!
				</div>
			</div>
			<div className="swipe_div h-115 overflow-x-hidden z-50 flex items-center justify-center">
				{props.map(({ x, y, rot, scale }, i) => {
					return (
						<animated.div key={i} style={{ x, y }}>
							{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
							<animated.div
								{...bind(i)}
								style={{
									transform: interpolate([rot, scale], trans),
								}}
							>
								<div
									style={images[i].css}
									className={`${images[i].className} absolute rounded-lg inset-0 w-full h-full filter`}
								/>
								<Image
									className="album-cover not-draggable"
									{...images[i]}
									alt="Album Cover"
								/>
							</animated.div>
						</animated.div>
					);
				})}
			</div>
		</Layout>
	);
}
