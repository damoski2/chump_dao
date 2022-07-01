
const fetchCryptoAssets = async()=>{
    let response = await fetch('https://data.messari.io/api/v1/assets/', {
        method: "GET",
        headers:{
            "x-messari-api-key": ""
        }
    });
    let data = await response.json();

}

export { }
