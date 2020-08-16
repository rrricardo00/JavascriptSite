export default function btc() {

    async function pegarBtc(url) {
        try {
            const promiseBtc = await fetch(url);
            const pegarBTC = await promiseBtc.json();
            const btcpreco = document.querySelector('.btc-preco');
            btcpreco.innerText = (100 / pegarBTC.BRL.sell).toFixed(4);
        } catch (error) {
            console.log(error);
        }



    }

    pegarBtc('https://blockchain.info/ticker');
}