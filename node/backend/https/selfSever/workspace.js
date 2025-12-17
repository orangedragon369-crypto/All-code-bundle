import https from 'https';
import fs from 'fs';

const options = {
    hostname: 'en.wikipedia.org',
    port: "443",
    path: "/wiki/George_Washington",
    method: 'GET',
    headers: {
        "User-Agent": "Node.js"
    }
};

const request = https.request(options, (response) => {
    let responseBody = "";

    console.log("Response from serverStarted.");
    console.log(`Server status code: ${response.statusCode}`);
    console.log("Response Headers: %j", response.headers);

    response.setEncoding("utf8");

    response.once("data", (chunk) => {
        console.log(chunk)
    });

    response.on("data", (chunk) => {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });
    response.on("end", ()=>{
        fs.writeFile("george-washington.html", responseBody)
    })
});