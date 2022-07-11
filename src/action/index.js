export const insertdata=(data)=>{
    return {
        type:"ADD_DATA",
        payload:{
            id:new Date().getTime().toString(),
            Data:data
        }
    }
}