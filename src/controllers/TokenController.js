require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();

const {
    getTotalSupply,
    getDecimals,
    getBalanceOf,
} = require('src/services/TokenService');

async function getTotalSupplyCall(req, res, next) {
    const totalSupply = await getTotalSupply();
    res.send({
        status: 200,
        result: totalSupply,
    });
}

async function getDecimalsCall(req, res, next) {
    const decimals = await getDecimals();
    res.send({
        status: 200,
        result: decimals,
    });
}

async function getBalanceOfCall(req, res, next) {
    console.log('req', req);
    // const address = req.path.address;
    const balance = await getBalanceOf(address);
    res.send({
        status: 200,
        result: balance,
    });
}

module.exports = {
    getTotalSupplyCall,
    getDecimalsCall,
    getBalanceOfCall,
};
