import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Stellar POS (Point of Sale)',
      description: [
        'Stellar POS (Point of Sale) software** is a modern system that enables businesses to manage sales, inventory, and customer interactions efficiently. It is commonly used in retail stores, restaurants, and e-commerce businesses to streamline transactions, track inventory, and generate reports.',
        'To revolutionize retail operations by developing an intelligent, all-in-one POS platform that eliminates manual inefficiencies, enforces compliance, and delivers real-time business insights—empowering merchants to focus on growth, customer experience, and strategic decision-making. was to streamline the media planning process, minimizing errors and ensuring compliance, allowing teams to focus on strategic decision-making and creativity.',
      ],
      techStack: ['React', 'Node/express', 'MySQL', 'AWS', 'Redis', 'CI/CD'],
      image: '/assets/media-management-platform.webp',
      aosImage: 'fade-right'
    },
    {
      title: 'Requirement-to-Code Integrity and QA Automation Tool',
      description: [
        'Developed and deployed an AI-powered QA automation tool that ensures requirement-to-code integrity for compliance-sensitive industries using NLP and machine learning algorithms.',
        'Designed and implemented a seamless integration with JIRA/TestRail using Node.js and Express backend to auto-generate test cases and track coverage gaps in real-time.'
      ],
      techStack: ['Node.js', 'Express.js', 'Python', 'NLP', 'JIRA', 'TestRail', 'CI/CD'],
      image: '/assets/QA.jpg',
      aosImage: 'fade-left'
    },
    {
      title: 'Joint Univresity Application',
      description: [
        'As a highly skilled software developer, I have had the privilege of working on a project that has the potential to revolutionize the college admission process This project, called the Joint University Application , is a single, common application platform for both public and private colleges and universities in Ethiopia.',
        'The platform is designed to allow college students to apply to multiple institutions based on their preferred fields of study, location, and other important metrics.'
      ],
      techStack: ['Node.js', 'React', 'Redux', 'MongoDB', 'CI/CD'],
      image: '/assets/ada.png',
      aosImage: 'fade-right'
    },
    {
      title: 'DocuQuery AI',
      description: [
        'Developed an AI-powered document query system allowing users to upload PDFs and ask questions based on the document content.',
        'Designed and integrated an Angular-based frontend with a Flask backend for seamless document processing.',
        'Implemented role-based access control, ensuring only authorized users can manage documents.'
      ],
      techStack: ['Angular', 'Tailwind CSS', 'Django (Python)', 'MongoDB', 'AWS'],
      image: '/assets/docu-query-ai.webp',
      aosImage: 'fade-left'
    }
  ];
}
