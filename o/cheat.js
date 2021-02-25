let cheatButtonState = 0;
window.addEventListener('keydown', (e) => {
    switch (cheatButtonState) {
        case 0:
        case 1:
            if (e.key === 'ArrowUp') {
                cheatButtonState++;
            } else {
                cheatButtonState = 0;
            }
            return;
        case 2:   if (e.key === 'ArrowDown') {
                cheatButtonState++;
            } else if(!e.key === 'ArrowUp') {
                cheatButtonState = 0;
            }
            return;
        case 3:
            if (e.key === 'ArrowDown') {
                cheatButtonState++;
            } else {
                cheatButtonState = 0;
            }
            return;
        case 4:
        case 6:
            if (e.key === 'ArrowLeft') {
                cheatButtonState++;
            } else {
                cheatButtonState = 0;
            }
            return;
        case 5:
        case 7:
            if (e.key === 'ArrowRight') {
                cheatButtonState++;
            } else {
                cheatButtonState = 0;
            }
            return;
        case 8:
            if (e.key === 'a') {
                cheatButtonState++;
            } else {
                cheatButtonState = 0;
            }
            return;
        case 9:
            if (e.key === 'b' && Runner.instance_) {
                Runner.instance_.noGameOver = !Runner.instance_.noGameOver;
                Runner.instance_.lastHit = new Date();
            }
            cheatButtonState = 0;
            return;
    }
});
