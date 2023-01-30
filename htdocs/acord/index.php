<?php

    require 'config/database.php';
    $db = new Database();
    $con = $db->conectar();

    $sql = $con->prepare("SELECT id, nombre, precio FROM productos WHERE activos=1");
    $sql->execute();
    $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <title>Document</title>
</head>
<body>

    <header>
        <h1>Acord</h1>
        <div class="user">
            <p>Registarse</p>
            <p>/</p>
            <p>Iniciar Sesion</p>
        </div>
    </header>

    <section class="little_menu">
        <div class="upload">
            <p>Subir Producto +</p>
        </div>
        <div class="search">
            <label for="buscar">Buscar Productos</label><input id="buscar" type="search">
        </div>
    </section>
    
    <section class="central">
        <aside class="categories">
            <div>Deporte</div>
            <div>Casa</div>
            <div>Videojuegos</div>
            <div>Moda</div>
            <div>Bebes</div>
            <div>Ocio</div>
            <div>Cocina</div>
            <div>Jardín</div>
            <div>Libros</div>
            <div>Arte</div>
        </aside>

        <div class="products">
            
            <?php foreach ($resultado as $row) { ?>
            <article id="1 Barcelona SagradaFamilia Deporte Futbol Hombre Nuevo 32">
                <img src="" alt="">
                <div>
                    <p class="titele">Titulo</p>
                    <p class="localidad-zona">BARCELONA, Sagrada Familia...</p>
                    <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vel voluptate alias laborum fugiat sunt dolores deleniti veritatis molestias quos amet nobis, tempora reiciendis sapiente aperiam. Sequi quisquam soluta saepe quo libero repudiandae voluptatibus, dolore, porro non, modi at temporibus vero dicta asperiores sapiente in a. Perspiciatis quae cum quaerat.
                    <span class="Precio">32$</span>

                    </p>
                    <p class="infomation">Más información...</p>
                </div>
            </article>
            <?php } ?>

        </div>
    </section>
    
</body>
</html>