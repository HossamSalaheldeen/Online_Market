import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isopen: boolean = false;
  isuser: boolean = false;
  constructor(public as: AuthService) { }

  ngOnInit(): void {
    this.as.user.subscribe( user => {
      if(user) {
        this.isuser = true;
        this.as.userId = user.uid;
      }
      else {
        this.isuser = false;
        this.as.userId = '';
      }
    })
  }

  toggleNavbar() {
    this.isopen = !this.isopen;
  }

  logOut() {
    this.as.logout().then(() => console.log('out'))
  }
}
