import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectsService {
  
  id:number;
  title:string;
  description:string;
  subject:string;
  liveLink:string;
  gitHubLink:string;

  constructor() { }


public projectData:Array<Object>= [
    {id: 1, title: 'Sentence 1', description:'', link:'', subject:'', liveLink:'', gitHubLink:''},
    {id: 2, title: 'Sentence 2', description:'', link:'', subject:'', liveLink:'', gitHubLink:''},
    {id: 3, title: 'Sentence 3', description:'',link: '', subject:'', liveLink:'', gitHubLink:''},
    {id: 4, title: 'Sentenc 4', description:'', link: '', subject:'', liveLink:'', gitHubLink:''},
];

}
