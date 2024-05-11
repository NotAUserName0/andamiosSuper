import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { lastValueFrom } from 'rxjs';

export const appGuard: CanActivateFn = async (route, state) => {
  const user = inject(AdminService)
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
  }

};
