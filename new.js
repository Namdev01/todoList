var addTarget=document.querySelector("select");
var add=document.querySelector("#Add");
var clear=document.querySelector("#clear");
var empty=document.querySelector("#empty");
var save=document.querySelector("#save");

add.addEventListener("click",addFunction);
function addFunction(){
    var input=document.querySelector("#textpart");
    if(input.value=="") alert("Empty task is not possible");
    else 
    {
        var newElement=document.createElement("option");
        newElement.append(input.value);
        // console.log(newElement);
        addTarget.insertAdjacentElement("afterbegin",newElement);
        input.value="";
        newElement.addEventListener("dblclick",function(){
            this.classList.add("cut");
        });
        
    }
}

clear.addEventListener("click",clearFunction);
function clearFunction(){
    var all=document.querySelectorAll("option");
    for(var i=0;i<all.length;i++)
    {
        if(all[i].classList.contains("cut")) all[i].remove();
    }
}

empty.addEventListener("click",emptyrFunction);
function emptyrFunction(){
    var all=document.querySelectorAll("option");
    for(var i=0;i<all.length;i++)
    {
        all[i].remove();
    }
}



