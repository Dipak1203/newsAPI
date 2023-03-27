import mongoose from "mongoose";

// connect mongodb using nodejs
const uri = process.env.DB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>{
    console.log("Connected to MongoDB");
})
.catch((err) =>{
    console.log("Connection failed")
})
