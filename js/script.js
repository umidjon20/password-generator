let upperCase = document.querySelector('#upperCase')
let lowerCase = document.querySelector('#lowercase')
let symbol = document.querySelector('#symbol')
let numbers = document.querySelector('#numbers')

////////// input range   //////////////
let range = document.querySelector('input[type="range"]')
let numRange = document.querySelector('.num')

range.addEventListener('input',(e)=>{
    numRange.innerText = `${e.target.value}`

})
///////////////////////////////


/////////////////////// bu parolni oynaga chiqaradi   ////////////////////
let h2 = document.querySelector('h2')
// console.dir(inner)
/////////////////////////////

//////////////////////////////////////////// 
let upper = 'ABCDEFHIKJLMNOPQRSTUYXWZ'
let lower = 'abcdefhikjlnmopqrstuyxwz'
let sym = '!@#$_-.?/'
let num = '0123456789'

upper = upper.split('')
lower = lower.split('')
sym = sym.split('')
// num = num.split('')
///////////////////////////////////////////

// passLength.addEventListener('input',(e)=>{

    ///////  bu parolni chiqaradi///////
//    inner.innerText = `${ e.target.value}`
// })
// let len = upper.length

/////////////////////////// isStrong  ///////////////////////
let tooWeek = document.querySelector('.too__week')
let week = document.querySelector('.week')
let medium = document.querySelector('.medium')
let strong = document.querySelector('.strong')

let degree = document.querySelector('.degree')

let err = document.querySelector('.error')

let btn = document.querySelector('.btn')

let newArr = []
let passStr = ''
// console.dir(upperCase)


btn.addEventListener('click',getRangeValue)

function getRangeValue(){
    let passLength = +range.value
    
    if(upperCase.checked === false && lowerCase.checked === false && numbers.checked === false && symbol.checked === false){
        err.style.display = 'block'
    }else{
        err.style.display = 'none'
    for(let i = 1; i < passLength+1;i++){
        
        if(upperCase.checked){
            newArr[newArr.length] = upper[Math.floor(Math.random()  * upper.length)]
           
        }else{
            ''
        }
        if(lowerCase.checked){
            newArr[newArr.length] = lower[Math.floor(Math.random()  * lower.length)]
                    
        }else{
            ''
        }
        if(numbers.checked){
            newArr[newArr.length] =[Math.floor(Math.random()  * 9)]
            
        }else{
            ''
        }
        if(symbol.checked){
            newArr[newArr.length] = sym[Math.floor(Math.random()  * sym.length)]
            
        }else{
            ''
        }
        
        findRemove(newArr)
       let ran = newArr[Math.round(Math.random() * (newArr.length-1))]
       
         passStr += ran
    }
    
    }
   
     h2.innerText = passStr
    
    passStr=''
    check(all)
}
   // console.dir(btn)

let copy = document.querySelector('.copy')

copy.addEventListener('click',()=>{
    if(passStr.valueOf() != '' || passStr.valueOf().length > 1){
        navigator.clipboard.writeText(passStr.valueOf())
        copy.title = 'copy'
    }
})

let all = document.querySelectorAll("[type  ='checkbox']")
function check(arr){
    let x =0
    arr.forEach(el=>{
       x+= el.checked? 1 : 0
       
    })
    if(x === 1){
        tooWeek.style.backgroundColor = 'red'

        tooWeek.style.border  = '1px solid red'
        degree.innerText = 'Too week!'
    }
    if(x === 2){
        tooWeek.style.backgroundColor = 'orange'
                    week.style.backgroundColor = 'orange'

                    tooWeek.style.border  = '1px solid orange'
                    week.style.border  = '1px solid orange'
                     degree.innerText = 'Week'
    }if(x === 3){
        tooWeek.style.backgroundColor = 'yellow'
            week.style.backgroundColor = 'yellow'
            medium.style.backgroundColor = 'yellow'

            tooWeek.style.border  = '1px solid yellow'
            week.style.border  = '1px solid yellow'
            medium.style.border  = '1px solid yellow'
            degree.innerText = 'Medium'
    }
    if(x === 4){
        tooWeek.style.backgroundColor = '#A4FFAF'
            week.style.backgroundColor = '#A4FFAF'
            medium.style.backgroundColor = '#A4FFAF'
            strong.style.backgroundColor = '#A4FFAF'
    
            tooWeek.style.border  = '1px solid #A4FFAF'
            week.style.border  = '1px solid #A4FFAF'
            medium.style.border  = '1px solid #A4FFAF'
            strong.style.border = '1px solid #A4FFAF'
            degree.innerText = 'Strong'
    }
    
}

function findRemove(arr){
    let x =[]
    let y = []
    arr.forEach(el=>{
        if(el != undefined){
            x.push(el)
        }else{
            y.push(undefined)
        }
    })
    return x
}

function refresh(){
    window.location.reload()
}































