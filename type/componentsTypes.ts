// componentsTypes.ts

// Nav bar Link properties
export interface NavLinkProps {
    href: string;           // URL of the link
    title: string;          // Display title of the link
    isFooter?: boolean;     // Optional, if the link is in the footer
}

// Interface for individual link items
export interface Link {
    path: string;           // Path for the link navigation
    title: string;          // Title displayed for the link
}

// Props for the menu overlay component (for mobile navigation)
export interface MenuOverlayProps {
    links: Link[];          // Array of Link objects
}

// Props for skills bar component
export interface SkillBarProps {
    name: string;           // Name of the skill
    level: number;          // Level as a percentage (0-100)
}

// Props for project card component
export interface ProjectCardProps {
    title: string;          // Title of the project
    description: string;    // Short description of the project
    image: string;          // Image URL or local path for the project
    url: string;            // URL to the project or its repository
}
