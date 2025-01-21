let overlay = document.getElementsByClassName('overlay')[0]
//============================|Modal Maker|===========================// 
function modalMaker(obj, isOverlayClose = true) {
    overlay.style.display = 'flex'

    let modal = document.createElement('div')
    modal.setAttribute("id", "modal")
    overlay.appendChild(modal)
    //================|icon|=================// 
    if (obj.hasOwnProperty("icon")) {
        let icon = document.createElement('div')
        icon.setAttribute("class", "close-icon")
        modal.appendChild(icon)
        obj.icon.forEach(function (items) {
            icon.innerHTML += "<i  class='fa fa-close'></i>"
            icon.addEventListener("click", items.func)
        })

    }
    if (obj.hasOwnProperty("content")) {
        let content = document.createElement("div")
        content.setAttribute("class", "content")
        modal.appendChild(content)
        obj.content.forEach(function (items) {

            content.innerHTML += "<p class='content'>" + items + "</p>"
        })

    }
    //================|inputs|=================// 
    if (obj.hasOwnProperty("inputs")) {
        let inputs = document.createElement('div')
        inputs.setAttribute("class", "input-container")

        modal.appendChild(inputs)
        obj.inputs.forEach(items => {
            inputs.innerHTML += "<label><input id=" + items.id + " placeholder=" + items.placeholder + " value=" + items.value + "></label>"
        });

    }
    //=================|buttons|==================// 
    if (obj.hasOwnProperty("buttons")) {

        let buttons = document.createElement('div')

        buttons.setAttribute("class", "button-container")

        modal.appendChild(buttons)
        obj.buttons.forEach(items => {
            buttons.innerHTML += "<button onclick=" + items.func + "()>" + items.title + "</button>"
        });
    }
    //=====================|overlayclose|======================//
    if (isOverlayClose) {
        overlay.addEventListener("click", function (e) {
            if (e.target.classList.contains("overlay")) {
                closeModal()
            }
        })
    }

}
//=====================|notification|====================// 
function notification(mode, Content) {
    let liclass = ""
    switch (mode) {
        case 'description&title': liclass = "title-desc"; break
    }
    let notification = document.getElementById('notification')
    // ---------------|creating new li|--------------//
    let li = document.createElement('li')
    li.innerHTML = Content
    li.setAttribute('class', liclass + ' bounceInRight  animated ')
    notification.appendChild(li)
    // ---------------|removing li|--------------//
    setTimeout(function () {
        li.classList.add('bounceOutRight')
    }, 5000)
    setTimeout(function () {
        li.remove()
    }, 8000)
}