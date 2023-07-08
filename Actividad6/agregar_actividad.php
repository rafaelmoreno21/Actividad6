<?php
// Conectar a la base de datos
$conexion = mysqli_connect("servidor", "usuario", "contraseña", "basededatos");

// Obtener los datos de la solicitud
$actividad = $_POST["actividad"];
$fecha = $_POST["fecha"];

// Insertar el registro en la base de datos
mysqli_query($conexion, "INSERT INTO actividades (actividad, fecha) VALUES ('$actividad', '$fecha')");

// Cerrar la conexión
mysqli_close($conexion);
?>
