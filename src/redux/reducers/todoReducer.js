
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    todos: [
        // { text: "Go to Gym at 6", completed: false },
        // { text: "Study at 8", completed: true }
    ]
}

//thunk function
export const getInitialStateAsync
    // createAsyncThunk("todo/getInitialState", (arg, thunkAPI) => {
    //     axios.get("http://localhost:4100/api/todos").then(res => {
    //         // disptach(actions.setInitialState(res.data))
    //         thunkAPI.dispatch(actions.setInitialState(res.data))

    //     })
    // })
    = createAsyncThunk("todo/getInitialState", () => {
        return axios.get("http://localhost:4100/api/todos")
    })

//creating reducer using redux toolkit

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        //add action
        setInitialState: (state, action) => {
            state.todos = [...action.payload]
        },
        add: (state, action) => {
            state.todos.push({
                text: action.payload,
                completed: false
            })
        },
        toggle: (state, action) => {
            state.todos.map((todo, i) => {
                if (i === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getInitialStateAsync.fulfilled, (state, action) => {
            state.todos = [...action.payload]
        })
    }
})

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;

//Selector 
export const todoSelector = (state) => state.todoReducer.todos;

//This reducer is from redux react

// export function todoReducer(state = initialState, action) {

//     switch (action.type) {
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo, i) => {
//                     if (i === action.index) {
//                         todo.completed = !todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }