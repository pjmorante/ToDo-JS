const btn = document.querySelector('[data-form-btn]');


const createTask = (e) => {
  e.preventDefault();
  const input = document.querySelector('[data-form-input]');
};

btn.addEventListener('click', createTask);