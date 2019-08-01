import { createStore } from "redux";

const init = {
  name: "",
  email: "",
  age: "",
  batch: ""
};

function formReducer(state = init, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: init.name };
    case "email":
      return { ...state, email: init.email };
    case "age":
      return { ...state, age: init.age };
    case "batch":
      return { ...state, batch: init.batch };
    default:
      return state;
  }
}

const store = createStore(formReducer);

export default store;
