let $=(x) => document.querySelector(x)
let ß=(x) => document.querySelectorAll(x)

function runby(x) {
    scans.sort((a, b) => b[x]-a[x])
    scans.forEach(s => {
        $("#sorted").innerHTML += `<div><a href="${s.scanlink.replace('./', '../')}">
            <img src="${s.img.split('')[0]=='.'? s.img.replace('./', '../') : s.img}" style="width: 100px">
            <h3>${s.name}</h3>
            <h4>Score: ${s.ch}/100</h4>
        </a></div>`
        console.log(s)
    });
}

runby('ch')