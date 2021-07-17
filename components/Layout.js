import Head from "next/head";
import NavBar from "./Nav";

const Layout = ({
	children,
	title = "kangah.codes",
	desc = `Insurerity Digital is a Software-as-a-service (SaaS) company that
      provides tailored solutions to brokers and insurers seeking to fully
      digitize their customer acquisition process.`,
	pt = false,
}) => {
	return (
		<div className="flex flex-col min-h-screen bg-black">
			<Head>
				<title>{title}</title>
				<meta name="description" content={desc} />
				<meta property="og:type" content="website" />
				<meta name="og:title" property="og:title" content={title} />
				<meta
					name="og:description"
					property="og:description"
					content={desc}
				/>
				<meta
					name="keywords"
					content="Insurance, Online Insurance, Motor Insurance, Life Insurance, Digital Insurance, E-Insurance, Car Insurance"
				/>
				<meta name="author" content="Insurerity Digital" />
				<meta property="og:site_name" content="Insurerity Digital" />
				<meta property="og:url" content={`https://insurerity.com`} />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={desc} />
				<meta name="twitter:site" content="@propernounco" />
				<meta name="twitter:creator" content="@propernounco" />
				<link rel="icon" href="/favicon.ico" />
				{/* <link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;900&display=swap"
					rel="stylesheet"
				/> */}
				{/* <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet"/> */}
			</Head>

			{/* <div className="z-50">
				<NavBar />
			</div> */}

			<div className="flex-grow overflow-x-hidden">
				<div
					className="fixed top-0 w-full"
					style={{ zIndex: 99999999999 }}
				>
					<NavBar />
				</div>
				{children}
			</div>
		</div>
	);
};

export default Layout;
