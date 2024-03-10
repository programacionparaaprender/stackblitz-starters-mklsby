
### configuración bootstrap nueva
>- https://www.techiediaries.com/angular-bootstrap/

### error TypeScript compiler options "target" and "useDefineForClassFields" are set to "ES2022" and "false" respectively by the Angular CLI.
>- https://stackoverflow.com/questions/75047760/typescript-target-warnings-after-angular-15-update

### paquetes instalar
>- npm install @angular/platform-browser-dynamic

>- npm install @angular/language-service @types/jasmine": "~3.5.0",
>- npm install @types/jasminewd2 @types/node angular-cli-ghpages codelyzer jasmine-core jasmine-spec-reporter karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter protractor ts-node tslint
>- npm install @agm/core@1.1.0
>- npm install bootstrap
>- npm install @angular/material
>- npm install jquery
>- npm install popper.js --save
>- npm install @ng-bootstrap/ng-bootstrap

### error
>- https://www.tutsmake.com/angular-17-install-add-bootstrap-5-example/#google_vignette

npm ls | select-string typescript

### ejemplo de geocerca

ng new mi-pagina-web2


### actualizar versión de angular sin errores
npm uninstall -g @angular/cli 
npm cache clean
npm install -g @angular/cli@latest


### realizar publicación en apache tomcat
1 con powershell node .\node_modules\@angular\cli\bin\ng build --base-href="/mi-pagina-web2/" --output-path="tomcat_publish/salida" 
2 abrir la carpeta salida ruta frontend/tomcat_publish/
3 copiar la carpeta WEB-INF dentro de salida ruta frontend/tomcat_publish/salida/
4 dentro de frontend/tomcat_publish/salida gitbash(unix, linux) si usas java 7 'C:\Program Files\Java\jdk1.7.0_80\bin\jar.exe' cvf mi-pagina-web2.war *
5 copiar mi-pagina-web2.war y pegar en otra ruta para que no se borre, se encuentra en frontend/tomcat_publish/salida/


#### pendiente
https://angular-maps.com/guides/getting-started/
https://angular-maps.com/api-docs/agm-core/directives/agmpolygon
npm install @agm/core
#### si da error
https://github.com/DefinitelyTyped/DefinitelyTyped/issues/48574
npm install @types/googlemaps@3.39.12 --save-dev
npm install @agm/core --save
aun no funciona
probar para el evento clic
https://github.com/SebastianM/angular-google-maps/issues/1845
npm install @agm/core@1.1.0 --save

ng generate component geocerca-google

npm i @angular/material@9.2.1
npm install @angular/cdk

npm install rxjs
npm install ngrx-store-persist

npm install @angular/http
npm install @types/axios
npm install angular-cli-ghpages
npm install axios

npm install @ngrx/store@9.1.0
npm install @ngrx/store-devtools@9.1.0

npm install jquery
error https://stackoverflow.com/questions/50943024/bootstrap-not-working-with-my-angular-project
se corrije en angular.json
en "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]


### ejemplo de geocerca teoria
https://developers.google.com/location-context/geofencing/


## instalar bootstrap en angular
https://www.itsolutionstuff.com/post/install-bootstrap-4-in-angular-9-how-to-add-bootstrap-in-angular-9example.html


## Actualizar angular
https://update.angular.io/
borrar el node_modules

### bootstrap 4
https://bootstrap-menu.com/_bootstrap4/detail-multilevel.html

ng new angularoutes2
angular-route
axios
ng serve
ng generate component product-list
--luego de crear registrar en app modules

## Routes en Angular 8
https://www.techiediaries.com/angular-router/
https://www.techiediaries.com/angular-routing-tutorial/


# Redux
https://www.youtube.com/watch?v=uLZ-_4_qlPg


 ng generate component reducers-component

ng generate component products-component


### Api Rest Angular 8
npm install --save angular-in-memory-web-api
$ ng generate service data
$ ng generate service product 
Next, open the src/app/product.service.ts

ng generate class product

$ ng generate component product-list
$ ng generate component product-detail

### publicar en github
https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4

npm i angular-cli-ghpages --save-dev

ng build --prod --base-href "https://programacionparaaprender.github.io/mi-pagina-web2/"

ng deploy --base-href=https://programacionparaaprender.github.io/mi-pagina-web2/


npx angular-cli-ghpages —dir=dist/mi-pagina-web2

ng build --base-href=/mi-pagina-web2/

ng build --base-href=/

### pasos para publicar con angular-cli-ghpages
https://www.npmjs.com/package/angular-cli-ghpages
ng add angular-cli-ghpages@next
si no funciona
ng add angular-cli-ghpages
npm install angular-cli-ghpages@1.0.0-rc.1


ng add @angular/fire
  ng add @azure/ng-deploy
  ng add @zeit/ng-deploy

ahora ya finalizado cmd git
npm run github

hacer todo desde git batch

https://stackoverflow.com/questions/66127492/error-in-exceeded-maximum-budget-for-e-project
error angular.json modificar
"budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "6mb",
                  "maximumError": "7mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "6mb",
                  "maximumError": "7mb"
                }


ng deploy --repo=https://github.com/programacionparaaprender/mi-pagina-web2.git

este siempre ejecutarlo para generar ->

ng deploy --base-href=https://programacionparaaprender.github.io/mi-pagina-web2/

ejecutar siempre desde git cmd npm run github

luego ya tienes el dist listo


crear el gh-pages


pero los cambios los subes a la rama master


no colocar un readme.md

corrección error ERROR in Exceeded maximum budget for app.component.css. Budget 10 kB was not met by 132 kB with a total of 142 kB.


https://stackoverflow.com/questions/53995948/warning-in-budgets-maximum-exceeded-for-initial


### Estados persistentes
https://www.npmjs.com/package/ngrx-store-persist



### Peticiones más sencillas
https://www.npmjs.com/package/axios
npm install @types/axios
npm install --save axios






### Pediente el login
https://ngrx.io/guide/store/selectors
https://angular-2-training-book.rangle.io/state-management/ngrx/reading_your_application_state_using_selectors








