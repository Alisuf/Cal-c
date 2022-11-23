module.exports= {
MainScreen:{
     marginTop:50,
     display:'flex',
     flexDirection:'column',
     backgroundColor:'white',
     alignItems:'center',
     width:'100%',
     height:'95%'
 },

 MainScreenDisplay:{
    elevation:10,
    width:'99%',
    backgroundColor:'white',
    borderRadius:10,
    display:'flex',
    marginBottom:10,
    padding:10,
},
 MainScreenDisplayText:{
    fontSize:40,
    textAlign:'right',

 },
 MainScreenKeypad:{
    width:'100%',
    height:'70%',
    display:'flex',
   // flexDirection:'row',
 },
 MainScreenKeypadRow:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 10,
     },
ButtonOuter:{
        width: 90,
        height: 90,
        backgroundColor:'teal',
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
     },
bg1Button:{
    backgroundColor:'teal',
    color:'black',
    fontSize:30,
    borderRadius:50,
     },
Button2Outer:{
    width: 90,
        height: 90,
        backgroundColor:'white',
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
},
bg2Button:{
    backgroundColor:'white',
    color:'black',
    fontSize:30,
    borderRadius:50, 
}
 }