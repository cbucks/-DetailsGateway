require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();

const {
    TOKEN_CONTRACT_ADDRESS,
    BRO_POST_ENDPONT,
    INFURA_SECRET,
} = process.env;


const TokenABI = require('ABI/Token.json');
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/${INFURA_SECRET}`));

const TokenContract = new web3.eth.Contract(
    TokenABI.abi,
    TOKEN_CONTRACT_ADDRESS,
);

async function getTotalSupplyWithDecimal() {
    let totalSupply = await TokenContract.methods.totalSupply().call();
    totalSupply = (totalSupply / 100).toFixed(2);
    return totalSupply;
}

async function getTotalSupplyNoDecimal() {
    let totalSupply = await TokenContract.methods.totalSupply().call();
    totalSupply = totalSupply / 100;
    return totalSupply;
}

async function getDecimals() {
    const decimals = await TokenContract.methods.decimals().call();
    return decimals;
}

async function getBalanceOf() {
    const balance = await TokenContract.methods.balanceOf(SENDER_ADDRESS).call();
    return balance;
}

module.exports = {
    getTotalSupplyWithDecimal,
    getTotalSupplyNoDecimal,
    getDecimals,
    getBalanceOf,
};
