import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";
import React from "react";
import {
	checkBoxFill,
	facebook,
	instagram,
	linkedin,
	logo,
	twitter,
	welcome,
} from "../imageExports";

interface VercelInviteUserEmailProps {
	adminName?: string;
	adminEmail?: string;
	generatedPassword?: string;
	inviteLink?: string;
}

export const Welcome = ({
	adminName = "Admin's Name",
	adminEmail = `Admin's Email Address`,
	generatedPassword = "Generated Password",
	inviteLink = "https://sesa.com",
}: VercelInviteUserEmailProps) => {
	const previewText = `Welcome ${adminName} to SESA`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-[#E5EFFF] my-auto mx-auto font-sans">
					<Container className="mx-auto p-[20px] w-full">
						<Section className="mt-[32px]">
							<Img
								src={logo}
								width="100"
								height="30"
								alt="logo"
								className="my-0 mx-auto"
							/>
						</Section>
						<Section className="mt-[32px] bg-white p-[20px] rounded-lg shadow">
							<Img src={welcome} alt="welcome" className="my-0 mx-auto" />

							<Section className="grid   justify-center my-[2rem]">
								<Heading className="text-black text-[24px] text-center p-0 mx-0 font-semibold my-0">
									Welcome to SESA Admin Portal
								</Heading>
								<Text className="text-black text-[12px] text-center my-0">
									You have been invited to join SESA as an administrator.
								</Text>
							</Section>
							<Section className="grid justify-center my-[1rem]">
								<Text className="text-black text-[14px] my-0">
									Dear {adminName},
								</Text>
								<Text className="text-black text-[14px] my-1 ">
									We are thrilled to welcome you to the SESA Admin Management
									portal! As a valued member of our team, you now have access to
									powerful tools to streamline your tasks and elevate your
									estate management experience.
								</Text>
							</Section>
							<Section>
								<Text className="text-black text-[14px]">
									Your Login Credentials
								</Text>

								<Row className="flex justify-between">
									<Column>
										<Img
											src={checkBoxFill}
											// width="100"
											// height="30"
											alt="checkBox"
											className="my-0 mx-0"
										/>
									</Column>
									<Column>
										<Text className="text-black text-[14px] my-0 ml-[5px]">
											<span className="text-[12px] font-medium">
												Username:{" "}
											</span>
											<span>{adminEmail}</span>
										</Text>
									</Column>
								</Row>

								<Row className="flex justify-between">
									<Column>
										<Img
											src={checkBoxFill}
											alt="checkBox"
											className="my-0 mx-0"
										/>
									</Column>
									<Column>
										<Text className="text-black text-[14px] my-0 ml-[5px]">
											<span className="text-[12px] font-medium">
												Temporary Password:{" "}
											</span>
											<span>{generatedPassword}</span>
										</Text>
									</Column>
								</Row>
							</Section>
							<Text className="text-black text-[14px]">
								Please use the button below to accept your invitation and get
								started.
							</Text>

							<Button
								pX={20}
								pY={12}
								className="bg-[#0660FE] rounded text-white text-[12px] font-semibold no-underline text-center flex  justify-center"
								href={inviteLink}
								style={{
									boxShadow:
										"1.2px 1.2px 1px 0px #7AAAFF inset, -1.2px -1.2px 1px 0px rgba(122, 170, 255, 0.60) inset",
								}}
							>
								Accept Invitation & Get Started
							</Button>

							<Text className="text-black text-[14px] leading-[24px]">
								For security reasons, you will be required to change your
								password upon your first login.
							</Text>
							<Text className="text-black text-[14px] leading-[24px]">
								Best regards,
								<br />
								The SESA Team.
							</Text>
							<Section className="mx-0 flex justify-center justify-items-center text-center">
								<Heading className="text-black text-[16px] text-center p-0 font-semibold my-0">
									Have any questions?
								</Heading>
								<Link
									href={inviteLink}
									className="text-blue-600  underline my-1 text-[12px] "
								>
									support@sesa.com
								</Link>
							</Section>
						</Section>
						<Section className="mt-[32px] bg-red-600 flex justify-center">
							<Row className="flex justify-between bg-blue-600 basis-full justify-items-center">
								<Column>
									<Img src={facebook} alt="facebook" className="my-0 mx-auto" />
								</Column>
								<Column>
									<Img
										src={instagram}
										alt="instagram"
										className="my-0 mx-auto"
									/>
								</Column>
								<Column>
									<Img src={twitter} alt="twitter" className="my-0 mx-auto" />
								</Column>
								<Column>
									<Img src={linkedin} alt="linkedin" className="my-0 mx-auto" />
								</Column>
							</Row>

							<Row>
								<Column
									align="right"
									style={{ width: "50%", paddingRight: "8px" }}
								>
									<Img src={linkedin} alt="linkedin" className="my-0 mx-auto" />
								</Column>
								<Column
									align="left"
									style={{ width: "50%", paddingLeft: "8px" }}
								>
									<Img src={linkedin} alt="linkedin" className="my-0 mx-auto" />
								</Column>
							</Row>

							<Text className="text-black text-[14px]">
								SESA is a registered trademark of SESA Incorporated.
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default Welcome;
