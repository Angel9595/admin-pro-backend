const mongoose = require('mongoose');


const dbconnection = async()=>{

    try {
        
        await mongoose.connect(process.env.DB_CNN);

         console.log("Base de datos online")
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la Base de datos')
    }
    
}
module.exports={
dbconnection
}