const express = require('express');
const router = express.Router()
//addproject comments here
const{projects, projectcomments} = require('../models')

router.get("/", (req,res) => {
    res.json({msg:"Hello from the projects route"})
});



//PROJECTS CREATE
//=============================================
router.post('/createproject', async function(req,res){
    console.log("We are hitting create project")
    const{ userid, name, type, progress, startdate, enddate, giftedto, notes} = req.body;
    
    let results = await projects.create({
        userid: userid, 
        name: name,
        type: type,
        progress: progress,
        startdate : startdate,
        enddate: enddate,
        giftedto: giftedto,
        notes: notes,
        imagename: "https://res.cloudinary.com/dexffe7jc/image/upload/v1675447587/kp0ykq0joo93crqx0xha.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.json({results})
})

//COMMENTS CREATE
//=============================================
router.post('/newcomment', async function(req,res){
    console.log("We are hitting add comment")
    const{ userid, projectid, message} = req.body;

    let results = await projectcomments.create({
        userid: userid, 
        projectid: projectid,
        message: message,
        like : false,
        saved: false,
        created_at: new Date(),
        updatedAt: new Date()
    })
    res.json({results})
})


// COMMENTS READ ONE
// =============================================
router.get('/getallcomments/:id', async function(req,res){
    console.log("we are trying to get one")
    console.log("We are hitting read one project")
    let {id} = req.params;
    let results = await projectcomments.findAll({
        where:{
             projectid: id
        }
    })
    res.json({results});
    })


//PROJECTS READ ALL BY USER ID
//=============================================
router.get('/findall/:id', async function(req,res){
    const {id} = req.params;
    console.log("I am hitting the find projects by id call")
    let projectResults = await projects.findAll({
            where:{
                 userid: id
            }
        })
    console.log(projectResults);
    res.json(projectResults); 
});

//PROJECTS EDIT
//not working- seeems to be getting routed to 
//=============================================
router.post('/editproject/:id', async function(req,res){
    console.log("We are hitting edit project")
    const { id } = req.params;
    const{ userid, name, type, progress, startdate, enddate, giftedto, notes, imagename} = req.body;
    console.log(progress);

    let results = await projects.update({
        userid: userid, 
        name: name,
        type: type,
        progress: progress,
        startdate : startdate,
        enddate: enddate,
        giftedto: giftedto,
        notes: notes,
        imagename: imagename,
        createdAt: new Date(),
        updatedAt: new Date(),
        },{
        where:{
            id
        }
    })
    res.json({results});
})
// ===============Edit Project Photo
router.post('/editphoto/:id', async function(req, res){
    console.log("We are hitting edit project PHOTO")
    const { id } = req.params;
    const {imagename} = req.body;
    console.log(imagename);
    let results = await projects.update({
        imagename: imagename,
        updatedAt: new Date()
    },{
        where:{
            id,
        },
        returning: true,
        plain: true 
    })
    res.json({results});
})
// PROJECTS DELETE
//=============================================
router.get('/deleteproject/:id', async function(req,res){
    console.log("We are hitting delete project")
    const { id } = req.params;
    let results = await projects.destroy({
        where:{
            id
        }
    })
    res.json({results});
})



module.exports = router;