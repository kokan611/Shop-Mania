import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "./reducers/productReducer.js";
import {cartReducer} from "./reducers/cartReducer.js";
import {userLoginReducer} from "./reducers/userReducers.js"
import { userRegisterReducer } from "./reducers/userReducers.js";
import { userDetailsReducer } from "./reducers/userReducers.js";
import { userUpdateProfileReducer } from "./reducers/userReducers.js";


const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart:cartReducer,
  userLogin :userLoginReducer,
  userRegister:userRegisterReducer,
  userDetails:userDetailsReducer,
  userUpdateProfile:userUpdateProfileReducer
});
const cartItemsFromStorage= localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[];
const useeInfoFromStorage= localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')): null;
const intialState = {
  cart:{cartItems:cartItemsFromStorage},
  userLogin:{userInfo:useeInfoFromStorage}
};
const middleware = [thunk];
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
