const copyToClipboard = text => { 
	const tempInput = document.createElement('input'); 
	tempInput.value = text; 
	document.body.appendChild(tempInput); 
	tempInput.focus(); 
	tempInput.select(); 
	document.execCommand('copy'); 
	document.body.removeChild(tempInput);
} 

const buttonCopy = () => { 
	const copyDiv = document.getElementById('room-id'); 
	const copyText = copyDiv.dataset.id.toString().trim(); 
	copyDiv.addEventListener('click', () => {
		copyToClipboard(copyText)
	} )
}

const linkCopy = (url) => {
	const link = document.querySelector('.no-questions a')
	link.addEventListener('click', () => {
		copyToClipboard(url)
	})
}

export { buttonCopy, linkCopy }