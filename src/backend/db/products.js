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
		title: "Power of Now",
		price: 350,
		rating: 2,
		categoryName: "Spirituality",
		image: "/assests/pictures/power-of-now.jpg",
	},
	{
		_id: uuid(),
		title: "Beyond good and evil",
		price: 650,
		rating: 3,
		categoryName: "Philosophy",
		image: "/assests/pictures/beyond-good and evil.jpg",
	},
	{
		_id: uuid(),
		title: "Atomic Habits",
		price: 250,
		rating: 3,
		categoryName: "Self-Help",
		image: "/assests/pictures/habits.jpg",
	},
	{
		_id: uuid(),
		title: "You are not Smart",
		price: 750,
		rating: 2,
		categoryName: "Human Psychology",
		image: "/assests/pictures/not so smart.jpg",
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
		title: "Siddhartha",
		price: 550,
		rating: 3,
		categoryName: "Spirituality",
		image: "/assests/pictures/siddhartha.jpg",
	},
	{
		_id: uuid(),
		title: "12 Rules For Life",
		price: 400,
		rating: 3,
		categoryName: "Self-Help",
		image: "/assests/pictures/jordan.png",
	},

	{
		_id: uuid(),
		title: "Influence",
		price: 1000,
		rating: 5,
		categoryName: "Human Psychology",
		image: "/assests/pictures/influence.jpg",
	},
	{
		_id: uuid(),
		title: "Art of war",
		price: 750,
		rating: 2,
		categoryName: "Philosophy",
		image: "/assests/pictures/art of war.jpg",
	},
	{
		_id: uuid(),
		title: "Art of Happiness",
		price: 850,
		rating: 4,
		categoryName: "Spirituality",
		image: "/assests/pictures/art of happiness.jpg",
	},
	{
		_id: uuid(),
		title: "The Philosophy Book",
		price: 500,
		rating: 1,
		categoryName: "Philosophy",
		image: "/assests/pictures/the philiosphy book.jpg",
	},
];
