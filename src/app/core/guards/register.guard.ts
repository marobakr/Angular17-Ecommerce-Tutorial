import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../../pages/register/register.component';

export const registerGuard: CanDeactivateFn<RegisterComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (!component.isRegisterd && component.registrationForm.valid) {
    const alert = window.confirm('your data will be lose');
    return alert;
  }
  return true;
};
