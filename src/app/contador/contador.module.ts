import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    //componentes: invisibles o no públicas
    declarations: [
        ContadorComponent
    ],
    //exportaciones: cosas visibles o públicas
    exports : [
        ContadorComponent
    ]
})
export class ContadorModule {}