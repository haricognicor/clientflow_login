import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; // ✅ Import Router and RouterOutlet
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], // ✅ Use RouterOutlet correctly
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {} // ✅ Inject Router

  isLoginPage(): boolean {
    return this.router.url === '/login'; // ✅ Check if current page is Login
  }
}
