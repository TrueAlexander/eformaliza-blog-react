import './NewPost.scss'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { Link, useNavigate } from "react-router-dom"
import { useState, useCallback, useRef, useMemo } from 'react'
import axios from './../../utils/axios'


const NewPost = () => {

  //edit o publish new post
  const id = 0

  const [imageUrl, setImageUrl] = useState('')
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const isEditing = Boolean(id)
  const inputFileRef = useRef(null)
  const navigate = useNavigate()

  
  const onSubmit = async () => {
    if(title.length > 5) {
      if(text.length > 1000) {
        try {
          const fields = {
            title,
            imageUrl,
            text
          }

          // const { data } = isEditing 
          //    ? await axios.patch(`/posts/${id}`, fields) 
          //    : await axios.post('/posts', fields)
      
          // const _id = isEditing ? id : data._id
      
          // navigate(`/posts/${_id}`)

          const { data } = await axios.post('/posts', fields)

          console.log(data)

          navigate(`/`)


        } catch (err) {
          console.warn(err)
          alert('Erro! O post não foi criado!')
        }
      } else setMessage('O artigo é muito curto')     
    } else setMessage('O titulo é muito curto')
  }

  const addImage = async (event) => {
    try {
      const formData = new FormData()
      const file = event.target.files[0]
      formData.append('image', file)
      const { data } = await axios.post('/upload', formData)
      setImageUrl(data.url)
    } catch (err) {
      console.warn(err)
      alert('Erro! A imagem não foi carregada!')
    }
  }

  const removeImage = () => {
    setImageUrl('')
  }

  const editText = useCallback((value) => {
    setMessage('')
    setText(value)
  }, [])

  const editTitle = (e) => {
    setTitle(e.target.value)
    setMessage('')
  }

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '300px',
      autofocus: true,
      placeholder: 'Escreve o texto...',
      status: false,
      // autosave: {
      //   enabled: true,
      //   delay: 1000,
      // },
    }),
    [],
  )

  return (
    <div className='container newPost'>
      <button
        onClick={() => inputFileRef.current.click()}
        className='btn newPost__btn'
      >
        Carregar uma imagem
      </button>
      <input 
        ref={inputFileRef} 
        type="file" 
        onChange={addImage} 
        hidden 
      />
      {imageUrl && (
        <>
          <button
            className='btn'
            onClick={removeImage}
          >
            Apagar
          </button>
          <div className="newPost__image">
            <img   
              src={`https://blog-eformaliza-api.onrender.com${imageUrl}`} 
              alt="Uploaded" 
            />
          </div>
        </>
      )}
      <br />
      <br />
      <input
        placeholder="Titulo..."
        type="text"
        value={title}
        onChange={editTitle}
      />
      {/* <textarea 
        placeholder="Tags"
        // value={tags}
        // onChange={e => setTags(e.target.value)} 
      /> */}
      <SimpleMDE 
        className='editor newPost__editor'
        value={text} 
        onChange={editText} 
        options={options} 
      />
      <div>
        {message}
      </div>
      <div>
        <button 
          className='btn'
          onClick={onSubmit}
        >
          {isEditing ? 'Guardar' : 'Publicar'}
  
        </button>    
        <button className='btn'>
          <Link to="/">
            Cancelar
          </Link>
        </button>   
      </div>
    </div>
  )
}

export default NewPost