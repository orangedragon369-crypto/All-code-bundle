import fs from 'fs';
import csv from 'csv-parser';
import { argv } from 'process';
 
function readStream(source ,data, require){
    const results = [];

    fs.createReadStream(source)
        .pipe(csv())
        .on('data', (row) => results.push(row))
        .on('end', () => {
            console.log(`CSV parsed: `, skipAdults(results, data, require));
            console.log(skipAdults(results, data, require).length);
        });
}

function skipAdults(list, info, req) {
    const passed = [];
    for (const obj of list) if (obj[info] < req || obj[info] === req) passed.push(obj);
    return passed;
}

readStream(argv[2], argv[3], argv[4]);