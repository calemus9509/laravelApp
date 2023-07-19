var id = 0;

function registrar() {
    axios
        .post("producto", {
            nombre: txtNombre.value,
            cantidad: txtCantidad.value,
            precio: txtPrecio.value,
        })
        .then(function (response) {
            console.log(response);
            read();
            clear();
        })
        .catch(function (error) {
            console.log(error.response.data.errors);
            let errors = "";
            Object.values(error.response.data.errors).forEach((element) => {
                errors += `${element} <br>`;
            });
            errorMessage.innerHTML = `Error <br>${errors}`;
        });
}

function read(url = "producto") {
    axios
        .get(url)
        .then(function (response) {
            let datos = "";
            let lista = "";
            console.log(response.data);
            //trae todo los datos a la paginacion
            response.data.data.forEach((element, index) => {
                datos += `<tr onclick='loadData(${JSON.stringify(element)})'>`;
                datos += `<td>${index + 1}</td>`;
                datos += `<td>${element.nombre}</td>`;
                datos += `<td>${element.cantidad}</td>`;
                datos += `<td>${element.precio}</td>`;
                datos += `</tr>`;
            });
            //paginacion
            response.data.links.forEach((element) => {
                console.log(element);
                lista += `<td>
                <a class="pagina" onclick="read('${element.url}')">${element.label}</a>
                </td>`;
            });

            list.innerHTML = lista;
            tableBody.innerHTML = datos;

            //trae todo los datos sin la paginacion
            //  Object.values(response.data).forEach((element, index) => {
            //     datos += `<tr onclick='loadData(${JSON.stringify(element)})'>`;
            //     datos += `<td>${index + 1}</td>`;
            //     datos += `<td>${element.nombre}</td>`;
            //     datos += `<td>${element.cantidad}</td>`;
            //     datos += `<td>${element.precio}</td>`;
            //     datos += `</tr>`;
            // });
            // tableBody.innerHTML = datos;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function linkPaginate(url) {
    axios
        .get(url)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function loadData(producto) {
    this.id = producto.id;
    txtNombre.value = producto.nombre;
    txtCantidad.value = producto.cantidad;
    txtPrecio.value = producto.precio;
}

function update() {
    axios
        .put(`producto/${this.id}`, {
            id: this.id,
            nombre: txtNombre.value,
            cantidad: txtCantidad.value,
            precio: txtPrecio.value,
        })
        .then(function (response) {
            console.log(response);
            read();
            clear();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function deletes() {
    let respuesta = confirm("Seguro de eliminar el siguiente producto?");
    if (respuesta) {
        axios
            .delete(`producto/${this.id}`)
            .then(function (response) {
                console.log(response);
                read();
                clear();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

function clear() {
    txtNombre.value = "";
    txtCantidad.value = "";
    txtPrecio.value = "";
}

read();
