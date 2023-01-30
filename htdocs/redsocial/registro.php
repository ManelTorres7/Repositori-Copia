<?php
session_start();
include 'lib/config.php';

ini_set('error_reporting',0);

if(isset($_SESSION['usuario']))
{
    header("Location: index.php");
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php//Nombre de la red social?>Registro</title>
</head>
<body>

<form method="POST" action="">
        <h1>Suscribirse</h1>
        <input type="text" name="nombre" placeholder="Nombre completo" value="<?php echo $_POST['nombre']; ?>" required><br><br>
        <input type="email" name="email" placeholder="Email" value="<?php echo $_POST['email']; ?>" required><br><br>
        <input type="text" name="usuario" placeholder="Usuario" value="<?php echo $_POST['usuario']; ?>" required><br><br>
        <input type="password" name="contrasena" placeholder="Contraseña" required><br><br>
        <input type="password" name="repcontrasena" placeholder="Repita la contraseña" required><br><br>
        <input type="checkbox" name="check" required> Acepto los <a href="">términos y condiciones</a><br><br>
        <input type="submit" name="registrar">Registrarme</button>
    </form>

    
    <?php


if(isset($_POST['registrar'])) {

  
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$usuario = $_POST['usuario'];
$contrasena = (md5($_POST['contrasena']));
$repcontrasena = (md5($_POST['repcontrasena']));

//$comprobarusuario = mysql_query("SELECT usuario FROM usuarios WHERE usuario = '$usuario'");
//$comprobaremail = mysql_query("SELECT email FROM usuarios WHERE email = '$email'");

//if($comprobarusuario ) { echo "Nombre en uso"; } else {

    //if($comprobaremail ) { echo "Nombre Email en uso"; } else {

        if($contrasena != $repcontrasena) { echo "Contraseñas no coinciden";} else {

            $query = "INSERT INTO usuarios (nombre, email, usuario, contrasena, fecha_reg, avatar)
              VALUES ('$nombre','$email', '$usuario', '$contrasena', now(), 'defect.jpg')";

            $ejecutar = mysqli_query($conexion, $query);
            echo "Te registraste";


            //$insertar = mysql_query("INSERT INTO usuarios (nombre,email,usuario,contrasena,fecha_reg 
            //                         values ('$nombre','$email','$usuario','$contrasena',now())");
//
            //if($insertar) {echo "Te registraste";}
        //}
    //}

 header("Refresh: 2; url = login-seguro.php");

} 

}


?>
    
</body>
</html>