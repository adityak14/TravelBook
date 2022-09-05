import mongoose from "mongoose";
import Posts from "../models/postMessage.js";

export const getPosts = async (req,res)=>{
    try{
        const posts = await Posts.find()

        console.log(posts);
        res.status(200).json(posts);

    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req,res)=>{
    const post = req.body;
    const newPost = new Posts(post);
    try {
        await newPost.save()
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req,res)=>{
    console.log(req.params.id);
    const _id = req.params.id
    const post = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that Id")
    const updatedPost = await Posts.findByIdAndUpdate(_id, post, {new: true});
    res.json(updatedPost);
}