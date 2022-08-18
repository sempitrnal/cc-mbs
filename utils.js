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
		x: 300,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 20,
			stiffness: 120,
		},
	},
	exit: {
		opacity: 0,
		x: -300,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 20,
			stiffness: 120,
		},
	},
};
export const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export const dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
export function avail_days(day) {
	const now = new Date();
	const day_arr = [];
	let newd;

	for (var i = 1; i <= 5; i++) {
		newd = now.setDate(now.getDate() + 1);
		day_arr.push({
			date: new Date(newd),
			time: ["4:20 PM", "9:00 AM"],
		});
	}
	return day_arr;
}
