/* eslint-disable @next/next/no-img-element */
const data = [
	{
		title: "Music",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon: "/music.png",
		blobColour: "bg-purple-400",
	},
	{
		title: "Coding",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon: "/keyboard.png",
		blobColour: "bg-baseColour",
	},
	{
		title: "Gaming",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon: "/gaming.png",
		blobColour: "bg-white",
	},
];

const Card = ({ data }) => {
	const { title, text, icon, blobColour } = data;
	return (
		<div
			className="bg-borderColour filter backdrop-blur-lg z-50 opacity-50 hover:opacity-100 focus:opacity-100
                rounded-2xl space-y-5 p-2 relative flex flex-col hover:border-baseColour transition duration-500"
		>
			<div className="w-full rounded-2xl bg-baseColour h-72 relative overflow-hidden">
				<img
					src="/test.png"
					alt="project"
					className="absolute left-10 top-10"
				/>
			</div>
			<div className="p-4">
				<p className="text-white md:text-3xl text-2xl font-semibold">
					{title}
				</p>
				<p className="text-white font-medium text-xl mt-4">{text}</p>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div className="my-0 lg:my-20 max-w-7xl flex flex-col px-8 mx-auto items-start">
			<p className="text-white md:text-5xl text-3xl font-semibold mb-4 cursive flex">
				My projects
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
