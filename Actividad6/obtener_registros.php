<?php
// Conectar a la base de datos
$conexion = mysqli_connect("servidor", "usuario", "contraseña", "basededatos");

// Obtener los registros de la base de datos
$resultado = mysqli_query($conexion, "SELECT * FROM actividades");

// Crear un arreglo con los registros
$registros = array();
while ($fila = mysqli_fetch_assoc($resultado)) {
    $registros[] = $fila;
}

// Devolver el arreglo en formato JSON
echo json_encode($registros);

// Cerrar la conexión
mysqli_close($conexion);
?>
