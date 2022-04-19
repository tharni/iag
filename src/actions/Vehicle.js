export function loadVehiclesModels(){
    return(dispatch)=>{
       
        return fetch('https://c827a903-cc04-4d87-95b2-2a61a0b17edb.mock.pstmn.io/vehicle-checks/makes/Lotus')
        .then(res => res.json())
        .then(vehicles => {
           
          dispatch(UpdateVehicleModels(vehicles.models));
        })
        .catch(console.log);
    }
}

export function UpdateVehicleModels(vehiclesModels){
    return{
        type:"UPDATE_VEHICLE_MODEL",
        vehiclesModels:vehiclesModels
    }
}