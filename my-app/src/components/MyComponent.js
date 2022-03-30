

 import React, { useState } from "react";
 import Button from "@mui/material/Button"
 import Input from "@mui/material/TextField"

export default function MyComponent() {
    const [toggleButton, setButton] = useState("Off");
    const ariaLabel = { 'aria-label': 'description' };
    const [name, setName] = useState('Default');
    const [n1, setN1] = useState('Default');
    const handleChange = (event) => {
        setN1(event.target.value);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetch("/name/" + n1)
                        .then(response => 
                            response.json()
                        )
                        .then(data => {
                            setName(data.name)
                        })
                        .catch(error => {
                            console.log(error)
                        })       
      };
        }
    return(
        <div>
            <p>Your Input</p>
            <p>Request to Server</p>
            <Input
                inputProps={ariaLabel} value={n1} onChange={handleChange} onKeyDown={handleKeyDown}
            >
                {name}
            </Input>
            <p>Response from Server</p>
            <Input
                value={name}
            >

            </Input>
        </div>
    );
}