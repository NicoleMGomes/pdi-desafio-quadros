import React, { useState } from 'react'
import { api } from '../../services/api'
import UploadInput from '../UploadInput'
import {
  Container,
  ContainerImages,
  ContainerLoader,
  ContainerOpcoes,
  SelectEfeito,
} from './styles'
import ClipLoader from 'react-spinners/ClipLoader'

const ImageTransform: React.FC = () => {
  const [url, setUrl] = useState<string>()
  const [efeito, setEfeito] = useState('espelhar_verticalmente')
  const [formData, setFormData] = useState<FormData>()
  const [urlOutput, setUrlOutput] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)

  function onImageUpload(formData: FormData, imageFile: File) {
    setUrl(URL.createObjectURL(imageFile))
    setFormData(formData)
  }

  function onChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setEfeito(e.target.value)
  }

  async function submitImage() {
    formData?.append('efeito', efeito)
    setLoading(true)

    try {
      const { data } = await api.post<{ url: string }>(
        '/api/processamento-imagem',
        formData,
        {
          headers: { 'content-type': 'multipart/form-data' },
        }
      )

      setUrlOutput(data.url)
      setLoading(false)
    } catch {
      setLoading(false)
      alert('Ocorreu um erro durante o processamento da requisição')
    }
  }

  return (
    <Container>
      <UploadInput onImageUpload={onImageUpload} maxFiles={1} />

      <ContainerOpcoes>
        <SelectEfeito
          id="opcao"
          name="select"
          onChange={(e) => onChangeSelect(e)}
        >
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
        </SelectEfeito>

        <button onClick={submitImage} disabled={!url}>
          submit
        </button>
      </ContainerOpcoes>

      <ContainerImages loading={loading}>
        <ContainerLoader>
          <ClipLoader color={'#0F528C'} loading={loading} size={150} />
        </ContainerLoader>
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
      </ContainerImages>
    </Container>
  )
}

export default ImageTransform
