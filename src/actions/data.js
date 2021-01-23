export const getAllData = () => ({
    type: "GETALLDATA"
})
export const getOneData = (id) => ({
    type: "GETONEDATA",
    id
})
export const updateData = (id, data) => ({
    type: "UPDATEDATA",
    id,
    data
})
export const deleteData = (id) => ({
    type: "DELETE",
    id
})
export const addNewRecord = (data) => {
    return ({
        type: "ADDNEW",
        data
    })

}