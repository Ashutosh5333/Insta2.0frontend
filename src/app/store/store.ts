import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './CounterSlice'
import { counterSlice2 } from './CounterSlice2'

const rootReducer = combineReducers({
      reducer1:counterSlice.reducer,
      reducer2:counterSlice2.reducer
})

export const store = configureStore({
  // reducer: {
  //   counter: counterSlice.reducer,
  // },
    reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch