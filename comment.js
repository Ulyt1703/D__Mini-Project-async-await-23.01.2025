let titleInput = document.getElementById('titleInput')
let bodyInput = document.getElementById('contentInput')
let createBtn = document.querySelector('.form-btn')
let listPosts = document.querySelector('.box-post')

let deleteBtn = document.querySelector('.btn-delete')
let updateBtn = document.querySelector('.btn-update')

function addPost(event) {
    event.preventDefault()

    if (titleInput.value === "" || bodyInput.value === "") {
        alert("Please full all the fields")
        return
    }

    let newPost = {
        title: titleInput.value,
        body: bodyInput.value
    }

    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log("Post has been added:", data)

        let div = document.createElement('div')
        let liId = document.createElement('li')
        let liTitle = document.createElement('li')
        let liBody = document.createElement('li')

        div.style.marginBottom = '20px'
        div.style.borderBottom = '1px solid white'
        
        liId.textContent = 'ID: ' + data.id
        
        liTitle.textContent = data.title
        liTitle.style.fontWeight = 'bold'
        liTitle.style.fontSize = '18px'

        liBody.textContent = data.body

        div.append(liId)
        div.append(liTitle)
        div.append(liBody)

        listPosts.append(div)

        titleInput.value = ""
        bodyInput.value = ""
    })
    .catch(function(error) {
        console.error("Error:", error)
    })
}

createBtn.addEventListener('click', addPost)


function deletePost() {
    let id = prompt("Enter the post's id you want to delete")
    
    if (id === "" || id === null) {
        alert("You didn't enter the id!")
        return
    }

    fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
    })
    .then(function(response) {
        if (response.ok) {
            alert("Post has been deleted!")
            window.location.reload()
        } 
        else {
            alert("Error. Probably the id doesn't exist")
        }
    })
}

deleteBtn.addEventListener('click', deletePost)


function updatePost() {
    let id = prompt("Enter the post's id you want to update")
    
    if (id === "" || id === null){
        return
    }

    let newTitle = prompt("New title:")
    let newBody = prompt("New description:")

    let updatedData = {
        title: newTitle,
        body: newBody
    }

    fetch('http://localhost:3000/posts/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(function(response) {
        if (response.ok) {
            alert("Post has been updated!")
            window.location.reload()
        } 
        else {
            alert("Error with updating.")
        }
    })
}

updateBtn.addEventListener('click', updatePost)