import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public form: FormGroup;
  public submitted: boolean;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.authService.signIn(this.form.value)
      .then(() => this.router.navigateByUrl('tabs'))
      .catch(async () => {
        const toast = await this.toastController.create({
          message: 'Credentials are invalid',
          duration: 3000,
          position: 'top',
          color: 'danger'
        });
        toast.present();
      });
  }

  public signInWithGoogle() {
    this.authService.googleAuth();
  }
}
