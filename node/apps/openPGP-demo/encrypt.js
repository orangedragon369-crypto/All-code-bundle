//encrypt.js
const openpgp = require('openpgp');
const fs = require('fs');

const publicKeyArmored = fs.readFileSync(process.argv[2]);

(async ()=> {
    const plainData = fs.readFileSync(process.argv[3]);
    const encrypted = await openpgp.encrypt({
        message: (await openpgp.createMessage({text: plainData.toString() })),
        encryptionKeys: (await openpgp.readKey({armoredKey: publicKeyArmored.toString() })),
    })

    fs.writeFileSync("encrypted-secret.txt", encrypted);
    console.log('data hes been encrypted...');
})();