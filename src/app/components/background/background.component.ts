import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-0 overflow-hidden">
      <!-- Animated gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/10 animate-gradient"></div>
      
      <!-- Floating shapes -->
      <div class="absolute top-[10%] left-[5%] w-4 h-4 bg-green-500/15 rounded-full animate-float"></div>
      <div class="absolute top-[20%] right-[15%] w-3 h-3 bg-green-500/15 rounded-full animate-float animation-delay-1000"></div>
      <div class="absolute top-[40%] left-[20%] w-2 h-2 bg-green-500/15 rounded-full animate-float animation-delay-2000"></div>
      <div class="absolute top-[60%] right-[25%] w-3 h-3 bg-green-500/15 rounded-full animate-float animation-delay-3000"></div>
      <div class="absolute top-[80%] left-[15%] w-4 h-4 bg-green-500/15 rounded-full animate-float animation-delay-4000"></div>
      <div class="absolute top-[30%] right-[35%] w-2 h-2 bg-green-500/15 rounded-full animate-float animation-delay-5000"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  `,
  styles: [`
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes float {
      0% {
        transform: translateY(0px) translateX(0px);
      }
      50% {
        transform: translateY(-20px) translateX(10px);
      }
      100% {
        transform: translateY(0px) translateX(0px);
      }
    }

    .animate-gradient {
      animation: gradient 15s ease infinite;
      background-size: 200% 200%;
    }

    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    .animation-delay-1000 {
      animation-delay: 1s;
    }

    .animation-delay-2000 {
      animation-delay: 2s;
    }

    .animation-delay-3000 {
      animation-delay: 3s;
    }

    .animation-delay-4000 {
      animation-delay: 4s;
    }

    .animation-delay-5000 {
      animation-delay: 5s;
    }
  `]
})
export class BackgroundComponent {} 