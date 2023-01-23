'use strict';

const axios = require('axios');
const hadithModel = require('../models/scheModel');


async function getAllHadithApiHandler(req,res){
    let allHadith = await axios.get('https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$pBIBRXF2OdREuANcrRWvuMNXgLtSlRvsTxD8ltkuoKX2ZatzKC&paginate=100');
    res.send(allHadith.data);
}


async function getAllHadithToDatabaseHandler(req,res){
    let allHadith =await hadithModel.find({});
    res.send(allHadith)    

}






module.exports = {
 getAllHadithApiHandler,
getAllHadithToDatabaseHandler

    
}