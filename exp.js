
/*REST API*/

const express = require('express');
const morgan = require('morgan');
const app =express();


app.use(morgan("dev"))//ver informacion de las rutas con morgan
app.use(express.json())//para que el sistema pueda leer formatos json


const data = {
  message:["https://images.dog.ceo/breeds/germanshepherd/n02106662_25775.jpg","https://images.dog.ceo/breeds/terrier-scottish/n02097298_2468.jpg","https://images.dog.ceo/breeds/bulldog-french/n02108915_4214.jpg"],
  status:"success"
}


const data_json = JSON.stringify(data)

//const llave = { key: "clave_secreta333"}
//const data_llave = JSON.stringify(llave)


app.get("/image/random/",(req,res)=>{
    
    console.log("respuesta");
    res.send(data_json)
})


app.listen(process.env.PORT||3000);
console.log("puerto 3000");  