import { APP_NAME } from '@/config';

const storagePrefix = `${APP_NAME}_`;

const storage = {
  getToken: () => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}token`) as string,
    );
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  setCurrentGymId: (gymId: string) => {
    localStorage.setItem('CurrentGymId', gymId);
    window.location.reload();
  },
  getCurrentGymId: () => {
    return localStorage.getItem('CurrentGymId') as string;
  },
};

export default storage;
