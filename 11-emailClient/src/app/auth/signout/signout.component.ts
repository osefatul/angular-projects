import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.signout().subscribe(() => {
      // Navigate to sign in page
      this.router.navigateByUrl("/");
    });
  }
}
