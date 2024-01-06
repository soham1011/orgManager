const zod = require("zod");


const bioData = zod.object({
    department: zod.string(),
    name: zod.string(),
    age: zod.number(),
    gender: zod.string(),
})

const editId = zod.object({
    id:zod.number(),
})


module.exports = {
    editId: editId,
    bioData: bioData
}