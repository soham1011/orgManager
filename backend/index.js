const express = require('express');
const {json} = require('body-parser');
const {bioData} = require("./types");
const {editId} = require('./types');
const {signupBody} = require('./types');
const {deleteBiodata} = require('./types');
const cors = require('cors');
const {User} = require('./db');
const {jwtt} = require('./config')
const {jwt} = require('jsonwebtoken');
const {Staffscheme} = require('./db');

const app = express();
app.use(express.json())
app.use(cors())
let allhistory = []
let StaffIdz = 0;




app.use('/addStaff', (req, res, next) => {
     StaffIdz++;
    next();
});


app.get('/tracker',async function(req,res){
    const staffs = await Staffscheme.find()
    res.json({staffs})
    console.log(staffs);
    //displays all the stuff 
})

app.post('/addStaff', async function(req,res){

    // let staff={}
    const validatedData = bioData.safeParse(req.body);
    if(validatedData.success){                              // checks if the inputs meet the requirements
    const { department, name, age, gender } = validatedData.data;
    // const staffId = req.staffId;
    //-------------------------------------------------------------------------------------------------------//


        const staff = await Staffscheme.create({
            department:department,
            name:name,
            age:age,
            gender:gender
        })
    
        console.log("posted data");










    //--------------------------------------------------------------------------------------------------------//
    // staff = {
    //     StaffIdz,
    //     department,
    //     name,
    //     age,
    //     gender
    // }
    

    // allhistory.push(staff);
    // res.json({
    //     msg:"data added and the staff id is "
    // })
    // }else{
    //     res.json({
    //         msg: "something is wrong with the data"
    //     })
    }   


    
});


app.put('/editStaff/:name',function(req,res){
    staffNameToEdit = req.params.name;
    const staffIndex = allhistory.findIndex(staff=>staff.name === staffNameToEdit);
    if(staffIndex !== -1){
        const validatedData = bioData.safeParse(req.body);
        // if (validatedData.success){
            const { department, name, age, gender } = validatedData.data;

            
            allhistory[staffIndex] = {
                StaffIdz,
                department,
                name,
                age,
                gender
            };
            res.json({
                msg:"data updated"
            })

        // }else{
        //     res.json({msg:"something is wrong with the data"})
        // }
    }else{
        res.json({
            msg:"staff not found"
        })
    }
})


app.delete('/deleteStaff/:name',function(req,res){
    const staffNameToDelete = req.params.name;
    const toDelete = deleteBiodata.safeParse(staffNameToDelete);
    
    
    const toDeleteIndex = allhistory.findIndex(staff=>staff.name === staffNameToDelete);
    if( toDeleteIndex != -1){
        allhistory.splice(toDeleteIndex, 1);
    res.json({msg:`Staff member with name '${staffNameToDelete}' deleted.`});
    } else {
    console.log({msg:`Staff member with name '${staffNameToDelete}' not found.`});
    }
    

})



// user authentication


app.post("/signup",async(req,res)=>{
    // const validatedData = signupBody.safeParse(req.body)
    // console.log(validatedData,"me here");
    // if(!validatedData){
    //     return res.status(411).json({
    //         message: "Email already taken / Incorrect inputs"
    //     })
    // }
    // const existingUser = await User.findOne({
    //     username: req.body.username
    // })

    // if (existingUser) {
    //     return res.status(411).json({
    //         message: "Email already taken"
    //     })
    // }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


app.post("/signin",async(req,res)=>{
    const validatedData = signupBody.safeParse(req.body)
})

app.listen(3000);