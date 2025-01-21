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
    youtubeId: "ib-Nlg9qWBw",
  },
  { type: "category", title: "My projects, try em out :)" },
  {
    type: "link",
    title: "Spinai - easy typescript framework to create ai agents that I made",
    url: "https://docs.spinai.dev/",
  },
  {
    type: "link",
    title: "DailyShip.dev - Build a daily coding habit",
    url: "https://dailyship.dev/",
  },
  {
    type: "link",
    title: "Hyrd - Generate a new ATS resume for each job you apply to",
    url: "https://hyrd.dev/",
  },
  { type: "category", title: "Resources" },
  {
    type: "link",
    title:
      "Try Scrimba - learning to code from the future (an extra 20% off using my link)",
    url: "https://v2.scrimba.com?via=AnthonySistilli",
  },
  {
    type: "link",
    title: "Get a FREE career consultation with a TripleTen career advisor",
    url: "https://tripleten.com/special/free-career-consultation/?utm_channel=influencers&utm_source=influencers&utm_medium=instagram&utm_campaign=influencers_anthonysistilli&utm_content=reels",
  },
  { type: "category", title: "My Stuff" },

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
