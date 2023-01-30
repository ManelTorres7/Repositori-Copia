<?php

session_start();
include 'lib/config.php';
include 'lib/socialnetwork-lib.php';

if(!isset($_SESSION['usuario']))
{
    header("Location: login-seguro.php");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/estilos.css">
    <title>Document</title>
    
</head>
<body> 

    <?php echo Headerb ();?>

    <div class="contenido">

        <?php echo Side ();?>

        <div class="central">
            <div class="que_estas_pensando">
                <form action="" method="POST" enctype="multipart/form-data">
                    <p>¿Que estas pensando?</p>
                    <textarea name="publicacion" placeholder="¿Que estas pensando??" class="textarea" id="" cols="100" rows="10">
                    </textarea>
                    <br><br><br><br>

                    <input type="file" name="foto" id="file-1">
                    <label for="file-1"><span>Sube una foto</span></label><br><br>
                    <button type="submit" name="publicar">Publicar</button>
                </form>

                <?php

                if(isset($_POST['publicar']))
                {
                    $publicacion = $_POST['publicacion']; //mysqli_real_escape_string()

                    $result = mysqli_query($conexion,"SHOW TABLE STATUS WHERE `Name` = 'publicaciones'");
                    $data = mysqli_fetch_assoc($result);
                    $text_increment = $data["Auto_increment"];

                    $alea = substr(strtoupper(md5(microtime(true))), 0,12);
                    $code = $text_increment.$alea;

                    $type = 'jpg';
                    $rfoto = $_FILES['foto']['tmp_name'];
                    $name = $code.".".$type;

                    if(is_uploaded_file($rfoto))
                    {
                        $destino = "publicaciones/".$name;
                        $nombre = $name;
                        copy($rfoto, $destino);
                    }
                    else
                    {
                        $nombre = "";
                    }

                    $subir = mysqli_query($conexion,"INSERT INTO publicaciones (usuario,fecha,contenido,imagen,comentarios) values ('".$_SESSION['id']."
                    ',now(),'$publicacion','$nombre','1')");

                    //if($subir) {echo '<script>window.location="index.php"</script>';}
                }

                
                ?>

            </div>
        </div>

    </div>

    <script src="js/script.js"></script>
</body>
</html>