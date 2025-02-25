import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const myLoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const spiner = inject(NgxSpinnerService);
  spiner.show();
  return next(req).pipe(
    finalize(() => {
      spiner.hide();
    })
  );
};
