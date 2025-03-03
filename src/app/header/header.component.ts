import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;
  isBrowser: boolean;
  isLoginPage = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object, private router: Router) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme') || 'light';
      this.isDarkMode = savedTheme === 'dark';
      setTimeout(() => this.applyTheme(), 0); // Ensure it loads properly
    }

    // Detect route changes to check if user is on login page
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url.includes('/login');
      }
    });
  }

  toggleTheme() {
    if (this.isBrowser) {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  applyTheme() {
    if (this.isBrowser) {
      const root = document.documentElement; // Get <html> element
      if (this.isDarkMode) {
        root.classList.add('dark-mode'); // Apply dark mode to <html>
      } else {
        root.classList.remove('dark-mode');
      }
    }
  }

  redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
