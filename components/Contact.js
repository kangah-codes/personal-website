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

				<div className="flex mt-14 space-x-4">
					<img src="/ig.svg" className="w-6 md:w-10" />
					<img src="/linkedin.svg" className="w-6 md:w-10" />
					<img src="/fb.svg" className="w-6 md:w-10" />
					<img src="/github.svg" className="w-6 md:w-10" />
				</div>
			</div>
		</div>
	);
};

export default Contact;
