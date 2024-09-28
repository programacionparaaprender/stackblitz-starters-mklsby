// 1 - Importaciones
import { Task } from './../tasks/task.model'
import * as TaskActions from './tasks.actions'

// 2 - Estado inicial
const initialState: Task = {
  name: 'Primera tarea',
  state: 'Pendiente'
}
//(state: Task[] | undefined, action: AddTask) => Task[]' no se puede asignar al tipo 'ActionReducer<Task[],
// 3 - Switch con las funciones puras
//tasks: ActionReducer<Task[], Action>
export function taskReducer(state: Task[] = [initialState], action: TaskActions.Actions) {
  switch (action.type) {
    case TaskActions.ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
}