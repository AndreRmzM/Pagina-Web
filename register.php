<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre_usuario'];
    $apellido = $_POST['apellido_usuario'];
    $email = $_POST['email_usuario'];
    $password = $_POST['contrasena_usuario'];

    // Conexión a la base de datos
    $conexion = new mysqli('localhost', 'root', '', 'pasteleria_k&a');

    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

   
