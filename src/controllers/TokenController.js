require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();

const {
    getTotalSupplyWithDecimal,
    getTotalSupplyNoDecimal,
    getDecimals,
    getBalanceOf,
} = require('src/services/TokenService');

async function getTotalSupplyWithDecimalCall(req, res, next) {
    const totalSupply = await getTotalSupplyWithDecimal();
    res.send({
        status: 200,
        result: totalSupply,
    });
}

async function getTotalSupplyNoDecimalCall(req, res, next) {
    const totalSupply = await getTotalSupplyNoDecimal();
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
    const address = req.params.address;
    const balance = await getBalanceOf(address);
    res.send({
        status: 200,
        result: balance,
    });
}

module.exports = {
    getTotalSupplyWithDecimalCall,
    getTotalSupplyNoDecimalCall,
    getDecimalsCall,
    getBalanceOfCall,
};
