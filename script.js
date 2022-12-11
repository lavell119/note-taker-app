const output = document.querySelector('.output')
let note = document.querySelector('.note')

const eleDiv =document.createElement('div')
eleDiv.classList.add('ele-div')
const h1ele = document.createElement('h1')
h1ele.innerText='Title'
let leftRow= document.querySelector('.left-row')
// output.appendChild(eleDiv)
let elementType 
let createSubmitField=function(){
    elementType= 'h1'
    const eleDiv =document.createElement('div')
    eleDiv.classList.add('ele-div')
    eleDiv.classList.add('submit-field')

    const submitField=document.createElement('div')
    const inputForm=document.createElement('form')
    //Create text-area for input box
    const textArea=document.createElement('textarea')
    //Create btn for input box
    const submitBtn=document.createElement('button')
    inputForm.addEventListener('submit', (e)=>{
        console.log(elementType)
        e.preventDefault()
        const eleDiv = document.createElement('div')
        const innerElement = document.createElement(elementType)
        innerElement.innerText =textArea.value
        eleDiv.appendChild(innerElement)
        eleDiv.classList.add('ele-div')
        output.appendChild(eleDiv)
    })
    submitBtn.classList.add('submit-btn')
    inputForm.appendChild(textArea)
    inputForm.appendChild(submitBtn)
    eleDiv.appendChild(inputForm)
    output.appendChild(eleDiv)

}


let addTitle=function(){
    //Create ele-div
    const eleDiv =document.createElement('div')
    //Create input-box
    const input=document.createElement('div')
    //Add class to input box
    input.classList.add('input-field')
    //Create form for input box
    const inputForm=document.createElement('form')
    //Create text-area for input box
    const textArea=document.createElement('textarea')
    //Create btn for input box
    const submitBtn=document.createElement('button')
    //Append elements to input box
    input.appendChild(inputForm)
    input.appendChild(textArea)
    input.appendChild(submitBtn)
    //Add classes to ele-div
    eleDiv.classList.add('ele-div')
    eleDiv.classList.add('title')
    const titleElement = document.createElement('h1')
    titleElement.innerText='Title'
    eleDiv.appendChild(titleElement)
    eleDiv.appendChild(input)    
    output.appendChild(eleDiv)

}

let addSubTitle=function(){
    const eleDiv =document.createElement('div')
    eleDiv.classList.add('ele-div')
    const subTitleElement = document.createElement('h3')
    subTitleElement.innerText='Subtitle'
    eleDiv.appendChild(subTitleElement)
    output.appendChild(eleDiv)
}

let addParagraph=function(){
    const eleDiv =document.createElement('div')
    eleDiv.classList.add('ele-div')
    const paragraphElement = document.createElement('p')
    paragraphElement.innerText='This is a paragraph...'
    eleDiv.appendChild(paragraphElement)
    output.appendChild(eleDiv)
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

