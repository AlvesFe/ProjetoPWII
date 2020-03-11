<?php  
    session_start();

    if(empty($_POST)){
        header("Location: ../");
        die();
    }

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $regUser = $_POST['regUser'];
    $email = $_POST['email'];
    $regPass = $_POST['regPass'];
    $confPass = $_POST['passConf'];
    $birth = $_POST['birth'];
    $gender = $_POST['gender'];
    $rg = $_POST['rg'];
    $cpf = $_POST['cpf'];

    if(empty($name)){
        echo "ErroNome";
        die();
    }
    if(empty($surname)){
        echo "ErroSobrenome";
        die();
    }
    if(empty($regUser)){
        echo "ErroUsuario";
        die();
    }
    if(empty($email)){
        echo "ErroEmail";
        die();
    }
    if(empty($regPass)){
        echo "ErroSenha";
        die();
    }
    if(empty($confPass)){
        echo "ErroConfirmarSenha";
        die();
    }
    else if ($confPass != $regPass) {
        echo "ErroDiferenteSenhas";
        die();
    }
    if(empty($birth)){
        echo "ErroNascimento";
        die();
    }
    if ($gender == "none") {
        echo "ErroSexo";
        die();
    }
    if(empty($rg)){
        echo "ErroRG";
        die();
    }
    if(empty($cpf)){
        echo "ErroCPF";
        die();
    }

?>