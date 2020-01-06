require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();

const {
    getTotalSupplyWithDecimalCall,
    getTotalSupplyNoDecimalCall,
    getDecimalsCall,
    getBalanceOfCall,
} = require('src/controllers/TokenController');

const express = require('express');
const router = new express.Router();

router.get('/totalsupply/decimal', getTotalSupplyWithDecimalCall);
router.get('/totalsupply/nodecimal', getTotalSupplyNoDecimalCall);
router.get('/decimals', getDecimalsCall);
router.get('/balances', getBalanceOfCall);

module.exports = router;