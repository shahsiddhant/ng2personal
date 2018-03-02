import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public works = [{
    'id': 'acid',
    'title': 'acid.',
    'description': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
    'source': 'https://s3.us-east-2.amazonaws.com/siddhant-design/acid2.png'
  },
  {
    'id': 'Thesis',
    'title': 'Animation Thesis',
    'description': ['Lorem ipsum dolor sit amet, consectetur adipiscing eli123'],
    'source': 'https://s3.us-east-2.amazonaws.com/siddhant-design/website.jpg'
  },
  {
    'id': 'CottageCourage',
    'title': 'Cottage Courage',
    'description': ['Lorem ipsum dolor sit amet, consectetur adipiscing el5345.'],
    'source': 'https://s3.us-east-2.amazonaws.com/siddhant-design/knight.png'
  }]
  constructor() { }

  ngOnInit() {
  }

}
