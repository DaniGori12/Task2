
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Selector from './components/selector'


function App() {

  return (
    <ChakraProvider>

      <Selector></Selector>

    </ChakraProvider>
  )
}

export default App
