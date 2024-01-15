function search(coin_name) {
var coin = coins[coin_name] || {"name": "COIN NOT YET SCANNED","contract": "","defi": 0,"l_whale": 0,"funny": "","h24_vol": "$0.00","swaps": "0","ttl_liq": "$0.00","mc": 0,"bar_dta": [0, 0, 0],"lnks" : ["TBF","TBF","TBF","TBF","TBF","TBF"]}

var dta = [coin.name, coin.contract, coin.defi, coin.l_whale, coin.funny, coin.h24_vol, coin.swaps, coin.ttl_liq, coin.mc]
document.querySelectorAll("#ifo_div span").forEach((v, i) => {
    v.innerHTML = dta[i]
    v.classList.add(
      coin.cols[i] == -1? "white" :
      coin.cols[i] == 0?  "red"   :
      coin.cols[i] == 1?  "green" : ''
    )
    v.parentElement.classList.add(
      coin.cols[i] == -1? "white" :
      coin.cols[i] == 0?  "red"   :
      coin.cols[i] == 1?  "green" : ''
    )
})

document.querySelectorAll("#lnks a").forEach((v, i) => {
    coin.lnks[i] ? v.href = coin.lnks[i] : v.hidden = "hidden"
})
// l_wallets
document.querySelectorAll("#lwallets_div span").forEach((v, i) => {
  v.innerHTML = coin["l_wallets"][i]
})

document.querySelector("#htb").innerHTML = coin.htb

function select(h) {
  var ifo_lwallets = [
    document.getElementById("ifo"),
    document.getElementById("lwallets")
  ]
  
  ifo_lwallets[h? 1:0].className = "selected"
  ifo_lwallets[h? 0:1].className = ""
}

document.getElementById("ifo").addEventListener('click', () => {
  select(false)
  document.querySelector("#ifo_div").style = ""
  document.querySelector("#lwallets_div").style = "display: none"
})
document.getElementById("lwallets").addEventListener('click', () => {
  select(true)
  document.querySelector("#ifo_div").style = "display: none"
  document.querySelector("#lwallets_div").style = ""
})

coin["lnks_e"] ? '' : document.querySelector("#lnksnotes").innerHTML = "No links nor socials found"

var tags = ["Volume (millions)", "Swaps (ten thousands)", "Liquidity (millions)"]
var res = coin.bar_dta // to be imported
var barColors = [res[0]>=1, res[1]>=1, res[2]>=0.015]
barColors = barColors.map(v => v? 'green':'red')

new Chart("basicdata", {
    type: "bar",
    data: {
      labels: tags,
      datasets: [{
        backgroundColor: barColors,
        data: res
      }]
    },
    options: {
        legend: {display: false},
        title: {
          display: false
        }
    }
});

}

search(location.search.replace("?", "").toLocaleUpperCase())