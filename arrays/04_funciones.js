// // FUNCIONES: son tipos de dato qeu nos ayuda a englobar la logica

initApp();

function initApp() {
    console.log('....Iniciando Aplicacion');

    const user = 'PIERO';

    user === 'PIERO' ? authenticated(user) : notAuthenticate();
}

function authenticated(username) {
    console.log(`Iniciaste sesion con ${username}`);
}

function notAuthenticated() {
    console.log('No iniciaste sesion');
}   
