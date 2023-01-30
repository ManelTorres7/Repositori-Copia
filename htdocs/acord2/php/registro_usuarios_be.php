<?php

    include 'con_db.php';

    $user_ = $_POST['user_'];
    $email = $_POST['email'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $localidad = $_POST['localidad'];
    $passwordd = $_POST['passwordd'];
    
    $query = "INSERT INTO usuarios(user_, email, fecha_nacimiento, localidad, passwordd)
              VALUES ('$user_','$email', '$fecha_nacimiento', '$localidad', '$passwordd')";

    $ejecutar = mysqli_query($conex, $query);
    
    if ($ejecutar) {
        echo '
            <script>
                alert("Usuario almacenado correctamente");
                window.location = "../index.php";
            </script>
        ';
    } else {
        echo 'Intentalo de nuevo';
    }

    mysqli_close($conex);
?>