// $('.nav a[href^="#"]').on('click', function(e) {
// 	e.preventDefault();
// 	var id = $(this).attr('href'),
// 			targetOffset = $(id).offset().top;
			
// 	$('html, body').animate({ 
// 		scrollTop: targetOffset - 100
// 	}, 500);
// });


function fazerGet(url){
    let request = new XMLHttpRequest();
    request.open("GET",url, false);
    request.send();
    return request.responseText;

}

function main(){
    data = fazerGet("https://www.mercadobitcoin.net/api/BTC/ticker/");
    bitcoin = JSON.parse(data);

    data1 = fazerGet("https://www.mercadobitcoin.net/api/ETH/ticker/");
    ethereum = JSON.parse(data1);

    data2 = fazerGet("https://www.mercadobitcoin.net/api/LTC/ticker/");
    litecoin = JSON.parse(data2);
    
    valor_bitcoin = bitcoin.ticker.last;
    valor_ethereum = ethereum.ticker.last;
    valor_litecoin = litecoin.ticker.last;

    document.querySelector('p#bitcoin').innerHTML = "<p id='bitcoin'> R$ " + parseFloat(valor_bitcoin).toFixed(2) + "</p>"
    document.querySelector('p#ethereum').innerHTML = "<p id='ethereum'> R$ " + parseFloat(valor_ethereum).toFixed(2)  + "</p>"
    document.querySelector('p#litecoin').innerHTML = "<p id='litecoin'> R$ " + parseFloat(valor_litecoin).toFixed(2)  + "</p>"

    // console.log(bitcoin.ticker);
    
}


main();
