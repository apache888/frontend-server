
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './parts/page-not-found/page-not-found.component';
import {WelcomeComponent} from './parts/welcome/welcome.component';

const routes: Routes = [
  {path: 'index', component: WelcomeComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    { enableTracing: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
