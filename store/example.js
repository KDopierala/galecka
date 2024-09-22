// store/example.ts
import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
      state: () => ({
        projectsHeading: "Zrealizowane projekty",
        projectsDescription: "Some of the projects I have successfully completed",
        projects: [
          {
            id: "gabinet cienny",
            title: "Gabinet cienny",
            category: "gabinet",
            img: "/static/projects/gabinet-ciemny/1.webp",
            tag: "gabinet",
            objectivesDetails:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
            projectImages: [
              "/static/projects/gabinet-ciemny/1.webp",
              "/static/projects/gabinet-ciemny/2.webp",
              "/static/projects/gabinet-ciemny/3.webp",
              "/static/projects/gabinet-ciemny/4.webp",
            ],
            projectDetails: [],
          },
          {
            id: "korytarz glamour",
            title: "korytarz glamour",
            category: "korytarz",
            img: "/static/projects/korytarz-glam/1.webp",
            tag: "korytarz",
            objectivesDetails:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
            projectImages: [
              "/static/projects/korytarz-glam/1.webp",
              "/static/projects/korytarz-glam/2.webp",
            ],
            projectDetails: [],
          },
          {
            id: "kuchnia zielona",
            title: "kuchnia zielona",
            category: "kuchnia",
            img: "/static/projects/kuchnia-zielona/1.webp",
            tag: "kuchnia",
            objectivesDetails:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
            projectImages: [
              "/static/projects/kuchnia-zielona/1.webp",
              "/static/projects/kuchnia-zielona/2.webp",
              "/static/projects/kuchnia-zielona/3.webp",
            ],
            projectDetails: [],
          },
          {
            id: "łazienka natural",
            title: "łazienka natural",
            category: "łazienka",
            img: "/static/projects/lazienka-natural/1.webp",
            tag: "łazienka",
            objectivesDetails:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
            projectImages: [
              "/static/projects/lazienka-natural/1.webp",
              "/static/projects/lazienka-natural/2.webp",
              "/static/projects/lazienka-natural/3.webp",
              "/static/projects/lazienka-natural/4.webp",
            ],
            projectDetails: [],
          },
          {
            id: "sadowa dom",
            title: "sadowa dom",
            category: "dom",
            img: "/static/projects/sadowa-dom/1.webp",
            tag: "dom",
            objectivesDetails:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
            projectImages: [
              "/static/projects/sadowa-dom/1.webp",
              "/static/projects/sadowa-dom/2.webp",
              "/static/projects/sadowa-dom/3.webp",
              "/static/projects/sadowa-dom/4.webp",
              "/static/projects/sadowa-dom/5.webp",
            ],
            projectDetails: [],
          },
          {
            id: "wiosenna dom",
            title: "wiosenna dom",
            category: "dom",
            img: "/static/projects/wiosenna-dom/1.webp",
            tag: "dom",
            objectivesDetails:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
            projectImages: [
              "/static/projects/wiosenna-dom/1.webp",
              "/static/projects/wiosenna-dom/2.webp",
              "/static/projects/wiosenna-dom/3.webp",
              "/static/projects/wiosenna-dom/4.webp",
              "/static/projects/wiosenna-dom/5.webp",
              "/static/projects/wiosenna-dom/6.webp",
              "/static/projects/wiosenna-dom/7.webp",

            ],
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