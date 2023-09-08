import { render } from "@react-email/render";
import { promises as fs } from "fs";
import { join as pathJoin } from "path";
import React from "react";
import { getEmails } from "@/utils/get-emails";

export const basePath = pathJoin(process.cwd(), "out");
async function exportToHtml() {
	const { filenames, emails } = await getEmails();

	try {
		await fs.mkdir(basePath, {
			recursive: true,
		});

		for (let i = 0; i < emails.length; i++) {
			const name = emails[i];
			const Email = (await import(`./emails/${name}`)).default;

			// rome-ignore lint/suspicious/noExplicitAny: <explanation>
			const htmlMarkup = render(Email({} as any), { pretty: true });

			await fs.writeFile(`${basePath}/${name}.html`, htmlMarkup);
		}
	} catch (e) {
		console.log({ e });
	}
}


function App() {
	return <div>hello</div>;
}
exportToHtml();

export default App;
