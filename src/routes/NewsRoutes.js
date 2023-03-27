import express from "express";
import multer from "multer";
import NewsController from "../controller/Controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Backend is working");
});

// upload img
let imageName;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/upload/");
    },
    filename: function (req, file, cb) {
        imageName =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "_" +
        file.originalname.trim();
      cb(null, imageName);
    },
  });

const upload = multer({storage:storage});


// Creating Object
const newsController = new NewsController();

// adding news
router.post("/add",upload.single('image'),(req,res) =>{
    newsController.addNews(req,res,imageName)
});


// get news One 
router.get('/show/:id',(req,res) =>{
    const id = req.params.id;
    newsController.getNewsByOne(req,res,id);
})


// get News all
router.get('/show',(req,res) =>{
    newsController.getNews(req,res);
});

// Update One
router.patch('/update/:id',(req,res) =>{
    const id = req.params.id;
  newsController.updateNews(req,res,id)  
})

// Delete Data
router.delete('/delete/:id',async(req,res) =>{
    const id = req.params.id;
    newsController.deleteNews(req,res,id);
});



export default router;
