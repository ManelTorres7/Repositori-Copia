<?php

    include 'con_db.php';

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $passwordd = $_POST['passwordd'];

    $query = "INSERT INTO tabla_usuarios(nombre, correo, passwordd)
              VALUES ('$nombre','$correo','$passwordd')";

    $ejecutar = mysqli_query($conexion, $query);

?>