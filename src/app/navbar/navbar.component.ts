import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';
@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
    items: MenuItem[] | undefined;
    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                // route:'/test'
                command: () => {
                    this.router.navigate(['/home']);
                }
            },
            {
                label: 'About',
                 command: () => {
                    this.router.navigate(['/about']);
                }
            }, {
                label: 'Skills',
                 command: () => {
                    this.router.navigate(['/skills']);
                }
            }, {
                label: 'Services',
                 command: () => {
                    this.router.navigate(['/service']);
                }
            },
            {
                label: 'Project',
                 command: () => {
                    this.router.navigate(['/project']);
                }
            },
            {
                label: 'Contact',
                 command: () => {
                    this.router.navigate(['/contact']);
                }
            },
            // {
            //     label: 'Projects',
            //     icon: 'pi pi-search',
            //     items: [
            //         {
            //             label: 'Core',
            //             icon: 'pi pi-bolt',
            //             shortcut: '⌘+S'
            //         },
            //         {
            //             label: 'Blocks',
            //             icon: 'pi pi-server',
            //             shortcut: '⌘+B'
            //         },
            //         {
            //             label: 'UI Kit',
            //             icon: 'pi pi-pencil',
            //             shortcut: '⌘+U'
            //         },
            //         {
            //             separator: true
            //         },
            //         {
            //             label: 'Templates',
            //             icon: 'pi pi-palette',
            //             items: [
            //                 {
            //                     label: 'Apollo',
            //                     icon: 'pi pi-palette',
            //                     badge: '2'
            //                 },
            //                 {
            //                     label: 'Ultima',
            //                     icon: 'pi pi-palette',
            //                     badge: '3'
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     label: 'Contact',
            //     icon: 'pi pi-envelope',
            //     badge: '3'
            // }
        ];
    }
}