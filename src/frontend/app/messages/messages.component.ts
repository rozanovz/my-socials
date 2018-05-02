import { Component, OnInit } from '@angular/core';
import { Participants } from '../../models/participants';
import { MessagesService } from '../../services/messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  participants: Participants[];

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(): void {
    this.messagesService.getParticipants()
      .subscribe(participants => this.participants = participants);
  }

}
