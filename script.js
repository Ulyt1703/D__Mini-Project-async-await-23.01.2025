/* 1. Використовуйте Node.js для створення сервера. 
2. Використовуйте json-server для створення серверу та обробки запитів. 
3. Використовуйте пакетний менеджер npm для управління залежностями та інсталяції необхідних пакетів. Для збирання проєкту ініціалізуйте новий проєкт та встановіть Parcel. 
4. Використовуйте шаблонізатор Handlebars для відображення сторінок блогу. 
5. Використовуйте bd.json для зберігання даних про пости та коментарі. 
6. Реалізуйте механізм пагінації для перегляду списку постів. Рекомендується використати будь яку бібліотеку. 
7. Застосуйте асинхронні функції та async/await та try…catch для обробки асинхронних операцій, таких як завантаження та збереження даних.  
8. Використовуйте REST API для взаємодії з бекендом та виконання CRUD-операцій. 
9. Застосуйте AJAX для асинхронного завантаження даних без перезавантаження сторінки. 
10. Забезпечте можливість користувачам додавати, оновлювати та видаляти свої пости. 
11. Додайте можливість коментувати пости та відображати коментарі на сторінці поста. 
12. Додайте функцію пошуку для знаходження постів за ключовими словами.
 */




let boxPost = document.querySelector('.box-post')

async function getAllPosts() {
    try {
        let response = await fetch('http://localhost:3000/posts')
        let posts = await response.json()

        boxPost.innerHTML = ''

        posts.forEach(post => {
            let div = document.createElement('div')
            let liId = document.createElement('li')
            let liTitle = document.createElement('li')
            let liBody = document.createElement('li')

            liId.textContent = `ID: ${post.id}`
            liTitle.textContent = post.title
            liBody.textContent = post.body

            div.style.marginBottom = '20px'
            div.style.borderBottom = '1px solid white'
            liTitle.style.fontWeight = 'bold'
            liTitle.style.fontSize = '18px'

            div.append(liId, liTitle, liBody)
            boxPost.append(div)
        })
    } catch (error) {
        console.error(error)
    }
}

getAllPosts()