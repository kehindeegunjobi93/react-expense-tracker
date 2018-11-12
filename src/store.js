import { createStore, applyMiddleware } from 'redux'
import database from './firebase'
import thunkMiddleware from 'redux-thunk'

/**
* ACTION TYPES
*/
const GET_TASKS = 'get tasks'

/**
* ACTION CREATORS
*/
export const getTasks = (tasks) => ({type: GET_TASKS, tasks})

/**
* THUNKS
*/
export function getTasksThunk() {
 return dispatch => {
 const tasks = [];
 database.ref(`/`).once('value', snap => {
  snap.forEach(data => {
  let task = data.val();
  tasks.push(task)
  })
 })
 .then(() => dispatch(getTasks(tasks)))
 }
}