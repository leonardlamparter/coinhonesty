var scan = {
    "name": "SNEK",
    "contract": "0xe99230a033332ff10ff79e137d3d27a4417d014f",
    "defi": 89,
    "l_whale": 2.5,
    "funny": "😆",
    "h24_vol": 4329370,
    "swaps": 1238674,
    "ttl_liq": 1170000,
    "ch": 93.9,
    "bar_dta": [4.32937, 123.8674, 1.17],
    "lnks" : [
        "https://twitter.com/snekcoinada?lang=en", // X
        "https://de.fi/scanner/contract/0xe99230a033332ff10ff79e137d3d27a4417d014f?chainId=eth", // De.Fi
        "https://cardanoscan.io/token/279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f534e454b", // Cardanoscan
        "https://app.bubblemaps.io/eth/token/0xe99230a033332ff10ff79e137d3d27a4417d014f", // Bubblemaps
        "https://coinmarketcap.com/currencies/snek/", // CMC
        "https://www.coingecko.com/en/coins/snek"  // CoinGecko
    ],
    "lnks_e" : true,
    "htb" : "To buy <coin>$SNEK</coin>, you will need <coin>$ADA</coin> (Cardano), from there you can trade your <coin>$ADA</coin> to <coin>$SNEK</coin> on Minswap [https://minswap.org/]",
    "cols" : [-1, -1, 1, 1, -1, 1, 1, 1, 1],
    "l_wallets" : ["...", "...", "...", "...", "...", "...", "...", "...", "...", "..."],
    "buyworthy": true,
    "date": "January 3, 2024",
    "chain": "CARDANO",
    "chainimg": "https://assets.coingecko.com/coins/images/975/standard/cardano.png?1696502090",
    "logo": "https://assets.coingecko.com/coins/images/30496/standard/snek_icon_200.png?1703346174",
    "starscore": 5,
    "widget_code": '<div class="livecoinwatch-widget-1" lcw-coin="_SNEK" lcw-base="USD" lcw-secondary="BTC" lcw-period="d" lcw-color-tx="#000000" lcw-color-pr="#58c7c5" lcw-color-bg="#ffffff" lcw-border-w="1" ></div>',
    // Advanced View
    "ahdpot": 0.06232590529,
    "avg_hold_deriv": 89.5,
    "holders": 1436,
    "rememberance": 3,
    "buy_ease": "Okay",
    "x_ppw": 21,
    "extraons": ["Games", "Energy Drinks", "Exchange"]
}

var ch = 1;

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

// AHDPOT
ch += (
    scan["ahdpot"]<0.00001? 0 :
    scan["ahdpot"]<0.001? 1 :
    scan["ahdpot"]<0.003? 2 :
    scan["ahdpot"]<0.005? 3 :
    scan["ahdpot"]<0.008? 4 : 
    5
)

// X
ch += (scan["lnks"][0] != "../notfound"? 1 : 0)
ch += (scan["x_ppw"] >= 1? 2 : 0)

// CMC
ch += (scan["lnks"][4] != "../notfound"? 1 : 0)

// Return CH Score
console.log(ch)