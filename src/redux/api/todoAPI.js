import * as firebase from 'firebase';

export const fetchTodo = () => {
    return new Promise(resolve => {
        firebase.database().ref().child("todos").on("value", snapshot => {
            resolve(snapshot.val())
        });
    })
}

export const addTodo = async (body) => {
    await firebase.database().ref().child("todos").push().set(body);
}