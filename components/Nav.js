/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Link from "next/link";

const NavBar = (props) => {
	const [isTop, setIsTop] = useState(true);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const top = window.scrollY < 100;
			if (isTop !== top) {
				setIsTop(top);
			}

			if (window.scrollY === 0) {
				setIsTop(true);
			}
		});
	}, []);

	return (
		<div
			className={`${
				!isTop
					? "backdrop-filter backdrop-blur-md bg-opacity-60 border-b border-borderColour"
					: ""
			} transition duration-500`}
			style={{ zIndex: 9999999999 }}
		>
			<div
				style={{ maxWidth: "100rem" }}
				className="mx-auto pr-4 py-0 md:py-3"
			>
				<div className="flex justify-between items-center py-4 lg:justify-start lg:space-x-10 max-w-7xl mx-auto">
					<div className="flex">
						<Link href="/">
							<a className="flex">
								<img src="/logo-text.svg" alt="Logo" />
							</a>
						</Link>
					</div>
					<div className="flex items-center justify-end lg:flex-1 lg:w- space-x-3 font-semibold">
						<a
							href="/Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="text-white text-md font-medium">
								resume
							</span>
						</a>
						<Link href="/music">
							<span
								className="text-gradient animate-gradient-x bg-gradient-to-r from-baseColour
					via-pink-600 to-baseColour text-md cursor-pointer"
							>
								music
							</span>
						</Link>
						<Link href="/skills">
							<span
								className="text-gradient animate-gradient-x bg-gradient-to-r from-baseColour
					via-green-600 to-baseColour text-md cursor-pointer"
							>
								skills
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
