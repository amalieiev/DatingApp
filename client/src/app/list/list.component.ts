import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    public members = this.membersService.getMembers();

    constructor(private membersService: MembersService) {}

    ngOnInit(): void {
        console.log(this.members);
    }
}
