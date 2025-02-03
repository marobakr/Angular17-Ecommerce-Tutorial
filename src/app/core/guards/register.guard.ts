import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../../pages/register/register.component';

export const registerGuard: CanDeactivateFn<RegisterComponent> = (
  component
) => {
  if (component.registrationForm.valid) {
    const alert = window.confirm('all your data will be lose ');
    return alert;
  } else return true;
};
