import React, { useState, useEffect } from "react";

function Header({ name, setName }) {
    const handleChange = () => {
        setName('Lance')
    }

    return (
        <header className='header'>
            <div>
                <p> Hello { name }</p>

            </div>
            <button onClick={ () => handleChange() }>Change</button>
        </header>
    )
}

export default Header;
