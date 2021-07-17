import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Cards from "../components/Card";
import Likes from "../components/Tech";
import Projects from "../components/Projects";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Cards />
			<Likes />
			<Projects />
		</Layout>
	);
}
