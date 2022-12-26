const counterReducer2 = ( state = 0, action ) => {
  switch ( action.type ) {
    case "INCREMENT-MICRO2":
      return state + 1;

    default:
      return state;
  }
};

export default counterReducer2;
