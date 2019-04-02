import { Component, Inject, Optional } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { JSONLD } from './token';

@Component({
  selector: 'cky-json-ld',
  template: ``
})
export class CkyJsonLdComponent {
  constructor(
    route: ActivatedRoute,
    router: Router,
    @Optional() @Inject(JSONLD) ldName: string
  ) {
    console.log(ldName);
    router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(e => route.root.firstChild.snapshot.data)
      )
      .subscribe(data => {
        this.setJSON_LD(data[ldName || 'ld'] || '');
      });
  }

  setJSON_LD(value) {
    const schemaContent = value
      ? JSON.stringify(value, null, 2).replace(/<\/script>/g, '<\\/script>')
      : '';
    let script: HTMLScriptElement = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (script == null) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.body.appendChild(script);
    }
    script.innerHTML = schemaContent;

    if (schemaContent.length === 0) {
      document.body.removeChild(script);
    }
  }
}
