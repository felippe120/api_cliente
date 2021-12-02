import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"white"
    },
    imglogo:{
        width:100,
        height:100,
        resizeMode: "cover",
    },
    controles:{
        width:'80%',
        padding:10,
        margin:20,
        shadowColor:'black',
        shadowOffset:{width:10, height:10},
        shadowOpacity:0.8,
        shadowRadius:10,
        elevation:10,
        backgroundColor: "white",
    },
    input:{
        borderBottomColor: "#eee",
        borderBottomWidth:1,
        padding:5,
        marginBottom:10,
        fontSize:15,
    },
    btnlogar:{
        padding:30,
    },
    txtbtnlogar:{
        textAlign: "center",
        color: "teal",
        textTransform: "uppercase"
    },
    btncadastrar:{
        //position:"absolute",
        //bottom: 100,
        backgroundColor:'#001',
        padding: 20,
        borderRadius:50,
    },
    txtbtncadastrar:{
        fontSize: 20,
        fontWeight:"bold",
        color: "teal",
        textTransform:"uppercase",
    },
    titulo:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    imgcliente:{
        width:'100%',
        height:200,
        resizeMode:"cover"
    },
    cliente:{
        padding:20,
        backgroundColor:'#fff',
        shadowColor:'silver',
        shadowOffset:{width:10,height:10},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },
    nome:{
        fontSize:15,
        fontWeight:'bold'
    },
    cpf:{
        fontSize:15,
        fontWeight:'bold'
    },
    email:{
        fontSize:15,
        color:'teal',
        fontWeight: "bold",
    },
    usuario:{
        fontSize:15,
        color:'teal',
        fontWeight: "bold",
    },
    scroll:{
        width:"100%"
    },
    apagar:{
        textAlign:'center',
        padding:20,
        width:'80%',
        borderRadius:10,
        borderWidth:1,
        borderColor:'red'
    },
    txtbtnapagar:{
        fontSize:10,
        textAlign:"center",
        fontWeight:"bold",
    },
});