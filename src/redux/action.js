export let initPersonList=(payload)=>{
    return {
        type:'INITIAL_PERSON_LIST',
        payload
    }
}

export let addPersonList=(payload)=>{
    return {
        type:'ADD_PERSON_LIST',
        payload
    }
}

export let deletePersonList=(index)=>{
    return {
        type:'DELETE_PERSON_LIST',
        index
    }
}