import AnotherComponent from "./AnotherComponent";

function MyComponent({ titulo, imgUrl }) {
  const texto = `Haz seleccionado a: ${titulo}`;
  console.log(imgUrl);
  return (
    <>
        <h1>{titulo}</h1>
        <img src={imgUrl} />
        {
          titulo ? <AnotherComponent subtext={texto} /> : <p>Haz Click para mostrar el logo</p>
        }
        
    </>
  )

}

export default MyComponent;
