document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'https://fakestoreapi.com';
    const productList = document.getElementById('productList');

    // Llamada a la API para obtener el listado de productos
    fetch(`${baseUrl}/products`)
        .then( response => response.json())
        .then( products => {
            // Iterar sobre los prouctos obtenidos
            products.forEach(product => {
                const productCard = createProductCard(product);
                productList.appendChild(productCard);
            });
        })
        .catch( error => {
            console.log('Error al obtener los productos');
        })
    
    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        card.innerHTML = `
            <div class="card">
                <div style="width:100%">
                    <img src="${product.image}" class="card-img-top" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Precio: ${product.price}</p>
                    <p class="card-text">Categoria: ${product.category}</p>
                    <button class="btn btn-primary">Agregar a Carrito</button>
                </div>
            </div>
        `;

        return card;
    }

})
