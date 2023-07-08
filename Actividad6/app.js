function agregarActividad() {
    var actividad = document.getElementById("actividad").value;
    var fecha = document.getElementById("fecha").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            actualizarTabla();
        }
    };
    xhr.open("POST", "agregar_actividad.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("actividad=" + actividad + "&fecha=" + fecha);
}

function actualizarTabla() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var registros = JSON.parse(this.responseText);
            var tabla = document.getElementById("tabla");
            tabla.innerHTML = "";
            for (var i = 0; i < registros.length; i++) {
                var fila = tabla.insertRow(-1);
                fila.insertCell(0).innerHTML = registros[i].actividad;
                fila.insertCell(1).innerHTML = registros[i].fecha;
                fila.insertCell(2).innerHTML = '<button onclick="modificarRegistro(' + registros[i].id + ')">Modificar</button>';
                fila.insertCell(3).innerHTML = '<button onclick="eliminarRegistro(' + registros[i].id + ')">Eliminar</button>';
            }
        }
    };
    xhr.open("GET", "obtener_registros.php", true);
    xhr.send();
}

function modificarRegistro(id) {
    var actividad = prompt("Ingresa la nueva actividad:");
    var fecha = prompt("Ingresa la nueva fecha (YYYY-MM-DD):");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            actualizarTabla();
        }
    };
    xhr.open("POST", "modificar_registro.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id + "&actividad=" + actividad + "&fecha=" + fecha);
}

function eliminarRegistro(id) {
    if (confirm("¿Estás seguro de que quieres eliminar este registro?")) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                actualizarTabla();
            }
        };
        xhr.open("POST", "eliminar_registro.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("id=" + id);
    }
}
