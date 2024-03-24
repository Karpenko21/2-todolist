import React from "react";

type ButtonPropsType = {
    name: string
}

export function Button(props: ButtonPropsType) {
    return <button>{props.name}</button>
}