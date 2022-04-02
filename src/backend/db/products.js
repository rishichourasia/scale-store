import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: "Sapiens",
		price: 200,
		rating: 4,
		categoryName: "Self-Help",
		image: "/assests/pictures/sapiens.png",
	},
	{
		_id: uuid(),
		title: "Behave",
		price: 500,
		rating: 4,
		categoryName: "Human Psychology",
		image: "/assests/pictures/behave.jpg",
	},
	{
		_id: uuid(),
		title: "Atomic Habits",
		price: 250,
		rating: 3,
		categoryName: "Self-help",
		image: "/assests/pictures/habits.jpg",
	},
	{
		_id: uuid(),
		title: "Almanac of Naval Ravikant",
		price: 150,
		rating: 2,
		categoryName: "Self-help",
		image: "/assests/pictures/naval.png",
	},
	{
		_id: uuid(),
		title: "Thinking Fast and Slow",
		price: 450,
		rating: 1,
		categoryName: "Human Psychology",
		image: "/assests/pictures/thinking.jpg",
	},
	{
		_id: uuid(),
		title: "12 Rules For Life",
		price: 400,
		rating: 3,
		categoryName: "Self-help",
		image: "/assests/pictures/jordan.png",
	},
];
