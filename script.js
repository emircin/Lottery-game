let entryNumbers = document.querySelector(".entry");

let luckyButton = document.querySelector(".lucky-button");

let luckySection = document.querySelector(".lucky-section");

let luckyHeader = document.querySelector(".header");

let manyTicket = document.querySelector(".many-ticket");


luckyButton.addEventListener("click", () => {



  if (0 < entryNumbers.value && entryNumbers.value <= 8) {

    luckyButton.parentElement.style.display = "none";
    entryNumbers.parentElement.style.display = "none";
    manyTicket.style.display = "none";
    luckyHeader.innerHTML = `<img src="./images/luckynumb.png" class="lucky-image"></img>`;
    luckyHeader.style.marginTop = "1rem";
    luckyHeader.style.marginBottom = "1rem";
    


    for (i = 0; i < entryNumbers.value; i++) {

        var list = [];

        while (list.length < 6) {

        var item = (randomNumbers = Math.floor(Math.random() * 90 + 1));

        if (list.includes(item) == false) {
          list.push(item);
        }

        list.sort(function (a, b) {
          return a - b;
        });
        
      };

        function myFunction(addZero) {

            return addZero.toString().padStart(2, "0")
        }

        console.log()

        text = list.map(myFunction).join(" - ");

        randomNumber = (Math.floor(Math.random() * 90 + 1)).toString().padStart(2, "0");
        randomNumber2 = (Math.floor(Math.random() * 90 + 1)).toString().padStart(2, "0");


        if (list.includes(randomNumber) == false) {
    
            luckySection.innerHTML += `<p class='text-number'> ${text} &nbsp<span class="inner1">  \
             ${randomNumber} </span><span class="inner2">&nbsp${randomNumber2}&nbsp</span></p>`

          };

    

    }

       



    }
    else {
    alert("Please Enter 1-8");
  }
});
