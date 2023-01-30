<?php

    $inc = include("php/con_db.php");
    if ($inc) {
        $consulta ="SELECT * FROM products";
        $resultado = mysqli_query($conex,$consulta);
        if ($resultado) {
            while($row = $resultado->fetch_array()) {
                $id = $row['id'];
                $nombre = $row['nombre'];
                $defi = $row['defi'];
                $precio = $row['precio'];
                $fecha_reg = $row['fecha_reg'];
                $ciudad = $row['ciudad'];
                ?>
                <article>
                    <img src="" alt="">
                    <div>
                        <h2 class="title"><?php echo $nombre; ?></h2>
                        <h3 class="ciudad"><?php echo $ciudad;?></h3>
                        <p class="description"><?php echo $defi; ?>
                        <span class="Precio"><?php echo $precio; ?></span>
                        </p>
                        <p class="information">Más información...</p>
                    </div>
                </article>
                <?php

            }
        }
    }

?>