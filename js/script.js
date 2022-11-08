//quando quisermos que o mario pule, adicionamos a classe jump na imagem.
//para isso, pegamos o elemento do mario por um seletor CSS.
const mario = document.querySelector('.mario'); 
const pipe = document.querySelector('.pipe'); 

const jump = () => {
    //pegar a classe mario, acessar o classList e o método ADD para adc uma nova classe (=jump)
    mario.classList.add('jump');

    //quando a animação jump acabar, o setTimeout remove ela para que possa acontecer novamente
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

//loop que verifica se perdemos ou não

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        
        clearInterval(loop);
    }
        

}, 10);

document.addEventListener('keydown', jump);