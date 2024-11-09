
import React, { Component } from 'react';
export default function Home() {
    function reloadPage(){
        window.location.reload();
    }
    return (
        <button className="ansButton" onClick={() => reloadPage}></button>
    )
}