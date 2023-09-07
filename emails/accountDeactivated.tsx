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
	accountDeactivated,
	facebook,
	instagram,
	linkedin,
	logo,
	twitter,
} from "../imageExports";

interface Props {
	adminName?: string;
	deactivationReason?: string;
	inviteLink?: string;
	facebookLink?: string;
	instagramLink?: string;
	twitterLink?: string;
	linkedinLink?: string;
}

export const AccountDeactivated = ({
	adminName = "[Admin's Name]",
	deactivationReason = "[Reason for Deactivation]",
	inviteLink = "https://sesa.com",
	facebookLink = "https://sesa.com",
	instagramLink = "https://sesa.com",
	twitterLink = "https://sesa.com",
	linkedinLink = "https://sesa.com",
}: Props) => {
	const previewText = `${adminName}, you're welcome to SESA`;

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
								src={accountDeactivated}
								alt="Account Deactivated"
								className="my-0 mx-auto"
							/>

							<Section className="grid   justify-center my-[2rem]">
								<Heading className="text-black text-[24px] text-center p-0 mx-0 font-semibold my-0">
									Your account has been deactivated
								</Heading>
							</Section>

							<Section className="grid my-[1rem]">
								<Text className="text-black text-[14px] my-0">
									Dear {adminName},
								</Text>
								<Text className="text-black text-[14px] my-1 ">
									We regret to inform you that your SESA account has been
									deactivated.
								</Text>
								<Text className="text-black text-[14px] my-0 font-medium">
									Reason:
								</Text>
								<Text className="text-black text-[14px] my-1 ">
									{deactivationReason}
								</Text>
							</Section>

							<Text className="text-black text-[12px]">
								If you believe this deactivation is in error or have any
								questions, please contact us at{" "}
								<Link href={inviteLink} className="underline">
									m-support@sesa.com
								</Link>
							</Text>
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
											href={inviteLink}
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
								<Link href={inviteLink} className="underline">
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

export default AccountDeactivated;
