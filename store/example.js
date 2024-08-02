// store/example.ts
import { v4 as uuidv4 } from "uuid";
import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
      state: () => ({
        projectsHeading: "Projects Portfolio",
        projectsDescription: "Some of the projects I have successfully completed",
        projects: [
          {
            id: "kuchnia",
            title: "Google Health Platform",
            category: "kuchnia",
            img: "/_nuxt/static/images/web-project-2.jpg",
            tag: "kuchnia",
            objectivesDetails:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
            techTitle: "Tools & Technologies",
            projectImages: [
              "/_nuxt/static/images/web-project-2.jpg",
              "/_nuxt/static/images/web-project-2.jpg",
              "/_nuxt/static/images/web-project-2.jpg"
            ],
            projectDetails: [],
          },
          {
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
            title: "Phoenix Digital Agency",
            category: "kuchnia",
            img: "/_nuxt/static/images/mobile-project-2.jpg",
            tag: "UI / Frontend",
            objectivesDetails:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
            techTitle: "Tools & Technologies",
            projectImages: [],
            projectDetails: [],
          },
          {
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
            title: "Project Management UI",
            category: "UI/UX Design",
            img: "/_nuxt/static/images/ui-project-1.jpg",
            tag: "UI / Frontend",
            objectivesDetails:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
            techTitle: "Tools & Technologies",
            projectImages: [],
            projectDetails: [],
          },
          {
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
            title: "Cloud Storage Platform",
            category: "UI/UX Design",
            img: "/_nuxt/static/images/ui-project-2.jpg",
            tag: "Web / Frontend",
            objectivesDetails:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
            techTitle: "Tools & Technologies",
            projectImages: [],
            projectDetails: [],
          },
        ],
      }),
      getters: {
        getProjectById: (state) => {
          return (id) => state.projects.find((project) => project.id == id);
        },
        getProjectsByCategory: (state) => {
          return (category) => state.projects.filter((project) => project.category === category);
        },
      },
    });