import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import Image from "next/image";

const cards = [
	"a-night-at-the-opera.jpg",
	"abbey-road.jpg",
	"are-you-experienced.jpg",
	"are-you-in-love.jpg",
	"art-of-doubt.jpg",
	"back-in-black.jpg",
	"bad.jpg",
	"bangles.jpg",
	"beautiful-imperfection.jpg",
	"best-of-bowie.jpg",
	"best-of-elo.jpg",
	"dangerous.jpg",
	"diana.jpg",
	"dirty-computer.jpg",
	"folder.jpg",
	"good-advice.jpg",
	"i-love-rock.jpg",
	"imagine.jpg",
	"led-zeppelin-iv.jpg",
	"leftoverture.jpg",
	"legend.jpg",
	"nevermind.jpg",
	"news-of-the-world.jpg",
	"offthewall.jpg",
	"revolver.jpg",
	"rick-james.jpg",
	"rubber-soul.jpg",
	"rumours.jpg",
	"second-helping.jpg",
	"sgt-peppers.jpg",
	"sheer-heart-attack.jpg",
	"sladest.jpg",
	"tall-tall-shadow.jpg",
	"temptations.jpg",
	"the-game.jpg",
	"thriller.jpg",
	"toto-iv.jpg",
	"van-halen.jpg",
];

const prefix =
	process.env.NODE_ENV == "development"
		? "/albums"
		: "https://storage.googleapis.com/kangah-album-covers";

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

function Deck() {
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
	// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
	return props.map(({ x, y, rot, scale }, i) => (
		<animated.div key={i} style={{ x, y }}>
			{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
			<animated.div
				{...bind(i)}
				style={{
					transform: interpolate([rot, scale], trans),
					// backgroundImage: `url(https://storage.googleapis.com/kangah-album-covers/${cards[i]})`,
				}}
			>
				<Image
					src={`${prefix}/${cards[i]}`}
					width={500}
					height={500}
					style={{ borderRadius: "5px" }}
					alt={cards[i]}
					className="album-cover"
				/>
				<style jsx global>{`
					.album-cover {
						border-radius: 10px;
					}
				`}</style>
			</animated.div>
		</animated.div>
	));
}

export default Deck;
