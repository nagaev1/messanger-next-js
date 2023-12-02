const crypto = require("crypto");

const util = require('util')

const hashHelper = require("../helpers/hashHelper")

exports.scryptHash = async function (string, salt) {
    const saltInUse = salt || crypto.randomBytes(16).toString('hex');
    const hashBuffer = await util.promisify(crypto.scrypt)(string, saltInUse, 32);
    return `${hashBuffer.toString('hex')}:${saltInUse};`
}
//scryptHash('string for hash').then(hash => log?)

exports.scryptVerify = async function(testString, hashAndSalt) {
    const [, salt] = hashAndSalt.split(":")
    return await hashHelper.scryptHash(testString, salt) === hashAndSalt;
}

//scryptVerify(string for hash, hash:salt).then(isValid => log?)