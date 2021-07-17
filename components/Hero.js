/* eslint-disable @next/next/no-img-element */
const Hero = () => {
	return (
		<div className="m-auto max-w-7xl py-20 pt-20 md:pt-48 xl:pt-36 px-8 text-white">
			<div className="grid grid-cols-1 lg:grid-cols-2 w-full items-start">
				<div className="md:text-5xl text-2xl my-auto">
					<h1 className="tracking-tight font-bold text-white leading-tighter mb-4 leading-normal">
						<div className="flex">
							<div className="bg-baseColour p-3 rounded-full my-auto">
								<img
									src="/wave.png"
									alt="wave"
									className="w-8"
								/>
							</div>
							<p className="font-semibold ml-4 my-auto">
								Hey there!
							</p>
						</div>
						<div className="relative">
							<span className="text-gradient font-black bg-gradient-to-r from-white to-baseColour relative">
								I&apos;m Joshua.
								<img
									src="/underline.svg"
									alt="underline"
									className="w-60 -bottom-2 absolute transform -rotate-3"
								/>
							</span>
						</div>
					</h1>
					<div className="text-xl mt-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</div>
				</div>

				<div className="w-full flex relative lg:items-center lg:justify-center mt-20 h-96">
					<div className="absolute top-0 left-5 w-72 h-72 bg-purple-900 rounded-full filter blur-3xl animate-blob" />
					<div className="absolute top-0 -right-4 w-72 h-72 bg-baseColour rounded-full filter blur-3xl animate-blob animation-delay-2000" />
					<div className="absolute top-28 right-36 w-72 h-72 bg-orange-600 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
					<div className="space-y-4 absolute" style={{ left: "50%" }}>
						<img
							src="/my-photo.png"
							alt="me"
							className="relative"
							style={{ left: "-50%" }}
						/>

						{/* <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
							<div className="flex-1">
								<div className="h-4 w-48 bg-gray-300"></div>
							</div>
							<div>
								<div className="w-24 h-6 rounded-lg bg-purple-300"></div>
							</div>
						</div>
						<div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
							<div className="flex-1">
								<div className="h-4 w-48 bg-gray-300"></div>
							</div>
							<div>
								<div className="w-24 h-6 rounded-lg bg-purple-300"></div>
							</div>
						</div>
						<div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
							<div className="flex-1">
								<div className="h-4 w-48 bg-gray-300"></div>
							</div>
							<div>
								<div className="w-24 h-6 rounded-lg bg-purple-300"></div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
