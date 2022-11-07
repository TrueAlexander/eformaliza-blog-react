import posts from '../../posts'

const blogBox = () => {

  localStorage.clear()
  const postsToRender = posts()

  const container = document.querySelector('.blogBox__row')
 
  postsToRender.forEach((post) => {
    container.insertAdjacentHTML('beforeend', `
      <div class="blogBox__item">
        <div class="blogBox__card">
          <div 
            class="blogBox__image"
            style="background-image: url(${post.imageUrl});"
          >
          </div>
          <div class="blogBox__post">
            <div class="blogBox__date">${post.date}</div>
            <div class="blogBox__subtitle">${post.title}</div>
            <div class="blogBox__text">${post.textShort}</div>
            <button id=${post.id} class="blogBox__button btn">
              <a href="post.html">
                Leia mais
              </a>
            </button> 
          </div>
        </div>
      </div>
    `)
  })

  const allButtons = document.querySelectorAll('.blogBox__button')

  allButtons.forEach(button => button.addEventListener('click', (e) => {
    const id = e.target.parentNode.id
    console.log(id)
    localStorage.setItem('id', id)
  })
)}

export default blogBox