
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovieForm from "./components/AgregarPelicula.jsx";
import MovieList from "./components/ListaPelicula.jsx";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Películas</h1>
      <AddMovieForm />
      <MovieList />
    </div>
  );
}

export default App;