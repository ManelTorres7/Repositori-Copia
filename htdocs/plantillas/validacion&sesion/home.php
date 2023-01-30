<?php

    session_start();
    error_reporting(0);
    $varsesion = $_SESSION['usuario'];

    if($varsesion == null || $varsesion = '') {
        echo 'Usuario o ccontraseña incorrectos';
        die();
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Panel d eadministración</h1><br>
    <h2>Bienvenido <?php echo $_SESSION['usuario'] ?></h2>
    <a href="cerrar_sesion.php">Cerrar sesión</a>
</body>
</html>