import {
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
  UserResponse,
  getUser,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '@/features/auth';
import { configureAuth } from '@/lib/react-query-auth';
import storage from '@/utils/storage';

async function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn: () => loadUser(),
  loginFn: (data) => loginFn(data as LoginCredentialsDTO),
  registerFn: (data) =>
    registerFn(data as RegisterCredentialsDTO),
  logoutFn: () => logoutFn(),
});
