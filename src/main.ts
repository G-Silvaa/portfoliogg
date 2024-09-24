import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { register as RegisterSwiperElements } from 'swiper/element/bundle';
import { AppModule } from './app/app.module';


RegisterSwiperElements();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
