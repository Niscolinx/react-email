import {
	Body,
	Container,
	Head,
	Html,
	Img,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";
import React from "react";
import { logo } from "../imageExports";

const previewText = "Welcome";
export default function Email() {
	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind
				config={{
					theme: {
						extend: {
							fontFamily: {
								"sf-pro": ["SF Pro Display", "sans-serif"],
							},
						},
					},
				}}
			>
				<Body className="bg-[#E5EFFF] font-sf-pro">
					<Container>
					
					<Img src={logo} alt='logo'/>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
