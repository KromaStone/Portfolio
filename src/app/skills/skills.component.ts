import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatProgressBarModule,CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
skills =[
  {
    skillName: 'HTML',
  skillPercent: 45
  },{
    skillName: 'CSS',
  skillPercent: 89
  },{
    skillName: 'ANGULAR',
  skillPercent: 80
  },{
    skillName: 'ASP .NET',
  skillPercent: 60
  },
]

width:number=45;
}
