import axios from "axios";


type ReturnData = {
    name: string;
    market_price: string;
}


const returnSpecificCryptoAsset = (cryptoAsset: Array<any>): ReturnData =>{
    let newData = {} as ReturnData;
    cryptoAsset.forEach(asset=>{
        if(asset.name === 'Ethereum'){
            newData.name = asset.name;
            newData.market_price = asset.metrics.market_data.price_usd;
        }
    })
    return newData
}


const fetchCryptoAssets = async(): Promise<ReturnData> =>{
    try{
        let data = await axios.get('https://data.messari.io/api/v1/assets',{
            headers: {
                "x-messari-api-key": "a812d426-8087-40c1-98be-514b9c269bd2"
            },
        });
        return returnSpecificCryptoAsset(data?.data['data']);
    }catch(error){
        throw new Error('Error in fetching crypto assets!!');
    }
}

export { fetchCryptoAssets }
