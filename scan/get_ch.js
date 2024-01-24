// var scan = {}

var ch = 0;

// Funny
let funny = true;
ch += funny? 3 : 0

// Usage
ch += (scan["extraons"] != [])?4:0

// Volume
ch += (scan["h24_vol"]>=1000000? 13 : 0)

// Swaps
ch += (scan["swaps"]>=10000? 10 : 0)

// Liquidity
ch += (scan["ttl_liq"]>=10000? 15 : Math.floor(scan["ttl_liq"]/1000))

// Whales
ch += (scan["l_whale"]<15? 10 : 0)

// Holders
ch += (scan["holders"]>=1000? 5 : 0)

// De.Fi
ch += (scan["defi"]/10)

// Rememberance
ch += (scan["rememberance"]*5)

// Buy Ease
var buy_ease_options = {
    "Unbuyable":0,
    "Hard To Buy":1,
    "Okay":2,
    "Quite Easy":3,
    "Easy":4,
    "Availible On CEX":5
}
ch += buy_ease_options[scan["buy_ease"]]

// AHD
ch += (
    scan["avg_hold_deriv"]==0? 0 :
    scan["avg_hold_deriv"]<10? 1 :
    scan["avg_hold_deriv"]<30? 2 :
    scan["avg_hold_deriv"]<50? 3 :
    scan["avg_hold_deriv"]<100? 4 : 
    5
)

// X
ch += (scan["lnks"][0] != "../notfound"? 1 : 0)
ch += (scan["x_ppw"] >= 1? 2 : 0)

// CMC
ch += (scan["lnks"][4] != "../notfound"? 1 : 0)

// Return CH Score
console.log(ch)