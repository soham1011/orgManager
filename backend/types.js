const zod = require("zod");


const bioData = zod.object({
    department: zod.string(),
    name: zod.string(),
    age: zod.string(),
    gender: zod.string(),
})

const editId = zod.object({
    id:zod.number(),
})

const deleteBiodata = zod.object({
    name:zod.string()
})


const signupBody = zod.object({
    username: zod.string().email,
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

module.exports = {
    editId: editId,
    bioData: bioData,
    deleteBiodata: deleteBiodata,
    signupBody: signupBody
}