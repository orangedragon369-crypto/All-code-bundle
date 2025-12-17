import http from 'http';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

http.createServer((request, response) => {
    console.log(`${request.method} for ${request.url}`);

    if (request.url === "/"){
        fs.readFile('./public/index.html', "utf-8", (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    } else if (request.url.match(/.css$/)){
        const cssPath = path.join(__dirname, 'public', request.url);
        const fileStream =fs.createReadStream(cssPath, "utf-8");
        response.writeHead(200, {'Content-Type': 'text/css'});

        fileStream.pipe(response);
    } else if (request.url.match(/.jpg$/)) {
        const imgPath = path.join(__dirname, 'public', request.url);
        const fileStream =fs.createReadStream(imgPath, "utf-8");
        response.writeHead(200, {'Content-Type': 'image/jpg'});

        fileStream.pipe(response);
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("404 File Not Found");
    }
}).listen(3000);

