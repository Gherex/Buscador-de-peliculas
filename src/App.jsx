import './App.css'

function App() {

  return (
    <div className='app-container'>

      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input placeholder='Buscar...'/>
          <button type="submit">🔎</button>
        </form>
      </header>

      <main>
        Aquí irán los resultados
      </main>

    </div>
  )
}

export default App
