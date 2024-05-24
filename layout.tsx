import "./global.css"

export const metadata = {
    title: "StarGPT",
    description: "The place to go for all you Star Wars questions."
}

const RouteLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
