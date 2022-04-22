const lista = document.querySelector('#listado')

fetch('js/array.json')
    .then( (res) => res.json())
    .then( (data) => {
        
        data.forEach((producto) => {
            const div = document.createElement('div') 
            div.innerHTML = `
                <h4 class="promos">Salida/Destino:</h4>
                <h4 class="promos">${producto.salida}</h4>
                <p class="promos">Fecha: ${producto.fecha}</p>
                <p class="promos">Precio: ${producto.precio}</p>
                <p class="promos">Hora: ${producto.hora}</p>
                <button class="bt"> Consultar </button
                `
            lista.append(div)
        })
    })
