/* eslint-disable @next/next/no-img-element */
const Hero = () => {
	return (
		<div className="m-auto max-w-7xl py-20 pt-48 xl:pt-36 px-8 text-white">
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
						I&apos;m a student, developer, gamer, and many other
						things.
					</div>
				</div>

				<div className="w-full flex relative items-center justify-center mt-20 h-96">
					<div className="absolute top-0 left-5 w-72 h-72 bg-purple-900 rounded-full filter blur-3xl animate-blob" />
					<div className="absolute top-0 -right-4 w-72 h-72 bg-baseColour rounded-full filter blur-3xl animate-blob animation-delay-2000" />
					<div className="absolute top-28 right-36 w-72 h-72 bg-orange-600 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
					<div className="space-y-4 absolute">
						<img
							src="/my-photo.png"
							alt="me"
							className="relative w-96"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
