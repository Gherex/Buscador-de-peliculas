import { useState, useEffect } from "react";

export function useSearch () {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);

  function checkSubmit (event) {
    event.preventDefault();
    if (search === '') {
      setError('No se puede buscar una pelicula vacía');
      return;
    }
  }

  useEffect(()=>{
  
    if (search === '') {
      setError(null);
      return;
    }

    if (search.match(/\d+\.|\,\d+/)) {
      setError('No se puede buscar una pelicula por año con números decimales');
      return;
    }

    if (search.match(/\-\d+/)) {
      setError('No se puede buscar peliculas por año con numero negativo')
      return;
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 carácteres');
      return;
    }

    setError(null);
  },[search])
  
  return { search, updateSearch, error, checkSubmit };
}