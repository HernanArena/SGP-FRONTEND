
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { SearchcodeComponent } from './searchcode/searchcode.component';

const pagesRoutes: Routes = [
    { path: 'escritorio',
     component: DashboardComponent,
     data:{ titulo:"Escritorio" }
    },
    { path: 'busqueda',
     component: SearchComponent,
     data:{ titulo:"Búsqueda avanzada",
            descrip:"Elija la versión de Softland, módulo y objeto, si es necesario indique el componente Dll"}
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
            descrip:"Si no encuentra los resultados que busca vuelva a la pantalla anterior"}
    },
    {
      path: '',
      pathMatch: 'full',
      // canActivate:[VerificaTokenGuard],
      redirectTo: '/panel'
    }
];
export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
