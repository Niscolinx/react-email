import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Heading,
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
	accountReactivated,
	facebook,
	instagram,
	linkedin,
	logo,
	twitter,
} from "../imageExports";

interface Props {
	managerName?: string;
	accountLink?: string;
	facebookLink?: string;
	instagramLink?: string;
	twitterLink?: string;
	linkedinLink?: string;
}

export const AccountReactivatedSC = ({
	managerName = "[Manager's Name]",
	accountLink = "https://sesa.com",
	facebookLink = "https://sesa.com",
	instagramLink = "https://sesa.com",
	twitterLink = "https://sesa.com",
	linkedinLink = "https://sesa.com",
}: Props) => {
	const previewText = `${managerName}, your account has be reactivated`;

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
							<Img
								src={accountReactivated}
								alt="Account Deactivated"
								className="my-0 mx-auto"
							/>

							<Section className="grid   justify-center my-[2rem]">
								<Heading className="text-black text-[24px] text-center p-0 mx-0 font-semibold my-0">
									You're back online
								</Heading>
								<Text className="text-black text-[12px] text-center my-0">
									Your Security Company Manager account has been reactivated
								</Text>
							</Section>

							<Section className="grid my-[1rem]">
								<Text className="text-black text-[14px] my-0">
									Dear {managerName},
								</Text>
								<Text className="text-black text-[14px] my-1 ">
									We're pleased to inform you that your SESA account has been
									successfully reactivated. You can now access all of our
									platform's features.
								</Text>
							</Section>

							<Button
								pX={20}
								pY={12}
								className="bg-[#0660FE] rounded text-white text-[12px] font-semibold no-underline text-center flex  justify-center"
								href={accountLink}
								style={{
									boxShadow:
										"1.2px 1.2px 1px 0px #7AAAFF inset, -1.2px -1.2px 1px 0px rgba(122, 170, 255, 0.60) inset",
								}}
							>
								Go to my Account
							</Button>

							<Text className="text-black text-[14px] leading-[24px]">
								Best regards,
								<br />
								The SESA Team.
							</Text>

							<Section>
								<Row>
									<Column align="center">
										<Heading className="text-black text-[16px] text-center p-0 font-semibold ">
											Have any questions?
										</Heading>
									</Column>
								</Row>
								<Row>
									<Column align="center">
										<Link
											href={accountLink}
											className="text-blue-600  underline text-[12px] text-center "
										>
											support@sesa.com
										</Link>
									</Column>
								</Row>
							</Section>
						</Section>
						<Section className="mt-[32px] flex justify-center">
							<Row className="flex w-max mx-auto">
								<Column className="px-[3px]">
									<Link href={facebookLink}>
										<Img
											src={facebook}
											alt="facebook"
											width={34}
											height={34}
											className="my-0 mx-auto"
										/>
									</Link>
								</Column>
								<Column className="px-[3px]">
									<Link href={instagramLink}>
										<Img
											src={instagram}
											alt="instagram"
											width={34}
											height={34}
											className="my-0 mx-auto"
										/>
									</Link>
								</Column>
								<Column className="px-[3px]">
									<Link href={twitterLink}>
										<Img
											src={twitter}
											alt="twitter"
											width={34}
											height={34}
											className="my-0 mx-auto"
										/>
									</Link>
								</Column>
								<Column className="px-[3px]">
									<Link href={linkedinLink}>
										<Img
											src={linkedin}
											alt="linkedin"
											width={34}
											height={34}
											className="my-0 mx-auto"
										/>
									</Link>
								</Column>
							</Row>

							<Text className="text-black text-[12px] text-center">
								This email was sent to you because you are involved with SESA's
								services. If you believe you received this email in error or
								have any concerns, please don't hesitate to contact us at{" "}
								<Link href={accountLink} className="underline">
									m-support@sesa.com
								</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default AccountReactivatedSC;
