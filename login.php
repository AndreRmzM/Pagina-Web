<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email_usuario'];
    $password = $_POST['contrasena_usuario'];

    // Conexión a la base de datos
    $conexion = new mysqli('localhost', 'root', '', 'pasteleria_k&a');

    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }
     // Validar credenciales
    $query = $conexion->prepare("SELECT * FROM usuario WHERE email_usuario = ?");
    $query->bind_param('s', $email);
    $query->execute();
    $resultado = $query->get_result();

    if ($resultado->num_rows > 0) {
        $user = $resultado->fetch_assoc();
        // Verificar la contraseña
        if (password_verify($password, $user['Contraseña_usuario'])) {
            // Usuario válido
  header("Location: index.html");
            die();
        } else {
            // Contraseña incorrecta
            echo "Correo o contraseña incorrectos.";
        }
    } else {
        // Usuario no encontrado
        echo "Correo o contraseña incorrectos.";
    }

    $query->close();
    $conexion->close();
}
?>
