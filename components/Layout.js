import Head from "next/head";
import NavBar from "./Nav";

const Layout = ({
	children,
	title = "kangah.codes",
	desc = "Welcome to my website.",
	pt = false,
	hFull = true,
}) => {
	return (
		<div
			className={`flex flex-col ${
				hFull ? "hscreen" : ""
			} h-130 md:h-150 bg-black`}
		>
			<Head>
				<script
					type="text/javascript"
					dangerouslySetInnerHTML={{
						__html: `
								(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
								new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
								j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
								'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
								})(window,document,'script','dataLayer','GTM-WTDK4BZ');
						`,
					}}
				/>

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
					content="Developer, Joshua, Joshua Akangah, kangah-codes"
				/>
				<meta name="author" content="Joshua Akangah" />
				<meta property="og:site_name" content="kangah.codes" />
				<meta property="og:url" content={`https://kangah.codes`} />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={desc} />
				<meta name="twitter:site" content="@propernounco" />
				<meta name="twitter:creator" content="@propernounco" />
				<link rel="icon" href="/favicon.ico" />
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-GP0K3G6G40"
				></script>
				<script
					type="text/javascript"
					dangerouslySetInnerHTML={{
						__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());

								gtag('config', 'G-GP0K3G6G40');
						`,
					}}
				/>
			</Head>

			{/* <div className="z-50">
				<NavBar />
			</div> */}

			<div className="flex-grow">
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
