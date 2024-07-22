import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
projectList=[
  {
    title:"Weather App",
    description:'I have developed a web application using Angular, leveraging TypeScript, HTML, and CSS for the front-end implementation. The application integrates a API sourced from RapidAPI.com to enhance its functionality. Upon searching for a location, the application displays weather details for the specified city, including forecasts for the next 7 days, hourly updates for the next 7 hours, air quality index, and rain probability and other details.',
    link:'https://weather-app-phi-sand.vercel.app/'
  },
  {
    title:"National Park Trail",
    description:'I have developed a web application using ASP.NET MVC. The application showcases various trails within a national park, categorizing them by difficulty levels to aid users in selecting suitable paths. For security, the application employs JWT (JSON Web Token) authentication and utilizes DTOs (Data Transfer Objects) to enhance data security. The backend is powered by SQL Server for efficient and reliable data management.',
    link:'https://github.com/KromaStone/NationalPark_API_04'
  },
  // {
  //   title:"Upcomming Project",
  //   description:'I am currently engaged in the development of a new project, which I plan to upload and share in the coming days. This project is in progress and will be available for review soon.',
  //   link:'https://github.com/KromaStone/NationalPark_API_04'
  // },
]
}
