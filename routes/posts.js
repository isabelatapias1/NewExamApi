const express = require('express');
const router= express.Router();
const Post = require('../models/Post');


//ir a los post
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({message:err});
    }
});
//agregar un post
router.post('/',async (req,res) => {
    const post = new Post({
        name:         req.body.name,
		company: 	  req.body.company,
		city:         req.body.city,
		email:        req.body.email,
		birthdate:    req.body.birthdate,
		workphone:    req.body.workphone,
        personalphone:req.body.personalphone,
        adress:       req.body.adress,
    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    } catch(err){
        res.json({message: err});

    } 
});

//Ir a un post especifico
router.get('/:postId',async (req,res) => {
    try {
   const post = await Post.findById(req.params.postId);
   res.json(post);
}catch(err){
    res.json({message: err});
}
});

//eliminar post
router.delete('/:postId',async (req,res) => {
    try {
   const removePost = await Post.remove({_id: req.params.postId});
   res.json(removePost);
    }catch(err){
    res.json({message: err});
}
});

//editar contacto

router.patch('/:postId',async(req,res) => {
    try{
    const updatePost= await Post.updateOne (
        {_id: req.params.postId},
        {$set : {name: req.body.name} }
        );
        res.json(updatePost);
    }catch(err){
    res.json({message: err})
}
})





module.exports = router;