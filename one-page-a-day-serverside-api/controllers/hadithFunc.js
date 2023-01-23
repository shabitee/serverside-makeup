'use strict';

const axios = require('axios');


async function getAllHadithApiHandler(req,res){
    let allHadith = await axios.get('https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$pBIBRXF2OdREuANcrRWvuMNXgLtSlRvsTxD8ltkuoKX2ZatzKC&paginate=100');
    res.send(allHadith.data);
}





module.exports = {
 getAllHadithApiHandler
    
}