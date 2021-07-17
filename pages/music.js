import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Cards from "../components/Card";
import Likes from "../components/Interest";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Deck from "../components/Swipe";

export default function Home() {
	return (
		<Layout>
			<div className="w-full flex flex-col mx-auto max-w-7xl pb-10 pt-48 xl:pt-36 px-8">
				<p
					className="text-5xl text-center text-gradient animate-gradient-x bg-gradient-to-r from-baseColour
					via-pink-600 to-baseColour font-semibold"
				>
					My music
				</p>
				<div className="max-w-md text-xl mt-4 text-white mx-auto text-center">
					Below are a collection of some of my favourite albums.
					Genres here range from pop, to rock, to indie, to R&B,
					alternative and soul. Hope you find something you&amp;ll
					like in this pile. Swipe through to have a look!
				</div>
			</div>
			<div className="swipe_div h-115 overflow-x-hidden z-50">
				<Deck />
			</div>
		</Layout>
	);
}
