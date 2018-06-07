import { combineReducers } from "redux";
import itemsIds from "./itemsIds";
import { mergeObjects, augmentSelectors } from "../../utils";

export const ns = "data";

export const shape = mergeObjects([itemsIds.shape]);
export const defaultState = mergeObjects([itemsIds.defaultState]);

const root = state => state[ns];
export const selectors = {
  root,
  ...augmentSelectors(root, itemsIds.ns, itemsIds.actions)
};

export const actions = mergeObjects([itemsIds.actions]);

export const reducer = combineReducers({
  ...itemsIds.reducer
});

export default {
  ns,
  shape,
  defaultState,
  selectors,
  // types,
  actions,
  // rawReducer,
  reducer
};
