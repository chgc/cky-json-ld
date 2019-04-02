# @ckylib/json-ld

A small component to easily generate JSON-LD schema to index.html from route config.

# Usage

- app.module.ts

  ```typescript
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { CkyJsonLdModule, CkyJsonLdComponent } from '@ckylib/json-ld';
  ...

  const routes: Routes = [
    {
      path: 'demo1',
      component: Demo1Component
      data: {
        ld: {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          name: 'DemoSite',
          url: 'https://www.example.com'
        }
      }
    },
    {
      path: 'demo2',
      component: Demo2Component,
    },
    { path: '**', redirectTo: '/demo1', pathMatch: 'full' }
  ];

  @NgModule({
    declarations: [...],
    imports: [BrowserModule, RouterModule.forRoot(routes), CkyJsonLdModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent, CkyJsonLdComponent]
  })
  export class AppModule {}

  ```

* index.html，add another component

  ```html
  <body>
    <app-root></app-root>
    <!-- add this line -->
    <cky-json-ld></cky-json-ld>
  </body>
  ```

# API

By default, json-ld component will use key `ld` in route data, it can be changed by using `forRoot(<name>)`

```typescript
CkyJsonLdModule.forRoot('schema');
```

# License

MIT © [CKY](https://twitter.com/yoKevinYang)
