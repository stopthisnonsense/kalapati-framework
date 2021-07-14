const modifier = (stat) => {
	if (stat == null) return;
	return Math.floor((stat - 10) / 2);
};
export { modifier };
