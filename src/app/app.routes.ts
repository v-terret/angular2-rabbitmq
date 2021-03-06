import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { NoContent } from './no-content';
import { TodosComponent } from './todos';

export const routes: RouterConfig = [
  { path: '',       component: TodosComponent },
  { path: 'todos',  component: TodosComponent },
  // make sure you match the component type string to the require in asyncRoutes
  { path: '**',    component: NoContent },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly
export const asyncRoutes: AsyncRoutes = {
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<Es6PromiseLoader | Function> = [
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
