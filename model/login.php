<?php
    
    include_once 'conexao.php';

    $sql = $conn->prepare("SELECT * FROM pessoa WHERE (email = ? OR userName = ?) AND senha = ? AND ativo = 'ativo'");

    $sql->bind_param("sss",$user, $user, $pass);

    $sql->execute();

    $resultado = $sql->get_result();
    $linha = $resultado->fetch_assoc();

    $sql -> close();
    $conn -> close();

    if(empty($linha)){
        echo "FalhaLogin";
        die();
    }
    else{
        $_SESSION['idPessoa'] = $linha['idPessoa'];
        $_SESSION['login'] = true;
        $_SESSION['nome'] = $linha['nome'];
        $_SESSION['cargo'] = $linha['cargo'];
        
        switch($linha['cargo']){
            case "adm":
                echo "SucessoADM";
                break;
            case "usuario":
                echo "SucessoUsuario";
                break;
            default:
                echo "FalhaLogin";
                die();
        }
    }
?>