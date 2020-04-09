import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.css']
})
export class VoteButtonsComponent {

  @Output() voteValue = new EventEmitter<number>();


}
