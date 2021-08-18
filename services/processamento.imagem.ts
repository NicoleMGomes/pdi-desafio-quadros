export function redimensionamento(input: any, sizeX: any, sizeY: any): any {
  const image = input
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
