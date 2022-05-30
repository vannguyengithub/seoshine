const trailSettings = {
	length: 8, // Amount of trails to be rendered
	duration: 100, // Duration each trail will last in ms
	spacing: 0, // Space between each trail
	cursorOffset: 30, // Adjust this value to center the cursor & trails
	isTrailActive: false
};

let currAmount = 0; // Current in DOM rendered trails

const mountTrails = (e, pos, info) => {
	// Define inner variable to avoid changing external values
	let currInfo = Object.assign({}, info);

	if (currAmount <= info.length) {
		currAmount++;
		setTimeout(() => {
			// Generate new trails
			let trail;
			trail = document.createElement("div");
			trail.id = "trail" + currAmount;
			trail.classList.add("trailEl");

			trail.style.left = pos.lastPos[0] + "px";
			trail.style.top = pos.lastPos[1] + "px";

			// Fade trails & remove them from the DOM
			setTimeout(() => {
				trail.style.animation = `fade-out ${
					currInfo.duration + "ms"
				} ease-in forwards`;
				setTimeout(() => {
					trail.remove();
					currAmount -= 1;
				}, currInfo.duration);
			}, currAmount * 20);

			document.body.appendChild(trail);
		}, currInfo.spacing);
	}
};

document.onmousemove = (e) => {
	cursor.style.transform = `translate3d(${
		e.clientX - trailSettings.cursorOffset
	}px, ${e.clientY - trailSettings.cursorOffset}px, 0px)`;

	if (trailSettings.isTrailActive) {
		window.requestAnimationFrame(() => {
			mountTrails(
				e,
				{
					lastPos: [e.clientX, e.clientY],
					lastEvent: e
				},
				trailSettings
			);
		});
	}
};

document.addEventListener("DOMContentLoaded", () => {
	trailSettings.isTrailActive = true;
});
