import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { CharactersComponent } from './characters/characters.component';
import { CanActivateViaAuthGuard } from './auth/login-auth.guard';
import { CharacterComponent } from './character/character.component';
import { ComicComponent } from './comic/comic.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'callback', component: CallbackComponent },
  { path: 'characters', component: CharactersComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'characters/:id', component: CharacterComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'comics', component: ComicsComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'comics/:id', component: ComicComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'creators', component: CreatorsComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: '**', redirectTo: '' }
];
