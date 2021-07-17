/* eslint-disable @next/next/no-img-element */
const data = [
	{
		title: "Indie Game",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		blobColour: "bg-yellow-600",
		icon: "/indie.gif",
		alignInverse: true,
		link: "https://github.com/kangah-codes/indie-game-concept",
	},
	{
		title: "Campusride",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		blobColour: "bg-red-700",
		icon: "/campusride.png",
		link: "https://campusridegh.herokuapp.com/",
	},
	{
		title: "Brick Breaker",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon: "/brick-game.png",
		blobColour: "bg-purple-700",
		link: "https://github.com/kangah-codes/brick_breaker",
	},
	{
		title: "Metas Strip",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon: "/metas.png",
		blobColour: "bg-baseColour",
		link: "https://github.com/kangah-codes/metas-strip",
	},
	{
		title: "Flasker",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		blobColour: "bg-pink-700",
		link: "https://github.com/kangah-codes/flasker",
	},

	{
		title: "Fingerprint attendance system",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		blobColour: "bg-green-700",
		link: "https://github.com/kangah-codes/fingerprint-attendance-system",
	},
];

const Card = ({ data }) => {
	const { title, text, icon, blobColour, alignInverse, link } = data;
	return (
		<div
			className="bg-borderColour filter backdrop-blur-lg z-50 opacity-50 hover:opacity-100 focus:opacity-100
                rounded-2xl space-y-5 p-2 relative flex flex-col transition duration-500"
		>
			{icon ? (
				<div
					className={`w-full rounded-2xl ${blobColour} h-72 relative overflow-hidden`}
				>
					<img
						src={icon}
						alt="project"
						className={`absolute ${
							alignInverse
								? "right-12 bottom-12"
								: "left-12 top-12"
						} rounded-lg`}
					/>
				</div>
			) : (
				<div className={`w-full rounded-2xl ${blobColour} h-72 flex`}>
					<img
						src="/confused.png"
						alt="project"
						className="m-auto rounded-lg"
					/>
				</div>
			)}
			<div className="p-4">
				<a
					className="text-white md:text-3xl text-2xl font-semibold hover:underline"
					href={link}
				>
					{title}
				</a>
				<p className="text-white font-medium text-xl mt-4">{text}</p>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div className="my-0 lg:my-20 max-w-7xl flex flex-col px-8 mx-auto items-start">
			<p className="text-white md:text-5xl text-3xl font-semibold mb-4 cursive relative">
				A few of my projects
				<img
					src="/underline.svg"
					alt="underline"
					className="w-60 -bottom-2 absolute transform -rotate-3 invert-2"
				/>
			</p>
			<div className="w-full grid grid-cols-1 lg:grid-cols-3  z-50 relative  gap-5 ">
				{data.map((card, key) => (
					<Card key={key} data={card} />
				))}
			</div>
		</div>
	);
};

export default Projects;
