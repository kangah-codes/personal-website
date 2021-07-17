/* eslint-disable @next/next/no-img-element */
const Hero = () => {
	return (
		<div className="m-auto max-w-7xl py-20 px-0 md:px-8 text-white">
			<div className="grid grid-cols-1 lg:grid-cols-2 w-full">
				<div className="md:text-5xl text-2xl">
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
						<span className="text-gradient font-black bg-gradient-to-r from-white to-baseColour">
							I&apos;m Joshua.
						</span>
					</h1>
					<div className="text-xl mt-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</div>
				</div>

				<div className="w-full relative items-center justify-center">
					<div className="absolute top-0 left-5 w-72 h-72 bg-purple-900 rounded-full filter blur-3xl animate-blob" />
					<div className="absolute top-0 -right-4 w-72 h-72 bg-baseColour rounded-full filter blur-3xl animate-blob animation-delay-2000" />
					<div className="absolute top-28 right-36 w-72 h-72 bg-orange-600 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
					<div className="space-y-4 absolute">
						<div className="w-full border border-gray-50 rounded-2xl p-8 bg-black bg-opacity-60 filter backdrop-blur-lg flex">
							<span className="mx-auto w-32 h-32 bg-baseColour rounded-full p-3" />
						</div>

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
