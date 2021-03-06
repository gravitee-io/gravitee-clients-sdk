## Gravitee Portal Web Client

### Generating

```
npm install @openapitools/openapi-generator-cli@1.0.12-4.2.1 -g

npx openapi-generator generate \
-i ../gravitee-management-rest-api/gravitee-rest-api-portal/gravitee-rest-api-portal-rest/src/main/resources/openapi.yaml \
-g typescript-angular -c ng-portal-webclient.yaml -pmodelPropertyNaming=original -puseSingleRequestParameter=true
```

Fix generation [BUG](https://github.com/OpenAPITools/openapi-generator/issues/2154) for files
 - `api/analytics.service.ts`
 - `api/application.service.ts`
 - `api/api.ts`
 
### Building

To install the required dependencies and to build the typescript sources run:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish dist` (don't forget to specify the dist folder!)

### Consuming

Navigate to the folder of your consuming project and run one of next commands.

_published:_

```
npm install gravitee-io/gravitee-clients-sdk --save
```

_without publishing (not recommended/just for dev locally):_

```
npm install PATH_TO_GENERATED_PACKAGE/dist.tgz --save
```

You can use task `publish:local` to build and create tgz to `/tmp/gravitee-ng-portal-webclient.tgz`

_It's important to take the tgz file, otherwise you'll get trouble with links _

__Note for Windows users:__ The Angular CLI has troubles to use linked npm packages.
Please refer to this issue https://github.com/angular/angular-cli/issues/8284 for a solution / workaround.
Published packages are not effected by this issue.


#### General usage

In your Angular project:


```
// without configuring providers
import { ApiModule } from '@gravitee/ng-portal-webclient';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        ApiModule,
        // make sure to import the HttpClientModule in the AppModule only,
        // see https://github.com/angular/angular/issues/20575
        HttpClientModule
    ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
// configuring providers
import { ApiModule, Configuration, ConfigurationParameters } from '@gravitee/ng-portal-webclient';

export function apiConfigFactory (): Configuration => {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
  }
  return new Configuration(params);
}

@NgModule({
    imports: [ ApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
import { DefaultApi } from '@gravitee/ng-portal-webclient';

export class AppComponent {
	 constructor(private apiGateway: DefaultApi) { }
}
```

Note: The ApiModule is restricted to being instantiated once app wide.
This is to ensure that all services are treated as singletons.

#### Using multiple OpenAPI files / APIs / ApiModules
In order to use multiple `ApiModules` generated from different OpenAPI files,
you can create an alias name when importing the modules
in order to avoid naming conflicts:
```
import { ApiModule } from 'my-api-path';
import { ApiModule as OtherApiModule } from 'my-other-api-path';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    ApiModule,
    OtherApiModule,
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule
  ]
})
export class AppModule {

}
```


### Set service base path
If different than the generated base path, during app bootstrap, you can provide the base path to your service. 

```
import { BASE_PATH } from '@gravitee/ng-portal-webclient';

bootstrap(AppComponent, [
    { provide: BASE_PATH, useValue: 'https://your-web-service.com' },
]);
```
or

```
import { BASE_PATH } from '@gravitee/ng-portal-webclient';

@NgModule({
    imports: [],
    declarations: [ AppComponent ],
    providers: [ provide: BASE_PATH, useValue: 'https://your-web-service.com' ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```


#### Using @angular/cli
First extend your `src/environments/*.ts` files by adding the corresponding base path:

```
export const environment = {
  production: false,
  API_BASE_PATH: 'http://127.0.0.1:8080'
};
```

In the src/app/app.module.ts:
```
import { BASE_PATH } from '@gravitee/ng-portal-webclient';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```  
