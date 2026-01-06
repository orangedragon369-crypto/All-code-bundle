'use client';
import { useEffect, useState } from "react";
import getApi from "../../../scriptsOnly/api";

export default function GiveFact() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        async function fetchFact() {
            try {
                const url = "https://catfact.ninja/fact";
                const data = await getApi(url);
                setFact(data.fact || "No fact available today.");
            }catch (error) {
                console.log("error in cat Facts.")
            }
        }

        fetchFact();
    }, []);

    return (
        <div className="fact">
            {fact}
        </div>
    );
}
