var levenshtein = (function() {
    var row2 = [];
    return function(s1, s2) {
        if (s1 === s2) {
            return 0;
        } else {
            var s1_len = s1.length, s2_len = s2.length;
            if (s1_len && s2_len) {
                var i1 = 0, i2 = 0, a, b, c, c2, row = row2;
                while (i1 < s1_len)
                    row[i1] = ++i1;
                while (i2 < s2_len) {
                    c2 = s2.charCodeAt(i2);
                    a = i2;
                    ++i2;
                    b = i2;
                    for (i1 = 0; i1 < s1_len; ++i1) {
                        c = a + (s1.charCodeAt(i1) === c2 ? 0 : 1);
                        a = row[i1];
                        b = b < a ? (b < c ? b + 1 : c) : (a < c ? a + 1 : c);
                        row[i1] = b;
                    }
                }
                return b;
            } else {
                return s1_len + s2_len;
            }
        }
    };
})();

var scans = [
    {
        "name": "MYRO",
        "img": "https://assets.coingecko.com/coins/images/32878/standard/MYRO_200x200.png?1699709942",
        "ch": "CH: 69/100",
        "scanlink": "./scan/?ticker=MYRO",
    },
    {
        "name": "SNEK",
        "img": "data:image/jpeg;base64,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",
        "ch": "CH: 89/100",
        "scanlink": "./scan/?ticker=SNEK",
    }
]

function getRecomendations(val) {
    var coinnames = scans.map(v => [levenshtein(v.name, val), v.name])
    coinnames.sort((a, b) => a>b?1:-1)
    return coinnames.map(v => v[1])
}

console.log(getRecomendations("MYEO"))