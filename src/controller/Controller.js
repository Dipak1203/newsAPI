import NewsModel from "../model/NewsModel.js";

// Controller
class NewsController {
  // add news
  async addNews(req, res, imageName) {
    try {
      const data = await NewsModel.create({ ...req.body, image: imageName });
      data
        ? await res.json(data)
        : await res.json({ success: false, message: "Failed to adding data" });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  // get news one
  async getNewsByOne(req, res,id) {
    try {
        if(id){
            const data = await NewsModel.findById({_id:id});
            console.log(data)
            data ? await res.json(data) : console.log("failed")
        }else{
            res.json({success:false,message:"Id is wrong"})
        }
    } catch (error) {
      console.log(error);
    }
  }
}

export default NewsController;
