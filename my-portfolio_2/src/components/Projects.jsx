import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      
      <div className="project">
        <h3>Event Creation and Management Platform (fullstack)</h3>
        <p>
          This project is a modern and intuitive event creation and management platform designed for social networking app. 
          It allows users to easily create events, manage RSVP responses, send invitations, and share event details—all with a sleek, 
          guided frontend experience. The platform focuses on enhancing user interaction with features like event discussion threads, 
          and dynamic maps for venue selection.
        </p>
        <p>Tools/Frameworks/Programming languages/Databases: Lovable AI, Vite, TypeScript, React, shadcn-ui, Tailwind CSS, Firebase.</p>
        <p>Live: <a href="https://b46-rct-305-eventplanner-s48z.vercel.app/" target="_blank" rel="noopener noreferrer">https://b46-rct-305-eventplanner-s48z.vercel.app/</a></p>
        <p>Repo: <a href="https://github.com/vinit3200/B46_RCT305_eventplanner" target="_blank" rel="noopener noreferrer">https://github.com/vinit3200/B46_RCT305_eventplanner</a></p>
      </div>
      
      <div className="project">
        <h3>QuickLegal – Legal Services Platform (Backend)</h3>
        <p>
          QuickLegal is a full-stack legal services platform that allows users to connect with advocates, generate legal document templates (PDFs), 
          and manage consultations. The system supports role-based access (Admin, Advocate, User) with features like authentication, authorization, 
          document generation, and database seeding.
        </p>
        <p>Tools/Frameworks/Programming languages/Databases: Chatgpt, Node.js, Express.js, MongoDB, Docker, Redis, JWT, pdfkit.</p>
        <p>Repo: <a href="https://github.com/vinit3200/NEM405_B48_QuickLegal_LegalServices" target="_blank" rel="noopener noreferrer">https://github.com/vinit3200/NEM405_B48_QuickLegal_LegalServices</a></p>
      </div>
    </section>
  );
}

export default Projects;