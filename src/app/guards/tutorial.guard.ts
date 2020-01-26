import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate {

  constructor(private storage: Storage,
              private router: Router) {
  }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const hasSeen = await this.storage.get('tutorialSeen');

    if (!hasSeen) {
      this.router.navigateByUrl('tutorial');
    }

    return hasSeen;
  }
}
