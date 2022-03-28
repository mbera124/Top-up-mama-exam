const TOKEN_KEY = "jwt";

export const login = (params) => {
  localStorage.setItem(TOKEN_KEY, params);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};

export const refreshToken = () => {
  localStorage.getItem("jwt");
};
