const lista = document.querySelector('#listado')

fetch('js/array.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>Fecha ${producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
                <p>Horario: ${producto.id}</p>
                <hr/>
            `
   
            lista.append(li)
        })
    })
