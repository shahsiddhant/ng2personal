import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public works = [{
    "title": "Testing 01",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
  },
  {
    "title": "Testing 02",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing eli123"]
  },
  {
    "title": "Testing 03",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing el5345."]
  }]
  constructor() { }

  ngOnInit() {
  }

}
