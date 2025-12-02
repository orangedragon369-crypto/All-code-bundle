import { useEffect, useState } from "react";
import getApi from "../../scriptsOnly/api";

export default function GiveJoke() {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        async function fetchJoke() {
            const url = "https://geek-jokes.sameerkumar.website/api?format=json";
            const data = await getApi(url);
            setJoke(data.joke || "No joke found");
            if (joke.includes("fsck") || joke.includes("Fsck")) {
                fetchJoke();
            }
        }

        fetchJoke();

    }, []);

    return (
        <div className="a-joke">
            {joke}
        </div>
    );
}
