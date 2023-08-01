import React, { Fragment, useEffect, useRef, useLayoutEffect } from 'react';
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { NavbarComponent } from './components/navbar/NavBarComponent';
import AnchorLinksComponents from './components/UIComponents/AnchorLinks';
import HeadingFourComponent from './components/UIComponents/HeadingFour';
import SubHeadingOneComponent from './components/UIComponents/SubHeadingOne';
import FormLabelComponent from './components/UIComponents/FormLabel';
import HeadingOneComponent from './components/UIComponents/HeadingOne';

import arrowRight from './../src/assets/images/svg/arrow-right.svg';
import contactImage from './../src/assets/images/contact-image.jpg';

import topLeftRing from './../src/assets/images/section-one/left-ring.svg';
import topRightRing from './../src/assets/images/section-one/right-ring.svg';

import highEndRetreats from './../src/assets/images/section-four/high-end-retreats-block.jpg';
import highEndRetreatsParallax from './../src/assets/images/section-four/high-end-retreats-block-parallax.jpg';

import companyOffsitesBlock from './../src/assets/images/section-four/company-offsites-block.jpg';
import companyOffsitesParallax from './../src/assets/images/section-four/company-offsites-parallax.jpg';

import uniqueCorporateEventsBlock from './../src/assets/images/section-four/unique-corporate-events-block.jpg';

import sportMusicExperienceBlock from './../src/assets/images/section-four/sport-music-experience-block.jpg';

import sectionTwoBottom from './../src/assets/images/section-two/image-center-bottom.jpg';
import sectionThreeLeft from './../src/assets/images/section-two/image-left-top.jpg';
import sectionThreeRight from './../src/assets/images/section-two/image-right-top.jpg';


import sectionFourImageOne from './../src/assets/images/s4-image-one.jpg';
import sectionFourImageTwo from './../src/assets/images/s4-image-two.jpg';
import sectionFourImageThree from './../src/assets/images/s4-image-three.jpg';
import sectionFourImageFour from './../src/assets/images/s4-image-four.jpg';
import sectionFourImageFive from './../src/assets/images/s4-image-five.jpg';
import sectionFourImageSix from './../src/assets/images/s4-image-six.jpg';



function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

function App() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);


	useEffect(() => {
		const parralaxes: any = document.querySelectorAll('.parralax');
		window.addEventListener('scroll', function () {
			let scrollOffset = window.scrollY;
			parralaxes.forEach((parralax: any) => {
				parralax.style.backgroundPositionY = (scrollOffset - parralax.offsetTop) * 0.7 + "px"
			})
		})
	});

	useLayoutEffect(() => {
		const element: any = ref.current;
		gsap
			.timeline()
			.to(
				element.querySelector(".text-e"), {
				opacity:0,
				display:'none',
				ease: "none",
				yoyo: true,
				delay: 1,
				duration: 0.1
			}
			)
			.fromTo(
				element.querySelector(".text-i"), {
				opacity: 0,
			}, {
				opacity: 1,
				display:'inline-block',
				ease: "none",
				duration: 0.3
			}
			)
			.fromTo(
				element.querySelector(".text-z"), {
					opacity: 0,
			}, {
				opacity: 1,
				display:'inline-block',
				ease: "none",
				duration: 0.3
			}
			);
	}, []);

	const tweenAnimation: any = () =>{
		if (window.innerWidth > 767) {
			const element: any = ref.current;

			// Section One Animations
			gsap.to(".first-paragraph", {
				yPercent: 50,
				opacity: 0,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector("#section_one"),
					start: "top top", // the default values
					// end: "bottom top",
					scrub: true,
				},
			});
			gsap.to(
				element.querySelector(".ring-left"), {
				xPercent: -150,
				opacity: 0.5,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector("#section_one"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true,
				},
			}
			)
			gsap.to(
				element.querySelector(".ring-right"), {
				xPercent: 150,
				opacity: 0.5,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector("#section_one"),
					start: "top top", // the default values
					// end: "bottom top",
					scrub: true,
				},
			}
			);


			// Section Two Animations
			gsap.to(".section-two-head-text", {
				yPercent: -40,
				opacity: 1,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section-two-head-text"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section-two-anchor", {
				yPercent: -60,
				opacity: 1,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section-two-head-text"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_two-top-left", {
				yPercent: -60,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector("#section_two"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});


			// Section Three Animations
			gsap.to("#invisible-text", {
				opacity: 0,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_three_text"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_three-top-right", {
				yPercent: 100,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector("#section_three"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_three-center-bottom", {
				yPercent: -35,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector("#section_three"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});

			// Section Four Animations
			gsap.to(".section_four-title", {
				yPercent: -10,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_four-title"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_four_center", {
				yPercent: -20,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_four_center"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_four_side", {
				yPercent: 30,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_four_side"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_four_side_b", {
				yPercent: 30,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_four_side_b"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});

			// Section Five Animations
			gsap.to(".section_five-title", {
				yPercent: 60,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-title"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_five-highEndRetreatsParallax", {
				yPercent: 100,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-highEndRetreatsParallax"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_five-highEndRetreats", {
				yPercent: -20,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-highEndRetreats"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_five-companyOffsitesParallax", {
				yPercent: -250,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-companyOffsitesParallax"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_five-companyOffsites", {
				yPercent: -30,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-companyOffsites"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_five-uniqueCorporateEventsBlock", {
				yPercent: -40,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-uniqueCorporateEventsBlock"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_five-sportMusicExperienceBlock", {
				yPercent: -40,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-sportMusicExperienceBlock"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});

			// Section Five Animations
			gsap.to(".section_six-title", {
				yPercent: -50,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector("#section_six"),
					start: "top top", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
		}
		if(window.innerWidth < 768){
			const element: any = ref.current;

			// Section One Animations
			gsap.to(".first-paragraph", {
				yPercent: 50,
				opacity: 0,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector("#section_one"),
					start: "top top", // the default values
					// end: "bottom top",
					scrub: true,
				},
			});

			// Section Two Animations
			gsap.to(".section_two-top-left", {
				yPercent: 20,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector("#section_two"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			// Section Three Animations
			gsap.to("#invisible-text", {
				opacity: 0,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_three_text"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_three-top-right", {
				yPercent: 30,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector("#section_three"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			// Section Four Animations
			gsap.to(".section_four_center", {
				xPercent: -10,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_four_center"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_four_side", {
				xPercent: 10,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_four_side"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_four_side_b", {
				xPercent: 10,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_four_side_b"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			// Section Five Animations
			gsap.to(".section_five-highEndRetreatsParallax", {
				yPercent: 70,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-highEndRetreatsParallax"),
					start: "top center", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_five-companyOffsitesParallax", {
				yPercent: -90,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-companyOffsitesParallax"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_five-uniqueCorporateEventsBlock", {
				yPercent: -20,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-uniqueCorporateEventsBlock"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
			gsap.to(".section_five-sportMusicExperienceBlock", {
				yPercent: -20,
				ease: "none",
				scrollTrigger: {
					trigger: element.querySelector(".section_five-sportMusicExperienceBlock"),
					start: "top bottom", // the default values
					// end: "bottom top",
					scrub: true
				},
			});
		}
	}

	useEffect(() => {
		tweenAnimation();
	}, []);


	return (
		<div className="w-full mx-auto bg-black" ref={ref}>
			{/* Navbar */}
			<NavbarComponent />

			{/* Section One */}
			<div id="section_one" className='parralax flex items-center justify-center h-screen xl:h-[62.75rem] w-full relative px-5 xl:px-0'>
				<img src={topLeftRing} className='w-[40%] xl:w-[35%] absolute top-1/2 xl:top-0 left-0 -translate-y-1/2 xl:translate-y-0 ring-left' alt="top-section-rings" />
				<img src={topRightRing} className='w-[40%] xl:w-[35%] absolute top-1/2 xl:top-0 right-0 -translate-y-1/2 xl:translate-y-0 ring-right' alt="top-section-rings" />
				<div className='text-center first-paragraph overflow-hidden'>
					<HeadingOneComponent className="justify-center">
					<div className='inline-block text-b transition-all'>B</div><div className='inline-block text-e'>E</div><div className='hidden text-i'>I</div><div className='hidden text-z'>Z</div>
						SPOKE
					</HeadingOneComponent>
					<HeadingOneComponent>
						<span className='text-[3rem] xl:text-[7rem] block'>EVENTS</span>
					</HeadingOneComponent>
				</div>
			</div>

			{/* @section 2 */}
			<div id='section_two' className='relative z-10 px-5 xl:px-0'>
				<div className='py-20 xl:py-36'>
					<h3 className='section-two-head-text font-secondary_Variable font-normal text-base xl:text-[2.5rem]
            text-[#707070] w-full xl:w-[63rem] mx-auto text-center leading-tight'>
						Imagine a Team of Industry Veterans Tirelessly Curating Your Vision, Personalised and Evolving With Your Needs.
						<span className='text-white block mt-10 text-2xl xl:text-5xl'>No Templates, Just Excellence.</span>
					</h3>
					<div className="section-two-anchor">
						<AnchorLinksComponents class="flex hover:underline justify-center">
							Explore Possibilities <img src={arrowRight} alt='arrow' className='ml-2 w-4 xl:w-8' />
						</AnchorLinksComponents>
					</div>
				</div>
				<div className='section_two-top-left absolute -bottom-60 left-10 hidden xl:block w-[30rem]'>
					<img src={sectionThreeLeft} alt='side small' />
				</div>
			</div>

			{/* @Section 3 */}

			<div id='section_three' className='parralax h-screen w-full flex text-center items-end xl:items-center justify-center relative z-20'>
				<div className='section_two-top-left absolute top-28 left-9 xl:left-10 block xl:hidden w-[70%] xl:w-auto'>
					<img src={sectionThreeLeft} alt='side small' />
				</div>
				<div className='section_three-top-right absolute bottom-48 xl:bottom-auto xl:-top-16 right-9 xl:right-10 z-10 w-[70%] xl:w-[25rem]'>
					<img src={sectionThreeRight} alt='side small' />
				</div>
				<div className='hidden xl:grid section_three-center-bottom absolute -bottom-16 left-0 right-0 place-items-center z-10 w-[25rem] xl:mx-auto'>
					<img src={sectionTwoBottom} alt='side small' />
				</div>

				<div className='section_three_text relative z-30'>
					<h4 className='font-secondary_Variable font-normal text-[1.5rem] xl:text-[3.5rem] text-white
            w-full xl:w-[48rem] mx-auto text-center leading-tight'>
						Focus on the bigger picture, <span className='block'>while we make the work <span id="invisible-text">invisible</span></span>
					</h4>
					<AnchorLinksComponents class="flex hover:underline justify-center">
						Explore Possibilities <img src={arrowRight} alt='arrow' className='ml-2 w-[1rem] xl:w-[2rem]' />
					</AnchorLinksComponents>
				</div>
			</div>

			{/* @Section 4 */}
			<div id='section_four' className='w-full text-center'>
				<div className="section_four-title w-full xl:w-[60rem] mx-auto py-10 xl:py-24 mt-16 mb-8">
					<h4 className='font-secondary_Variable font-normal text-[2rem] xl:text-[6rem] text-white w-full xl:w-[48rem] mx-auto text-center leading-tight mb-3'>
						Relationships <span className='text-white block'>that give us an edge</span>
					</h4>
					<p className='font-primary_Variable font-normal text-base xl:text-[2rem] text-gray mx-auto text-center leading-tight'>
						Built over decades, our trusted partnerships with leading curators & destination management companies
						give us a global reach to bring alive whatever you imagine, whenever you want.
					</p>
				</div>
				<div className='block xl:flex items-start justify-between w-full xl:w-[65rem] mx-auto pb-24'>
					<div className='section_four_side'>
						<img src={sectionFourImageOne} alt='sectionEdgeImgA' className='mb-14 mx-auto' />
						<img src={sectionFourImageTwo} alt='sectionEdgeImgA' className='mb-14 mx-auto' />
					</div>
					<div className='section_four_center xl:mt-28'>
						<img src={sectionFourImageThree} alt='sectionEdgeImgA' className='mb-14 mx-auto' />
						<img src={sectionFourImageFour} alt='sectionEdgeImgA' className='mb-14 mx-auto' />
					</div>
					<div className='section_four_side_b'>
						<img src={sectionFourImageFive} alt='sectionEdgeImgA' className='mb-14 mx-auto' />
						<img src={sectionFourImageSix} alt='sectionEdgeImgA' className='mb-14 mx-auto' />
					</div>
				</div>
			</div>

			{/* @section 5 */}
			<div id="section_five" className='font-secondary_Variable font-normal text-[6rem] text-white mx-auto text-center leading-tight xl:py-9'>
				<div className='section_five-title w-full xl:w-[56rem] mx-auto'>
					<h4 className='text-[2rem] xl:text-[4.5rem] text-[#E4E4E4] font-secondary_Variable font-bold'>
						Bring Your Vision Alive, Afterall The Possibilities
						<span className='italic font-medium block'>Are Endless</span>
					</h4>
				</div>
				<div className='mt-32 xl:mt-60 px-5 xl:px-0 xl:w-[80rem] xl:mx-auto'>
					<div className='w-full xl:w-[80rem] relative mx-auto block xl:flex justify-start items-center'>
						<div className='section_five-highEndRetreatsParallax absolute -top-4 xl:-top-6 -left-2 xl:-left-9 z-20 w-[10rem] xl:w-auto'>
							<img src={highEndRetreatsParallax} alt='side small' />
						</div>
						<div className='section_five-highEndRetreats img-section xl:w-[42rem]'>
							<img src={highEndRetreats} alt="side" />
						</div>
						<div className='content-section w-full xl:w-[30rem] xl:ml-10 mt-5 xl:mt-0 text-left'>
							<HeadingFourComponent>
								<span className='block xl:ml-28'>High End</span> Retreats
							</HeadingFourComponent>
							<SubHeadingOneComponent>
								<span className='block xl:ml-20 mt-4 xl:mt-8'>
									Network In The Lap Of Luxury With Business Leaders, Friends & Family
								</span>
							</SubHeadingOneComponent>
						</div>
					</div>
				</div>
				<div className='mt-32 xl:mt-60 px-5 xl:px-0 xl:w-[80rem] xl:mx-auto'>
					<div className='w-full xl:w-[80rem] relative mx-auto flex flex-col xl:flex-row justify-start items-center'>
						<div className='order-2 xl:order-1 content-section w-full xl:w-[30rem] xl:mr-10 text-left mt-5 xl:mt-0'>
							<HeadingFourComponent className="text-left xl:text-right xl:-mr-10 relative z-10">
								COMPANY<span className='block xl:-mr-10'>OFFSITES</span>
							</HeadingFourComponent>
							<SubHeadingOneComponent>
								<span className='block mt-4 xl:mt-8'>
									Recharge And Inspire Teams As You Continue To Scale Your Business
								</span>
							</SubHeadingOneComponent>
						</div>
						<div className='section_five-companyOffsites img-section order-1 xl:order-2 xl:w-[50rem]'>
							<img src={companyOffsitesBlock} alt="side" />
						</div>
						<div className='section_five-companyOffsitesParallax absolute bottom-40 right-4 xl:-right-2 z-10 w-[10rem] xl:w-auto'>
							<img src={companyOffsitesParallax} alt='side small'/>
						</div>
					</div>
				</div>
				<div className='mt-32 xl:mt-60 px-5 xl:px-0 xl:w-[80rem] xl:mx-auto'>
					<div className='w-full xl:w-[80rem] relative mx-auto flex flex-col xl:flex-row justify-start xl:items-center'>
						<div className='section_five-uniqueCorporateEventsBlock img-section xl:w-[50rem]'>
							<img src={uniqueCorporateEventsBlock} alt="side" />
						</div>
						<div className='content-section xl:w-[30rem] xl:ml-10 text-left relative z-10 mt-5 xl:mt-0'>
							<HeadingFourComponent className="leading-[1]">UNIQUE
								<span className='block xl:-ml-28'>CORPORATE</span>
								<span className='block'>EVENTS</span>
							</HeadingFourComponent>
							<SubHeadingOneComponent>
								<span className='block xl:ml-20 mt-4 xl:mt-8 text-left xl:text-right leading-5 xl:leading-8'>
									For Teams, Clients Or Specific
									<span className='block'>Audiences - You Envision It,</span>
									<span className='block'>We’ll Build It</span>
								</span>
							</SubHeadingOneComponent>
						</div>
					</div>
				</div>
				<div className='mt-32 xl:mt-60 mb-60 px-5 xl:px-0 xl:w-[80rem] xl:mx-auto'>
					<div className='w-full xl:w-[84rem] relative mx-auto flex flex-col xl:flex-row justify-start items-center'>
						<div className='content-section xl:w-[30rem] text-left order-2 xl:order-1 mt-5 xl:mt-0'>
							<HeadingFourComponent className="text-left xl:text-right relative z-10 xl:-mr-10">
								SPORT & MUSIC <span className='block'>EXPERIENCES</span>
							</HeadingFourComponent>
							<SubHeadingOneComponent>
								<span className='block mt-4 xl:mt-8'>
									Enjoy All-Access At Some Of The Most Sought After Global Events.
								</span>
							</SubHeadingOneComponent>
						</div>
						<div className='section_five-sportMusicExperienceBlock img-section order:1 xl:order-2 xl:w-[50rem]'>
							<img src={sportMusicExperienceBlock} alt="side" />
						</div>
					</div>
				</div>
			</div>

			{/* @section */}
			<div id="section_six" className='parralax h-screen w-full flex text-center items-end
        justify-center section-bg'>
				<div className='section_six-title text-center w-[70.375rem] mb-8'>
					<HeadingFourComponent>
						CURATE YOUR NEXT EXPERIENCE, WE'RE READY WHEN YOU ARE.
					</HeadingFourComponent>
					<AnchorLinksComponents class="text-center block justify-center">
						Start a conversation
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='mx-auto'>
							<path d="M8 12L16 20L24 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</AnchorLinksComponents>
				</div>
			</div>

			{/* @section */}
			<div id="section_seven" className='px-8 py-[10rem]'>
				<div className="flex gap-8">
					<div className="image-container w-1/2 hidden xl:block">
						<img className="object-cover h-[51.6875rem] w-[44.625rem]" src={contactImage} alt="" />
					</div>
					<div className="form-container w-full xl:w-1/2">
						<h3 className='font-secondary_Variable font-normal text-[2rem] xl:text-[3rem] text-white leading-tight uppercase mb-10'>
							Contact Us
						</h3>
						<form className='w-full'>
							<div className='mb-7'>
								<FormLabelComponent htmlfor={'fullName'}>Full Name</FormLabelComponent>
								<div className="mt-2">
									<input
										type="fullName"
										name="fullName"
										id="fullName"
										className="block w-full rounded-md border border-gray-200 px-5 py-3 text-white focus:ring-0
                      bg-gray-100 placeholder:text-gray text-[1rem]"
										placeholder="Enter your full name here"
										aria-describedby="full-name-description"
									/>
								</div>
							</div>
							<div className='mb-7'>
								<FormLabelComponent htmlfor={'email'}>Email</FormLabelComponent>
								<div className="mt-2">
									<input
										type="email"
										name="email"
										id="email"
										className="block w-full rounded-md border border-gray-200 px-5 py-3 text-white focus:ring-0
                      bg-gray-100 placeholder:text-gray text-[1rem]"
										placeholder="Enter your full name here"
										aria-describedby="email-description"
									/>
								</div>
							</div>
							<div className='mb-7'>
								<FormLabelComponent htmlfor={'phone_number'}>Phone number</FormLabelComponent>
								<div className="relative mt-2 rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 flex items-center">
										<label htmlFor="country" className="sr-only">
											Phone number
										</label>
										<select
											id="country"
											name="country"
											autoComplete="country"
											className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-3 text-white text-[1rem] font-primary_Variable font-medium"
										>
											<option>US</option>
											<option>CA</option>
											<option>EU</option>
										</select>
									</div>
									<input
										type="text"
										name="phone_number"
										id="phone_number"
										className="block w-full rounded-md border border-gray-200 pl-12 pr-5 py-3 text-white bg-gray-100 placeholder:text-gray text-[1rem] font-primary_Variable font-medium"
										placeholder="+91 8876897465"
									/>
								</div>
							</div>
							<div className='mb-9'>
								<FormLabelComponent htmlfor={'looking_for'}>What are you looking to build?</FormLabelComponent>
								<Menu as="div" className="relative inline-block text-left w-full mt-2">
									<div>
										<Menu.Button
											className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-gray-100 placeholder:text-gray px-5 py-3 text-sm font-semibold text-white shadow-sm text-[1rem]">
											Select
											<ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
										</Menu.Button>
									</div>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0"
										enterTo="transform opacity-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100"
										leaveTo="transform opacity-0"
									>
										<Menu.Items
											className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-gray-100 text-white shadow-lg">
											<div className="py-1">
												<Menu.Item>
													{({ active }) => (
														<span
															className={classNames(
																active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-[1rem]'
															)}
														>
															Option 1
														</span>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<span className={classNames(
															active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-[1rem]'
														)}
														>
															Option 2
														</span>
													)}
												</Menu.Item>
											</div>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
							<div>
								<button type="button"
									className="block w-full rounded-md bg-black px-5 py-3 text-[1.5rem] font-semibold text-white border"
								>
									Submit
								</button>
							</div>

						</form>
					</div>
				</div>
			</div>

		</div>
	);
}

export default App;
