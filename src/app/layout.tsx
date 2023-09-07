import "../styles/globals.css";
import classnames from "classnames";



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-black text-slate-12 font-sans">
				
					<div className={classnames("font-sf-pro")}>
						{children}
					</div>

			</body>
		</html>
	);
}
