const express = require("express");
const router = express.Router();
const { users } = require("../models");
// const multer = require('multer');
const bcrypt = require("bcrypt");
router.get("/", (req, res) => {
  res.json({ msg: "Hello from the users route" });
});



router.post("/register", async function (req, res) {
  const { name, username, email, password, imagename } = req.body;
  let theHashedPassword = await bcrypt.hash(password, 10);
  console.log(`the hashed password is:`, theHashedPassword);
  console.log(name)
  let theNewUser = await users.create(
    {
      name: name,
      username: username,
      email: email,
      password: theHashedPassword,
      imagename: imagename
    }
  );
  res.json({
    id: theNewUser.id,
    name: theNewUser.name,
    username: theNewUser.username,
    email: theNewUser.email,
    interests: theNewUser.interests,
    city: theNewUser.city,
    state: theNewUser.state,
    about: theNewUser.about,
    imagename: theNewUser.imagename
  })
});

// //login page
// //============================================

router.post("/login", async function (req, res) {
  const { username, password } = req.body;
  let theUser = await users.findOne({
    where: { username: username },
  });
  let theResult = await bcrypt.compare(password, theUser.password);
  if (theResult) {
    res.json({
        id: theUser.id,
        name: theUser.name,
        username: theUser.username,
        email: theUser.email,
        interests: theUser.interests,
        city: theUser.city,
        state: theUser.state,
        about: theUser.about,
        imagename: theUser.imagename    
      });  
  } else {
    res.json({ error: "invalid password" });
  }
});

// //USER CREATE
// //=============================================
// router.post('/createuser', async function(req,res){
//     console.log("We are hitting create user")
//     const{username, email, password, interests, city, state, usertype, about, imagetype, imagename, imagedata} = req.body;
//     let results = await users.create({
//         username: username,
//         email: email,
//         password: password,
//         interests: interests,
//         city: city,
//         state: state,
//         usertype: usertype,
//         about: about,
//         imagetype: imagetype,
//         imagename: imagename,
//         imagedata: imagedata,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     })
//     res.json({results})
// })

//USER FIND ADMIN FOR PARTICULAR GROUP
//=============================================
router.get('/getone/:id', async function(req,res){
    console.log("We are hitting find admin for particular group")
    let {id} = req.params;
    let results = await users.findByPk(id);
    res.json({results});
    })

//USER READ ALL
//=============================================
// router.get('/findall', async function(req, res){
//     console.log("I am gitting the find all users call")
//     let results = await users.findAll();
//     res.json({results});
// })

// //USER EDIT
// //=============================================
router.post('/edit/:id', async function(req, res){
    console.log("We are hitting edit user")
    const { id } = req.params;
    const {name,username, email, interests, city, state, usertype, about, imagename} = req.body;
    let results = await users.update({
        name: name,
        username: username,
        email: email,
        interests: interests,
        city: city,
        state: state,
        usertype: usertype,
        about: about,
        // imagename: imagename,
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
router.post('/editphoto/:id', async function(req, res){
    console.log("We are hitting edit user PHOTO")
    const { id } = req.params;
    const {imagename} = req.body;
    console.log(req.body);
    console.log(imagename);
    let results = await users.update({
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
// //USER DELETE
// //=============================================
// router.get('/delete/:id', async function(req, res){
//     console.log("We are delete  user")
//     const { id } = req.params;
//     let results = await users.destroy({
//         where:{
//             id
//         }
//     })
//     res.json({results});
// })
// //LOGIN/BCRYPT
// //=============================================

module.exports = router;
