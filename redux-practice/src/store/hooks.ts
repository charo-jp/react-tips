import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import { AppDispatch, RootState } from "./store.ts";

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;

// no need to state: RootState => state.cart...
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
