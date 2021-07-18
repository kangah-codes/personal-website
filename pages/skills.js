import Layout from "../components/Layout";
import MyTerminal from "../components/Terminal";

export default function Home() {
	return (
		<Layout>
			<div className="w-full flex flex-col mx-auto max-w-7xl pb-10 pt-48 md:pt-36 px-8 h-screen">
				<p
					className="text-5xl text-center text-gradient animate-gradient-x bg-gradient-to-r from-baseColour
					via-green-600 to-baseColour font-semibold"
				>
					My skills
				</p>
				<div className="max-w-md text-xl mt-4 text-white mx-auto text-center sm:mb-0 xl:mb-10">
					type help for a list of commands.
				</div>
				<div className="mx-auto w-full h-full">
					<div className="relative h-full items-center justify-center flex">
						{/* <div
							className={`absolute top-1/3 left-1/4 w-64 h-64 bg-baseColour rounded-full filter blur-3xl animate-blob`}
						/>
						<div
							className={`absolute top-1/3 left-1/4 w-64 h-64 bg-baseColour rounded-full filter blur-3xl animate-blob`}
						/>
						<div
							className={`absolute top-1/3 left-1/4 w-64 h-64 bg-baseColour rounded-full filter blur-3xl animate-blob`}
						/> */}

						<div className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-500 rounded-full filter blur-3xl animate-blob" />
						<div className="absolute top-1/3 left-1/5 w-72 h-72 bg-baseColour rounded-full filter blur-3xl animate-blob animation-delay-2000" />
						<div className="absolute top-1/3 right-1/4 w-72 h-72 bg-orange-600 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
						<div className="absolute z-50">
							<MyTerminal />
						</div>
					</div>
				</div>
			</div>
			<div className="mb-20 md:mb-0" />
		</Layout>
	);
}
