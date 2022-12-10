const output = document.querySelector('.output')
let note = document.querySelector('.note')

const eleDiv =document.createElement('div')
eleDiv.classList.add('ele-div')
const h1ele = document.createElement('h1')
h1ele.innerText='Title'
let leftRow= document.querySelector('.left-row')
// output.appendChild(eleDiv)


let addTitle=function(){
    const eleDiv =document.createElement('div')
    eleDiv.classList.add('ele-div')
    eleDiv.classList.add('title')
    const titleElement = document.createElement('h1')
    titleElement.innerText='Title'
    eleDiv.appendChild(titleElement)
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

