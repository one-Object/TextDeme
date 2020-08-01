export const initPersonList = (payload) => {
    return {
        type: 'INITIAL_PERSON_LIST',
        payload
    }
}

export const addPersonList = (payload) => {
    return {
        type: 'ADD_PERSON_LIST',
        payload
    }
}

export const deletePersonList = (index) => {
    return {
        type: 'DELETE_PERSON_LIST',
        index
    }
}