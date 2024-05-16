import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { lastValueFrom } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export const appGuard: CanActivateFn = (route, state) => {
  /*const user = inject(AdminService)
  const router = inject(Router);

  try{

    const api = await lastValueFrom(user.verificarToken())

    if(api['message'] === 'true'){
      return true;
    } else{
      router.navigate(['/login'])
      return false;
    }

  }catch(e){
    router.navigate(['/login'])
    return false;
  }*/

  const cookie = inject(CookieService)
  const router = inject(Router)

  if(!cookie.check('token')){
    setTimeout(() => {
      router.navigateByUrl('/login')
    }, 500)
    return false
  } else{
    return true;
  }

};
