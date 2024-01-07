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

const deleteBiodata = zod.object({
    name:zod.string()
})

module.exports = {
    editId: editId,
    bioData: bioData,
    deleteBiodata: deleteBiodata
}