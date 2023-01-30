<?php

    function Headerb ()

    {
    ?>

        <header clas="" style="display: flex;">
            <p class="logo">REDSOCIAL</p>
            <div class="contenedor_derecho">
                <p>M</p>
                <p>N</p>
                <div class="header_user">
                <img src="avatars/<?php echo $_SESSION['avatar'];?>" style="height: 30px; width=30px;"alt="">

                    <p><?php echo ucwords($_SESSION['usuario']); ?></p>
                    
                </div>
                <div class="desplegable">
                    <a href="logout.php">Cerrar sesión</a>
                </div>
            </div>
            
        </header>

    <?php
    }
    ?>

<?php

    function Side ()
    
    {
    ?>

        <aside>
            <div class="aside_user">
                <img src="avatars/<?php echo $_SESSION['avatar'];?>" style="height: 90px; width=90px;"alt="">
                <p><?php echo ucwords($_SESSION['usuario']); ?></p>
            </div>
    
        </aside>

    <?php
    }
    ?>

