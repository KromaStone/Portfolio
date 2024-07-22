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
  skillPercent: 90
  },{
    skillName: 'CSS',
  skillPercent: 85
  },{
    skillName: 'ANGULAR',
  skillPercent: 80
  },{
    skillName: 'ASP .NET',
  skillPercent: 70
  },
  {
    skillName: 'REACT',
  skillPercent: 72
  },  {
    skillName: 'SQL',
  skillPercent: 70
  },
]

width:number=45;
}
