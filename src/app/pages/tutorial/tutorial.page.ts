import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  @ViewChild(IonSlides, {static: true}) slides: IonSlides;

  constructor(private storage: Storage,
              private router: Router) { }

  ngOnInit() {
  }

    next() {
      this.slides.slideNext();
    }

  async finish() {
    await this.storage.set('tutorialSeen', true);
    this.router.navigateByUrl('login');
  }
}
