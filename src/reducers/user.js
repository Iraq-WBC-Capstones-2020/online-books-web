import User from "../models/User";

const userReducer = (user = new User({ isSigned: false }), action) => {
  switch (action.type) {
    case 'SET_USER':
      return new User({ ...action.payload });
    default:
      return user;
  }
};

export default userReducer;
