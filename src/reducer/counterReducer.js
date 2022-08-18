import { ActionTypes } from '../action/actionType'

const initialState = {
    dataList : [],
}

export const counterReducer = (state = initialState, action) => {
    const {payload, type} = action;
    switch (type) {  
        case ActionTypes.NEW_ITEM:
            return { ...state, dataList: [...state.dataList, {name: payload.name, hobbies: payload.hobbies, age: payload.age}] }

        case ActionTypes.UPDATE_LIST:
            // console.log(payload.name, payload.hobbies, payload.age, payload.index)
            var UpdatedList = [...state.dataList];
            UpdatedList.splice(payload.index, 1, {name: payload.name, hobbies: payload.hobbies, age: payload.age})
            return { ...state, dataList: UpdatedList};

        case ActionTypes.DELETE_ITEM:
                var DeleteList = [...state.dataList];
                DeleteList.splice(payload.index, 1)
                return { ...state, dataList: DeleteList};

        default:
            return state
    }
}

export default counterReducer