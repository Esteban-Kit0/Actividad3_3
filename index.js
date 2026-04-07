const express = require("express");
    

const app = express();
app.use(express.json());
const users= [];


app.get('/hello', (request, respoonse)=>{
respoonse.send("Hello World");
})

app.post('/user', (request, response)=>{
   users.push(request.body);
   response.send("Usuario Agregado exitosamente")
})

app.get("/users", (request, response)=>{
   response.send(users);
});
app.delete("/user/:id",(request,response)=>{
    const id =request.params.id;
    const user =users.find((user)=>user.id == id );
    users.splice (users.indexOf(user),1);//splice recorta el lugar y el 1 es solo la posicion 
    response.send("Usuario eliminado");
});
app.put("/user/:id",(request,response)=>{
    const id= request.params.id;
    const newPassword = request.body.password;
    const user = users.find((user)=>user.id== id);
    if (user == undefined) {
         response.send("No hay Usuarios ");
    }else {
    user.pwd = newPassword;

    response.send("Usuario actualizado");
    }
    
});
app.listen(3000, () =>{
    console.log("Example app on port"+3000);
});