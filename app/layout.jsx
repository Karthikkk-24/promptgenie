import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
    title: 'Prompt Genie',
    description: 'Discover & Share AI Prompts',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                <Provider />
                <div className="main">
                    <div className="gradient"></div>
                </div>
                <main className="app">{children}</main>
            </body>
        </html>
    );
}
