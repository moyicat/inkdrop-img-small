module.exports = {
	config: {
		imgHeight: {
			title: "Image Height (px)",
			type: "integer",
			default: 240,
		}
	},
	activate() {
		inkdrop.config.observe("img-small.imgHeight", function(newValue) {
      		document.documentElement.style.setProperty("--inkdrop-img-small-height", newValue + "px");
		})
	},
	deactivate() {
		document.documentElement.style.setProperty("--inkdrop-img-small-height", null);
	}
};