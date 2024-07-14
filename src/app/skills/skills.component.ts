import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports:[ProgressBarModule,CommonModule],
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
  {
    skillName: 'REACT',
  skillPercent: 90
  },  {
    skillName: 'SQL',
  skillPercent: 90
  },
]

width:number=45;
}
