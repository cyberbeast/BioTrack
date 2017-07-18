import { Component, OnInit } from '@angular/core';
import {StringFilter} from "clarity-angular";

class NameFilter implements StringFilter<any> {
    accepts(component: any, search: string):boolean {
        return component.name.toLowerCase().indexOf(search) >= 0;
    }
}

@Component({
  selector: 'biotrack-subjects-components',
  templateUrl: './subjects-components.component.html',
  styleUrls: ['./subjects-components.component.css']
})
export class SubjectsComponentsComponent implements OnInit {
  var = false;
  singleSelected: any[] = [];
  private nameFilter = new NameFilter();

  components = [
    {
      'id': '12345',
      'name': 'namename',
      'location': 'location 1',
      'last_activity_id': '1oiu2223',
    },
    {
      'id': '15333',
      'name': 'A',
      'location': 'location 5',
      'last_activity_id': '1oiu2223'
    },
    {
      'id': '877322',
      'name': 'B',
      'location': 'location 13',
      'last_activity_id': '1oiu2223'
    }
  ]

  headers = [
    {
      'name':'ID',
      'hidden':true
    },
    {
      'name':'Name',
      'hidden':false
    },
    {
      'name':'Location',
      'hidden':false
    },
    {
      'name':'Last Activity ID',
      'hidden':true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
