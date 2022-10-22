import Form from './components/Form'
import Home from './components/Home'

function App () {
  return (
    <main className='flex min-h-screen flex-col gap-5 bg-[#ff7a7a] bg-hero-pattern px-7 py-10 md:flex-row md:items-center'>
      <Home />
      <Form />
    </main>
  )
}

export default App
