"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/CounterSlice2";
import { AppDispatch, RootState } from "../store/store";
import { useAppSelector } from "../store/hooks";

const Counter = () => {
  const count = useAppSelector((state) => state.reducer2.value);

  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
