import watchCopy from './copy.js';
import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalSubtitle = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

const checkButtons = document.querySelectorAll('.actions a.check');
checkButtons.forEach((button) => {
	button.addEventListener('click', handleClick);
});

const deleteButton = document.querySelectorAll('.actions a.delete');
deleteButton.forEach((button) => {
	button.addEventListener('click', (e) => handleClick(e, false));
});

function handleClick(e, check = true) {
	e.preventDefault();
	const text = check ? 'Marcar como lida' : 'Excluir';
	const slug = check ? 'check' : 'delete';
	const roomID = document.querySelector('#room-id').dataset.id;
   const questionID = event.target.dataset.id;

	const form = document.querySelector('.modal form');
	form.setAttribute('action', `/question/${roomID}/${questionID}/${slug}`);

	modalTitle.innerHTML = text;
	modalSubtitle.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
	modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
	check
		? modalButton.classList.remove('red')
		: modalButton.classList.add('red');

	modal.open();
}


watchCopy()


