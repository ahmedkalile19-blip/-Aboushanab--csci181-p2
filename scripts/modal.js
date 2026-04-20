const projects = [
  {
    title: "Weather App",
    details:
      "I built this to practice working with APIs. It shows the current weather for a location and helped me understand how fetching data works.",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "To-Do App",
    details:
      "A simple app I made to keep track of tasks. I focused on adding, removing, and organizing items in a clean way.",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "Calculator",
    details:
      "This project handles basic math operations. It helped me get more comfortable with JavaScript logic and user input.",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "Portfolio Site",
    details:
      "I made this to display my projects and practice layout design. I tried to keep it simple and easy to navigate.",
    link_text: "View Site",
    href: "#",
  },
  {
    title: "Game Prototype",
    details:
      "This is a small game I worked on to experiment with JavaScript. It’s not perfect but it helped me understand game logic better.",
    link_text: "Play Game",
    href: "#",
  },
  {
    title: "API Project",
    details:
      "This project focuses on getting and displaying data from an external API. It helped me understand how real apps pull in data.",
    link_text: "View Repo",
    href: "#",
  },
];

const modal = document.getElementById("project-modal");
const modal_title = document.getElementById("modal-title");
const modal_details = document.getElementById("modal-details");
const modal_link = document.getElementById("modal-link");
const modal_close = document.getElementById("modal-close");

const card_buttons = document.querySelectorAll(".project-card");

function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  modal_title.textContent = project.title;
  modal_details.textContent = project.details;
  modal_link.textContent = project.link_text;
  modal_link.href = project.href;

  modal.showModal();

  document.body.style.overflow = "hidden";

  modal.focus();
}

function onCardClicked(event) {
  const index = Number(event.currentTarget.dataset.index);
  openModalByIndex(index);
}

card_buttons.forEach((card) => {
  card.addEventListener("click", onCardClicked);
});

modal_close.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("close", () => {
  document.body.style.overflow = "";
});
