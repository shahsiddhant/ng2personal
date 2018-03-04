import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  private id
  public details
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe((res) => {
      this.id = res.id;
      this.dataService.getWorkDetailsById(this.id).subscribe(res => {
        this.details = res;
      });
    });
  }

}
