import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectList = [
    {
      backgroundImage: 'images/responsiveWebDesign.jpg',
      heading: 'Responsive Web Design',
      description: 'Responsive Web Design ensures websites adapt to various devices and screen sizes using flexible layouts, grids, and CSS media queries.',
      icon: 'fa-solid fa-share-from-square',
    },
    {
      backgroundImage: 'images/performanceOpti.jpeg',
      heading: 'Performance Optimization',
      description: 'Performance Optimization improves site speed by reducing load times, optimizing assets, and employing techniques like caching, compression, and code minification.',
      icon: 'fa-solid fa-share-from-square',
    },
    {
      backgroundImage: 'images/databaseManagement.png',
      heading: 'Database Management',
      description: 'Database Management involves organizing, storing, and retrieving data efficiently while ensuring data integrity, security, and scalability for applications.',
      icon: 'fa-solid fa-share-from-square',
    },
    {
      backgroundImage: 'images/serverSideLogic.jpeg',
      heading: 'Server Side Logic',
      description: 'Server Side Logic manages data, executes business rules, and handles user requests on the server for efficient web application operations.',
      icon: 'fa-solid fa-share-from-square',
    },
    {
      backgroundImage: 'images/APIDevelopmentandIntegration.jpeg',
      heading: 'API Development and Integration',
      description: 'API Development and Integration involve creating interfaces to connect software systems, enabling seamless communication and data exchange across applications.',
      icon: 'fa-solid fa-share-from-square',
    },
    {
      backgroundImage: 'images/authenticationandAuthorization.jpeg',
      heading: 'Authentication and Authorization',
      description: 'Authentication verifies user identity, while authorization determines access rights, ensuring secure and controlled user interactions within systems and applications.',
      icon: 'fa-solid fa-share-from-square',
    },
  ];
}
