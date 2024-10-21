import { type LinkItem } from "@/types/link";

export const githubRepoName = "AtotheY.github.io";

export const imageBaseUrl =
  process.env.NODE_ENV === "production" ? "" : `/${githubRepoName}`;
export const name = "@anthonysistilli";
export const description = "Founder @ Hyrd.dev & Sr SWE";

export const socialLinks = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/asistilli/" },
  { platform: "Twitter", url: "https://x.com/SistilliAnthony" },
  { platform: "Mail", url: "mailto:sistilli.business@gmail.com" },
  { platform: "Tiktok", url: "https://tiktok.com/@anthonysistilli" },
  {
    platform: "Youtube",
    url: "https://www.youtube.com/channel/UCoYzQqZNCRqqAomJwJ6yEdg",
  },
  { platform: "Discord", url: "https://discord.gg/JNc6uPUqUU" },
  { platform: "Instagram", url: "https://instagram.com/asistilli" },
  // Add the new GitHub link
  {
    platform: "GitHub",
    url: "https://github.com/AtotheY/Linktree-nextjs-supabase-template",
  },
];

export const items: LinkItem[] = [
  {
    type: "youtube",
    title: "Latest Youtube Video",
    youtubeId: "mL5FM8sktz4?",
  },
  {
    type: "category",
    title: "Join Hyrd's waitlist - My company",
  },
  {
    type: "link",
    title: "Hyrd.dev - Find a tech job in minutes, not months",
    url: "https://hyrd.dev",
  },
  { type: "category", title: "Resources" },
  {
    type: "link",
    title: "Learn to code with Codedex!",
    url: "https://www.codedex.io/?utm_source=anthonysistili&utm_medium=creator-collab&utm_campaign=2024-october",
  },
  {
    type: "link",
    title: "Buy me a coffee :)",
    url: "http://buymeacoffee.com/anthonysistilli",
  },
  {
    type: "link",
    title: "Startup notes & coding resources (mind map)",
    url: "https://map.sistilli.dev/",
  },
  {
    type: "link",
    title: "Linktree clone (NextJS & Supabase)",
    url: "https://github.com/AtotheY/Linktree-nextjs-supabase-template",
  },
  {
    type: "link",
    title: "My saas landing page boilerplate on Github",
    url: "https://github.com/AtotheY/saas-landingpage",
  },
];
