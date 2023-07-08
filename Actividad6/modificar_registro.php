<?php
// Conectar a la base de datos
$conexion = mysqli_connect("servidor", "usuario", "contraseña", "basededatos");

// Obtener los datos de la solicitud
$id = $_POST["id"];
$actividad = $_POST["actividad"];
$fecha = $_POST["fecha"];

// Actualizar el registro en la base de datos
mysqli_query($conexion, "UPDATE actividades SET actividad='$actividad', fecha='$fecha' WHERE id=$id");

// Cerrar la conexión
mysqli_close($conexion);
?>
