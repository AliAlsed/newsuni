import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit, Inject } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
const STORAGE_KEY = 'local_user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,
    public _NewsService: NewsService, private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
  }
  signIn(f ) {
    console.log('' + f.value.email);
    this._NewsService.login(f.value.email, f.value.password).then( (user) => {
      this.storage.set(STORAGE_KEY, this.afAuth.auth.currentUser);
        console.log(this.storage
           .get(STORAGE_KEY) || 'LocaL storage is empty');
      this.router.navigate(['homeapp']);
    }, (err) => {
      alert( err );
    });
  }

}
