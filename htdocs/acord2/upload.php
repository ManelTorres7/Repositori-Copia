<?php require('./layout/header.php') ?>

<section class="section-login">
<form action="php/registro_products_be.php" method="POST" class="formulario_registro">
        <p>Subir Producto</p>
        <label for="nombre">Nombre del producto</label>
        <input type="text" name="nombre">
        <br>
        <label for="defi">Descripcion (200 palabras)</label>
        <input type="multi-line" name="defi">
        <br>
        <label for="precio">Precio</label>
        <input type="text" name="precio">
        <br>
        <label for="ciudad">Ubicación</label>
        <input type="text" name="ciudad">
        <br>
        <input type="submit" value="Entrar">
    </form>

</section>



</body>
</html>
