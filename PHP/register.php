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
     // Insertar nuevo usuario
    $query = $conexion->prepare("INSERT INTO usuario (Nombre_usuario, Apellido_usuario, email_usuario, Contraseña_usuario, rol_id) VALUES (?, ?, ?, ?, ?)");
    $rol_id = 2; // Supongamos que 2 es el rol de cliente
    $query->bind_param('ssssi', $nombre, $apellido, $email, $password, $rol_id);

    if ($query->execute()) {
        echo "Registro exitoso. Ahora puedes iniciar sesión.";
    } else {
        echo "Error al registrar el usuario: " . $conexion->error;
    }

    $query->close();
    $conexion->close();
}
?>

   
