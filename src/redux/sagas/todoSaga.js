import { put, takeEvery, select, call } from 'redux-saga/effects';

import { TODO, setTodo, loadTodo } from '../actions/todoAction';
import { addTodo, fetchTodo } from '../api/todoAPI';

export const getPage = state => state.nextPage;

export function* handleTodoLoad() {
    const list = yield call(fetchTodo);
    console.log('fetch todo', list);
    yield put(setTodo(list));

}


export function* handleInitTodo() {
    const body = yield select(state => state.todo.body);
    yield call(addTodo, body)
    yield put(loadTodo())

}

export default function* watchTodoLoad() {
    yield takeEvery(TODO.LOAD, handleTodoLoad);
    yield takeEvery(TODO.INIT_TODO, handleInitTodo);
}
