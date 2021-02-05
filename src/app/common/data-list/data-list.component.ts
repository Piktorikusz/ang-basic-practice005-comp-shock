import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  constructor() { }

  @Input() dataList: User[] = [];

  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();


  ngOnInit(): void {
  }
  
  onSelectButtonClick(user:User ): void {
    this.selectClick.emit(user);
  }

  onUpdateButtonClick(user:User): void {
    this.updateClick.emit(user);
  }
  
  onDeleteButtonClick(user:User ): void {
    this.deleteClick.emit(user);
  }
}
