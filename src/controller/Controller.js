import NewsModel from "../model/NewsModel.js";

// Controller 
class NewsController{

    // add news
    async addNews(req,res,imageName){
        try {
            const data = await NewsModel.create({...req.body,image:imageName});
            data ? await res.json(data) : await res.json({success:false,message:"Failed to adding data"});
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    }
}

export default NewsController;