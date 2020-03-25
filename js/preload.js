const gameImage = ['images/lives.gif', 'images/splash.jpg', 'images/button_start.gif', 'images/button_relode.gif', 'images/button_stop.gif', 'images/closing.jpg'];
const bunnyImage = ['images/bunny1.png', 'images/bunny2.png', 'images/bunny3.png', 'images/bunny4.png', 'images/bunny5.png'];
let levelAnim;
let bunnyUpAnim;
let bunnyDownAnimation;
let blackUpAnimation;
let blackDownAnimation;
let life = 3;
let hight = 0;
let levelNum = 1;
let scorePoint = 0;
let positionTwo = 0;
let positionOne = 0;
let firstRendom = 0;
let secondRendom = 0;
let magicNumber = Math.floor(Math.random() * bunnyImage.length);
// All Global Assigning end here.

function start() {
    let screen = document.getElementById('stage');
    screen.innerHTML += `<div id = set_start></div>`;
    let welcome = document.getElementById('set_start');
    welcome.style.background = `url(${ gameImage[1] }) 0 0 no-repeat`;
    welcome.style.height = '400px';
    welcome.style.width = '800px';	
    welcome.style.zIndex = '500';
    welcome.style.bottom = '583px';
    welcome.innerHTML = '<div id = start_button></div>';
    let play = document.getElementById('start_button');
    play.style.background = `url(${ gameImage[2] }) 0 0 no-repeat`;
    play.style.height = '37px';
    play.style.width = '213px';
    play.style.top = '270px';
    play.style.left = '145px';
    play.onmouseover = function() {
        play.style.cursor = 'pointer';
    };	
    
    play.onclick = function() {
        welcome.style.display = 'none';
        play.style.display = 'none';
        loadBunny();
        blackBunny();
        details();
    };
}
// Start Function end here.

function details() {
    loadLevel();
    lives();
    score();
}
// Top information (level, life, score) function calling end here.

function loadLevel() {
    let up = document.getElementById('cloud_one');
    up.innerHTML = `<div id = head_info>LEVEL : ${ levelNum }<span id = timer></span></div>`;
    let level = document.getElementById('head_info');
    level.style.width = '195px';
    level.style.left = '100px';
    level.style.display = 'inline-block';
    levelUp(timer);
}

function levelUp(timer) {
    timer.style.height = '5px';
    timer.style.width = '100px';
    timer.style.backgroundColor = '#e3e3e3';
    timer.style.display = 'inline-block';
    timer.style.position = 'relative';
    timer.style.top = '4px';
    timer.style.margin = '0 10px';
    timer.innerHTML = `<span id = time_sec></span>`;
    let timerSecond = document.getElementById('time_sec');
    timerSecond.style.height = '5px';
    timerSecond.style.display = 'inline-block';
    timerSecond.style.backgroundColor = 'red';
    timerSecond.style.position = 'relative';
    timerSecond.style.bottom = '6px';
    levelTimer();
}

function levelTimer() {
    let wid = 0;
    let elem = document.getElementById('time_sec');
    levelAnim = setInterval(frame, 300);
    function frame() {
        if (wid === 100) {
            clearInterval(levelAnim);
            checkLevel();
        } else {
            wid += 1;
            elem.style.width = wid + 'px';			
        }
    }	
}

function checkLevel() {
    if (levelNum > 4) {
        finalMessage();
    } else {
        levelNum += 1;
        levelPopup(levelNum);
        loadLevel();
    }
}
// END of Level (init, Timer animation.)

function levelPopup(num) {
    let level = document.getElementById('hill_one');
    level.innerHTML = `<div id = lv>LEVEL ${ num }</div>`;
    let lvlPopup = document.getElementById('lv');
    lvlPopup.style.opacity = '0';
    lvlPopup.style.width = '800px';
    lvlPopup.style.bottom = '95px';
    lvlPopup.style.textAlign = 'center';
    lvlPopup.style.color = '#eee';
    lvlPopup.style.fontSize = '25px';
    lvlPopup.style.WebkitAnimation = 'fade 3s';
    lvlPopup.style.MozAnimation = 'fade 3s';
    lvlPopup.style.animation = 'fade 3s';
}
// End of Popup appear on level up.

function lives() {
    let up = document.getElementById('cloud_two');
    up.innerHTML = `<div id = lives>LIVES : <span id = live></span></div>`;
    let level = document.getElementById('lives');
    level.style.display = 'inline-block';
    level.style.width = '125px';
    level.style.left = '455px';
    level.style.bottom = '47px';
    lifeAnimation(live);
}

function lifeAnimation(lives) {
    lives.style.height = '21px';
    lives.style.width = '60px';
    lives.style.lineHeight = '10px';
    lives.style.display = 'inline-block';
    if (life === 3) {
        lives.style.background = `url(${ gameImage[0] }) 0 0 no-repeat`;
    } else if (life === 2) {
        lives.style.background = `url(${ gameImage[0] }) 0 -21px no-repeat`;
    } else if (life === 1) {
        lives.style.background = `url(${ gameImage[0] }) 0 -42px no-repeat`;
    } else {
        lives.style.background = `url(${ gameImage[0] }) 0 -63px no-repeat`;
        finalMessage();
    }	
}
// END Lives function.

function score() {
    let up = document.getElementById('hill_four');
    up.innerHTML = `<div id = scor>SCORE : ${ scorePoint }</div>`;
    let scoreShow = document.getElementById('scor');
    scoreShow.style.display = 'inline';
    scoreShow.style.width = '133px';
    scoreShow.style.float = 'right';
    scoreShow.style.bottom = '244px';
}
// Score function end here. 

function loadBunny() {
    bunny = document.getElementById('game');
    
    // It use to reduce time, appear bunny infront of user.
    bunny.style.bottom = '200px';
    bunny.innerHTML = '<div id = set_clip></div>';
    let one = document.getElementById('set_clip');	
    one.style.left = setZindex() + 'px';
    one.style.background = `url(${ bunnyImage[firstRendom] }) 0 0 no-repeat`;
    let sameNumber = firstRendom;
    one.onclick = function() {
        one.style.background = `url(${ bunnyImage[sameNumber] }) 0 -155px no-repeat`;
        effect(one);
        scorePoint += 1;
        this.onclick = null;
        score();
    };
    
    one.style.height = '150px';
    one.style.width = '120px';
    bunnyUp();	
}

function bunnyUp() {
    firstRendom = Math.ceil(Math.random() * bunnyImage.length) - 1;
    secondRendom = Math.floor(Math.random() * 3);
    let elem = document.getElementById('set_clip');	
    let value = 0;
    bunnyUpAnim = setInterval(frame, 7);	
    function frame() {
        if (value === hight) {
            clearInterval(bunnyUpAnim);
            setTimeout(bunnyDown, 700);
        } else {
            value += 1; 
            elem.style.bottom = value + 'px';
        }
    }
}

function bunnyDown() {
    let elem = document.getElementById('set_clip');
    let value = hight;
    bunnyDownAnimation = setInterval(frame, 1);	
    function frame() {
        if (value === 0) {
            clearInterval(bunnyDownAnimation);
            setTimeout(loadBunny, magicNumber);	
        } else {
            value -= 1; 
            elem.style.bottom = value + 'px'; 
        }
    }
}
// Bunny up and down finish here. 

function blackBunny() {
    let bunny = document.getElementById('shock');
    bunny.innerHTML = `<div id = set_clip2></div>`;
    
    // The below given line has been used to reduce the time to display bunny in front of user.
    bunny.style.bottom = '303px';
    let one = document.getElementById('set_clip2');	
    one.style.background = `url(${ bunnyImage[secondRendom] }) 0 -304px no-repeat`;
    let sameNumber = secondRendom ;
    one.onclick = function() {
        effect(one);
        life -= 1;
        this.onclick = null;
        lives();
    };
    
    one.style.height = '150px';
    one.style.width = '120px';
    one.style.left = setBlackZindex() + 'px';
    blackBunnyUp();
}

function effect(object) {
    object.style.animation = 'blink 0.4s';
    object.style.WebkitAnimation = 'blink 0.4s';
    object.style.MozAnimation = 'blink 0.4s';
    object.style.animationIterationCount = '2';
}

function blackBunnyUp() {
    let obj = document.getElementById('set_clip2');
    let up = 0;
    blackUpAnimation = setInterval(frame, 6);	
    function frame() {
        if (up === shock_hight) {
            clearInterval(blackUpAnimation);
            setTimeout(blackBunnyDown, 700);
        } else {
            up += 1; 
            obj.style.bottom = up + 'px';
        }
    }
}

function blackBunnyDown() {
    let obj = document.getElementById('set_clip2');
    let value = shock_hight;
    blackDownAnimation = setInterval(frame, 1);	
    function frame() {
        if (value === 0) {
            clearInterval(blackDownAnimation);
            setTimeout(blackBunny, 1000);
        } else {
            value -= 1; 
            obj.style.bottom = value + 'px'; 
        }
    }
}
// Black Bunny finish here.

function setZindex() {
    positionOne = giveRendom();
    if (positionOne <= 100) {
        positionOne = 0;
        document.getElementById('set_clip').style.zIndex = '99';
        hight = 250;
    } else if (positionOne > 100 && positionOne <= 275) {
        document.getElementById('set_clip').style.zIndex = '100';
        hight = 180;
    } else if (positionOne > 275 && positionOne <= 400) {
        document.getElementById('set_clip').style.zIndex = '101';
        hight = 145;
    } else if (positionOne > 400 && positionOne <= 630) {
        
        // used a new position to avoid blackbunny overlap problum.
        positionOne = 500;
        document.getElementById('set_clip').style.zIndex = '99';
        hight = 245;
    } else {
        document.getElementById('set_clip').style.zIndex = '99';
        hight = 220;
    }
    return positionOne;
}
// End indexing of all Layer of hills.

function giveRendom() {
    
    // Here 490 is used to generate rendom position within the game area.
    let randum = Math.floor(Math.random() * 490);
    return randum;
}
// End of Rendom Number generator.

function checkPositionRepeat() {
    let result = 0;
    if (positionTwo >= positionOne) {
        result = positionTwo - positionOne;
        shock_hight = 300;
    } else {
        result = positionOne - positionTwo;
    }
    if (result < 150) {
        
        // Giving max value to resolve overlap.
        result = 680;
        return result;
    } else {
        return positionTwo;
    }
}
// End of Both Bunny Overlaping problum.

function setBlackZindex() {
    positionTwo = giveRendom();
    let newPositionTwo = checkPositionRepeat();
    if (newPositionTwo <= 100) {
        document.getElementById('set_clip2').style.zIndex = '99';
        shock_hight = 275;
    } else if (newPositionTwo > 100 && newPositionTwo <= 275) {
        document.getElementById('set_clip2').style.zIndex = '100';
        shock_hight = 230;	
    } else if (newPositionTwo > 275 && newPositionTwo <= 400) {
        document.getElementById('set_clip2').style.zIndex = '101';
        shock_hight = 190;
    } else if (newPositionTwo > 400 && newPositionTwo <= 630) {
        
        // used to make proper click behind the hills(Grass).
        newPositionTwo = 630;
        document.getElementById('set_clip2').style.zIndex = '99';
        shock_hight = 280;
    } else {
        document.getElementById('set_clip2').style.zIndex = '99';
        shock_hight = 270;
    }
    return newPositionTwo;
}
// End Bunny indexing of all black bunny behind the hills.

function finalMessage() {
    var count = 0;
    let stop = setInterval(frame, 5);
    function frame() {
        if (count === 200) {
            clearInterval(stop);
        } else {
            clearInterval(levelAnim);
            clearInterval(bunnyDownAnimation);
            clearInterval(bunnyUpAnim);
            clearInterval(blackUpAnimation);
            clearInterval(blackDownAnimation);
            count += 1;
        }
    }
    // Stop all animation on gameover.

    let message = document.getElementById('stage');
    stage.innerHTML += `<div id = final_score></div>`;
    let scoreMessage = document.getElementById('final_score');
    scoreMessage.style.height = '400px';
    scoreMessage.style.width = '800px';
    
    // in the belowed value, last 2 digits are used for opacity.
    scoreMessage.style.background = '#00000090';
    scoreMessage.style.zIndex = '400';
    scoreMessage.style.bottom = '903px';
    scoreMessage.innerHTML = `<h2 style = 'color:white; text-align:center; position:relative; top: 35%;'>Your Score : ${ scorePoint }</h2>`;
    stage.innerHTML += `<div id = end></div><div id = relod_btn></div>`;
    end.style.height = '37px';
    end.style.width = '200px';
    end.style.zIndex = '411';
    end.style.bottom = '1015px';
    end.style.margin = 'auto';
    end.style.background = `url(${ gameImage[4] }) 0 0 no-repeat`;
    end.onmouseover = function() {
        end.style.cursor = 'pointer';
    };	
    
    end.onclick = function() {
        end.style.background = `url(${ gameImage[5] })`;
        end.style.height = '400px';
        end.style.width = '800px';
        end.style.bottom = '1303px';
    }
    
    relod_btn.style.height = '37px';
    relod_btn.style.width = '200px';
    relod_btn.style.zIndex = '401';
    relod_btn.style.bottom = '1120px';
    relod_btn.style.margin = 'auto';
    relod_btn.style.background = `url(${ gameImage[3] }) 0 0 no-repeat`;
    relod_btn.onmouseover = function() {
        relod_btn.style.cursor = 'pointer';
    };
	
    relod_btn.onclick = function() {
        location.reload();
    }
}
// End of Game (Total Score showing) function.