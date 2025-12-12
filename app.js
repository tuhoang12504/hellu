const scenes = document.querySelectorAll('.scene')
function nextScene() {
    const currentScene = document.querySelector('.scene.active')
    const nextIndex = Array.from(scenes).indexOf(currentScene) + 1

    if (currentScene) currentScene.classList.remove('active')
    if (nextIndex < scenes.length) {
        scenes[nextIndex].classList.add('active')
    }
}
window.addEventListener('load', () => {
    setTimeout(() => {
        nextScene()
    }, 1000)
})

const mainSound = new Audio('sounds/main.m4a')
mainSound.volume = 0.3
const text = 'Ngay từ lần đầu thấy em, anh đã thấy con tim mình có một chút gì đó rung động. Càng tiếp xúc với em, anh càng nhận ra rằng em là người đặc biệt và quan trọng đối với anh. Anh nghĩ rằng cuộc sống của anh sẽ trở nên tươi đẹp hơn khi có em bên cạnh. Anh hi vọng rằng em sẽ cho anh cơ hội để chứng minh tình cảm chân thành của mình. Nha em!!!'
const hello = document.querySelector('.hello')
const btnHello = document.querySelector('.btn-hello')
const letter = document.querySelector('.letter')
btnHello.addEventListener('click', () => {
    hello.classList.remove('smood')
    letter.classList.add('smood')
    letter.addEventListener('transitionend', () => {
        AddText()
    }, {once : true})
    mainSound.play()
    
})
const listChar = [...text] 
const letterText = document.querySelector('#letter-text')
const btnLetter = document.querySelector('.btn-letter')
const keydownSound = new Audio('sounds/keydown.m4a')
keydownSound.volume = 0.1
function AddText() {
    keydownSound.loop = true
    keydownSound.play()
    for (let i = 0; i < listChar.length; i++) {
        setTimeout(() => {
            letterText.innerHTML += listChar.at(i)
            if (i === listChar.length - 1) {
                btnLetter.style.pointerEvents = 'auto'
                keydownSound.pause()
            }
        }, i * 40)
    }
}
const intervalID = null
btnLetter.addEventListener('click', () => {
    nextScene()
    intervalID = setInterval(() => {
    createHeartIcon()
}, 600)
})
const btnArea = document.querySelector('.button-area')
const btnYes = document.querySelector('.btn-yes')
const btnNo = document.querySelector('.btn-no')

let scaleNO = 1
let scaleYES = 1
let leftYES = 20
btnNo.addEventListener('click', switchButton)
function switchButton() {
    const randomX = 5 + Math.floor(Math.random() * 80)
    const randomY = 10 + Math.floor(Math.random() * 90)
    btnNo.style.left = randomX + '%'
    btnNo.style.top = randomY + '%'
    scaleNO -= 0.05
    scaleYES += 0.05
    leftYES += 1
    btnYes.style.transform = `scale(${scaleYES})`
    btnYes.style.left = leftYES + '%'
    btnNo.style.transform = `scale(${scaleNO})`
}
const listIcon = ['💖', '💘', '💝', '💗', '💕', '💞', '💓']
const Scene3 = document.querySelector('.scene-3')
function createHeartIcon() {
    const icon = document.createElement('div')
    icon.classList.add('heart-icon')
    icon.innerText = listIcon[Math.floor(Math.random() * listIcon.length)]
    icon.style.left = 5 + Math.random() * 90 + 'vw'
    Scene3.appendChild(icon)
    setTimeout(() => {
        icon.remove()
    }, 4000)
}

btnYes.addEventListener('click', () => {
    nextScene()
    clearInterval(intervalID)
})
// Scene 4 ------------------------------------------------------------------------------
const btnReason = document.querySelector('.btn-reason')
const reasonInput = document.querySelector('#reason-text')
const reason = "Tại vì anh quá đẳng cấp và tuyệt vời đó! 💕💕💕"
const reasonChars = [...reason]
reasonInput.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (reasonInput.value.length >= reasonChars.length && e.key != 'Backspace') return
    if (e.key.length === 1) {
        reasonInput.value += reasonChars.at(reasonInput.value.length)
    }
    else if (e.key === 'Backspace') {
        reasonInput.value = reasonInput.value.slice(0, reasonInput.value.length - 1)
    }
})
btnReason.addEventListener('click', () => {
    window.location = "https://m.me/tuhoang12504"
})
