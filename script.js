const output = document.querySelector('.output')
let note = document.querySelector('.note')
const deleteBtn = document.querySelector('.delete-btn')

const printBtn = document.querySelector('#print-btn')
let lastElement=''

let divHeight = 30

const eleDiv =document.createElement('div')
eleDiv.classList.add('ele-div')
const h1ele = document.createElement('h1')
h1ele.innerText='Title'
let leftRow= document.querySelector('.left-row')

let appendElement = function(element){
    element.style.height=(lastElement.offsetHeight + 50) + 'px'
}

//CreateSubmitField function
let createSubmitField=function(type){
    elementType= type
    const eleDiv =document.createElement('div')
    eleDiv.classList.add('ele-div')
    eleDiv.classList.add('submit-field')
    const submitField=document.createElement('div')
    const inputForm=document.createElement('form')
    const eleTitle=document.createElement('h3')
    eleTitle.innerText=elementType + ' Content'
    eleTitle.classList.add('ele-title')
    eleDiv.appendChild(eleTitle)
    //Create text-area for input box
    const textArea=document.createElement('textarea')
    //Create btn for input box
    const submitBtn=document.createElement('button')
    submitBtn.innerText='Submit'
    inputForm.addEventListener('submit', (e)=>{
        console.log(elementType)
        e.preventDefault()
        const deleteBtn = document.createElement('div')
        deleteBtn.innerHTML="&#10006;"
        deleteBtn.classList.add('delete-btn')
        const eleDiv2 = document.createElement('div')
        const innerElement = document.createElement(elementType)
        innerElement.innerText =textArea.value
        eleDiv2.appendChild(deleteBtn)
        eleDiv2.appendChild(innerElement)
        eleDiv2.classList.add('ele-div')
        output.appendChild(eleDiv2)
        eleDiv.remove()
        eleDiv2.style.top = divHeight + 'px'


        divHeight = divHeight +50
        deleteBtn.addEventListener('click', (e) => {
            let btn=deleteBtn 
            $(btn).parent().remove()
            divHeight=divHeight - 50
            moveElementsDown(e)
        }) 
    })
    submitBtn.classList.add('submit-btn')
    inputForm.appendChild(textArea)
    inputForm.appendChild(submitBtn)
    eleDiv.appendChild(inputForm)
    eleDiv.style.top = (divHeight + 100) + 'px'
    output.appendChild(eleDiv)
    lastElement=eleDiv

}

//Add element button functions
let addTitle=function(){
    createSubmitField('H1')
}

let addSubTitle=function(){
    createSubmitField('H3')   
}

let addParagraph=function(){
    createSubmitField('P')
}

let addSpacer=function(){
    const spacer =document.createElement('div')
    spacer.classList.add('spacer')
    const deleteBtn = document.createElement('div')
        deleteBtn.innerHTML="&#10006;"
        deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click', (e) => {
        let btn=deleteBtn 
        divHeight=divHeight - 50
        $(btn).parent().remove()
        moveElementsDown(e)
    })
    spacer.appendChild(deleteBtn)
    spacer.style.top = divHeight + 'px'
    console.log(divHeight)
    divHeight=divHeight+50
    output.appendChild(spacer)
    lastElement=spacer

}

let addNote=function(){
    const note =document.createElement('div')
    note.classList.add('note')
    const noteContent = document.createElement('p')
    noteContent.innerText='Note...'
    note.appendChild(noteContent)
    leftRow.appendChild(note)
    note.addEventListener('click', function(e){
        note.firstChild.innerText = 'palskd'
    })
}

let addArrow = function(){
    const arrowWrapper=document.createElement('div')
    $(arrowWrapper).draggable()
    const arrow=document.createElement('img')
    arrowWrapper.classList.add('arrow-wrapper')
    arrow.classList.add('arrow')
    arrow.src="arrow.png"
    const deleteBtn = document.createElement('div')
        deleteBtn.innerHTML="&#10006;"
        deleteBtn.classList.add('delete-btn')
        
    arrowWrapper.appendChild(deleteBtn)
    arrowWrapper.appendChild(arrow)
    output.appendChild(arrowWrapper)
    deleteBtn.addEventListener('click', () => {
        let btn=deleteBtn 
        $(btn).parent().remove()
    })
    $(arrowWrapper).draggable()
    $(arrow).resizable()

    let tmpAnimation = 0
    $(arrowWrapper).click(function() {
        var element = $(arrowWrapper)
        tmpAnimation = tmpAnimation + 10

        $({degrees: tmpAnimation-10}).animate({degrees: tmpAnimation}, {
            duration: 1000,
            step: function (now) {
                element.css({
                    transform: 'rotate(' + now + 'deg)'
                })
            }
        })

    })

}

let addBox = function() {
    const box = document.createElement('div')
    box.classList.add('box')
    const form = document.createElement('form')
    const boxInput=document.createElement('textarea')
    const button = document.createElement('button')
    //Create bold button
    const boldBtn=document.createElement('input')
    boldBtn.type='checkbox'
    boldBtn.classList.add('bold-btn')
    button.innerText='Submit'
    boldBtn.innerText= 'Bold'
    //Append boldBtn to form
    form.appendChild(button)
    form.appendChild(boxInput)
    let isBold=''
    boldBtn.addEventListener('click', () => {
        $(boldBtn).change(function(){
            if(this.checked === true)
            {isBold ='true'}
        })
    })
    form.appendChild(boldBtn)
    form.addEventListener('submit', function(e){
        const paragraph=document.createElement('p')
        e.preventDefault()
        box.remove()
        const box2=document.createElement('span')
        paragraph.innerText=boxInput.value
        box2.classList.add('text-box')
        if(isBold==='true'){
            box2.classList.add('bold')
        }
        box2.appendChild(paragraph)
        box2.addEventListener('dblclick', function(){
            box2.classList.toggle("hide")
        })
        //Create delete button
        const deleteBtn = document.createElement('div')
        deleteBtn.innerHTML="&#10006;"
        deleteBtn.classList.add('delete-btn')
        deleteBtn.addEventListener('click', () => {
        let btn=deleteBtn 
        $(btn).parent().remove()
    })
        box2.appendChild(deleteBtn)
        output.appendChild(box2)

        $(box2).resizable()
        $(box2).draggable()

    })
    box.appendChild(form)
    output.appendChild(box)
    $(box).resizable()
    $(box).draggable()
}

let complete = function() {
    let deleteBtns = document.querySelectorAll('.delete-btn')
    deleteBtns.forEach(btn => btn.remove())
}

//Print PDF
let printPDF=function(){
    $('#print-btn').click(function(){
    $('.output').printThis()
    })
}

let addPage = function(){
    output.style.height = (output.offsetHeight + 50) + "px"
}

let decPage = function(){
    output.style.height = (output.offsetHeight - 50) + "px"
}

let moveElementsDown = (e) => {
    let children = output.children
    var arr = [].slice.call(children)
    arr.forEach(child => {
        if(child.offsetTop > parseInt(e.target.parentElement.style.top)) {
            child.style.top = (child.offsetTop - 50) + "px"
        }
    })
}




printBtn.addEventListener('click', printPDF())
$(output).sortable()


$(".arrow").resizable()
$(".arrow-wrapper").draggable()

$(".box").resizable()
$(".box").draggable()

