import axios from "axios";


export type ReturnData = {
    name: string;
    market_price: number;
}




const fetchCryptoAssets = async(): Promise<[ReturnData | null, any]> =>{
    let newData = {} as ReturnData;
    try{
        let data = await axios.get('https://data.messari.io/api/v1/assets',{
            headers: {
                "x-messari-api-key": "a812d426-8087-40c1-98be-514b9c269bd2"
            },
        });
        let res = data?.data['data'] as Array<any>;
        res.forEach(asset=>{
            if(asset.name === 'Ethereum'){
                newData.name = asset.name;
                newData.market_price = asset.metrics.market_data.price_usd;
            }
        })
        return [newData, null];
    }catch(error){
        return [null, error];
    }
}

export { fetchCryptoAssets }
