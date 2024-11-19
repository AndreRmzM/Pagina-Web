<?php
$servername = "localhost"; 
$username = "root";        
$password = "";            
$dbname = "pasteleria_k&a"; 

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>

