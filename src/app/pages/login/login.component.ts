import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ILogin } from '../../core/interfaces/http';
import { AuthService } from '../../core/service/auth.service';
import { NotifecationsService } from '../../core/service/notifecations.service';
import { UserDataService } from '../../core/service/user-data.service';
import { SharedModule } from '../../shared/module/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  email!: FormControl;
  password!: FormControl;
  loginForm!: FormGroup;

  constructor(
    private authService_: AuthService,
    private _notifecationsService: NotifecationsService,
    private _ngxSpinnerService: NgxSpinnerService,
    private router: Router,
    private _userData: UserDataService
  ) {
    this.initFormControls();
    this.initFormGroupe();
  }

  initFormControls(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
  }

  initFormGroupe(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.siginIn(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
      Object.keys(this.loginForm.controls).forEach((control) =>
        this.loginForm.controls[control].markAsDirty()
      );
    }
  }

  siginIn(data: ILogin): void {
    this._ngxSpinnerService.show();
    this.authService_.login(data).subscribe({
      next: (response) => {
        if (response._id) {
          this._notifecationsService.showSuccess('success', 'success login');
          localStorage.setItem('token', response._id);
          this._userData.userName.next(response.name);
          localStorage.setItem('username', response.name);
        }
        this._ngxSpinnerService.hide();
        this.router.navigate(['home']);
      },
      error: (err) => {
        this._notifecationsService.showError('Error', err.error.error);
        this._ngxSpinnerService.hide();
      },
    });
  }
}
