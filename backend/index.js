const express = require('express');
const {json} = require('body-parser');
const {bioData} = require("./types")
const {editId} = require('./types')
const {deleteBiodata} = require('./types')


const app = express();
app.use(express.json())

let allhistory = []
let StaffIdz = 0;




app.use('/addStaff', (req, res, next) => {
     StaffIdz++;
    next();
});


app.get('/tracker',function(req,res){
    
    res.json(allhistory)
    //displays all the stuff 
})

app.post('/addStaff',function(req,res){

   
    const validatedData = bioData.safeParse(req.body);
    if(validatedData.success){                              // checks if the inputs meet the requirements
    const { department, name, age, gender } = validatedData.data;
    const staffId = req.staffId;
    staff = {
        StaffIdz,
        department,
        name,
        age,
        gender
    }
    

    allhistory.push(staff);
    res.json({
        msg:"data added and the staff id is "
    })
    }else{
        res.json({
            msg: "something is wrong with the data"
        })
    }   


    
})


app.put('/editStaff/:name',function(req,res){
    staffNameToEdit = req.params.name;
    const staffIndex = allhistory.findIndex(staff=>staff.name === staffNameToEdit);
    if(staffIndex !== -1){
        const validatedData = bioData.safeParse(req.body);
        if (validatedData.success){
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

        }else{
            res.json({msg:"something is wrong with the data"})
        }
    }else{
        res.json({
            msg:"staff not found"
        })
    }
})


app.delete('/deleteStaff/:name',function(req,res){
    staffNameToDelete = req.params.name;
    const toDelete = deleteBiodata.safeParse(staffNameToDelete);
    if(toDelete.success ){
    const toDeleteIndex = allhistory.findIndex(staff=>staff.name === staffNameToDelete);
    if( toDeleteIndex != -1){
        allhistory.splice(indexToDelete, 1);
    res.json({msg:`Staff member with name '${staffNameToDelete}' deleted.`});
    } else {
    console.log({msg:`Staff member with name '${staffNameToDelete}' not found.`});
    }
    }

})

app.listen(3000);