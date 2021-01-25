import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


// Import componentes
import { InicioComponent } from '../pages/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from '../pages/shared/pagina-no-encontrada/pagina-no-encontrada.component';
import { HeroesComponent } from '../pages/heroes/heroes.component';



const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'heroes', component: HeroesComponent },
   // { path: 'hola', component: HeroesComponent },
   // { path: 'HOLA', component: HeroesComponent },
    { path: '**', component: PaginaNoEncontradaComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class appRouting {}
