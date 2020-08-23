const userReducer = (user = { isSigned: false }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return user;
  }
};

export default userReducer;
