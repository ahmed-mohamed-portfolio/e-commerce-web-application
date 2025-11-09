import { Component, inject, PLATFORM_ID } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blank-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {
  private platformId = inject(PLATFORM_ID);

    


  private cookieService = inject(CookieService)
  
  isLoged: boolean = false

  ngOnInit(): void {

    //this is danguerous and problem i need to solve it
    if (!isPlatformBrowser(this.platformId)) {
            this.isLoged = true;
            return
    }
    
    if (this.cookieService.get("token")) {

      this.isLoged = true;
    }

  }

}
