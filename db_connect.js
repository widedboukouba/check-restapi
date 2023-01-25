const mongoose=require('mongoose');

const db_connect  = async() => {
    try{
const resultat = await mongoose.connect(process.env.DB_URI);
console.log('data bade is connected')
    }
    catch (error) {
console.log(error);
    }
};

module.exports= db_connect;

