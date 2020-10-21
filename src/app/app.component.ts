import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="text-center py-6 flex flex-col items-center">
      <h1 class="text-4xl">Welcome to {{ title }}!</h1>
      <span class="text-gray-600 mb-8">{{ title }} app is running!</span>
      <div class="flex items-center">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="angular"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="text-red-700 w-48 h-auto"
        >
          <path
            fill="currentColor"
            d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"
            class=""
          ></path>
        </svg>
        <span class="text-6xl px-12">+</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 154"
          class="w-48 h-auto"
        >
          <defs>
            <linearGradient
              x1="-2.778%"
              y1="32%"
              x2="100%"
              y2="67.556%"
              id="IconifyId-1754d3836fe-ed85a6-4"
            >
              <stop stop-color="#2298BD" offset="0%" />
              <stop stop-color="#0ED7B5" offset="100%" />
            </linearGradient>
          </defs>
          <path
            d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
            fill="url(#IconifyId-1754d3836fe-ed85a6-4)"
          />
        </svg>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'template-angular-tailwind';
}
