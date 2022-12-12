const output = document.querySelector('.output')
let note = document.querySelector('.note')
const deleteBtn = document.querySelector('.delete-btn')

deleteBtn.addEventListener('click', () => {
    let btn=deleteBtn 
    $(btn).parent().remove()
})


const eleDiv =document.createElement('div')
eleDiv.classList.add('ele-div')
const h1ele = document.createElement('h1')
h1ele.innerText='Title'
let leftRow= document.querySelector('.left-row')


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
        deleteBtn.addEventListener('click', () => {
            let btn=deleteBtn 
            $(btn).parent().remove()
        })
    })
    submitBtn.classList.add('submit-btn')
    inputForm.appendChild(textArea)
    inputForm.appendChild(submitBtn)
    eleDiv.appendChild(inputForm)
    output.appendChild(eleDiv)
}

//Add element button functions
let addTitle=function(){
    createSubmitField('h1')
}

let addSubTitle=function(){
    createSubmitField('h3')   
}

let addParagraph=function(){
    createSubmitField('p')
}

let addSpacer=function(){
    const spacer =document.createElement('div')
    spacer.classList.add('spacer')
    output.appendChild(spacer)
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
    arrowWrapper.appendChild(arrow)
    document.body.appendChild(arrowWrapper)
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

let addBox= function() {
    const box = document.createElement('div')
    box.classList.add('box')
    const form = document.createElement('form')
    const boxInput=document.createElement('input')
    const button = document.createElement('button')
    button.innerText='Submit'
    form.appendChild(button)
    form.appendChild(boxInput)
    form.addEventListener('submit', function(e){
        const paragraph=document.createElement('p')
        e.preventDefault()
        box.remove()
        const box2=document.createElement('div')
        paragraph.innerText=boxInput.value
        box2.classList.add('text-box')
        box2.appendChild(paragraph)
        document.body.appendChild(box2)

        $(box2).resizable()
        $(box2).draggable()

    })
    box.appendChild(form)
    document.body.appendChild(box)
    $(box).resizable()
    $(box).draggable()
}

$(".arrow").resizable()
$(".arrow-wrapper").draggable()

$(".box").resizable()
$(".box").draggable()