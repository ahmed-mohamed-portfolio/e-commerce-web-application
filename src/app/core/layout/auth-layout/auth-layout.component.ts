import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})

export class AuthLayoutComponent {

  private cookieService = inject(CookieService)
  
  isLoged: boolean = false

  ngOnInit(): void {

    
    if (this.cookieService.get("token")) {

      this.isLoged = false;
    }

  }

}
