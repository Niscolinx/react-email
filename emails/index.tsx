import { Button,Html, Img } from "@react-email/components";
import React from "react";






export default function Email() {
	return (
		<Html>
			<Button
				pX={20}
				pY={12}
				href="https://example.com"
				style={{ background: "#000", color: "#fff" }}
			>
				{/* <Img src={image} /> */}
				Click me
			</Button>
		</Html>
	);
}
