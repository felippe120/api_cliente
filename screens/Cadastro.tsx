import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native'
import { servidor } from '../config/Path';
import { styles } from '../css/Styles';

let nome = "";
let email = "";
let cpf = "";
let usuario = "";
let senha = "";

 export default function Cadastro() {

// Vamos criar o estado inicial das caixas do
// formulario
const[nomeCliente,setNomeCliente] = React.useState("");
const[emailCliente, setEmailCliente] = React.useState("");
const[cpfCliente, setCPFCliente] = React.useState("");
const[usuarioCliente, setUsuarioCliente] = React.useState("");
const[senhaCliente, setSenhaCliente] = React.useState("");

     return (
         <View style={styles.container}>
             <Text style={styles.titulo}>Tela Cadastro</Text>
             <View style={styles.controles}>

                 <TextInput placeholder="Nome do Cliente" style={styles.input}
                 onChangeText={(value)=>setNomeCliente(value)}
                 value={nomeCliente}/>

                 <TextInput placeholder="E-Mail" keyboardType="email-address" style={styles.input}
                   onChangeText={(value)=>setEmailCliente(value)}
                   value={emailCliente}/>
                 
                 <TextInput placeholder="CPF" keyboardType="number-pad" style={styles.input}
                 onChangeText={(value)=>setCPFCliente(value)}
                 value={cpfCliente}/>

                 <TextInput placeholder="Usuário" style={styles.input}
                   onChangeText={(value)=>setUsuarioCliente(value)}/>

                 <TextInput placeholder="Senha" secureTextEntry style={styles.input}
                   onChangeText={(value)=>setSenhaCliente(value)}/>
                 
                 <TouchableOpacity style={styles.btncadastrar}
                 onPress={()=>{

                    nome = nomeCliente;
                    email = emailCliente;
                    cpf = cpfCliente;
                    usuario = usuarioCliente;
                    senha = senhaCliente;

                      efetuarCadastro() 
                 }}>
                    <Text style={styles.txtbtncadastrar}>Cadastrar</Text>
                 </TouchableOpacity>

             </View>
         </View>
     )
 }

 function efetuarCadastro(){

// faremos um fetch, ou seja, uma busca de daodos
// por url em javascirpt
fetch(`${servidor}/cadastro`,{
    method:"POST",
    headers:{
        accept:"application/json",
        "content-type":"application/json"
    },
    body:JSON.stringify({
        nome:nome,
        email:email,
        cpf:cpf,
        usuario:usuario,
        senha:senha,
    })
}).then((response)=>response.json())
.then((resultado)=>{
    console.log(resultado);
}).catch((erro)=>console.error(`Erro ao executar->${erro}`));

 }
