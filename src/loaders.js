export const priceLoader = async ({params}) => {

    const symbol = params.symbol
   
    const apiKey = "47169C10-D4D9-44E0-B630-0A5594724F0A"
   
    return (await fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)).json()
   } 