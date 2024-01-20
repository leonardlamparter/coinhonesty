var txt = document.querySelector("#txt")
var txts = ["Rugpulls", "Vulnerabilities", "Scams"]

var i = 2
setInterval(()=> {
    i==2? i=0 : i++
    txt.classList.add('fading');
    setTimeout(function () {
        txt.innerHTML = txts[i]
        txt.classList.remove('fading');
    }, 500);
}, 3000)

function scanHTML(s) {
    return `<div><a href="${s.scanlink}">
                <img src="${s.img}" style="width: 100px">
                <h3>${s.name}</h3>
                <h4>${s.ch}</h4>
            </a></div>`
}

scans.map(s => scanHTML(s)).forEach(html => {
    document.querySelector("#new").innerHTML += html
});

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

function getRecomendations(val) {
    var coinnames = scans.map(v => [levenshtein(v.name, val), v.name])
    coinnames.sort((a, b) => a>b?1:-1)
    return coinnames.filter(v => v[0]<3).map(v => v[1])
}

document.querySelector("#ticker").addEventListener("change", _ => {
    document.querySelector("#ticker").value = getRecomendations(document.querySelector("#ticker").value)[0] || document.querySelector("#ticker").value
})