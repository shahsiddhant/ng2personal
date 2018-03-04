import { Component, OnInit } from '@angular/core';
import { WorksModel, DataService } from '../shared/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public works: Observable<WorksModel[]>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.works = this.dataService.allWorks;
  }

}
