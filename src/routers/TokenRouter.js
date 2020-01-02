require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();

const {
    getTotalSupplyCall,
    getDecimalsCall,
    getBalanceOfCall,
} = require('src/controllers/TokenController');

const express = require('express');
const router = new express.Router();

router.get('/totalsupply', getTotalSupplyCall);
router.get('/decimals', getDecimalsCall);
router.get('/balances/{address}', getBalanceOfCall);

module.exports = router;