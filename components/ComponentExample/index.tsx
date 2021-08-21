import React, { useState } from 'react'
import UploadInput from '../UploadInput'
import { Container } from './styles'

const ComponentExample: React.FC = () => {
  const [url, setUrl] = useState<string>()
  const [efeito, setEfeito] = useState('espver')

  function onImageUpload(formData: FormData, imageFile: File) {
    // TODO: aplicar efeito na imagem
    console.log(formData)
    setUrl(URL.createObjectURL(imageFile))
  }

  function onChangeSelect(e: any) {
    console.log(e.target.value)
    setEfeito(e.target.value)
  }

  async function submitImage() {
    const response = await fetch('/api/processamento-imagem', {
      method: 'POST',
      body: JSON.stringify({ efeito, url }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <Container>
      <UploadInput onImageUpload={onImageUpload} maxFiles={1} />

      <select id="opcao" name="select" onChange={(e) => onChangeSelect(e)}>
        <option value="espver">Espelhamento vertical</option>
        <option value="esphor">Espelhamento horizonal</option>
        <option value="deshor">Deslocamento horizonal</option>
        <option value="redime">Redimensionamento</option>
        <option value="rotaci">Rotacionamento</option>
      </select>

      <button onClick={submitImage}>submit</button>
      <div>
        <img src={url || ''} height={200} width={200}></img>
        <img src={url || ''} height={200} width={200}></img>
      </div>
    </Container>
  )
}

export default ComponentExample
