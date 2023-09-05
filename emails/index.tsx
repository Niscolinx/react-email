import { Button,Html, Img } from "@react-email/components";
import Image from "next/image";
import React from "react";
// import Logo from '../public/images/dark-logo.png'
import Logo from '../public/images/dark-logo.png'

const baseUrl = process.env.BASE_URL

const image = `${baseUrl}/static/plaid.png`



export default function Email() {
	return (
		<Html>
			<Button
				pX={20}
				pY={12}
				href="https://example.com"
				style={{ background: "#000", color: "#fff" }}
			>
				<Img src={image} />
				Click me
			</Button>
		</Html>
	);
}
