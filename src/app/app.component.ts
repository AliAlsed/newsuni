import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NewsService } from './news.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
const STORAGE_KEY = 'local_user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hide = true;
  title = 'AdminPanel';
  constructor(public afAuth: AngularFireAuth,
    public _NewsService: NewsService, private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService) {

     }
     ngOnInit(): void {
      if (this.storage.get(STORAGE_KEY) == null) {
        this.hide = false;
      } else if (this.storage.get(STORAGE_KEY) != null) {
        this.hide = true;
      }
    }
  logout() {
    this.afAuth.auth.signOut();
    this.storage.set(STORAGE_KEY, null);
    this.router.navigate(['login']);
    this.hide = false;
    }
}
