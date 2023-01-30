<?php

session_start();
include 'lib/config.php';

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
    <title>Bienvenido a REDSOCIAL</title>
</head>
<body>
    
    <form action="" method="POST">
        <input type="text" placeholder="Usuario" name="usuario" pattern="[A-Za-z_-0-9]{1,20}"><br><br>
        <input type="password" placeholder="Contraseña" name="contrasena" pattern="[A-Za-z_-0-9]{1,20}"><br><br>
        <input type="submit" name="login" value="Entrar"><br><br>
        <a href="">Olvidé mi contraseña</a><br>
        <a href="registro.php">Registrarme en REDSOCIAL</a>
    </form>

    <?php

    if(isset($_POST['login']))
    {
        $usuario = ($_POST['usuario']); //mysql_real_escape_string
        $usuario = strip_tags($_POST['usuario']);
        $usuario = trim($_POST['usuario']);

        $contrasena = (md5($_POST['contrasena'])); //mysql_real_escape_string
        $contrasena = strip_tags(md5($_POST['contrasena'])) ;
        $contrasena = trim(md5($_POST['contrasena'])) ;

        //$usuario=$_POST['usuario'];
        //$contrasena=$_POST['contrasena'];
        

        

        //$query = mysql_query("SELECT * FROM usuarios WHERE usuario = '$usuario' AND contrasena = '$contrasena'");
        $query = $conexion->query("SELECT * FROM usuarios WHERE usuario = '$usuario' AND contrasena = '$contrasena'");

        $contar = mysqli_num_rows($query);
        //$consulta="SELECT*FROM usuarios where usuario='$usuario' and contrasena='$contrasena'";
        //$resultado=mysqli_query($conexion,$consulta);
        //$filas=mysqli_num_rows($resultado);


         if($contar == 1)
         {
             while($row=mysqli_fetch_array($query))
             {
                 if($usuario = $row['usuario'] && $contrasena = $row['contrasena'])
                 {
                     $_SESSION['usuario'] = $row['usuario'];
                     $_SESSION['id'] = $row['id_use'];
                     $_SESSION['avatar'] = $row['avatar'];
                     $_SESSION['nombre'] = $row['nombre'];

                     header('Location: index.php');
                 }
             }
         }else { echo 'Datos incorrectos';}


        //if($filas) 
        //{
        //    $SESSION['usuario'] = $row['usuario'];
        //    $SESSION['id'] = $row['id_use']; // $row['id_use']; ??
        //    $SESSION['avatar'] = $row['avatar'];
        //    $SESSION['nombre'] = $row['nombre'];

        //    //header('Location: index.php');
        //}else{
        //    echo 'Datos incorrectos';
        //}
        //// mysqli_free_result($resultado);
        //// mysqli_close($conexion);
        




    }


    

    

    ?>

</body>
</html>