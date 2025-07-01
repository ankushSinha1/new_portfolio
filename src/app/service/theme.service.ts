import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(true);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Check for saved theme preference or system preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkTheme.next(savedTheme === 'dark');
        if (savedTheme === 'light') {
          document.documentElement.classList.add('light-theme');
        }
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkTheme.next(prefersDark);
      }
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const newTheme = !this.isDarkTheme.value;
      this.isDarkTheme.next(newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      document.documentElement.classList.toggle('light-theme');
    }
  }

  isDark() {
    return this.isDarkTheme.asObservable();
  }
} 