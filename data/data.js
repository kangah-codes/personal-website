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

		<div className="flex space-x-2">
			<div>
				<Image
					src="/tech/python.png"
					alt="python"
					width={40}
					height={40}
				/>
			</div>
			<div>
				{" "}
				<Image
					src="/tech/typescript.png"
					alt="ts"
					width={40}
					height={40}
				/>
			</div>
			<div>
				<Image
					src="/tech/javascript.svg"
					alt="js"
					width={40}
					height={40}
				/>
			</div>
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
};
