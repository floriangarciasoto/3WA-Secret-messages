export function hideElement(element) {
	element.classList.add('hidden');
}

export function showElement(element) {
	element.classList.remove('hidden');
}

export function copyToClipboard(text) {
	navigator.clipboard.writeText(text);
}
