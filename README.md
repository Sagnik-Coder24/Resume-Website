# Resume Website (React + Vite + Tailwind CSS)

This is a personal resume website built with **React**, **Vite**, and **Tailwind CSS**. The website is designed with a **dark theme** and **neon green accents** to make your resume visually appealing and modern. It includes multiple sections such as your personal info, skills, experience, and more, all with smooth animations.

## Features

- **Dark theme** with neon green highlights.
- Responsive layout that adapts to different screen sizes.
- Smooth fade-in animations for sections.
- Sections include:
  - Personal Information
  - About Me / Summary
  - Skills
  - Work Experience
  - Contact Details
- Links to social profiles (LinkedIn, GitHub, etc.)
- Easily customizable and extendable.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation build tool that provides fast development server and optimized build process.
- **Tailwind CSS**: Utility-first CSS framework for designing responsive and customizable user interfaces.
- **PostCSS**: Used for processing the Tailwind CSS.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js** (version 16 or above)
- **npm** or **yarn** (npm comes bundled with Node.js)

## Customization

- **Personal Info**: Edit your name, title, headline, and contact information in the `App.jsx` file.
- **Summary**: Update your professional summary in the `Summary` component.
- **Skills**: Add or remove skills in the `Skills` array in the `App.jsx` file.
- **Experience**: Modify your work experience in the `Experience` array.
- **Projects**: Add or update your projects in the `projects` array.
- **Social Links**: Customize the links to your GitHub, LinkedIn, and portfolio in the `Header` component.

## Tailwind Customization

- You can update the colors and font styles by modifying the `tailwind.config.js` file.
- Tailwind's utility classes can be used throughout the app to adjust margins, padding, text sizes, colors, etc.

## Responsive Design

The website is built to be responsive out-of-the-box using Tailwind's responsive utilities. It adjusts gracefully across mobile, tablet, and desktop devices. Tailwind’s breakpoints (`sm`, `md`, `lg`, `xl`) are used to ensure the content is displayed correctly on different screen sizes.

## Folder Structure

resume-website/
├── public/
│ └── index.html # Root HTML file
├── src/
│ ├── assets/ # Images and other assets
│ ├── components/ # React components (Header, Summary, etc.)
│ ├── App.jsx # Main application file
│ ├── index.css # Global CSS, includes Tailwind CSS
│ └── main.jsx # Entry point for React
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
├── package.json # Project dependencies and scripts
└── README.md # This README file

## Contributing

Contributions are welcome! If you have any ideas or suggestions for improvements, feel free to fork the repository and create a pull request. Alternatively, you can open an issue for discussion.
