'use client'
import React, { Ref } from "react"

type propType = {
    placeholder : string,
    size : 'big' | 'small',
    onChange : any
}

export function TextInput({placeholder , size , onChange}: propType){
    return <input onChange={onChange} placeholder={placeholder} style={{
        padding: size==='big' ? 20 : 10,
        margin: size==='big' ? 20 : 10,
        borderColor: "black", 
        borderWidth: 1,
    }}></input>
}