import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import {takeLatest, put} from 'redux-saga/effects'
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import axios from 'axios';

const plantList = (state = [], action) => {
	switch (action.type) {
		case "ADD_PLANT":
			return action.payload;
		default:
			return state;
	}
};


function* fetchPlant(){
  try{
    const getPlantResponse = yield axios.get('/api/plant');
    yield put({type:'ADD_PLANT', payload: getPlantResponse.data})
  }catch(error){
    console.log('There was an error with the GET',error);
  }
}

function* postPlant(action){
  try{
    yield axios.post('/api/plant', action.payload);
    yield put({type:'FETCH_PLANT'});

  }catch(error){
    console.log('There was an error with the POST',error);
  }
}

function* changePlant(){
  try{

  }catch(error){
    console.log('There was an error with the PUT',error);
  }
}

function* removePlant(action){
  try{
    yield axios.delete(`/api/plant/${action.payload}`)
    yield put({type: 'FETCH_PLANT'})


  }catch(error){
    console.log('There was an error with the DELETE',error);
  }
}










function* rootSaga(){
  yield takeLatest('FETCH_PLANT', fetchPlant)
  yield takeLatest('POST_PLANT', postPlant)
  // yield takeLatest('CHANGE_PLANT', )
  yield takeLatest('REMOVE_PLANT', removePlant )
}


const sagaMiddleware = createSagaMiddleware()


const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleware,logger)
);


sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);