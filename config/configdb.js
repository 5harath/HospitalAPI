const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect('mongodb+srv://admin:1xsCiH6C9FU7ueNl@cluster0.3qul6be.mongodb.net/hospitalApi?retryWrites=true&w=majority');
    console.log("Connection Successfull");
}
main().catch((error) =>{console.log("Connection Not Success Full !!");})
