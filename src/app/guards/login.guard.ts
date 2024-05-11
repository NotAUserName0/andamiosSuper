
import { afterRender, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const loginGuard: CanActivateFn = (route, state) => {

    const router = inject(Router);
    const cookie = inject(CookieService);

    if (cookie.check('token')) {
      router.navigate(['/'])
      return false;
    } else {
      return true;
    }

};
