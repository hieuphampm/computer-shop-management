const mongoose = require("moongose")



async function connectDB {
    try{
        mongoose.connect(process.env.MONGODB_URI)

    }catch(err){}
        console.log(err)
    }

}