const toggles = Array.from(document.querySelectorAll(".toggle"));
const sections = Array.from(document.querySelectorAll(".mainsection"));

let previousToggle = toggles[0];
let previous2Toggle = toggles[0];

// const toggleToSection = {};

// let i = 0;
// for (let toggle of toggles) {
// 	console.log(toggle);
// 	toggleToSection[toggle] = sections[i];
// 	i++;
// 	console.log(toggleToSection[toggle]);
// }

// console.warn("====================================");

// for (let toggle of toggles) {
// 	console.log(toggle);
// 	console.log(toggleToSection[toggle]);
// }

let swipeDirection = "rightSwipe";
// let previousSwipeDirection = swipeDirection;

for (let toggle of toggles) {
	toggle.addEventListener("click", (e) => {
		if (toggle == previousToggle) {
			return;
		}

		//swipeDirection
		sections[toggles.indexOf(previous2Toggle)].classList.remove(swipeDirection);

		swipeDirection = "leftSwipe";
		switch (true) {
			case toggles.indexOf(toggle) < toggles.indexOf(previousToggle):
				swipeDirection = "rightSwipe";
		}

		//removing old classes:
		previousToggle.classList.remove("selected");
		sections[toggles.indexOf(previousToggle)].classList.remove("shown");
		sections[toggles.indexOf(previousToggle)].classList.add(swipeDirection);

		// console.log(toggle);
		// console.log("is set to shown");

		sections[toggles.indexOf(toggle)].classList.add("shown");

		toggle.classList.add("selected");
		previous2Toggle = previousToggle;
		previousToggle = toggle;
	});
}

// animating links reveal:

const links = document.querySelectorAll(".link");
const blob = document.querySelector(".blob");

let reveal = true; // they must be hidden by default

blob.addEventListener("click", (e) => {
	if (reveal) {
		for (let link of links) link.classList.add("revealed");
	} else {
		for (let link of links) {
			link.classList.remove("revealed");
		}
	}

	reveal = !reveal;
});
