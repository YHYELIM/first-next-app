import { Children } from "react";

export default function RootLayout ({children}){
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <a href="">홈</a>
                        <a href="/blog">블로그</a>
                    </nav>
                </header>
                 <main>
                {children}
            </main>
            </body>
            <footer>2025 My Blog</footer>
        </html>
    )
}