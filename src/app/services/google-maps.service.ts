//google-maps.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private isLoaded = false;

  loadAPI(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this.isLoaded) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD4xDXk6sHTvzgKY7rTb3SRGuKjg-xbgIo&libraries=places';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.isLoaded = true;
        resolve();
      };

      document.head.appendChild(script);
    });
  }
}
