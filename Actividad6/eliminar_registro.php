<?php
// Conectar a la base de datos
$conexion = mysqli_connect("servidor", "usuario", "contraseña", "basededatos");

// Obtener el ID del registro a eliminar
$id = $_POST["id"];

// Eliminar el registro de la base de datos
mysqli_query($conexion, "DELETE FROM actividades WHERE id=$id");

// Cerrar la conexión
mysqli_close($conexion);
?>
