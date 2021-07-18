import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Cards from "../components/Card";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { thingsIdo, myInterests } from "../data/data";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Cards title="Things I do" data={thingsIdo} />
			<Cards title="My Interests" data={myInterests} />
			<Projects />
			<Contact />
			<Footer />
		</Layout>
	);
}
