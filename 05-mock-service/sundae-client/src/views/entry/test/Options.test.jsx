import { render, screen, prettyDOM } from '@testing-library/react' 
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