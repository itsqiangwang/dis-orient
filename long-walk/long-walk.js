var squareArray = document.querySelectorAll('.sidewalk-grid div');
var paragrarphAray = document.querySelectorAll('.sidewalk-grid div p');
var orientationClassArray = ['go-forward', 'go-backward', 'turn-left', 'turn-right', 'look-up', 'look-down'];
var anotherWalkButton = document.querySelector('.another-walk-button');
var switchWalkButton = document.querySelector('.switch-walk-button');

function longWalk(){
    for (var i = 0; i < squareArray.length; i++){
        //disorient all squares by 90, 180, or -90 degrees
        squareArray[i].classList.add(orientationClassArray[ Math.floor(Math.random() * 6) ]);

        //re-orient on click
        var clickCounter = 0;
        squareArray[i].addEventListener('click', function() {
            this.style.transform = 'rotate(0deg)';
            this.style.filter = 'saturate(1)';
            this.children[0].style.display = 'block';
            // modify text content based on orientation
            if (this.classList[1] == 'go-forward'){
                this.children[1].textContent = 'go forward';
            } else if (this.classList[1] == 'go-backward'){
                this.children[1].textContent = 'go backward';
            } else if (this.classList[1] == 'turn-left'){
                this.children[1].textContent = 'turn right';
            } else if (this.classList[1] == 'turn-right'){
                this.children[1].textContent = 'turn left';
            } else if (this.classList[1] == 'look-up'){
                this.children[1].textContent = 'look down';
            } else if (this.classList[1] == 'look-down'){
                this.children[1].textContent = 'look up';
            }

            clickCounter++;

            if (clickCounter == 32){
                anotherWalkButton.style.display = 'flex';
                switchWalkButton.style.display = 'flex';
            }
        });
    }
}

longWalk();