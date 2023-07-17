// import app
const app = Vue.createApp({
	// options object: adding optional properties to configure the application
	// always have to at least pass 1 object
	// this creates vue instance that powers everything
	data() {
		//adding data option, that returns an object of product with the values: socks
		return {
			product: 'Socks',
			description:
				'Introducing our high-quality socks collection, where comfort and style meet in perfect harmony. Crafted with meticulous attention to detail, our socks are designed to elevate your everyday essentials with a dash of personality and exceptional comfort.',
		};
	},
});
