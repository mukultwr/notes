showNotes();
var addBtn=document.getElementById('addBtn')
addBtn.addEventListener("click",function(e){
    var addTxt=document.getElementById('addTxt');
    var notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
showNotes();
})
//function to show elements 
function showNotes(){
var notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}
let html="";
notesObj.forEach(function(element,index){
    html+=`
    <div id="notes" class="row container-fluid">
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                               <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <button id ="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
                </div>
              </div>
    `
});
var notesElm=document.getElementById('notes');
if(notesObj.length!=0){
    notesElm.innerHTML=html;
}
}
//function to delete notes
function deleteNote(index){
    console.log('deleting',index);
    var notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    //splice takes the elemnt and how many element we want to delete that is one so it takes index and 1 element to delete
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
var searchTxt=document.getElementById('searchTxt');
searchTxt.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
   let  noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
      let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

})