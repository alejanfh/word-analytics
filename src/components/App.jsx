import { useState } from 'react'

import Header from './Header'
import Main from './Main'
import Textarea from './Textarea'
import Stats from './Stats'
import Footer from './Footer'

function App() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  })

  return (
    <>
      <Header />

      <Main>
        <Textarea setStats={setStats} />
        <Stats stats={stats} />
      </Main>

      <Footer />
    </>
  )
}

export default App
