import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: any = null;
  
  constructor(private projectsService: ProjectsService) 
  {
  }

  ngOnInit(): void 
  {
    this.projectsService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      }
    );
  }

  onSaveClick(){
    this.projectsService.insertProject(this.newProject).subscribe((response) => {
      // add project to grid
      var p: Project = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects.push(p);

      // clear new project dialog - text boxes
      this.newProject.projectID = null;
      this.newProject.projectName = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
    }, (error) => {
      console.log(error);
    });
  }

onEditClick(event: any, index: number) {
  this.editProject.projectID = this.projects[index].projectID;
  this.editProject.projectName = this.projects[index].projectName;
  this.editProject.dateOfStart = this.projects[index].dateOfStart;
  this.editProject.teamSize = this.projects[index].teamSize;
  this.editIndex = index;
}

onUpdateClick(){
  this.projectsService.updateProject(this.editProject).subscribe((response: Project) => {
    var p: Project = new Project();
    p.projectID = response.projectID;
    p.projectName = response.projectName;
    p.teamSize = response.teamSize;
    p.dateOfStart = response.dateOfStart;
    this.projects[this.editIndex] = p;

    this.editProject.projectID = null;
    this.editProject.projectName = null;
    this.editProject.dateOfStart = null;
    this.editProject.teamSize = null;
  }, () => {});
}

}
