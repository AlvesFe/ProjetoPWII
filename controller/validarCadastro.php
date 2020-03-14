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
    $tel = $_POST['tel'];
    $cel = $_POST['cel'];

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
    if (strlen($regUser) < 6) {
        echo "ErroTamanhoUsuario";
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
    if (strlen($regPass) < 8) {
        echo "ErroTamanhoSenha";
        die();
    }
    if(empty($birth)){
        echo "ErroNascimento";
        die();
    }
    if ($birth > "2007-01-01") {
        echo "ErroJovemDemais";
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
    if (strlen($rg) < 9) {
        echo "ErroTamanhoRg";
        die();
    }
    if(empty($cpf)){
        echo "ErroCPF";
        die();
    }
    if (strlen($cpf) < 11) {
        echo "ErroTamanhoCpf";
        die();
    }

    $completeName = $name." ".$surname;

    include_once '../model/cadastro.php';

?>