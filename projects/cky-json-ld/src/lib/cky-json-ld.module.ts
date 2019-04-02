import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CkyJsonLdComponent } from './cky-json-ld.component';
import { JSONLD } from './token';

@NgModule({
  declarations: [CkyJsonLdComponent],
  imports: [RouterModule],
  exports: [CkyJsonLdComponent]
})
export class CkyJsonLdModule {
  static forRoot(jsonLd = 'ld'): ModuleWithProviders {
    return {
      ngModule: CkyJsonLdModule,
      providers: [{ provide: JSONLD, useValue: jsonLd }]
    };
  }
}
