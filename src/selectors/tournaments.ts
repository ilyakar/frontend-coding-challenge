// import rootState from '../reducers';

export function getIncompleteTodos(state: any): any {
  return state.todos.filter((todo: any) => {
    return !todo.completed
  });
}
