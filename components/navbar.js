"use client"
import React from 'react'
import Script from 'next/script'
import { useState } from 'react';
import Link from 'next/link';



const navbar = () => {
	// const [isMenuOpen, setIsMenuOpen] = useState(false);


	
		
	// 	// Burger menus
	// 	document.addEventListener('DOMContentLoaded', function() {
	// 		// open
	// 		const burger = document.querySelectorAll('.navbar-burger');
	// 		const menu = document.querySelectorAll('.navbar-menu');
	// 		console.log(burger.length)
	// 		if (burger.length && menu.length) {
				
	// 			for (var i = 0; i < burger.length; i++) {
	// 				burger[i].addEventListener('click', function() {
	// 					for (var j = 0; j < menu.length; j++) {
	// 						menu[j].classList.toggle('hidden');
	// 					}
	// 				});
	// 			}
	// 		}
		
	// 		// close
	// 		const close = document.querySelectorAll('.navbar-close');
	// 		const backdrop = document.querySelectorAll('.navbar-backdrop');
		
	// 		if (close.length) {
	// 			for (var i = 0; i < close.length; i++) {
	// 				close[i].addEventListener('click', function() {
	// 					for (var j = 0; j < menu.length; j++) {
	// 						menu[j].classList.toggle('hidden');
	// 					}
	// 				});
	// 			}
	// 		}
		
	// 		if (backdrop.length) {
	// 			for (var i = 0; i < backdrop.length; i++) {
	// 				backdrop[i].addEventListener('click', function() {
	// 					for (var j = 0; j < menu.length; j++) {
	// 						menu[j].classList.toggle('hidden');
	// 					}
	// 				});
	// 			}
	// 		}
	// 	});
		

  return (
    <>

<div className="bg-blue-500">
	<nav className="relative px-4 py-4 flex justify-between items-center bg-white">
	
		<div className="lg:hidden">
			<button className="navbar-burger flex items-center text-blue-600 p-3">
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
			<li><Link className="text-sm text-gray-400 hover:text-gray-500" href="/">Home</Link></li>
			
			<li><Link className="text-sm text-blue-600 font-bold" href="/transactions">All Transactions</Link></li>
			
			<li> <Link className="text-sm text-gray-400 hover:text-gray-500" href="/stats">Stats</Link> </li>
			
		</ul>
		<a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
		
	</nav>
	<div className="navbar-menu relative z-50 hidden">
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<button className="navbar-close">
				</button>
			</div>
			<div>
				<ul>
					<li className="mb-1">
						<Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/">Home</Link>
						
					</li>
					<li className="mb-1">
						<Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/stats">Stats</Link>
						
					</li>
					<li className="mb-1">
						<Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/transaction">All Transactions</Link>
						
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
					<a className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
				</div>
				<p className="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2024</span>
				</p>
			</div>
		</nav>
	</div>
</div>
    </>
  )
}

export default navbar