import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import collectionReducer from "./collectionReducer";
import compareReducer from "./compareReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  currencyData: currencyReducer,
  productData: productReducer,
  collectionData: collectionReducer,
  compareData: compareReducer
});

export default rootReducer;
