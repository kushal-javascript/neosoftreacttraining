//Normal Syntax
export function CustomMiddleware(store) {
  return function (next) {
    return function (action) {
      console.log("======Custom Middleware Start======");
      console.log("store" , store.getState());
      console.log("action" , action);
      console.log("======Before Next======");
      //In that State value is blank
      var result = next(action);
      //After that it goes to the Reducer and set state value we can get after that 
      console.log("store" , store.getState());
      console.log("action" , action);
      console.log("======Before After======");
      console.log("======Custom Middleware End======");
      return result;
    };
  };
}

//ES6 Syntax
export var logger = store=>next=>action=>{
    console.log("======Custom Middleware Start ES6======");
    console.log("store" , store.getState());
    console.log("action" , action);
    console.log("======Before Next======");
    //In that State value is blank
    var result = next(action);
    //After that it goes to the Reducer and set state value we can get after that 
    console.log("store" , store.getState());
    console.log("action" , action);
    console.log("======Before After======");
    console.log("======Custom Middleware End ES6======");
    return result;
} 
