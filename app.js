const button = document.querySelector('.play_pause_button')
const buttonIcon = document.querySelector('.material-icons')

const playState = '<i class="material-icons">play_arrow</i>play'
const pauseState = '<div class="loading-spinner"><i class="material-icons">pause</i></div>pause'

button.innerHTML = playState

button.addEventListener('click', changeButtonState)

function changeButtonState() {
    switch (button.innerHTML) {
        case playState:
            return button.innerHTML = pauseState;
        case pauseState:
            return button.innerHTML = playState;
    }
}