const express = require('express');
const router = express.Router()
const{groups, groupmembers} = require('../models')

router.get("/", (req,res) => {
    res.json({msg:"Hello from the groups route"})
});

//GROUPS CREATE
//=============================================
router.post('/creategroup', async function(req,res){
    console.log("We are hitting create group")
    const{name, description, meetingtime, adminid, city, state, meetinglocation, meetingday, groupinterestes, inviteonly, imagetype, imagename, imagedata} = req.body;
    let results = await groups.create({
        name: name, 
        description: description,
        meetingtime: meetingtime,
        adminid: adminid,
        city: city,
        state: state,
        meetinglocation: meetinglocation,
        meetingday: meetingday,
        groupinterestes: groupinterestes,
        inviteonly: inviteonly,
        imagetype: imagetype,
        imagename: imagename,
        imagedata: imagedata,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.json({results})
})

// GROUP MEMBERS FIND ALL ADMIN FOR LOGGED IN USER 
//=============================================
router.get('/admin/:id', async function(req,res){
    const {id} = req.params;
    console.log("I am back end the find all admin groups for one member");
    let adminResults = await groups.findAll({
            where:{
                 adminid: id
            },
        }, )
        
    res.json(adminResults); 
    console.log(adminResults)
});


//GROUPS READ ONE
//=============================================
router.get('/getonegroup/:id', async function(req,res){
    console.log("We are hitting read one group")
    let {id} = req.params;
    let results = await groups.findByPk(id);
    res.json({results});
    })

//GROUPS FIND BY CITY
//=============================================
router.get('/findbycity/:city', async function(req,res){
    console.log("I am hitting the find all groups in my city call")
    let {city} = req.params;
    console.log(req.params)
    let results = await groups.findAll({
        where:{
            city: city 
       },
    });
    res.json({results}); 
})


//GROUPS EDIT
//=============================================
router.post('/editgroup/:id', async function(req, res){
    console.log("We are hitting edit group")
    const { id } = req.params;
    const{name, description, meetingtime, adminid, city, state, meetinglocation, meetingday, groupinterestes, inviteonly, imagetype, imagename, imagedata} = req.body;
    let results = await groups.update({
        name: name, 
        description: description,
        meetingtime: meetingtime,
        adminid: adminid,
        city: city,
        state: state,
        meetinglocation: meetinglocation,
        meetingday: meetingday,
        groupinterestes: groupinterestes,
        inviteonly: inviteonly,
        imagetype: imagetype,
        imagename: imagename,
        imagedata: imagedata,
        createdAt: new Date(),
        updatedAt: new Date(),
        },{
        where:{
            id
        }
    })
    res.json({results});
})

//GROUPS EDIT
//=============================================
router.post('/editphoto/:id', async function(req, res){
    console.log("We are hitting edit group photo")
    const { id } = req.params;
    const{imagename} = req.body;
    let results = await groups.update({
        imagename: imagename,
        updatedAt: new Date(),
        },{
        where:{
            id
        }
    })
    res.json({results});
})

// GROUPS DELETE
//=============================================
router.get('/deletegroup/:id', async function(req, res){
    console.log("We are hitting delete group")
    const { id } = req.params;
    let results = await groups.destroy({
        where:{
            id
        }
    })
    res.json({results});
});

//Edit group with photo
//=========================
router.post('/addphoto/:id', async function(req, res){
    console.log("We are hitting edit group PHOTO")
    const { id } = req.params;
    const {imagename} = req.body;
    console.log(req.body);
    console.log(imagename);
    let results = await groups.update({
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


//GROUP MEMBERS BELOW
//======================================================================



// GROUP MEMBERS CREATE
//=============================================
router.post('/addgroupmember', async function(req,res){
    console.log("We are hitting create group member")
    const{userid, groupid, status, adminid } = req.body;
    let results = await groupmembers.create({
        userid: userid, 
        groupid: groupid,
        status: status,
        adminid: adminid,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.json({results})
})

// GROUP MEMBERS FIND ONE
//=============================================
router.get('/getonemember/:id', async function(req,res){
    console.log("We are hitting read one group")
    const {id} = req.params;
    let results = await groupmembers.findByPk(id);
    res.json({results});
    })



// GROUP MEMBERS FIND ALL FOR LOGGED IN USER 
//=============================================
router.get('/findmembers/:id', async function(req,res){
    const {id} = req.params;
    console.log("I am hitting the find all groups for one member");
    let memberResults = await groupmembers.findAll({
            where:{
                 userid: id
            },
            include: groups
        }, )
        
    res.json(memberResults); 
});

// GROUP MEMBERS FIND ALL FOR PARTICULAR GROUP 
//=============================================
router.get('/findgroupmembers/:groupid', async function(req,res){
    const {groupid} = req.params;
    console.log("I am hitting the find all groups members for one group call");
    let groupMemberResults = await groupmembers.findAll({
            where:{
                 groupid: groupid,
            }
            //need to find a way to include users with and pull userid  in. users is undefined maybe because they are in separate files?
        },)
    res.json(groupMemberResults); 
});

// GROUP MEMBERS DELETE
//=============================================
router.get('/deletegroupmember/:id', async function(req, res){
    // console.log("We are hitting delete group member")
    const { id } = req.params;
    let results = await groupmembers.destroy({
        where:{
            id
        }
    })
    res.json({results});
})

module.exports = router;