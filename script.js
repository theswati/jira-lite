//selections

let addCardBtn=document.querySelector("#addCard");
let todoContainer=document.querySelector("#todo");

addCardBtn.addEventListener("click",addTask);

function addTask(){
    let card=document.createElement("div")
    card.className="card"
    card.innerText="Test Card"
    card.setAttribute("contenteditable","true")
    todoContainer.append(card)
   card.focus();// it means pointer is automatically there for you.we can start writing it.

    //pointer will be in editable zone automatically.

    //problem:1 empty card should automatically be removed

    //blur-focus lost
    card.addEventListener("blur",(eventDetails)=>{
        let blurredCard=eventDetails.target;
        if(blurredCard.innerText.trim()==""){
            blurredCard.remove();
        }
})



}