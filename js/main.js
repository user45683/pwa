



	//сервис-воркер
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pwa/service-worker.js').then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(error) {
    console.log('Service worker registration failed, error:', error);});};



let deferredPrompt;
const addBtn = document.querySelector('.add-app');

window.addEventListener('beforeinstallprompt', (e)) => {
	//отключить автоприглашение
	e.preventDefault();
	deferredPrompt = e;
	addBtn.style.display = 'block';

	addBtn.addEventListener('click', () => {
		addBtn.style.display = 'none';
		// Show the prompt
		deferredPrompt.prompt();
// Wait for the user to respond to the prompt
		deferredPrompt.useChoice.then((choiseResult) => {
	if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the prompt');
      } else {
        console.log('User dismissed the prompt');
      }
      deferredPrompt = null;});
		});
	});

