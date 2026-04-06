import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import AdicionarUsuario from '../components/AdicionarUsuario'
import Footer from '../components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Header/>
        <main>
          <AdicionarUsuario/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
