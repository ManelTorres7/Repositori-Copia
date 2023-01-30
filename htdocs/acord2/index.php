<?php

    require('./layout/header.php')

?>


    <section class="little_menu">
        <div class="upload">
            <a href="upload.php"><p>Subir Producto +</p></a>
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
        
            <?php

            include("mostrar.php");

            ?>


        </div>
    </section>



    





    <!--<?php foreach ($resultado as $row) { ?>
            <article id="1 Barcelona SagradaFamilia Deporte Futbol Hombre Nuevo 32">
                <img src="" alt="">
                <div>
                    <p class="titele"><?php echo $id; ?></p>
                    <p class="localidad-zona">BARCELONA, Sagrada Familia...</p>
                    <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vel voluptate alias laborum fugiat sunt dolores deleniti veritatis molestias quos amet nobis, tempora reiciendis sapiente aperiam. Sequi quisquam soluta saepe quo libero repudiandae voluptatibus, dolore, porro non, modi at temporibus vero dicta asperiores sapiente in a. Perspiciatis quae cum quaerat.
                    <span class="Precio">32$</span>

                    </p>
                    <p class="infomation">Más información...</p>
                </div>
            </article>
            <?php } ?>
    -->
    
</body>
</html>