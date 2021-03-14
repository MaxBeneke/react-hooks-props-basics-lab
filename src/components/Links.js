import React from "react";
import About from src/components;

function Links(props) {
    return (
        <div>
        <h3> Links </h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
        </div>
)
}