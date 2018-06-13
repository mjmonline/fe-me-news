import { combineReducers } from "redux";
import itemsIds from "./itemsIds";
import items from "./items";
import { mapObj, augmentSelectorWith } from "../../utils";

export const ns = "data";

const root = state => state[ns];
export const selectors = {
  root
};

export const rawReducer = combineReducers({
  ...itemsIds.reducer,
  ...items.reducer
});

const reducer = {
  [ns]: rawReducer
};

export default {
  ns,
  selectors,
  rawReducer,
  reducer,
  itemsIds: {
    ...itemsIds,
    selectors: mapObj(itemsIds.selectors, augmentSelectorWith(root))
  },
  items: {
    ...items,
    selectors: mapObj(items.selectors, augmentSelectorWith(root))
  }
};
