const btn1 = document.querySelector('#btn-about')
const btn2 = document.querySelector('#btn-service')
const btn3 = document.querySelector('#btn-contact')

const showBtn = () => {
    console.log('.')
    document.querySelector('#about-container-id').scrollIntoView({ behavior: 'smooth' })
        // document.location.assign("http://www.google.pl")
}
const showBtn1 = () => {
    console.log('.')
}
btn1.addEventListener('click', showBtn)
btn2.addEventListener('click', showBtn1)
btn3.addEventListener('click', showBtn1)

const newBtn = document.querySelector('#btn-tuna')
const newBtn2 = document.querySelector('#btn-sushi')
const newBtn3 = document.querySelector('#btn-salmon')

const showMenu = () => {
    console.log('')
    document.querySelector('#menu-list').scrollIntoView()

}

const showMenu2 = () => {
    console.log('')
    document.querySelector('#menu-list2').scrollIntoView()

}
const showMenu3 = () => {
    console.log('')
    document.querySelector('#menu-list3').scrollIntoView()
}
newBtn.addEventListener('click', showMenu)
newBtn2.addEventListener('click', showMenu2)
newBtn3.addEventListener('click', showMenu3)