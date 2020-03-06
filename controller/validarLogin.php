<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/animate.css">
    <link rel="stylesheet" href="../css/extra.css">

    <title>Validação</title>
</head>

<body>
    
    <script>
        function teste() {
            Swal.fire(
                'Validado',
                'Inforamação validada',
                'success'
            )
        };
    </script>

    <script src="../javascript/sweetalert2.all.js"></script>

    <?php
    session_start();

    if (empty($_POST)) {  /*A função empty testa se a variável é vazia, se não tem nada dentro dela*/
        header("Location: ../"); /*A função header redireciona o usuário para outra página (para o login), da seguinte header("Location: ../") para voltar uma pasta*/
        die(); /* Die ou Exit é o mesmo comando, e serve para encerrar/matar o script*/
    }
    else{
        echo "<script>teste();</script>";
    }
    //include_once '../model/login.php'; /*Comando include serve para incluir um arquivo em outro, o arquivo passa a existir dentro do outro*/

    ?>
</body>


</html>