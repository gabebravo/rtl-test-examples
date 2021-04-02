import { render, screen } from '@testing-library/react' 
import Options from '../Options'

test('displays img for each scoop from service', () => {
  render(<Options optionType="scoops" />)

  // find images
  const scoopImages = screen.getAllByRole('img', { name: /scoop$/i }) // $ = end of string
  expect(scoopImages).toHaveLength(2)

  // confirm alt text of images
  const altText = scoopImages.map(elm => elm.altText)
  expect(altText).toEqual(['Vanilla scoop', 'Chocolate scoop'])
})