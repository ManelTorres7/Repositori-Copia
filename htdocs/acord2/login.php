<?php require('./layout/header.php') ?>

<section class="section-login">
    <form method="POST" action="php/registro_usuarios_be.php">
        <p>Login</p>
        <label for="user_">Nombre de usuario</label>
        <input type="text" name="user_">
        <br>
        <label for="email">Correo Electronico</label>
        <input type="email" name="email">
        <br>
        <label for="fecha_nacimiento">Fecha de Nacimiento</label>
        <input type="text" name="fecha_nacimiento">
        <br>
        <label for="localidad">Localidad</label>
        <input type="text" name="localidad">
        <br>
        <label for="password">Contraseña</label>
        <input type="password" name="passwordd">
        <br>
        <input type="submit" value="Entrar">
    </form>

</section>



</body>
</html>
