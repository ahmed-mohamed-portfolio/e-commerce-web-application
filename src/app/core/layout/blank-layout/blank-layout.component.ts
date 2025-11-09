import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-blank-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {
  // private platformId = inject(PLATFORM_ID);

    
  //   //this is danguerous and problem i need to solve it
  //   if (!isPlatformBrowser(this.platformId)) {
  //     return
  //   }

  private cookieService = inject(CookieService)
  
  isLoged: boolean = false

  ngOnInit(): void {

    
    if (this.cookieService.get("token")) {

      this.isLoged = true;
    }

  }

}
