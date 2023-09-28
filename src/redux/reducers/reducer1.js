export const reducer1 = (prevpState={
    prop:0
},action)=>{
    //console.log(action)
    let {type,payload} =action
    switch(type){
        case "change_prop":
            var newState = {...prevpState}
            newState.prop = payload
            return newState
        default :
            return prevpState

    }
}