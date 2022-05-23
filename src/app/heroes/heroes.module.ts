import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //componentes: invisibles o no públicas
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //exportaciones: cosas visibles o públicas
    exports : [
        ListadoComponent
    ],
    //módulos
    imports : [
        CommonModule
    ]
})
export class heroesModule {}