/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export const thingsIdo = [
	{
		title: "Frontend Development",
		text: `I build attractive and responsive web apps (like the one you're viewing) using tools such as Reactjs, Nextjs, and good old-fashioned HTML/CSS.`,
		icon: "/laptop.png",
		blobColour: "bg-purple-400",
	},
	{
		title: "Backend Development",
		text: `I have experience in building APIs and microservices using a wide array of frameworks like Express, Django, FastAPI, Flask, etc. to deliver blazing fast services.`,
		icon: "/keyboard.png",
		blobColour: "bg-baseColour",
	},
	{
		title: "Devops",
		text: `Devops is just that part of being a programmer you can't live without. Github actions? Check. CI/CD? Check. End-to-end testing? Check. Docker? CHECK.`,
		icon: "/settings.png",
		blobColour: "bg-white",
	},
];

export const myInterests = [
	{
		title: "Music",
		text: `
			I love listening to music. I love Michael Jackson 👑, The Beatles, Queen, Led Zeppelin, Lynyrd Skynyrd, and many many more artists.
		`,
		icon: "/music.png",
		blobColour: "bg-purple-400",
	},
	{
		title: "Coding",
		text: `
			I love programming. Programming has taught me how to approach problems and solve them in many ways. It's the perfect mental exercise for me.
		`,
		icon: "/keyboard.png",
		blobColour: "bg-baseColour",
	},
	{
		title: "Gaming",
		text: `When I'm not making games, I'm playing them. I regularly play games like Red Dead Redemption 2, GTA V, FIFA 19, Minecraft and Mortal Kombat.`,
		icon: "/gaming.png",
		blobColour: "bg-white",
	},
];

const unfinished_projects = {
	space_ace: {
		type: "FOLDER",
		children: null,
	},
	weather_app: {
		type: "FOLDER",
		children: null,
	},
	youtube_dl: {
		type: "FOLDER",
		children: null,
	},
	pysplash: {
		type: "FOLDER",
		children: null,
	},
	flash: {
		type: "FOLDER",
		children: null,
	},
	visort: {
		type: "FOLDER",
		children: null,
	},
};

export const Languages = () => (
	<div>
		<p>Languages I work with</p>

		<div className="flex">
			<div className="left-2">
				<Image
					src="/tech/python.png"
					alt="python"
					width={40}
					height={40}
				/>
			</div>
			<div className="left-2">
				{" "}
				<Image
					src="/tech/typescript.png"
					alt="ts"
					width={40}
					height={40}
				/>
			</div>
			<div className="left-2">
				<Image
					src="/tech/javascript.svg"
					alt="js"
					width={40}
					height={40}
				/>
			</div>
			<style jsx global>{`
				.left-2 {
					margin-left: 0.5rem !important;
				}
			`}</style>
		</div>
	</div>
);

const tech = [
	"flask.png",
	"django.png",
	"express.png",
	"docker.png",
	"parse.png",
	"bootstrap.png",
	"gcloud.ico",
	"mongo.ico",
	"next.png",
	"postman.png",
	"react.png",
	"ant.png",
	"atom.png",
	"vscode.png",
	"arduino.png",
];

const softSkills = [
	"critical thinking",
	"problem solving",
	"public speaking",
	"teamwork",
	"leadership",
];

export const Technologies = () => (
	<div>
		<p>Technologies I work with</p>

		<div className="flex space-x-2">
			{tech.map((item, key) => (
				<img
					key={key}
					src={`/tech/${item}`}
					alt={item}
					className="rounded-md w-10"
				/>
			))}
		</div>
	</div>
);

const workExperience = [
	{
		name: "Insurerity Digital",
		website: "https://insurerity.com",
		work: [
			{
				duration: "Feb 2021 - Present",
				description: [
					"Built beautiful client portals which facilitated clients to purchase & verify insurance policies, file claims and access detailed records & reports of their insurance portfolio",
					"Redesigned and developed the new company website",
				],
				position: "Full Stack Developer, Part time",
			},
			{
				duration: "Oct 2020 - Feb 2021",
				description: [
					"Wrote and tested APIs which powers several Insurance brokerage & aggregation software",
					"Developed algorithms to handle complex policy premium calculations to conform to the NICs standard",
					"Built APIs to automate the process of sending motor policy information to the NICMID",
					"Worked devops using Docker, GCP, Heroku and Git/Github",
				],
				position: "Backend Developer, Part time",
			},
		],
		icon: "insurerity.jpg",
	},
	{
		name: "Freelance",
		work: [
			{
				duration: "Nov 2019 - Present",
				description: [
					"I build lightweight, fast, simple but performant full stack web applications and APIs for small scale businesses, schools and individuals.",
				],
				position: "Full Stack Developer, Part time",
			},
		],
	},
	{
		name: "ELiTE Education",
		website: "https://elite-education.org",
		work: [
			{
				duration: "July - October 2020",
				description: [
					"Developed a fully functional MVP for a LMS using ReactJs",
					"Worked alongside colleagues using the K-12 architecture to develop an API that enables the LMS to interact with Salesforce",
				],
				position: "Full Stack Developer, Internship",
			},
		],
		icon: "elite.png",
	},
	{
		name: "IGNIS Technologies",
		work: [
			{
				duration: "February - July 2020",
				description: [
					"Implemented logic and algorithms for a cashless transaction system for shuttle rides using Python, Flask and PostgreSQL",
					"Developed client & admin dashboards using HTML, CSS and Bootstrap",
					"Worked devops using tools like CircleCI, Heroku and Git/Github",
				],
				position: "Software Engineering Intern",
			},
		],
	},
	{
		name: "Afiewura Housing Ltd",
		website: "https://afiewura.com",
		work: [
			{
				duration: "December 2019 - June 2020",
				description: ["Developed and maintained the company's website"],
				position: "Full Stack Developer, Part time",
			},
		],
		icon: "afiewura.png",
	},
	{
		name: "ELiTE Education",
		website: "https://elite-education.org",
		work: [
			{
				duration: "July - August 2019",
				description: [
					"Developed a curriculum to introduce students to concepts in STEM education, Web App Development and embedded systems using mobile electronic science labs which simplify otherwise complicated lab experiments.",
					"Developed teaching content for a full course in developing web applications with Python + Flask and Google App Engine",
				],
				position: "STEM R&D Intern",
			},
		],
		icon: "elite.png",
	},
];

export const WorkExperience = () => (
	<div>
		<p className="mb-2 underline">Work Experience</p>

		<div className="flex flex-col space-y-4">
			{workExperience.map((item, key) => (
				<div className="flex flex-col" key={key}>
					<div className="flex">
						<img
							src={
								item.icon
									? `/work_experience/${item.icon}`
									: "/not-found.png"
							}
							className="w-10 h-10 my-auto no-mt"
							alt="elite"
						/>
						<a
							href={item.website ? item.website : "#"}
							target="_blank"
							rel="noopener noreferrer"
							className="my-auto big-text hover:underline"
						>
							{item.name}
						</a>
					</div>
					<div className="flex flex-col space-y-2">
						{item.work.map((work, key) => (
							<div key={key}>
								<div className="flex space-x-2">
									<p>{work.position},</p>
									<p>{work.duration}</p>
								</div>
								<ul className="l-disc">
									{work.description.map((desc, key) => (
										<li className="ml-4 " key={key}>
											{desc}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
		<style jsx global>{`
			.big-text {
				font-size: 1.25rem !important;
				margin-top: auto !important;
				margin-bottom: auto !important;
				margin-left: 0.5rem !important;
			}
			.no-mt {
				margin-top: 0 !important;
				border-radius: 6px !important;
			}
			.l-disc {
				list-style-type: disc !important;
			}
		`}</style>
	</div>
);

export const SoftSkills = () => (
	<div>
		<p>My soft skills include</p>

		<div className="flex flex-col">
			{softSkills.map((item, key) => (
				<p key={key}>{item}</p>
			))}
		</div>
	</div>
);

export const exampleFileSystem = {
	languages: {
		type: "FOLDER",
		children: {
			languages: {
				type: "FILE",
				content: <Languages />,
				extension: "txt",
			},
		},
	},
	technologies: {
		type: "FOLDER",
		children: {
			technologies: {
				type: "FILE",
				content: <Technologies />,
				extension: "txt",
			},
		},
	},
	unfinished_projects: {
		type: "FOLDER",
		children: { ...unfinished_projects },
	},
	soft_skills: {
		type: "FILE",
		content: <SoftSkills />,
		extension: "txt",
	},
	work_experience: {
		type: "FILE",
		content: <WorkExperience />,
		extension: "txt",
	},
};
