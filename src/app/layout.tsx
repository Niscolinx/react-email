import '../styles/globals.css';
import classnames from 'classnames';
import localFont  from 'next/font/local';


// const font_sp_text = localFont({
// 	src: [
// 		{
// 			path: "../../public/assets/fonts/sp-pro-text/SF-Pro-Text-UltraLight.otf",
// 			weight: "100",
// 			style: "normal",
// 		},
// 		{
// 			path: "../../public/assets/fonts/sp-pro-text/SF-Pro-Text-Light.otf",
// 			weight: "200",
// 			style: "normal",
// 		},
// 		{
// 			path: "../../public/assets/fonts/sp-pro-text/SF-Pro-Text-Thin.otf",
// 			weight: "300",
// 			style: "normal",
// 		},
// 		{
// 			path: "../../public/assets/fonts/sp-pro-text/SF-Pro-Text-Regular.otf",
// 			weight: "400",
// 			style: "normal",
// 		},
		
// 	],

// 	variable: "--font-sp-text",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className="bg-black text-slate-12 font-sans">
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
