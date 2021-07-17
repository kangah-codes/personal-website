/* eslint-disable @next/next/no-img-element */
const Footer = () => {
	return (
		<div className="px-8 max-w-7xl w-full flex flex-col mx-auto my-20">
			<div className="border-t border-borderColour mb-8"></div>
			<p className="md:text-5xl mx-auto text-2xl font-semibold cursive flex text-white text-center">
				<img src="/logo-main.svg" className="w-10 my-auto" alt="logo" />
				<span className="my-auto ml-4">Joshua Akangah</span>
			</p>
			<p className="text-white mx-auto text-center text-lg">
				{new Date().getFullYear()}
			</p>
		</div>
	);
};

export default Footer;
