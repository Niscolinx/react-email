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
	facebook,
	instagram,
	linkedin,
	logo,
	pendingInvoice,
	twitter,
} from "../imageExports";

interface Props {
	managerName: string;
	invoiceDate: string;
	invoiceReason: string;
	amountDue: string;
	dueDate: string;
	invoiceLink: string;
	facebookLink: string;
	instagramLink: string;
	twitterLink: string;
	linkedinLink: string;
}

const PendingInvoice = ({
	managerName = "[Manager's Name]",
	invoiceDate = "[30-10-23]",
	amountDue = "[212,050]",
	invoiceReason = "[invoice_reason]",
	dueDate = "[30-10-23]",
	invoiceLink = "https://sesa.com",
	facebookLink = "https://sesa.com",
	instagramLink = "https://sesa.com",
	twitterLink = "https://sesa.com",
	linkedinLink = "https://sesa.com",
}: Props) => {
	const previewText = "Pending Reminder";

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-[#E5EFFF] my-auto mx-auto font-sans">
					<Container className="mx-auto p-[20px] w-full ">
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
								src={pendingInvoice}
								alt="welcome"
								className="my-0 mx-auto"
							/>

							<Section className="grid   justify-center my-[2rem]">
								<Heading className="text-black text-[24px] text-center p-0 mx-0 font-semibold my-0">
									You have a pending invoice{" "}
								</Heading>
							</Section>
							<Section className="grid justify-center my-[1rem]">
								<Text className="text-black text-[14px] my-0">
									Dear {managerName},
								</Text>
								<Text className="text-black text-[14px] my-1 ">
									We wanted to bring to your attention that there is a pending
									invoice for your SESA platform usage subscription. Your
									subscription is essential to maintain uninterrupted access to
									our services.
								</Text>
							</Section>

							<Section>
								<Text className="text-black font-medium text-[16px] block text-center">
									Here's a summary of your invoice details:
								</Text>
								<Section className="my-[1rem] capitalize">
									<table
										className="w-full"
										style={{
											outline: "1px solid #EDEEEF",
											borderRadius: "8px",
											borderCollapse: "collapse",
										}}
									>
										<tbody>
											<tr
												style={{
													textAlign: "center",
													borderBottom: "1px solid #EDEEEF",
												}}
											>
												<td
													style={{
														borderRight: "1px solid #EDEEEF",
													}}
													width={"50%"}
												>
													<Heading className="text-[#595959] text-[12px] text-center font-normal leading-loose">
														Invoice Date
													</Heading>
												</td>
												<td>
													<Text className="text-black text-[14px] font-medium leading-none">
														{invoiceDate}
													</Text>
												</td>
											</tr>
											<tr
												style={{
													textAlign: "center",
													borderBottom: "1px solid #EDEEEF",
												}}
											>
												<td
													style={{
														borderRight: "1px solid #EDEEEF",
													}}
													width={"50%"}
												>
													<Heading className="text-[#595959] text-[12px] text-center font-normal leading-loose">
														Amount Due
													</Heading>
												</td>
												<td>
													<Text className="text-black text-[14px] font-medium leading-none">
														{amountDue}
													</Text>
												</td>
											</tr>
											<tr
												style={{
													textAlign: "center",
													borderBottom: "1px solid #EDEEEF",
												}}
											>
												<td
													style={{
														borderRight: "1px solid #EDEEEF",
													}}
													width={"50%"}
												>
													<Heading className="text-[#595959] text-[12px] text-center font-normal leading-loose">
														Due Date
													</Heading>
												</td>
												<td>
													<Text className="text-black text-[14px] font-medium leading-none">
														{dueDate}
													</Text>
												</td>
											</tr>
											<tr
												style={{
													textAlign: "center",
													borderBottom: "1px solid #EDEEEF",
												}}
											>
												<td colSpan={2}>
													<Heading className="text-[#595959] text-[12px] text-center font-normal leading-loose">
														Invoice Reason
													</Heading>
												</td>
											</tr>
											<tr
												style={{
													textAlign: "center",
												}}
											>
												<td align="center" colSpan={2}>
													<Text className="text-black text-[14px] font-medium leading-none px-2 text-center">
														{invoiceReason}
													</Text>
												</td>
											</tr>
										</tbody>
									</table>
								</Section>

								<Button
									pX={20}
									pY={12}
									className="bg-[#0660FE] rounded text-white text-[12px] font-semibold no-underline text-center block"
									href={invoiceLink}
									style={{
										boxShadow:
											"1.2px 1.2px 1px 0px #7AAAFF inset, -1.2px -1.2px 1px 0px rgba(122, 170, 255, 0.60) inset",
									}}
								>
									Open Invoice
								</Button>

								<Text className="text-black text-[14px] leading-[24px]">
									If you've already made the payment, please disregard this
									message. If you have any questions or need assistance, please
									don't hesitate to contact our support team at{" "}
									<Link>m-support@sesa.com.</Link>
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
												href={invoiceLink}
												className="text-blue-600  underline text-[12px] text-center "
											>
												support@sesa.com
											</Link>
										</Column>
									</Row>
								</Section>
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
								<Link href={invoiceLink} className="underline">
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

export default PendingInvoice;
