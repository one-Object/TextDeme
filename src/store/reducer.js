//人员列表：类型数组，操作行为：初始化，添加,删除
export const personList = (state = [], action)=>{
    switch (action.type) {
        case "INITIAL_PERSON_LIST":
            return action.payload;
        case 'ADD_PERSON_LIST':
            return [
                ...state,
                action.payload  
            ];
        case 'DELETE_PERSON_LIST':
            return [
                ...state.slice(0,action.index),
                ...state.slice(action.index+1), 
            ];
        case 'EDIT_PERSON_LIST':
            return [
                ...state.slice(0,action.index),
                action.payload,
                ...state.slice(action.index+1), 
            ];
        default:return state;
    }
}