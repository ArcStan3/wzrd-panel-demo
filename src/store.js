import { createStore, combineReducers, applyMiddleware } from 'redux'
import { append, merge } from 'ramda'
const ADD = 'ADD'
const PREVIOUS = 'PREVIOUS'
const NEXT = 'NEXT'
const SET_STUDENT_NAME = 'SET_STUDENT_NAME'
const SET_STUDENT_EMAIL = 'SET_STUDENT_EMAIL'
const SET_STUDENT_STREET = 'SET_STUDENT_STREET'
const SET_STUDENT_GITHUB = 'SET_STUDENT_GITHUB'
const SET_STUDENT_IMAGE = 'SET_STUDENT_IMAGE'

const RESET_STUDENT = 'RESET_STUDENT'
const RESET = 'RESET'

const store = createStore(
  combineReducers({
    student: (
      state = { id: null, name: '', email: '', github: '', street: '', avatar: '' },
      action
    ) => {
      switch (action.type) {
        case SET_STUDENT_IMAGE:
          return merge(state, { avatar: action.payload })
        case SET_STUDENT_STREET:
          return merge(state, { street: action.payload })
        case SET_STUDENT_GITHUB:
          return merge(state, { github: action.payload })
        case SET_STUDENT_EMAIL:
          return merge(state, { email: action.payload })
        case SET_STUDENT_NAME:
          return merge(state, { name: action.payload })
        case RESET_STUDENT:
          return { id: null, name: '', email: '', github: '', street: '' }
        default:
          return state
      }
    },
    panel: (state = 'step1', action) => {
      switch (action.type) {
        case RESET:
          return 'step1'
        case PREVIOUS:
          return action.payload
        case NEXT:
          return action.payload
        default:
          return state
      }
    },
    students: (state = [ { name: 'trip', id: 1 } ], action) => {
      switch (action.type) {
        case ADD:
          action.payload.id = new Date()
          return append(action.payload, state)
        default:
          return state
      }
    }
  })
)

export default store
