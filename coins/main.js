let $=(x) => document.querySelector(x)
let ß=(x) => document.querySelectorAll(x)

let menu = $('#sort_opts')
let options = menu.options
let abc = {
    "a":1,
    "b":2,
    "c":3,
    "d":4,
    "e":5,
    "f":6,
    "g":7,
    "h":8,
    "i":9,
    "j":10,
    "k":11,
    "l":12,
    "m":13,
    "n":14,
    "o":15,
    "p":16,
    "q":17,
    "r":18,
    "s":19,
    "t":20,
    "u":21,
    "v":22,
    "w":23,
    "x":24,
    "y":25,
    "z":26
}
menu.onchange = ()=> {
    if ('ch_high'==menu.value) {
        scans.sort((a, b) => b.ch-a.ch)
        $("#sorted").innerHTML = ''
        scans.forEach(s => {
            $("#sorted").innerHTML += `<div><a href="${s.scanlink.replace('./', '../')}">
                <img src="${s.img.split('')[0]=='.'? s.img.replace('./', '../') : s.img}" style="width: 100px">
                <h3>${s.name}</h3>
                <h4>Score: ${s.ch}/100</h4>
            </a></div>`
        });
    }
    else if ('ch_low'==menu.value) {
        scans.sort((a, b) => a.ch-b.ch)
        $("#sorted").innerHTML = ''
        scans.forEach(s => {
            $("#sorted").innerHTML += `<div><a href="${s.scanlink.replace('./', '../')}">
                <img src="${s.img.split('')[0]=='.'? s.img.replace('./', '../') : s.img}" style="width: 100px">
                <h3>${s.name}</h3>
                <h4>Score: ${s.ch}/100</h4>
            </a></div>`
        });
    }
    else if ('new'==menu.value) {
        scans.sort((a, b) => b.date-a.date)
        $("#sorted").innerHTML = ''
        scans.forEach(s => {
            $("#sorted").innerHTML += `<div><a href="${s.scanlink.replace('./', '../')}">
                <img src="${s.img.split('')[0]=='.'? s.img.replace('./', '../') : s.img}" style="width: 100px">
                <h3>${s.name}</h3>
                <h4>Score: ${s.ch}/100</h4>
            </a></div>`
        });
    }
    else if ('old'==menu.value) {
        scans.sort((a, b) => a.date-b.date)
        $("#sorted").innerHTML = ''
        scans.forEach(s => {
            $("#sorted").innerHTML += `<div><a href="${s.scanlink.replace('./', '../')}">
                <img src="${s.img.split('')[0]=='.'? s.img.replace('./', '../') : s.img}" style="width: 100px">
                <h3>${s.name}</h3>
                <h4>Score: ${s.ch}/100</h4>
            </a></div>`
        });
    }
    else if ('az'==menu.value) {
        scans.sort((a, b) => abc[a.name.split('')[0].toLocaleLowerCase()]-abc[b.name.split('')[0].toLocaleLowerCase()])
        $("#sorted").innerHTML = ''
        scans.forEach(s => {
            $("#sorted").innerHTML += `<div><a href="${s.scanlink.replace('./', '../')}">
                <img src="${s.img.split('')[0]=='.'? s.img.replace('./', '../') : s.img}" style="width: 100px">
                <h3>${s.name}</h3>
                <h4>Score: ${s.ch}/100</h4>
            </a></div>`
        });
    }
    else if ('za'==menu.value) {
        scans.sort((a, b) => abc[b.name.split('')[0].toLocaleLowerCase()]-abc[a.name.split('')[0].toLocaleLowerCase()])
        $("#sorted").innerHTML = ''
        scans.forEach(s => {
            $("#sorted").innerHTML += `<div><a href="${s.scanlink.replace('./', '../')}">
                <img src="${s.img.split('')[0]=='.'? s.img.replace('./', '../') : s.img}" style="width: 100px">
                <h3>${s.name}</h3>
                <h4>Score: ${s.ch}/100</h4>
            </a></div>`
        });
    }
    else {
        console.log(menu.value)
    }
}
scans.sort((a, b) => b.ch-a.ch)
$("#sorted").innerHTML = ''
scans.forEach(s => {
    $("#sorted").innerHTML += `<div><a href="${s.scanlink.replace('./', '../')}">
        <img src="${s.img.split('')[0]=='.'? s.img.replace('./', '../') : s.img}" style="width: 100px">
        <h3>${s.name}</h3>
        <h4>Score: ${s.ch}/100</h4>
    </a></div>`
});