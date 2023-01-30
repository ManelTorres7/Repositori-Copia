<?php

    include 'con_db.php';

    $nombre = $_POST['nombre'];
    $defi = $_POST['defi'];
    $precio = $_POST['precio'];
    $ciudad = $_POST['ciudad'];
    
    $query = "INSERT INTO products(nombre, defi, precio, ciudad)
              VALUES ('$nombre','$defi','$precio','$ciudad')";

    $ejecutar = mysqli_query($conex, $query);
    
    if ($ejecutar) {
        echo '
            <script>
                alert("El Producto se a Subido correctamente");
                window.location = "../index.php";
            </script>
        ';
    } else {
        echo 'Intentalo de nuevo';
    }

    mysqli_close($conex);
?>