import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public as: AuthService, public router: Router) { }

  ngOnInit(): void {

  }

  logIn(form) {
    let data = form.value;
    this.as.login(data.email, data.password)
    .then(() => {
      this.router.navigate(['/']);
    })
  }

}
