import "./globals.css";
import Layout from "@components/Layout";

export const metadata = {
    title: "Chariter",
    description: "Charitier",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
