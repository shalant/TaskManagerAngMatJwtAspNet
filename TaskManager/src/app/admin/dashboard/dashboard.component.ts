import { Component, OnInit } from '@angular/core';
import { exhaustAll } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number= 0;
  UpComingProjects: number= 0;
  ProjectCost: number= 0;
  CurrentExpenditure: number= 0;
  AvailableFunds: number= 0;
  ToDay: Date | undefined;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers:any = [];

  constructor() { }

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects= 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 52536;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();

    this.Clients = [
      "ABC Infotech Ltd.", "DEF Software", "GHI Industries"
    ]

    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ]

    for (var i =2019; i >= 2010; i--)
    {
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 10, TemporaryUnavailableMembers: 1},
      { Region: "West", TeamMembersCount: 20, TemporaryUnavailableMembers: 4},
      { Region: "South", TeamMembersCount: 14, TemporaryUnavailableMembers: 2},
      { Region: "North", TeamMembersCount: 3, TemporaryUnavailableMembers: 4},
    ]

    this.TeamMembers = [
      { Region: "East", Members: [
        { ID: 1, Name: "Ford", Status: "Available"},
        { ID: 2, Name: "Miller", Status: "Available"},
        { ID: 3, Name: "Jones", Status: "Busy"},
        { ID: 4, Name: "James", Status: "Busy"},
      ]},
      { Region: "West", Members: [
        { ID: 1, Name: "Ford", Status: "Available"},
        { ID: 2, Name: "Miller", Status: "Available"},
        { ID: 3, Name: "Jones", Status: "Busy"},
        { ID: 4, Name: "James", Status: "Busy"},
      ]},
      { Region: "South", Members: [
        { ID: 1, Name: "Ford", Status: "Available"},
        { ID: 2, Name: "Miller", Status: "Available"},
        { ID: 3, Name: "Jones", Status: "Busy"},
        { ID: 4, Name: "James", Status: "Busy"},
      ]},
      { Region: "North", Members: [
        { ID: 1, Name: "Ford", Status: "Available"},
        { ID: 2, Name: "Miller", Status: "Available"},
        { ID: 3, Name: "Jones", Status: "Busy"},
        { ID: 4, Name: "James", Status: "Busy"},
      ]},
    ]
  }

  onProjectChange($event: any){
    if($event.target.innerHTML == "Project A"){
      this.ProjectCost = 2113;
      this.CurrentExpenditure = 234523;
      this.AvailableFunds = 543;
    } else if ($event.target.innerHTML == "Project B"){
      this.ProjectCost = 413;
      this.CurrentExpenditure = 523;
      this.AvailableFunds = 543;
    } else if ($event.target.innerHTML == "Project C"){
      this.ProjectCost = 13;
      this.CurrentExpenditure = 23;
      this.AvailableFunds = 43;
    } else if ($event.target.innerHTML == "Project D"){
      this.ProjectCost = 4143;
      this.CurrentExpenditure = 4523;
      this.AvailableFunds = 5443;
    }
  }
}
