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




// Отримання списку постів 
async function getPosts() {
    try { 
    }
          catch (error) { 
      console.error(error); 
    } 
  } 

async function newGetPosts(){
  let postsContainer = document.getElementById("postsContainer")
  let boxPost = document.querySelector(".box-post")
  let url = await fetch('https://jsonplaceholder.typicode.com/posts')
  let varResponse = await url.json()
  console.log(varResponse)
  varResponse.forEach(article => {
    let bodyID = document.createElement("li")
    let bodyTitle = document.createElement("li")
    let bodyArticle = document.createElement("li")
    bodyID.textContent = article.id
    bodyArticle.textContent = article.body
    bodyTitle.textContent = article.title
    boxPost.append(bodyID)
    boxPost.append(bodyTitle)
    boxPost.append(bodyArticle)
    postsContainer.appendChild(boxPost)
  })
}

newGetPosts()