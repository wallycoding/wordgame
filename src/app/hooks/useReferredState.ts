"use client";

import { useRef, useState } from "react";

const useReferredState = <T>(initialState: T) => {
  const [state, setState] = useState(initialState);
  const referredState = useRef<T>(state);
  const changeState = (state: T) => {
    referredState.current = state;
    setState(state);
  };
  return [state, changeState, referredState] as [
    T,
    typeof changeState,
    typeof referredState
  ];
};

export default useReferredState;
