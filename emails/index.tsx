import {
	Body,
	Container,
	Head,
	Html,
	Img,
	Preview,
	render,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";
import { promises as fs } from "fs";
import { dirname, join as pathJoin } from "path";
import React from "react";
import { logo } from "../imageExports";

const previewText = "Welcome";
export default function Welcome() {
	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>

			<Body
				style={{
					background: "#ffffff",
				}}
			>
				<Container
					style={{
						display: "grid",
						justifyContent: "center",
						justifyItems: "center",
						textAlign: "center",
					}}
				>
					<Section
						style={{
							display: "flex",
							// justifyItems: "center",
							// justifyContent: "center",
							width: "100%",

						}}
					>
						<Img src={logo} alt="logo" style={{
							width: '100px',
							display: 'flex',
							justifySelf: 'center'
						}} />
					</Section>
					<Text style={{
						background: 'yellow'
					}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
						exercitationem molestiae nobis! Officia ipsa expedita illum incidunt
						numquam, obcaecati reprehenderit quis, eligendi temporibus deleniti
						porro libero harum tempore omnis nulla. Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Perspiciatis, vitae nobis impedit
						animi mollitia ullam voluptatibus accusantium repudiandae, dicta,
						corrupti consequuntur saepe. Tempore temporibus esse ipsa, iure
						adipisci aut. Facere!
					</Text>
				</Container>
			</Body>
		</Html>
	);
}

const basePath = pathJoin(process.cwd(), "out");

const html = render(<Welcome />, {
	pretty: true,
});

const writeFile = async (path: string) => {
	try {
		await fs.mkdir(path);
		fs.writeFile(pathJoin(basePath, "Welcome.html"), html, "utf-8");
	} catch (err) {
		console.log(err);
	}
};

writeFile(basePath);

console.log(basePath);
