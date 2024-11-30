let currentCard = 1;
const carousel = document.querySelector(".carousel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

fetch("questions.json")
    .then(response => response.json())
    .then(cards => {
        renderCards(cards);

        next.addEventListener("click", function () {
            if (currentCard >= cards.length) {
                return;
            }
            currentCard++;
            cardFly();
        });

        prev.addEventListener("click", function () {
            if (currentCard - 1 <= 0) {
                return;
            }
            currentCard--;
            cardFly();
        });

        function renderCards(cards) {
            carousel.style.width = `${cards.length}00vw`;
            cards.forEach(card => {
                const div = document.createElement("div");
                div.classList.add("card");

                const front = document.createElement("div");
                front.classList.add("front");
                front.textContent = card.front;

                const back = document.createElement("div");
                back.classList.add("back");
                back.textContent = card.back;

                div.appendChild(front);
                div.appendChild(back);

                div.addEventListener("click", function () {
                    div.classList.toggle("active");
                });

                carousel.appendChild(div);
            });
        }

        function cardFly() {
            carousel.style.transform = `translateX(-${(currentCard - 1) * 100}vw)`;
        }
    });