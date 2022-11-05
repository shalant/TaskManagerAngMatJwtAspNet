import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService 
{
  getTeamMembersSummary(): any[]
  {
    var TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 10, TemporaryUnavailableMembers: 1},
      { Region: "West", TeamMembersCount: 20, TemporaryUnavailableMembers: 4},
      { Region: "South", TeamMembersCount: 14, TemporaryUnavailableMembers: 2},
      { Region: "North", TeamMembersCount: 3, TemporaryUnavailableMembers: 4},
    ];
    return TeamMembersSummary;
  } 
   

}
