<?php

    $conex = mysqli_connect("localhost","root","","tienda_online_acord2");

    if ($conex) {
        echo 'Conectado exitosamente a la Base de Datos';
    } else {
        echo 'no se a podido conectar a la Base de Datos';
    }
?>


