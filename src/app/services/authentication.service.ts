import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserModel } from '../models';

// https://www.positronx.io/ionic-firebase-authentication-tutorial-with-examples/

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userData: UserModel;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  public signIn(user: { email: string, password: string }) {
    return this.ngFireAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  public registerUser(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // public SendVerificationMail() {
  //   return this.ngFireAuth.currentUser.sendEmailVerification()
  //     .then(() => {
  //       this.router.navigate(['verify-email']);
  //     });
  // }

  public async passwordRecover(passwordResetEmail: string) {
    try {
      await this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email has been sent, please check your inbox.');
    }
    catch (error) {
      window.alert(error);
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  public async authLogin(provider: auth.AuthProvider) {
    try {
      const result = await this.ngFireAuth.signInWithPopup(provider);
      this.ngZone.run(() => {
        this.router.navigate(['tabs']);
      });
      this.setUserData(result.user);
    }
    catch (error) {
      window.alert(error);
    }
  }

  setUserData(userData: UserModel) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${userData.uid}`);

    return userRef.set(userData, {
      merge: true
    });
  }

  public async signOut() {
    await this.ngFireAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
