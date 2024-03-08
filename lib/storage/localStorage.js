export function saveMessages(urls) {
	localStorage.setItem('messages', JSON.stringify(urls));
}

export function getMessages() {
	return JSON.parse(localStorage.getItem('messages'));
}
