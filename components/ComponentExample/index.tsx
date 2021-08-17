import React, { useState } from 'react'
import UploadInput from '../UploadInput'
import { Container } from './styles'

const ComponentExample: React.FC = () => {
  const [url, setUrl] = useState<string>()

  function onImageUpload(formData: FormData, imageFile: File) {
    // TODO: aplicar efeito na imagem
    console.log(formData)
    setUrl(URL.createObjectURL(imageFile))
  }

  return (
    <Container>
      <UploadInput onImageUpload={onImageUpload} maxFiles={1} />

      <select name="select">
        <option value="valor1">Espelhamento vertical</option>
        <option value="valor1">Espelhamento horizonal</option>
        <option value="valor1">Deslocamento horizonal</option>
        <option value="valor1">Redimensionamento</option>
        <option value="valor1">Rotacionamento</option>
      </select>

      <div>
        <img src={url || ''} height={200} width={200}></img>
        <img src={url || ''} height={200} width={200}></img>
      </div>
    </Container>
  )
}

export default ComponentExample
