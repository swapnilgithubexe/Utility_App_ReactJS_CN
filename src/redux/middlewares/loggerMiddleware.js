//Store, next, action

export const loggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      //We can access store, next, action: Closures
      console.log("[LOG]: " + action.type + " " + new Date().toString());
      //To call next middleware in the pipeline
      next(action)
      //Log the modified state
      // console.log(store.getState());

    }
  }
}