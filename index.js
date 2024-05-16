function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    // stop function from running if no audio on key
    if(!audio) {
      return;
    };

    audio.currentTime = 0; //rewind to start
    audio.play();

    key.classList.add('playing');
  };

  function removeTransition (e) {
    // skip if not transform
    if(e.propertyName !== 'transform') {
      return;
    }
    this.classList.remove('playing');
  };

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);