// Example JavaScript code to add functionality to the site

// Add a hover effect to the download button
const downloadButton = document.querySelector('.button');
downloadButton.addEventListener('mouseover', () => {
	downloadButton.style.backgroundColor = '#444';
});
downloadButton.addEventListener('mouseout', () => {
	downloadButton.style.backgroundColor = '#333';
});