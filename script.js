document.addEventListener("DOMContentLoaded", function() {
    var clickButton = document.getElementById("clickButton");
    var displayText = document.getElementById("displayText");
    var clickSound = document.getElementById("clickSound");
    var pageSound = document.getElementById("pageSound");
    var hiddenVideo = document.getElementById("hiddenVideo");
    let mainDiv = document.getElementById("container");
    let backMusic = document.getElementById("backmusic");
    backMusic.volume =0.2;
    let umrizvuk = document.getElementById("umrizvuk");

    var clickCount = 0;

    document.body.addEventListener("click", function() {
        pageSound.play();
    });

    clickButton.addEventListener("click", function() {
        clickCount++;
        displayText.textContent = "Broj klikova: " + clickCount;
        clickSound.play();
        backMusic.play();
        if (clickCount == 0)  {
            backMusic.play();
        }
        if (clickCount == 30)  {
            umrizvuk.play();
        }
        if (clickCount >= 10) {
            document.body.style.backgroundImage = "url('flame.jpg')";
        }
        if (clickCount >= 50) {
            document.querySelector("h1").innerHTML = "CLICKER 💀 🖤 👻 🕷️ 👁️ 🩸";
        }
        if (clickCount >= 60) {
            document.querySelector("button").innerHTML = "jace, brze, bolje 😈😈😈";
        }
        if (clickCount >= 20) {
            hiddenVideo.style.visibility = "visible";
            hiddenVideo.style.control
            document.body.style.backgroundImage = "url('flame.jpg')";
        }
        if (clickCount == 40)  {
            mainDiv.style.backgroundImage = "url('lutka.jpg')";
        }
        if (clickCount == 80)  {
            poludi();
        }
        if (clickCount == 100)  {
            window.close();
        }
    });
});

function poludi() {
    var R = 0;
    var x1 = 0.1;
    var y1 = 0.05;
    var x2 = 0.25;
    var y2 = 0.24;
    var x3 = 1.6;
    var y3 = 0.24;
    var x4 = 300;
    var y4 = 200;
    var x5 = 300;
    var y5 = 200;
    
    function A() {
        var DI = document.getElementsByTagName("img");
        var DIL = DI.length;
        for (var i = 0; i < DIL; i++) {
            var DIS = DI[i].style;
            DIS.position = 'absolute';
            DIS.left = (Math.sin(R * x1 + i * x2 + x3) * x4 + x5) + "px";
            DIS.top = (Math.cos(R * y1 + i * y2 + y3) * y4 + y5) + "px";
        }
        R++;
    }
    
    setInterval(A, 5);
}
