export const TODO = {
    LOAD: 'LOAD_TODO',
    LOAD_SUCCESS: 'LOAD_TODO_SUCCESS',
    LOAD_FAIL: 'LOAD_TODO_FAIL',
    INIT_TODO: 'INIT_TODO',
    ADD_TODO: 'ADD_TODO'
}

export const loadTodo = () => ({
    type: TODO.LOAD,
});

export const setTodo = list => ({
    type: TODO.LOAD_SUCCESS,
    list,
});

export const initTodo = (body) => ({
    type: TODO.INIT_TODO,
    body: body
})

