import fs from 'fs';
import csv from 'csv-parser';
 
function readStream(){
    const results = [];

    fs.createReadStream('data/input.csv')
        .pipe(csv())
        .on('data', (row) => results.push(row))
        .on('end', () => {
            console.log(`CSV parsed: `, skipAdults(results, 20));
            
        });
}

function skipAdults(list, age) {
    const kid = [];
    for (const man of list) if (man.age < age) kid.push(man);
    return kid;
}

readStream();