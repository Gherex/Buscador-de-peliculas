import './App.css'
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
import { useSearch } from './hooks/useSearch';

function App() {
  const { search, updateSearch, error, checkSubmit } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });
  
  function handleChange(event) {
    updateSearch(event.target.value);
  }

  function handleSubmit (event) {
    event.preventDefault();
    checkSubmit(event);
    getMovies();
  }
  

  return (
    <div className='app-container'>

      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" value={search} onChange={handleChange} placeholder='Buscar...'/>
          <button type="submit">🔎</button>
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando ...</p> : <Movies movies={movies}/>
        }    
      </main>

    </div>
  )
}

export default App
