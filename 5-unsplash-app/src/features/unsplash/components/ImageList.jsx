/* eslint-disable react/prop-types */
function ImageList({pics}) {
  return (
    <>
        {pics.length > 0 && <h2>Resultados de la B&uacute;squeda</h2>}
        <section className="container">
            {
                pics.length > 0 && (
                    <ul className="d-flex flex-wrap align-content-end list-unstyled">
                        {
                            pics.map( (pic) => (
                                <li className="flex-grow-1 li-gallery m-1" key={pic.id}>
                                    <img 
                                        src={pic.urls.regular} 
                                        alt={pic.slug} 
                                        className="img-thumbnail w-100 h-100 gallery-image" />
                                </li>
                            ))
                        }
                    </ul>
                )                
            }
        </section>
    </>
  )
}

export default ImageList