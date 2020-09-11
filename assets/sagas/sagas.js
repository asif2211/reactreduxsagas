import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import {REQUEST_HELLO_WORLD, receivehelloWorld} from '../action';
import {REQUEST_API_DATA, receiveApiData} from '../action';
import {fetchApiData} from '../reducers/fetchApiData';
import { useState } from 'react';
import data from '../reducers/data';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* helloWorld(action) {
//    try {
//     const user = yield call(fetchApiData);
//       yield put(receiveApiData('this is hello worls'));
//    } catch (e) {
//     yield put(receiveApiData('this is hello worls'));
//    }
// }

function* fetchData(action) {
  try {
   const data = yield call(fetchApiData);
     yield put(receiveApiData(data));
  } catch (e) {
   console.log(e);
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(REQUEST_API_DATA, fetchData);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/


export default mySaga;