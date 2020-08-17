import userTypes from "./user.types";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payoad: user,
});
