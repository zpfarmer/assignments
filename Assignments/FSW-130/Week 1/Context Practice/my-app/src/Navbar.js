import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Navbar(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <div>
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Contact</h1>
                    </div>
                </header>
            )}
        </ThemeContextConsumer>
    )    
}

export default Navbar