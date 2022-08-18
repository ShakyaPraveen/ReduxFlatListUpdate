import { ActionTypes } from "./actionType";

export const AddItem = (name, hobbies, age) => ({
	type: ActionTypes.NEW_ITEM,
    payload: {name, hobbies, age},
});

export const UpdateItem = (name, hobbies, age, index) => ({
	type: ActionTypes.UPDATE_LIST,
    payload: {name, hobbies, age, index},
});

export const DeleteItem = index => ({
	type: ActionTypes.DELETE_ITEM,
    payload: {index},
});