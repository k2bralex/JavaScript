function addPhone() {
    if (typeof phoneCounter == 'undefined') {
        phoneCounter = 1
    }
    phoneCounter++
    let f = document.forms[0]

    let b = document.createElement('br')
    f.appendChild(b)

    let t = document.createTextNode('Phone number ')
    f.appendChild(t)

    let phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.placeholder = 'Enter phone number'
    phoneInput.name = 'phone' + phoneCounter
    f.appendChild(phoneInput)

    let selector = f.elements['type']
    let newSelector = selector.cloneNode(true)
    console.log(newSelector)
    newSelector.name = 'type' + phoneCounter
    f.appendChild(newSelector)

    let t3 = document.createTextNode(' Priority ')
    f.appendChild(t3)
    let mainRadio = document.createElement('input')
    mainRadio.type = 'radio'
    mainRadio.name = 'main'
    mainRadio.value = phoneCounter
    f.appendChild(mainRadio)
}

function showElements() {
    let e = document.forms[0].elements
    let p = document.getElementById("out")
    p.innerHTML = ''

    for (let i = 0; i < e.length; i++) {
        p.innerHTML += e[i].tagName + " - "
            + e[i].name + " - "
            + e[i].value + "<br>"
    }
}

function showChildren() {
    let c = document.forms[0].children
    let p = document.getElementById("out")
    p.innerHTML = ''

    for (let i = 0; i < c.length; i++) {
        p.innerHTML += (i + 1) + ". " + c[i].tagName + "<br>"
    }
}

function showNodes() {
    let n = document.forms[0].childNodes
    let p = document.getElementById("out")
    p.innerHTML = ''
    for (let i = 0; i < n.length; i++) {
        p.innerHTML += (i + 1) + ". " + n[i].nodeName + "<br>"
    }
}
