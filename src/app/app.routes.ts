import { Routes } from '@angular/router';


import { InicioComponent } from './inicio/inicio.component';
import { MacetasComponent } from './material/macetas/macetas.component';
import { AbonosComponent } from './material/abonos/abonos.component';
import { HerramientasComponent } from './material/herramientas/herramientas.component';
import { ArbolesComponent } from './material/arboles/arboles.component';
import { IniciarSesionComponent } from './login/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './login/registro/registro.component';
import { EliminarComponent } from './login/eliminar/eliminar.component';
import { ActualizarComponent } from './login/actualizar/actualizar.component';

export const routes: Routes = [
    {path: "login", component: IniciarSesionComponent},
    {path: "registro", component: RegistroComponent},
    {path: "eliminar", component: EliminarComponent},
    {path: "actualizar", component: ActualizarComponent},
    {path: "", component: InicioComponent},
    {path: "inicio", component: InicioComponent},
    {path: "material/macetas", component: MacetasComponent},
    {path: "material/abonos", component: AbonosComponent},
    {path: "material/herramientas", component: HerramientasComponent},
    {path: "material/arboles", component: ArbolesComponent}
];
