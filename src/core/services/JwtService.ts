const ID_TOKEN_KEY = "id_token" as string;
const EXP_TOKEN = "exp_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const getExpDt = (): string | null => {
  return window.localStorage.getItem(EXP_TOKEN);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const saveExpDt = (expDate: string): void => {
  window.localStorage.setItem(EXP_TOKEN, expDate);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const destroyExpDt = (): void => {
  window.localStorage.removeItem(EXP_TOKEN);
};

export default {
  getToken,
  saveToken,
  saveExpDt,
  destroyToken,
  destroyExpDt,
  getExpDt,
};
