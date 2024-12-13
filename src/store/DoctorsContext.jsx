import { createContext } from 'react';

export const DoctorsContext = createContext({
  doctors: [],
  setDoctors: () => {},
});
