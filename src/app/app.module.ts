import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxImgZoomModule } from "ngx-img-zoom";

import { getBaseUrl } from "./shared/services/config";
import { HeadersInterceptor } from '../assets/helper/headers.interceptor';

import { ImageCropperModule } from 'ngx-image-cropper';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    SharedModule,NgxImgZoomModule,ImageCropperModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: "BASE_URL", useFactory: getBaseUrl },{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
