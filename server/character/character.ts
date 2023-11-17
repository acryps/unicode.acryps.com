import { ViewModel } from "vlserver";

export class Character {
	name: string;
	codePoint: number;
}

export class CharacterViewModel extends ViewModel<Character> {
	name;
	codePoint;
}

export class CharacterSummaryModel extends ViewModel<Character> {
	codePoint;
}