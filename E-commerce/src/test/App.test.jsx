import { render, screen } from '@testing-library/react'
import App from '../App'
import { StoreProvider } from '../Context/Context'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
describe('App', () => {
  it('renders the App component', () => {
    render(
    <StoreProvider>
          <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </StoreProvider>

)
    
   
  })
})