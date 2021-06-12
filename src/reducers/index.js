import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import imageReducer from "./imagesReducer";

const rootReducer = combineReducers({
  categoryReducer: categoryReducer,
  imageReducer: imageReducer,
});

export default rootReducer;
