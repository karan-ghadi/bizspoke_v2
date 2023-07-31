import React from "react";
import logo from './../../assets/images/svg/logo.svg'

export const NavbarComponent = () => {
	return (
		<>
			<nav className="w-full py-4 px-8 justify-between items-center gap-96 hidden xl:inline-flex fixed top-0 left-0 bg-black z-50">
				<div className="xl:w-96">
					<a href="/">
						<img src={logo} alt="Bizspoke Logo" />
					</a>
				</div>
				<ul className="flex justify-end items-center gap-6">
					<li className="font-primary_Medium text-2xl text-white">About Us</li>
					<li className="font-primary_Medium text-2xl text-white">Project</li>
					<li className="font-primary_Medium text-2xl text-white">Build Your Vision</li>
				</ul>
			</nav>
		</>
	);
};
