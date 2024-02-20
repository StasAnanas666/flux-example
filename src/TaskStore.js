import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actions";
import dispatcher from "./dispatcher";

class TaskStore {
    constructor() {
        this.tasks = [{ id: Date.now(), name: "Task #1", completed: false }]; //ключевой элемент состояния
        dispatcher.register(this.handleActions.bind(this));
    }

    getTasks() {
        return this.tasks;
    }

    //обработчики действий
    handleActions(action) {
        switch (action.type) {
            case ADD_TASK:
                this.tasks.push(action.task);
                console.log(this.tasks);
                //генерация события(уведомление компонента о завершении работы хранилища)
                break;
            case TOGGLE_TASK:
                const index = this.tasks.findIndex(
                    (task) => task.id === action.id
                );
                this.tasks[index].completed = !this.tasks[index].completed;
                console.log("Task updated");

                break;
            case DELETE_TASK:
                this.tasks = this.tasks.filter((task) => task.id !== action.id);
                break;
            default:
            //ничего
        }
    }
}

const taskStore = new TaskStore();
export default taskStore;
