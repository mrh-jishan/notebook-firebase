import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRoot from './router';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCXlpKoH5sVE9m4kr52-juUyp0f4Pzdv7o",
  authDomain: "notebook-app-b888b.firebaseapp.com",
  databaseURL: "https://notebook-app-b888b.firebaseio.com",
  projectId: "notebook-app-b888b",
  storageBucket: "notebook-app-b888b.appspot.com",
  messagingSenderId: "374250440679",
  appId: "1:374250440679:web:0153edb25390dea90d5f42",
  measurementId: "G-NMKBHNN4EM"
};

firebase.initializeApp(firebaseConfig);

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='parent'>
          <div className='nav'>
            <ul>
              <li>
                <Link to='home'>Home</Link>
              </li>
              <li>
                <Link to='todo'>Todo</Link>
              </li>
              <li>
                <Link to='error'>Error</Link>
              </li>
            </ul>
          </div>
          <div className='content'>
            <AppRoot />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
