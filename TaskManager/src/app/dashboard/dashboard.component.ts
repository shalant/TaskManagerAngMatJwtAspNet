import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string = "blah";
  Username: string = "blah";
  NoOfTeamMembers: number = 108;
  TotalCostOfAllProjects: number = 108;
  PendingTasks: number= 108;
  UpComingProjects: number= 108;
  ProjectCost: number= 108;

  CurrentExpenditure: number= 108;
  AvailableFunds: number= 108;

  constructor() { }

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects= 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 52536;
    this.AvailableFunds = 52536;
  }

}
