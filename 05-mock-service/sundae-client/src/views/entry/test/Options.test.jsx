import { render, screen } from '../../../test-utils/rtl-utils'
import Options from '../Options'

test('displays img for each scoop from service', async () => {
  render(<Options optionType="scoops" />)

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i }) // $ = end of string
  expect(scoopImages).toHaveLength(2)

  // // confirm alt text of images
  const altText = scoopImages.map(element => element.alt)
  expect(altText).toEqual(['Vanilla scoop', 'Chocolate scoop'])
})

test('displays img for each topping from service', async () => {
  render(<Options optionType="toppings" />)

  // find images
  const toppingImages = await screen.findAllByRole('img', { name: /topping$/i }) // $ = end of string
  expect(toppingImages).toHaveLength(3)

  // // // confirm alt text of images
  const altText = toppingImages.map(element => element.alt)
  expect(altText).toEqual(['M&Ms topping', 'Hot fudge topping', 'Cherries topping'])
})