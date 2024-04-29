import React from "react";
import { useForm } from "react-hook-form";

const AgregarPelicula = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      const movies = JSON.parse(localStorage.getItem("movies")) || [];
      const newMovie = { ...data, id: Date.now() };
      movies.push(newMovie);
      localStorage.setItem("movies", JSON.stringify(movies));
      reset();
      const event = new Event("moviesUpdated");
      document.dispatchEvent(event);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre:</label>
        <input type="text" id="name" {...register("name", { required: true, minLength: 2, maxLength: 50 })} className={`form-control ${errors.name ? "is-invalid" : ""}`} />
        {errors.name && errors.name.type === "required" && <div className="invalid-feedback">El nombre es requerido</div>}
        {errors.name && errors.name.type === "minLength" && <div className="invalid-feedback">El nombre debe tener al menos 2 caracteres</div>}
        {errors.name && errors.name.type === "maxLength" && <div className="invalid-feedback">El nombre no puede tener más de 50 caracteres</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Descripción:</label>
        <textarea id="description" {...register("description", { required: true, minLength: 10, maxLength: 200 })} className={`form-control ${errors.description ? "is-invalid" : ""}`}></textarea>
        {errors.description && errors.description.type === "required" && <div className="invalid-feedback">La descripción es requerida</div>}
        {errors.description && errors.description.type === "minLength" && <div className="invalid-feedback">La descripción debe tener al menos 10 caracteres</div>}
        {errors.description && errors.description.type === "maxLength" && <div className="invalid-feedback">La descripción no puede tener más de 200 caracteres</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="genre" className="form-label">Género:</label>
        <select id="genre" {...register("genre", { required: true })} className={`form-select ${errors.genre ? "is-invalid" : ""}`}>
          <option value="">Seleccionar género</option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Infantil">Infantil</option>
        </select>
        {errors.genre && <div className="invalid-feedback">El género es requerido</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="imageUrl" className="form-label">URL de la Imagen:</label>
        <input type="url" id="imageUrl" {...register("imageUrl", { required: true })} className={`form-control ${errors.imageUrl ? "is-invalid" : ""}`} />
        {errors.imageUrl && <div className="invalid-feedback">La URL de la imagen es requerida</div>}
      </div>
      <button type="submit" className="btn btn-primary mb-3">Agregar Película</button>
    </form>
  );
};

export default AgregarPelicula;
