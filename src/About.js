import React, { useContext } from 'react'
import ThemeContext from "./theme";

function About() {
    const theme  = useContext(ThemeContext)

    return (
        <div style={theme}>
            <h1>About Page</h1>
        </div>
    )
}

export default About
