import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-deleteview',
  templateUrl: './deleteview.component.html',
  styleUrls: ['./deleteview.component.css']
})
export class DeleteviewComponent implements OnInit,  AfterViewInit {
  Data: any;
  newsList: Observable<any[]>;
  constructor(private firestoreService: NewsService, public router: Router) {
   }

  ngOnInit() {
    this.newsList = this.firestoreService.getNews().valueChanges();

    console.log(this.newsList);
  }
  ngAfterViewInit(): void {
    this.newsList.subscribe( data => {
      console.log(data);
      this.Data = data;
    });
  }
  del(item) {
    this.firestoreService.deleteNews(item).then( () => {
      alert('deleted successfully');
    });
  }

}
