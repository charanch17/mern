const mongoose = require('mongoose')

const config = require('config')

const db = config.get('mongoURI')

const connectdb = async ()=>{
    try{
        await mongoose.connect(db,{auth:{username:'charan_ch',password:'Kiran@13579'}, useNewUrlParser: true});
        console.log("db connected")
    }
    catch(err){
        console.log(err.message);
    }
};

module.exports ={connectdb}