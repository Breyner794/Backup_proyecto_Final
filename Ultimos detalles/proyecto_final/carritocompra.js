// const infoproducto = document.querySelector('.informacionproducto')
// const offcanvas = document.querySelector('.offcanvas-body')

// // ============================LISTA GENERAL DE PRODUCTOS================================//

// const itemproductos = document.querySelector('.item-productos')

// // variables de arreglo=================================================================

// let todoproductos =[]

// itemproductos.addEventListener('click', e =>{

//     console.log(e.target)

// })

document.addEventListener('DOMContentLoaded', () => {
  const infoproducto = document.querySelector('.informacionproducto');
  const rowproduct = document.querySelector('.row-product');
  const itemproductos = document.querySelector('.item-productos');

  let todoproductos = [];

  itemproductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-outline-success')) {
      const producto = e.target.parentElement;
      const infoproducto = {
        quantity: 1,
        title: producto.querySelector('h5').textContent,
        price: producto.querySelector('span').textContent,
      };

      todoproductos = [...todoproductos, infoproducto];

      mostrarhtml();
    }
  });

  const mostrarhtml = () => {
    todoproductos.forEach((producto) => {
      const containerproducto = document.createElement('div');
      containerproducto.classList.add('car-product');

      containerproducto.innerHTML = `
                <div class="card" style="width: 21rem;">
                <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <span class="cantidad">${producto.quantity}</span><br>
                <span class="precio">${producto.price}</span><br>

            `;
      rowproduct.append(containerproducto);
    });
  };
});
