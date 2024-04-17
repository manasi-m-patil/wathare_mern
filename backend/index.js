// import express from "express";
// import mongoose from "mongoose";
// import { sampleData } from "./models/data.js";

// const app = express();


// app.get('/', (req, res) => {
//     console.log(req)
//     return res.send('Welcome to mern project')
// });

  

// mongoose.connect('mongodb://localhost:27017/sampledb').then(()=>{
//     console.log('App is connected to database');
//     app.listen(8500, function() {
//         console.log("started rest api at 8500..");
//     })
// })
// .catch((error)=>{
//     console.log(error);
// });

// app.get('/data',async(req, res) => {
//     try {
//         const sampledata = await sampleData.find();
//         console.log(sampledata);
//         return res.status(200).json(sampledata);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'No data found in sampleData collection' });
//     }
// });

