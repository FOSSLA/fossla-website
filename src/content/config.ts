import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    category: z.string(),
    readTime: z.string().optional(),
    featured: z.boolean().optional()
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["Active", "In Development", "Planning"]),
    techStack: z.array(z.string()),
    github: z.string().url(),
    contributors: z.number().int().nonnegative()
  })
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    time: z.string(),
    location: z.string(),
    type: z.enum(["Workshop", "Meetup", "Hackathon", "Webinar"]),
    attendees: z.number().int().nonnegative(),
    status: z.enum(["upcoming", "past"])
  })
});

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    category: z.string(),
    kind: z.enum(["external", "community", "tool"]),
    icon: z.string().optional()
  })
});

const team = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    bio: z.string().optional(),
    github: z.string().url().optional(),
    twitter: z.string().url().optional(),
    email: z.string().email().optional(),
    group: z.enum(["core", "contributor"])
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    hero: z.object({
      headline: z.string(),
      intro: z.string()
    }),
    mission: z.string(),
    vision: z.string(),
    values: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string()
    })),
    story: z.array(z.string()),
    conduct: z.array(z.string())
  })
});

export const collections = { blog, projects, events, resources, team, pages };
