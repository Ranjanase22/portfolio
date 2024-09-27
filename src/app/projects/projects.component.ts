import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Tic Tac Toe',
      description:
        'Tic Tac Toe game built with interactive UI, allows users to play the classic game against an AI or another player.',
      technologies: 'Technology used: Angular & JavaScript',
      imageUrl: 'assets/images/tictactoe.png',
      websiteUrl: 'https://tictactoe-game-2024.netlify.app/game',
      codeUrl: 'https://github.com/Ranjanase22/tic-tac-toe',
    },

    {
      name: 'Github-User-Search',
      description:
        'GitHub User Search app enables users to search for GitHub profiles, displaying detailed information.',
      technologies: 'Technology used: Angular',
      imageUrl: 'assets/images/github.jpeg',
      websiteUrl: 'https://github-user-search24.netlify.app/',
      codeUrl: 'https://github.com/Ranjanase22/Github-User-Search',
    },
    {
      name: 'Todo-List',
      description:
        'Todo List app allows users to manage tasks by adding, prioritizing, and tracking due dates with an intuitive interface.',
      technologies: 'Technology used: Angular',
      imageUrl: 'assets/images/todo-list.png',
      websiteUrl: 'https://todolist-24.netlify.app/',
      codeUrl: 'https://github.com/Ranjanase22/todo-list',
    },
  ];
}
