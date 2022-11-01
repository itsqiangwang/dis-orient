var squareArray = document.querySelectorAll('.sidewalk-grid div');
var imageArray = document.querySelectorAll('.sidewalk-grid div img');
var paragraphArray = document.querySelectorAll('.sidewalk-grid div p');
var orientationClassArray = ['go-forward', 'go-backward', 'turn-left', 'turn-right', 'look-up', 'look-down'];
var restartButton = document.querySelector('.restart-button');
var printButton = document.querySelector('.print-button');
var shortWalkButton = document.querySelector('.shortwalk-button');
var longWalkButton = document.querySelector('.longwalk-button');

shortWalkButton.addEventListener('click', function(){
    shortWalkButton.style.display = 'none';
    longWalkButton.style.display = 'none';
    for (var i = 0; i < squareArray.length; i++){
        imageArray[i].src='images-2/sidewalk-square-' + (i+1) + '.jpg';
        squareArray[i].style.width = 'calc(100% / 2)';
        squareArray[i].style.height = 'calc(100% / 4)';

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

            // console.log(clickCounter);

            if (clickCounter == 8){
                printButton.style.display = 'block';
                restartButton.style.display = 'block';
            }
        });
    }
});

longWalkButton.addEventListener('click', function(){
    shortWalkButton.style.display = 'none';
    longWalkButton.style.display = 'none';
    for (var i = 0; i < squareArray.length; i++){
        squareArray[i].style.width = 'calc(100% / 4)';
        squareArray[i].style.height = 'calc(100% / 8)';

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

            // console.log(clickCounter);

            if (clickCounter == 32){
                printButton.style.display = 'block';
                restartButton.style.display = 'block';
            }
        });
    }
});


// orientDisorient();