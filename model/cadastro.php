<?php

include_once 'conexao.php';

$sql = $conn->prepare(
    "INSERT INTO pessoa(
        nome,
        email,
        userName,
        senha,
        dataNasc,
        sexo,
        telFixo,
        telCelular,
        rg,
        cpf
    )
    VALUES(?,?,?,?,?,?,?,?,?,?)"
);

$sql->bind_param(
    "ssssssssss",
    $completeName,
    $email,
    $regUser,
    $regPass,
    $birth,
    $gender,
    $tel,
    $cel,
    $rg,
    $cpf
);

if ($sql->execute() == true) {
    echo "SucessoCadastro";
    $sql -> close();
    $conn -> close();
    die();
}
else{
    echo "FalhaCadastro";
    die();
}

?>