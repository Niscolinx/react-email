import { render } from "@react-email/render";
import { promises as fs } from "fs";
import { join as pathJoin } from "path";
import { getEmails } from "@/utils/get-emails";


async function exportToHtml() {
	const { filenames } = await getEmails();


	const Email = (await import(`./emails/AdLimit`)).default;
	const Email1 = (await import(`./emails/KYCFee`)).default;

	console.log(filenames)

	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	const markup = render([Email({} as any), Email1({} as any)], { pretty: true });
	// const path = pathJoin(basePath, template[0]);

	// const reactMarkup: string = await fs.readFile(path, {
	// 	encoding: "utf-8",
	// });

	// console.log({ markup })
	const basePath = pathJoin(process.cwd(), 'out');

	try {

		const writeTo = await fs.mkdir(basePath, {
			recursive: true
		});
		console.log({ writeTo })
		 await fs.writeFile(`${basePath}/test.html`, markup)
	}
	catch (e) {
		console.log({ e })
	}






	// 	encoding: "utf-8",
	// }
	// );




}

exportToHtml()

