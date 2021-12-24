import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userData = [
    {
      'org': 'SBI',
      'department': 'marketing analyst',
      'hot_deal': true,
      'time':'18:00',
      'q_type': 'MCQ',
      'date': '21st april',
      'dur': '2hr',
      'time_duration': 'full time', 
      'location': 'bangalore',
      'price': "INR 30,000",
      'new': true
    },
    {
      'org': 'SBI',
      'department': 'marketing analyst',
      'hot_deal': false,
      'time':'18:00',
      'q_type': 'MCQ',
      'date': '21st april',
      'dur': '2hr',
      'time_duration': 'full time', 
      'location': 'bangalore',
      'price': "INR 30,000",
      'new': true
    },
    {
      'org': 'SBI',
      'department': 'marketing analyst',
      'hot_deal': false,
      'time':'18:00',
      'q_type': 'MCQ',
      'date': '21st april',
      'dur': '2hr',
      'time_duration': 'full time', 
      'location': 'bangalore',
      'price': "INR 30,000",
      'new': false
    },
    {
      'org': 'SBI',
      'department': 'marketing analyst',
      'hot_deal': true,
      'time':'18:00',
      'q_type': 'MCQ',
      'date': '21st april',
      'dur': '2hr',
      'time_duration': 'full time', 
      'location': 'bangalore',
      'price': "INR 30,000",
      'new': false
    },
    {
      'org': 'SBI',
      'department': 'marketing analyst',
      'hot_deal': true,
      'time':'18:00',
      'q_type': 'MCQ',
      'date': '21st april',
      'dur': '2hr',
      'time_duration': 'full time', 
      'location': 'bangalore',
      'price': "INR 30,000",
      'new': false
    }  
  ];
  notifications:  Array<any> = [
    {
      'test': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      'time': 'h1'
    },
    {
      'test': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      'time': 'h1'
    },
    {
      'test': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      'time': 'h1'
    },
    {
      'test': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      'time': 'h1'
    },
    {
      'test': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      'time': 'h1'
    },
    {
      'test': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      'time': 'h1'
    },
  ];
  constructor() { }
}
