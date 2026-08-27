import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('LoginInfo') == null) 
    return false;  
  else
    return true;
};
