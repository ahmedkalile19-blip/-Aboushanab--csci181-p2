// Project data
const projects = [
  {
    title: "Weather App",
    details: "Uses API to display weather.",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "To-Do App",
    details: "Manage daily tasks easily.",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "Calculator",
    details: "Performs basic calculations.",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "Portfolio Site",
    details: "Showcases personal work.",
    link_text: "View Site",
    href: "#",
  },
  {
    title: "Game Prototype",
    details: "Simple JS game demo.",
    link_text: "Play Game",
    href: "#",
  },
  {
    title: "API Project",
    details: "Fetches and displays data.",
    link_text: "View Repo",
    href: "#",
  },
];

// Select modal elements
const modal = document.getElementById("project-modal");
const modal_title = document.getElementById("modal-title");
const modal_details = document.getElementById("modal-details");
const modal_link = document.getElementById("modal-link");
const modal_close = document.getElementById("modal-close");

// Select all cards
const card_buttons = document.querySelectorAll(".project-card");

function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  // Update modal content
  modal_title.textContent = project.title;
  modal_details.textContent = project.details;
  modal_link.textContent = project.link_text;
  modal_link.href = project.href;

  modal.showModal();

  // Disable scroll
  document.body.style.overflow = "hidden";

  // Focus modal
  modal.focus();
}

function onCardClicked(event) {
  const index = Number(event.currentTarget.dataset.index);
  openModalByIndex(index);
}

// Add click listeners
card_buttons.forEach((card) => {
  card.addEventListener("click", onCardClicked);
});

// Close modal
modal_close.addEventListener("click", () => {
  modal.close();
});

// Restore scroll when closed
modal.addEventListener("close", () => {
  document.body.style.overflow = "";
});
