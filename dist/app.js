import { render } from "./helpers/render-tasks.helpers.js";
import { renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: "hobby",
    },
    {
        name: "Pójść na siłkę",
        done: true,
        category: "gym",
    },
    {
        name: "Nakarmić koty",
        done: false,
        category: "work",
    },
];
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, tasksContainerElement);
});
addTask({ name: "zrobić klatę", category: "gym", done: false });
renderCategories(categories, categoriesContainerElement, selectedCategory);
render(tasks, tasksContainerElement);
