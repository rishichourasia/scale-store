import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: "Sapiens",
		price: "200",
		rating: Math.floor(Math.random() * 5) + 1,
		categoryName: "Self-Help",
		image: "/public/assests/pictures/sapiens.png",
	},
	{
		_id: uuid(),
		title: "Behave",
		price: "500",
		rating: Math.floor(Math.random() * 5) + 1,
		categoryName: "Human Psychology",
		image: "/public/assests/pictures/behave.jpg",
	},
	{
		_id: uuid(),
		title: "Atomic Habits",
		price: "250",
		rating: Math.floor(Math.random() * 5) + 1,
		categoryName: "Self-help",
		image: "/public/assests/pictures/habits.jpg",
	},
	{
		_id: uuid(),
		title: "Almanac of Naval Ravikant",
		price: "150",
		rating: Math.floor(Math.random() * 5) + 1,
		categoryName: "Self-help",
		image: "/public/assests/pictures/naval.png",
	},
	{
		_id: uuid(),
		title: "Thinking Fast and Slow",
		price: "450",
		rating: Math.floor(Math.random() * 5) + 1,
		categoryName: "Human Psychology",
		image: "/public/assests/pictures/thinking.jpg",
	},
	{
		_id: uuid(),
		title: "12 Rules For Life",
		price: "400",
		rating: Math.floor(Math.random() * 5) + 1,
		categoryName: "Self-help",
		image: "/public/assests/pictures/jordan.png",
	},
];
