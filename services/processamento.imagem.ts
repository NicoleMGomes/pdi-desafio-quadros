import Jimp from 'jimp'

export function aplicaEfeitoImagem(efeito: string, url: string) {
  console.log(url)
  //TODO: ler da url recebida: ex: blob:http://localhost:3000/c89ddaaf-d5a0-4ace-ac1c-c4c95aaf3335
  // está lendo de um arquivo que criei na raiz do projeto
  Jimp.read('glasses - Copia.png')
    .then((image) => {
      // Do stuff with the image.
      definirEfeito(efeito, image)
    })
    .catch((err) => {
      console.log('error ', err)

      // Handle an exception.
    })
}

function definirEfeito(efeito: string, image: any) {
  if (efeito.match('espver') !== null) {
    console.log('aplicando efeito espelhamento vertical')
    espelhamentoVertical(image)
  } else if (efeito.match('esphor') !== null) {
    console.log('aplicando efeito espelhamento horizontal')
    espelhamentoHorizonal(image)
  } else if (efeito.match('rotaci') !== null) {
    console.log('aplicando efeito rotacionamento')
    rotacionamento(image, 90)
  } else if (efeito.match('deshor') !== null) {
    console.log('aplicando efeito deslocamento horizontal')
    deslocamento(image, 10, 0)
  } else if (efeito.match('redime') !== null) {
    console.log('aplicando efeito redimensionamento')
    redimensionamento(image, image.bitmap.width, image.bitmap.height)
  } else {
    console.log('nenhum efeito cadastrado recebido')
  }
}

export function redimensionamento(imagem: any, sizeX: any, sizeY: any): any {
  //exibe os valores de rgb da cor do pixel x: 393, y: 827
  console.log('red: ', imagem.bitmap.data[imagem.getPixelIndex(393, 827)])
  console.log('green: ', imagem.bitmap.data[imagem.getPixelIndex(393, 827) + 1])
  console.log('blue: ', imagem.bitmap.data[imagem.getPixelIndex(393, 827) + 2])

  const image = imagem
  const resultImage = null //ImageFactory.buildEmptyImage(image)
  transform(image, resultImage, [
    [1 / sizeX, 0, 0],
    [0, 1 / sizeY, 0],
    [0, 0, 1],
  ])
  return resultImage
}

export function espelhamentoHorizonal(input: any): any {
  const image = input
  const resultImage = null //ImageFactory.buildEmptyImage(image)
  transform(image, resultImage, [
    [-1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
  return resultImage
}

export function espelhamentoVertical(input: any): any {
  const image = input
  const resultImage = null //ImageFactory.buildEmptyImage(image)
  transform(image, resultImage, [
    [1, 0, 0],
    [0, -1, 0],
    [0, 0, 1],
  ])
  return resultImage
}

export function rotacionamento(input: any, angle: any): any {
  const image = input
  const resultImage = null //ImageFactory.buildEmptyImage(image)
  transform(image, resultImage, [
    [Math.cos(toRad(angle)), Math.sin(toRad(angle)), 0],
    [-Math.sin(toRad(angle)), Math.cos(toRad(angle)), 0],
    [0, 0, 1],
  ])
  return resultImage
}

export function deslocamento(input: any, x: any, y: any): any {
  const image = input
  const resultImage = null //ImageFactory.buildEmptyImage(image)
  transform(image, resultImage, [
    [1, 0, -x],
    [0, 1, -y],
    [0, 0, 1],
  ])
  return resultImage
}

function transform(image: any, resultImage: any, kernel: any) {
  for (let c = 0; c < image.getChannelCount(); c++) {
    for (let x = 0; x < image.getWidth(); x++) {
      for (let y = 0; y < image.getHeight(); y++) {
        applyKernel(image, resultImage, kernel, c, x, y)
      }
    }
  }
}

function applyKernel(
  image: any,
  resultImage: any,
  kernel: any,
  channel: any,
  x: any,
  y: any
) {
  const halfX = image.getWidth() / 2
  const halfY = image.getHeight() / 2
  const tmpX = x - halfX
  const tmpY = y - halfY
  let newX = Math.round(
    tmpX * kernel[0][0] + tmpY * kernel[0][1] + 1 * kernel[0][2]
  )
  let newY = Math.round(
    tmpX * kernel[1][0] + tmpY * kernel[1][1] + 1 * kernel[1][2]
  )
  newX += halfX
  newY += halfY
  // Pixel position is right
  if (
    newX < image.getWidth() &&
    newY < image.getHeight() &&
    newX >= 0 &&
    newY >= 0
  ) {
    resultImage.set(channel, x, y, image.get(channel, newX, newY))
  }
}

function toRad(Value: any) {
  return (Value * Math.PI) / 180
}
