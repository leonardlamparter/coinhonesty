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
                <img src="${s.img}">
                <h3>${s.name}</h3>
                <h4>${s.ch}</h4>
            </a></div>`
}

scans.map(s => scanHTML(s)).forEach(html => {
    document.querySelector("#new").innerHTML += html
});