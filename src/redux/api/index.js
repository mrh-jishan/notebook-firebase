import * as firebase from 'firebase';

export const fetchTodo = () => {
    return new Promise(resolve => {
        firebase.database().ref().child("todos").on("value", snapshot => {
            resolve(snapshot.val())
        });
    })
}

export const addTodo = (body) => {
    return firebase.database().ref().child("todos").push().set(body);
}

export const login = (body) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(body.email, body.password);
}

export const register = (body) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(body.email, body.password)
}