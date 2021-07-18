/* eslint-disable @next/next/no-img-element */

const Card = ({ data }) => {
	const { title, text, icon, blobColour } = data;
	return (
		<div className="relative">
			<div
				className={`absolute top-1/3 left-1/4 w-32 h-32 ${blobColour} rounded-full filter blur-3xl animate-widen`}
			/>
			<div
				className="bg-borderColour-light filter backdrop-blur-lg z-50 border border-borderColour 
                rounded-lg space-y-5 p-8 relative flex flex-col hover:border-baseColour transition duration-500"
			>
				<img src={icon} className="w-14" alt="Bulb" />
				<p className="text-white md:text-3xl text-2xl font-semibold">
					{title}
				</p>
				<p className="text-white font-medium text-xl">{text}</p>
			</div>
		</div>
	);
};

const Cards = ({ title, data }) => {
	return (
		<div className="my-0 lg:my-20 max-w-7xl flex flex-col px-8 mx-auto items-start">
			<p className="text-white md:text-5xl text-3xl font-semibold mb-4 cursive relative">
				{title}
				<img
					src="/underline.svg"
					alt="underline"
					className="w-60 -bottom-2 absolute transform -rotate-3 invert"
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

export default Cards;
