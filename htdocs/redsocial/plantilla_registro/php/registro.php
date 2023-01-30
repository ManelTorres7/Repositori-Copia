<?php

    include 'con_db.php';

    $usuario = $_POST['usuario'];
    $edad = $_POST['edad'];
    $contrasena = $_POST['contrasena'];

    $query = "INSERT INTO plantilla_registro(usuario, edad, contrasena)
              VALUES ('$usuario','$edad','$contrasena')";

    $ejecutar = mysqli_query($conexion, $query);

?>