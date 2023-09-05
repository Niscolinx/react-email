import {
	Body,
	Container,
	Head,
	Html,
	Preview,
	Section,
	Tailwind,
} from "@react-email/components";
import React from "react";

const previewText = "Welcome";
export default function Email() {
	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-[#FEFEFE]">
					<Container className="bg-white p-4 rounded-lg shadow-lg mx-auto max-w-3xl">
						<Section>
							<h1 className="text-2xl font-bold">Welcome</h1>
						</Section>
						<Section>
							<p>Thanks for signing up! You're all set.</p>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
