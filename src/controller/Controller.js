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
  async getNewsByOne(req, res, id) {
    try {
      if (id) {
        const data = await NewsModel.findById({ _id: id });
        console.log(data);
        data ? await res.json(data) : console.log("failed");
      } else {
        res.json({ success: false, message: "Id is wrong" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // getNews all
  async getNews(req, res) {
    try {
      const data = await NewsModel.find();
      if (data) {
        res.json(data);
      } else {
        res.json("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  // update news by ID
  async updateNews(req, res, id) {
    try {
      // const {id} =  req.params;
      if (id) {
        const data = await NewsModel.updateOne({ _id: id }, req.body);
        console.log("Updated");
        data
          ? await res.json(data)
          : await res.json({
              success: false,
              message: "Failed to update data",
            });
      } else {
        console.log("Data is not found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Delete News By ID
  async deleteNews(req, res, id) {
    try {
      if (id) {
        const data = await NewsModel.findByIdAndDelete({ _id: id });
        if (data) {
          console.log("Data deleted");
         await res.json({success:true,message:"Data has been deleted"})
        } else {
          console.log("Data already deleted");
          res.json({success:false,message:"Data already deleted"})
        }
      } else {
        res.json("couldn't found data");
      }
    } catch (err) {
      res.json(err);
    }
  }
}

export default NewsController;
