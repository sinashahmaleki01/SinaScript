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