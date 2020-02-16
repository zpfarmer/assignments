import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <h1>My Amazing Footer!</h1>
                </div>
            )}
        </ThemeContextConsumer>
    )    
}

export default Footer