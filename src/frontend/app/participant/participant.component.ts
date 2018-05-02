import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Messages } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  messages: Messages[];  
  participant: string;

  constructor(
    private route: ActivatedRoute,
    private messagesService: MessagesService
  ) { 
    this.route.params.subscribe(res => this.participant = res.participant);
  }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(): void {
    this.messagesService.getMessage(this.participant)
    .subscribe(messages => {
      this.messages = messages;
    });
  }

}
