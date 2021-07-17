/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const Contact = () => {
	return (
		<div className="px-8 max-w-7xl w-full flex mx-auto my-20 relative overflow-hidden">
			<div className="bg-baseColour mx-auto w-full rounded-xl p-8 md:p-20 relative">
				<img className="absolute" src="/pattern.svg" />
				<p className="md:text-5xl text-2xl text-black font-semibold">
					Reach out to me
				</p>
				<a
					href="mailto:hello@akangah.tech"
					className="absolute text-xl text-black font-semibold underline cursor-pointer"
				>
					hello@akangah.tech
				</a>

				<div className="flex mt-20 mb-8 md:mb-4 lg:mb-0 space-x-8 md:space-x-14">
					<a
						href="https://www.instagram.com/kanga.py/"
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-select"
					>
						<img src="/ig.svg" className="w-6 md:w-10 absolute" />
					</a>
					<a
						href="https://www.linkedin.com/in/akangah89"
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-select"
					>
						<img
							src="/linkedin.svg"
							className="w-6 md:w-10 absolute"
						/>
					</a>
					<a
						href="https://www.facebook.com/joshua.akangah"
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-select"
					>
						<img src="/fb.svg" className="w-6 md:w-10 absolute" />
					</a>
					<a
						href="https://github.com/kangah-codes"
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-select"
					>
						<img
							src="/github.svg"
							className="w-6 md:w-10 absolute"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
