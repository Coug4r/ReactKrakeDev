import './TarjetaNoticias.css';
function TarjetaNoticias({ noticia }) {
  return (
    <div className="tarjeta">
      <h2>{noticia.title}</h2>
      <p>{noticia.body}</p>
    </div>
  );
}
export default TarjetaNoticias;