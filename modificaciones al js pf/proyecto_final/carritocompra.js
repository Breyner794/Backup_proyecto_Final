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
    const offcanvas = document.querySelector('.offcanvas-body');
    const itemproductos = document.querySelector('.item-productos');

    let todoproductos = [];

    itemproductos.addEventListener('click', e => {
        console.log(e.target.classList.contains('btn-outline-success'));
    });
});