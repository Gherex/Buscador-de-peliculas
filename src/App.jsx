import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import { Movies } from './components/Movies';

function App() {

  const movies = responseMovies.Search;

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
        <Movies movies={movies}/>    
      </main>
    </div>
  )
}

export default App
