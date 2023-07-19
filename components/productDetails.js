app.component('productDetails', {
	props: {
		details: {
			type: Array,
			required: true,
		},
	},

	template:
		/*html*/
		`<ul>
    <li :details></li>
  </ul>`,
});
