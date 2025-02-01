let title = document.querySelector(".form-input")
let textArea = document.querySelector(".form-textarea")
let formBtn = document.querySelector(".form-btn")
let newBlock = document.querySelector('.new-block')
let dataTxt = document.querySelector(".txt-data")
let btnDelete = document.querySelector('.btn-delete')
let btnUpdate = document.querySelector(".btn-update")


function commentFun(){
    console.log("Hi")
    if(title.value === "" || textArea.value === ""){
        alert("You have to write the title")
    }
    else{
        let objInput = {
            nameBlog: title.value,
            body: textArea.value
        }
        fetch("http://localhost:3000/posts", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objInput)
        })
        .then(response => {
            if(!response.ok){
                console.error("Error")
            }
            return response.json()
        })
        .then(data => {
            data.forEach(element => {
                dataTxt.textContent = element
                newBlock.appendChild(dataTxt)
            })
            })
        .catch(error => console.error(error))
        console.log(objInput)
    }
}
formBtn.addEventListener("click", commentFun)

function deleteFun(){
    let idArea = prompt("Enter the id")
    if(idArea === ""){
        alert("You have to write the id")
    }
    else{
        fetch(`http://localhost:3000/posts/${idArea}`, {
            method: "DELETE"
        })
        .then(response => {
            if(!response.ok){
                console.error("Error")
            }
            return response.json()
        })
        .catch(error => console.error(error))
    }
}

btnDelete.addEventListener("click", deleteFun)

function updateFun(){
    let idUpdate = prompt("Enter the id from element")
    let nameUpdate = prompt("Enter the new name for the element")
    let bodyUpdate = prompt("Enter the new description for the element")
    if(idUpdate === "" || nameUpdate === "" || bodyUpdate === ""){
        alert("You have to write correct info")
    }
    else{
        let objUpdatedElement = {
            nameBlog: nameUpdate,
            body: bodyUpdate
        }
        let updatedElementOptions = {
            method: "PUT",
            body: JSON.stringify(objUpdatedElement),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            }
        }
        fetch(`http://localhost:3000/posts/${idUpdate}`, updatedElementOptions)
        .then(response => {
            if(!response.ok){
                console.error("Error")
            }
            return response.json()
        })
        .catch(error => console.error(error))
    }
}

btnUpdate.addEventListener("click", updateFun)