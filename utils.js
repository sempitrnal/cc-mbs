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
