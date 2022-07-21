const ethers = require('ethers')
const fs = require('fs-extra');
const dotenv = require('dotenv').config()

async function main(){
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedJSON = await wallet.encrypt(process.env.PASSWORD , process.env.PRIVATE_KEY);
    console.log(encryptedJSON)
    fs.writeFileSync('./.encrypted.json' , encryptedJSON);

}

main();