import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';



const APP_ROUTING: Routes = [
    {path: 'cv', children: [
        {path: '', component: CvComponent, canActivate: [LoginGuard]},
        {path: 'add', component: AddCvComponent, canActivate: [LoginGuard]},
         {path: 'updateCv/:id', component: UpdateCvComponent}, 
        {path: ':id', component: DetailComponent, canActivate: [LoginGuard]},
    ]},
 
    {path: '', component: CvComponent},
    {path: 'color/:default', component: ColorComponent},
    {path: 'login', component: LoginComponent, canActivate:[LogoutGuard]},
    {path: '**', component: ErrorComponent},
];


export const ROUTING = RouterModule.forRoot(APP_ROUTING);
   
