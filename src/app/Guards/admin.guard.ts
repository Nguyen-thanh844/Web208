import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const role:string = 'admin';
  if (role === 'admin') {
  return true;
  }
  else {
    return  false;
  }
};
