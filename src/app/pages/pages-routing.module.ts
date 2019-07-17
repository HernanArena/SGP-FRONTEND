
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { SearchcodeComponent } from './searchcode/searchcode.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

const pagesRoutes: Routes = [
    { path: 'escritorio',
     component: DashboardComponent,
     data:{ titulo:"Escritorio" }
    },
    { path: 'busqueda',
     component: SearchComponent,
     data:{ titulo:"Búsqueda de partes",
            descrip:"Ingrese los siguientes describiendo el error. En caso de contar con soluciones liberadas que coincidan con su búsqueda, se mostrarán sus resultados."}
    },
    { path: 'panel',
     component: HomeComponent,
     data:{ titulo:"Panel de consulta",
            descrip:"Seleccione una opción para comenzar su consulta"}
    },
    { path: 'controlados',
     component: SearchcodeComponent,
     data:{ titulo:"Busqueda por código",
            descrip:"Seleccione un error de la siguiente lista"}
    },
    { path: 'resultados',
     component: ResultsComponent,
     data:{ titulo:"Resultados de búsqueda",
            descrip:"A continuación se muestran los resultados para el error informado. En caso de no encontrar la solución a su inconveniente, avanzará a la carga del parte."}
    },
    { path: 'new-ticket',
     component: NewTicketComponent,
     data:{ titulo:"Alta de nuevo parte",
            descrip:"Formulario de alta de parte"}
    },
    {
      path: '',
      pathMatch: 'full',
      // canActivate:[VerificaTokenGuard],
      redirectTo: '/panel'
    }
];
export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
