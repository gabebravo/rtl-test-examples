import { render } from '@testing-library/react'
import { OrderDetailsProvider } from '../context/OrderDetails'

const providerWrapper = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { providerWrapper as render }