import { Component, OnInit  } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Dish } from './dish.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  dishes$: Dish[];
  constructor(private dataService: DataService) {

  }

  ngOnInit(){
    return this.dataService.getDishes()
    .subscribe(data => this.dishes$ = data); 
  }
  


}
