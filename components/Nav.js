/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";

const NavBar = (props) => {
	const [mobileMenuOn, setMobileMenu] = useState(false);
	const [menu1, setMenu1] = useState(false);
	const [menu2, setMenu2] = useState(false);

	const closeMenu1 = () => {
		setMenu1(false);
	};

	const closeMenu2 = () => {
		setMenu2(false);
	};

	return (
		<div
			className="relative backdrop-filter backdrop-blur-md bg-opacity-60 border-b border-gray-50"
			style={{ zIndex: 9999999999 }}
		>
			<div style={{ maxWidth: "100rem" }} className="mx-auto px-5">
				<div className="flex justify-between items-center py-4 lg:justify-start lg:space-x-10">
					<div className="flex">
						{/* justify-start lg:w-0 lg:flex-1 */}
						<Link href="/">
							<a className="flex">
								<img
									className="w-10"
									src="/logo-main.svg"
									alt="Logo"
								/>
							</a>
						</Link>
					</div>
					<div className="-mr-2 -my-2 lg:hidden">
						<button
							onClick={() => setMobileMenu(true)}
							type="button"
							className="rounded-md p-2 inline-flex items-center justify-center text-black hover:text-black hover:bg-gray-100 focus:outline-none"
							aria-expanded="false"
						>
							<span className="sr-only">Open menu</span>
							{/* Heroicon name: outline/menu */}
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
					<nav className="hidden lg:flex space-x-5">
						<div
							className="relative"
							onMouseEnter={() => setMenu1(true)}
							onMouseLeave={() => setMenu1(false)}
						>
							<button
								type="button"
								className="text-gray-700 group rounded-md inline-flex items-center text-md font-semibold hover:text-black focus:outline-none"
								aria-expanded="false"
							>
								kangah.codes
							</button>
						</div>
						<Link href="/plans">
							<a className="text-gray-700 group rounded-md inline-flex items-center text-md font-semibold hover:text-black focus:outline-none">
								Plans
							</a>
						</Link>
						<div
							className="relative"
							onMouseEnter={() => setMenu2(true)}
							onMouseLeave={() => setMenu2(false)}
						>
							<button
								type="button"
								onClick={() => setMenu2(!menu2)}
								className="text-gray-700 group rounded-md inline-flex items-center text-md font-semibold hover:text-black focus:outline-none"
								aria-expanded="false"
							>
								<span>More</span>
								<svg
									className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-700"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</nav>
					<div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
						<Link href="/support">
							<a className="text-gray-700 group rounded-md inline-flex items-center text-md font-semibold hover:text-black focus:outline-none">
								Support
							</a>
						</Link>

						<a className="ml-6 my-auto">
							{/* <img src="https://www.countryflags.io/gh/flat/64.png" className="w-8 ml-6" /> */}
						</a>
						<Link href="/get-started">
							<a
								className="ml-6  transition duration-500  whitespace-nowrap inline-flex items-center j
                ustify-center px-4 py-2 border border-transparent rounded-full shadow-md text-md font-semibold text-white bg-gradient-to-r from-yellow-400 via-insurerity-light to-insurerity animate-gradient-x"
							>
								Contact Sales
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
