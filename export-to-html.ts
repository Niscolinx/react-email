import { render } from "@react-email/render";
import { promises as fs } from "fs";
import { join as pathJoin } from "path";
import { CONTENT_DIR, getEmails } from "@/utils/get-emails";

export const dynamicParams = true;

export async function generateStaticParams() {
	const { emails } = await getEmails();

	const paths = emails.map((email) => {
		return { slug: email };
	});

	return paths;
}

async function exportToHtml() {
	const { emails, filenames } = await getEmails();

	console.log(emails)
	console.log(filenames)
	const params = generateStaticParams()
	console.log({params})


	// const template = filenames.filter((email) => {
	// 	const [fileName] = email.split(".");
	// 	return params.slug === fileName;
	// });

	// const Email = (await import(`../../../../emails/${params.slug}`)).default;
	// const markup = render(Email(), { pretty: true });
	// const basePath = pathJoin(process.cwd(), CONTENT_DIR);
	// const path = pathJoin(basePath, template[0]);

	// const reactMarkup: string = await fs.readFile(path, {
	// 	encoding: "utf-8",
	// });

	console.log('hello world ')

}

exportToHtml()

