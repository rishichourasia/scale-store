import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "Self-Help",
		description:
			"A self-help book is one that is written with the intention to instruct its readers on solving personal problems.",
	},
	{
		_id: uuid(),
		categoryName: "Philosophy",
		description:
			"psychological novel, work of fiction in which the thoughts, feelings, and motivations of the characters are of equal or greater interest than is the external action of the narrative.",
	},
	{
		_id: uuid(),
		categoryName: "Human Psychology",
		description:
			"Human behavior is the potential and expressed capacity (mentally, physically, and socially) of human individuals or groups to respond to internal and external stimuli throughout their life.",
	},
	{
		_id: uuid(),
		categoryName: "Spirituality",
		description:
			"Spiritual reading is devoted to the reading of lives of saints, writings of Doctors and the Fathers of the Church, theological works written by holy people, and doctrinal writings of Church authorities.",
	},
];
