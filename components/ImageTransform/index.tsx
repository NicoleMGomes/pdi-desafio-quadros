import React, { useState } from 'react'
import { api } from '../../services/api'
import UploadInput from '../UploadInput'
import { Container } from './styles'

const ImageTransform: React.FC = () => {
  const [url, setUrl] = useState<string>()
  const [efeito, setEfeito] = useState('espelhar_verticalmente')
  const [formData, setFormData] = useState<FormData>()
  const [urlOutput, setUrlOutput] = useState<string>()

  function onImageUpload(formData: FormData, imageFile: File) {
    setUrl(URL.createObjectURL(imageFile))
    setFormData(formData)
  }

  function onChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setEfeito(e.target.value)
  }

  async function submitImage() {
    formData?.append('efeito', efeito)

    const { data } = await api.post<{ url: string }>(
      '/api/processamento-imagem',
      formData,
      {
        headers: { 'content-type': 'multipart/form-data' },
      }
    )
    setUrlOutput(data.url)
  }

  return (
    <Container>
      <UploadInput onImageUpload={onImageUpload} maxFiles={1} />

      <select id="opcao" name="select" onChange={(e) => onChangeSelect(e)}>
        <option value="espelhar_verticalmente">Espelhar verticalmente</option>
        <option value="espelhar_horizontalmente">
          Espelhar horizontalmente
        </option>
        <option value="deslocar_horizontalmente">
          Deslocar horizontalmente
        </option>
        <option value="aumentar">Aumentar</option>
        <option value="reduzir">Reduzir</option>
        <option value="rotacionar">Rotacionar</option>
      </select>

      <button onClick={submitImage} disabled={!url}>
        submit
      </button>
      <div>
        <img
          src={url || ''}
          height={200}
          width={200}
          style={{ display: url ? 'initial' : 'none' }}
        ></img>
        <img
          src={urlOutput || ''}
          height={200}
          width={200}
          style={{ display: urlOutput ? 'initial' : 'none' }}
        ></img>
      </div>
    </Container>
  )
}

export default ImageTransform
