import React from "react";

export default function Setup (props) {
    return (
        <div className="flex-fullWidth flex-column">
            <h2 className="center">Odabir korisničkog imena</h2>
            <form className="flex-fullWidth" onSubmit={props.createCustomUsername}>
                <input
                    id="poljeIme"
                    type="text"
                    placeholder="Upiši željeno korisničko ime" 
                />
                <button>Potvrdi</button>
            </form>
            <span className="center">ILI</span><br/>
            <button className="no-margin" onClick={props.createRandomUsername}>Koristi nasumično</button>
        </div>
    );
    }