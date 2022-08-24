const initialData={
    list:[]
}

export const userdata=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_DATA":

        const {id,data}= action.payload

        return {
            ...state.list,
            list:[
                
                {
                    Id:id,
                    data
                }

            ]
        }

         default :
            return "404"
    }
}