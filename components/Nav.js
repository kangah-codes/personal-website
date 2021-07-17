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
			className="backdrop-filter backdrop-blur-md bg-opacity-60"
			style={{ zIndex: 9999999999 }}
		>
			<div style={{ maxWidth: "100rem" }} className="mx-auto pr-4 py-3">
				<div className="flex justify-between items-center py-4 lg:justify-start lg:space-x-10 max-w-7xl mx-auto">
					<div className="flex">
						<Link href="/">
							<a className="flex">
								<img src="/logo-text.svg" alt="Logo" />
							</a>
						</Link>
					</div>
					<div className="flex items-center justify-end lg:flex-1 lg:w-0">
						<span className="text-white text-md font-medium">
							Contact
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
