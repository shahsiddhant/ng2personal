import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class WorksModel {
  public id: string;
  public title: string;
  public description: any[];
  public source: string;

  constructor(sourceObject) {
    this.id = sourceObject.id;
    this.title = sourceObject.title;
    this.source = sourceObject.source;
    this.description = sourceObject.description;
  }
}



@Injectable()
export class DataService {
  public _works: WorksModel[];
  public acid = new WorksModel({
    'id': 'acid',
    'title': 'acid.',
    'description': ['an online web zine that takes a look at art, design and culture.',
      'We talk to contemporary artists about process, motivations and inspirations.'],
    'source': 'https://s3.us-east-2.amazonaws.com/siddhant-design/acid2.png'
  });

  public thesis = new WorksModel({
    'id': 'Thesis',
    'title': 'Thesis',
    'description': ['A day running chores with the work from home dad and his son'],
    'source': 'https://s3.us-east-2.amazonaws.com/siddhant-design/website.jpg'
  });

  public cottageCourage = new WorksModel({
    'id': 'CottageCourage',
    'title': 'Cottage Courage',
    'description': ['6 animated short commercials created for Friendship Dairies for Partners+Napier.',
      'This was created for the brand\'s #CottageCourage campaign'],
    'source': 'https://s3.us-east-2.amazonaws.com/siddhant-design/knight.png'
  });




  constructor() {
    this._works = [this.acid, this.thesis, this.cottageCourage];
  }

  // const observableWorks = new Observable

  public observableWork: Observable<WorksModel[]> = Observable.create((observer) => {
    observer.next(this._works);

    // Testing Observable working with updating data
    // setTimeout(() => {
    //   this._works.push(this.acid);
    // }, 5000);
  });

  public workDetails = Observable.create((observer) => {

  })

  get allWorks(): Observable<WorksModel[]> {
    return this.observableWork;
  }


  getWorkDetailsById(id): Observable<WorksModel> {
    return Observable.create((observer) => {
      observer.next(this._works.find(work => {
        return work.id === id;
      }))
    });
  }
}
