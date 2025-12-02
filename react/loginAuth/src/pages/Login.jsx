import { useState } from "react";

export default function LoginPage(){
    const [acount, setAcount] = useState(true)

    function ChangeStatus(){
        if (acount) {
            return(<>
                <span>No Account? &ensp;</span>
                <button className="btn" onClick={() => setAcount(false)}>Create an Acount</button>
            </>);
        }
        return(<>
            <span>Already have an account? &ensp;</span>
            <button className="btn" onClick={() => setAcount(true)}>Sign in</button>
        </>);
    }

    function trySignIn() {}

    return (
        <main className="login-main">
            <div>
                <form>
                    <input type="text" placeholder="Username"></input><br></br>
                    <input type="password" placeholder="Password"></input><br></br>
                    <input type="button" value={acount? "Sign in": "Create acount"} onClick={() => trySignIn()}></input><br></br>
                </form>
                <div><ChangeStatus /></div>
            </div>
        </main>
    );
}