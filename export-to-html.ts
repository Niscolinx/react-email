import { render } from "@react-email/render";
import { promises as fs } from "fs";
import { join as pathJoin } from "path";
import { getEmails } from "@/utils/get-emails";


export const basePath = pathJoin(process.cwd(), 'out');
async function exportToHtml() {
	const { filenames, emails } = await getEmails();


	try {
		await fs.mkdir(basePath, {
			recursive: true,
		});


		for (let i = 0; i < emails.length; i++) {
			const name = emails[i]
			const Email = (await import(`./emails/${name}`)).default;

			const htmlMarkup = render(Email({} as unknown), { pretty: true });

			await fs.writeFile(`${basePath}/${name}.html`, htmlMarkup);
		}
	}
	
	catch (e) {
		console.log({ e })
	}






	// 	encoding: "utf-8",
	// }
	// );




}

exportToHtml()

