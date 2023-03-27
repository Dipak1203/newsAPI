import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image:{type:String},
  content: { type: String, required: true },
  author:{type:String,required:true},
  date:{type:Date,default:Date.now},
  postBy:{type:String,default:"NewsNepal"},
  category:{type:String,require:true}
//   comments:[{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}],
//   commentsCount: { type: Number, default: 0 },
//   likes: [{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
//   likesCount: { type: Number, default: 0 },
//   isLike: { type: Boolean, default: false },
//   isLikeCount: { type: Boolean, default: false },
//   isComment: { type: Boolean, default: false },
//   isCommentCount: { type: Boolean, default: false },
//   isLikeByMe: { type: Boolean, default: false },
//   isCommentByMe: { type: Boolean, default: false }

});


const NewsModel =  mongoose.model("newsModel",newsSchema);

export default NewsModel;