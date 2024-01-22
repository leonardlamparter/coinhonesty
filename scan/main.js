// Add jQuery $() Function
function $(x) {return document.querySelector(x)}
function ß(x) {return document.querySelectorAll(x)}

// Get Query And Scan Result
var query={};location.search.replace('?','').split('&').forEach(v=>query[v.split('=')[0]]=v.split('=')[1])
var scan = scans[query["ticker"]]

// Send To Not Found Page If Scan Is Undefined
if (scan==undefined) location.href = "../notfound"

// Update Name
$("#name").innerHTML = scan.name

// Update Contract
$("#contract").innerHTML = scan.contract

// Update CH Score
$("#ch").innerHTML = scan.ch

// Update Volume
$("#vol").innerHTML = scan.h24_vol
$(".vol").style = `width: ${(scan.h24_vol/10000)>100? 100 : (scan.h24_vol/10000)}%`

// Update Swaps
$("#swps").innerHTML = scan.swaps
$(".swps").style = `width: ${(scan.swaps/100)>100? 100 : (scan.swaps/100)}%`

// Update Liquidity
$("#liq").innerHTML = scan.ttl_liq
$(".liq").style = `width: ${(scan.ttl_liq/150)>100? 100 : (scan.ttl_liq/150)}%`

// Update De.Fi Score
$("#defi").innerHTML = scan.defi
$(".defi").style = `width: ${scan.defi}%`

// Update Largest Whale
$("#lw").innerHTML = scan.l_whale + "% " + (scan.l_whale<=15? "✓" : "×")

// Update Top 10 Wallets
var i = 0
ß("#wlts li").forEach((v) => {
    v.innerHTML = scan.l_wallets[i]
    i++
})

// Add Show Top 10 Wallets Function
var wallets_shown = true
$("#wallets_btn").addEventListener("click", () => {
    $("#wallets").hidden = !wallets_shown
    wallets_shown = !wallets_shown
})

// Update Link HREFs
ß("#links a").forEach((v, i) => {
    v.href = scan.lnks[i]
})

// create r (repeat) function for string
var r=(str,x)=>{var res=["", 0];while (res[1]<x) {res[0]+=str; res[1]++}return res[0]}

// Update..
// date
$("#date").innerHTML = scan["date"]
// chain
$("#chain").innerHTML = scan["chain"]
// chain logo
$("#chainlogo").src = scan["chainimg"]
// coin logo
$("#coinlogo").src = scan["logo"]
// star rating
$("#buyworthy").innerHTML = r("✭", scan["starscore"])+r("✩", 5-scan["starscore"])
// widget
$("#price").innerHTML = scan["widget_code"]