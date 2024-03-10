import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  data: any[] = [];
  headArray = [
    'id',
    'age',
    'dob',
    'email',
    'salary',
    'address',
    'imageUrl',
    'lastName',
    'firstName',
    'contactNumber',
  ];
  sortByAgeAndName() {
    this.data.sort((a, b) => {
      if (a.age === b.age) {
        return a.lastName.localeCompare(b.lastName);
      }
      return a.age - b.age;
    });
  }

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;

        this.sortByAgeAndName();
        console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
