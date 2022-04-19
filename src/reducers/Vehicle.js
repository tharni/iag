let defaultState={
    vehiclesModels:[
        { "name": "2 Eleven", "yearsAvailable": 2 }
        
      ],
      vehicleModel:"2 Eleven"
    
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="UPDATE_VEHICLE_MODEL"){
        console.log(action.vehiclesModels);
        return{
            ...state,
            vehiclesModels:action.vehiclesModels
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;