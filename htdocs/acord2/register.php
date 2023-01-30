<?php require('./layout/header.php') ?>

<a href="index.php">Inicio</a>
<section class="section-login">
    <form action="php/registro_usuarios_be.php" method="POST" class="formulario_registro">
        <p>Registrarse</p>
        <label for="nombre">Nombre de usuario</label>
        <input type="text" name="nombre">
        <br>
        <label for="ciudad">Poblacion</label>
        <input type="text" name="ciudad">
        <br>
        <label for="correo">Correo electrinico</label>
        <input type="email" name="correo">
        <br>
        <label for="contrasena">Contraseña</label>
        <input type="password" name="contrasena">
        <br>
        <input  class="boton"type="submit" value="Registrarse" name="registro">
        <a href="index.php">Salir</a>
    </form>

</section>



</body>
</html>
