//ol
var notes=[]
var loveNotes=[]
var doneNotes=[]
var his=[]
//add note
document.querySelector('#add').onclick = function addNote(){
  if(document.querySelector('#type').value===""){
  return alert('plz type something to add')
  }
  his.push('you added a new note')
    var done = document.createElement('button')
    var love = document.createElement('button')
    var reset = document.createElement('button')
    var dele = document.createElement('button')
    done.setAttribute('class','removMe') 
    love.setAttribute('class','love')
    reset.setAttribute('class','reset')
    dele.setAttribute('class','dele')
    done.textContent = 'done'
    love.textContent = 'love'
    reset.textContent = 'reset'
    dele.textContent = 'X'
    document.querySelector('ul').appendChild(done)
    document.querySelector('ul').appendChild(reset)
    document.querySelector('ul').appendChild(love)
    document.querySelector('ul').appendChild(dele)
    var note =document.createElement('li')
    note.setAttribute('class','ourNote')
   //var check = document.createElement('input')
  
    note.textContent = document.querySelector('#type').value
    document.querySelector('#type').value=''
    document.querySelector('ul').appendChild(note) 
  // note.appendChild(check) 
  notes.push(note.textContent)
  done.onclick=function(){
    doneNotes.push(note.textContent)
   var newValue= document.createElement('del')
   newValue.textContent= note.textContent
   note.textContent=''
   note.appendChild(newValue)
  }
  reset.onclick=function(){//loveNotes doneNotes
    note.textContent= note.textContent
    if(loveNotes.includes(note.textContent)){
      loveNotes.splice(loveNotes.indexOf(note.textContent),1)
    }
    if(doneNotes.includes(note.textContent)){
      doneNotes.splice(doneNotes.indexOf(note.textContent),1)
    }

  }
  love.onclick=function(){
    loveNotes.push(note.textContent)
    var newValue = document.createElement('mark')
    newValue.textContent= note.textContent
    note.textContent=''
    note.appendChild(newValue)
  }
  dele.onclick = function(){
    his.push('you removed a note')
    note.remove()
    love.remove()
    reset.remove()
    done.remove()
    dele.remove()
    if(doneNotes.includes(note.textContent)){
      doneNotes.splice(doneNotes.indexOf(note.textContent),1)
    }
    if(loveNotes.includes(note.textContent)){
      loveNotes.splice(loveNotes.indexOf(note.textContent),1)
    }
  }
}

//remove last note-->we wanna get access to all li
document.querySelector('#remove').onclick=function(){
  his.push('you removed your last note')
var myNotes=document.querySelectorAll('li')
myNotes.forEach(function(eachNote){
    if(eachNote.textContent===notes[notes.length-1]){
        eachNote.remove()
        notes.pop()
    }
})
var buts=document.querySelectorAll('.removMe')
buts[buts.length-1].remove()
var resetButs = document.querySelectorAll('.reset')
resetButs[resetButs.length-1].remove()
var loveButs = document.querySelectorAll('.love')
loveButs[loveButs.length-1].remove()
var xButs = document.querySelectorAll('.dele')
xButs[xButs.length-1].remove()
}

document.querySelector('#x').onclick=function(){
  if(loveNotes.length===0){return alert('your favorite list is empty')}
  var title = document.createElement('h2')
  title.id='first'
  title.textContent ='my lovely notes'

  document.querySelector('#y').appendChild(title)
  document.querySelector('#y')

  loveNotes.forEach(function(note){
    var loveYou = document.createElement('li')
    loveYou.textContent=note
    loveYou.setAttribute('class','a')
    document.querySelector('#y').appendChild(loveYou)
  })
}

document.querySelector('#k').onclick = function(){
  var title=document.querySelector('#first')
  title.remove()
   var ps = document.querySelectorAll('.a')
   ps.forEach(function(p){
     p.remove()
   })

}

document.querySelector('#j').onclick=function(){
  if(doneNotes.length===0){return alert('your done list is empty')}
  var title = document.createElement('h2')
  title.id='second'
  title.textContent =`you are done with those ${doneNotes.length} notes`
 document.querySelector('#don').appendChild(title)
doneNotes.forEach(function(note){
  var doneNote = document.createElement('li')
  doneNote.textContent=note
  doneNote.setAttribute('class','b')
  document.querySelector('#don').appendChild(doneNote)
})
}

//
document.querySelector('#n').onclick=function(){
  var title=document.querySelector('#second')
  title.remove()
   var ps = document.querySelectorAll('.b')
   ps.forEach(function(p){
     p.remove()
   })
}

document.querySelector('#h').onclick=function(){
  if(his.length===0){return alert('your history is empty')}
  var title = document.createElement('h2')
  title.id='third'
  title.textContent =`you have ${his.length} events in ur history`
 document.querySelector('#don').appendChild(title)
his.forEach(function(elem){
  var p =document.createElement('li')
  p.setAttribute('class','me')
  p.textContent=elem
  document.querySelector('body').appendChild(p)
})
}

document.querySelector('#last').onclick=function(){
  var title=document.querySelector('#third')
  title.remove()
   var ps = document.querySelectorAll('.me')
   ps.forEach(function(p){
     p.remove()
   })
}