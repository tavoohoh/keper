import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserModel } from 'src/app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: UserModel;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authService.userDataAsObservable().subscribe((user) => {
      this.user = user;
    });
  }

  public logout(): void {
    this.authService.signOut();
  }
}
