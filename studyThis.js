var start = document.getElementById("start"),
	reset = document.getElementById("reset"),
	stop = document.getElementById("stop"),
	current_progress = 0,
	step = 0.5; // the smaller this is the slower the progress bar

start.onclick = function () {
	interval = setInterval(function () {
		current_progress += step;
		progress =
			Math.round((Math.atan(current_progress) / (Math.PI / 2)) * 100 * 1000) /
			1000;
		$(".progress-bar")
			.css("width", progress + "%")
			.attr("aria-valuenow", progress)
			.text(progress + "%");
		if (progress >= 100) {
			clearInterval(interval);
		} else if (progress >= 70) {
			step = 0.1;
		}
	}, 100);
};

stop.onClick = function () {
	$(".progress-bar")
		.css("width", "100%")
		.attr("aria-valuenow", 100)
		.text("100% Complete");
	clearInterval(interval); // Important to stop the progress bar from increasing
};
/* Stop button */
reset.onclick = function () {
	$(".progress-bar").css("width", "0%").attr("aria-valuenow", 0);
	clearInterval(interval);
};
