<?php

$conexion = mysqli_connect("localhost","root","","redsocial");

if ($conexion) {
    //echo 'Conectado correctamente a la base de datos';
} else {
    echo 'No se a podido conectar correctamente';
}

?>