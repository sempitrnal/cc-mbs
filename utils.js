export default function genre(id) {
	let res;
	switch (id) {
		case 28:
			res = "Action";
			break;
		case 12:
			res = "Adventure";
			break;
		case 16:
			res = "Animation";
			break;
		case 35:
			res = "Comedy";
			break;
		case 14:
			res = "Fantasy";
			break;
		case 10751:
			res = "Family";
			break;
		default:
			res = "";
			break;
	}
	return res;
}

export const movieGridTabs = [
	{
		tab: "Now Showing",
		active: true,
	},
	{
		tab: "Coming Soon",
		active: false,
	},
];

export function string_to_slug(str) {
	str = str.replace(/^\s+|\s+$/g, ""); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
	var to = "aaaaeeeeiiiioooouuuunc------";
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
	}

	str = str
		.replace(/[^a-z0-9 -]/g, "") // remove invalid chars
		.replace(/\s+/g, "-") // collapse whitespace and replace by -
		.replace(/-+/g, "-"); // collapse dashes

	return str;
}

export const fadeUp = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,

		transition: {
			duration: 1,
			type: "spring",
			damping: 10,
			stiffness: 50,
		},
	},
};
