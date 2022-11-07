import posts from './../../posts'
import { elementScrollIntoView } from "seamless-scroll-polyfill"
const placeholder = require("../../../images/placeholder.png")

const blogPost = () => {

  const container = document.querySelector('.blogPost .container')
  const id = localStorage.getItem("id")
  const allPosts = posts()

  const postToRender = allPosts[id]
  window.document.title = `${postToRender.title}`
  location.hash = postToRender.title
  container.insertAdjacentHTML('beforeend', 
  `
    <div class="post">
      <div class="post__title">
        <h2 class="title">${postToRender.title}</h2>
      </div>
      <div class="post__box">
        <div class="post__image">
          <img class="lazy" src=${placeholder} data-src=${postToRender.imageUrl} alt=${postToRender.title} />
        </div>
        <div class="post__text">${postToRender.textFull}</div>
      </div>
      <a class="post__btn btn" href="#home" title="Ir ao inicio">Ao inicio</a>
    </div>
  `)

  const postBtn = document.querySelector('.post__btn')

  postBtn.addEventListener('click', () => {
    const target = document.getElementById('home')
    elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
  })
}

export default blogPost