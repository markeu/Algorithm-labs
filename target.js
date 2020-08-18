const dns = require("dns");
async function lookupPromise() {
    return new Promise((resolve) => {
        dns.lookup("decagon.com.ng", (err, address) => resolve(!!address));
    });
}

const address = await lookupPromise();

console.log(address);