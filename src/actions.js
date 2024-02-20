import dispatcher from "./dispatcher";

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export function addTask(task) {
    dispatcher.dispatch({
        type: ADD_TASK,
        task,
    });
}

export function toggleTask(id) {
    dispatcher.dispatch({
        type: TOGGLE_TASK,
        id,
    });
}

export function deleteTask(id) {
    dispatcher.dispatch({
        type: DELETE_TASK,
        id,
    });
}
