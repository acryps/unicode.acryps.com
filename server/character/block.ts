import { ViewModel } from "vlserver";
import { Character, CharacterSummaryModel, CharacterViewModel } from "./character";

export class Block {
	tag: string;
	characters: Character[] = [];

	constructor(
		public name?: string,
		public start?: number,
		public end?: number
	) {
		this.tag = this.name.split(' ').join('-').toLowerCase();
	}
}

export class BlockViewModel extends ViewModel<Block> {
	name;
	tag;

	characters: CharacterViewModel[];
}

export class BlockSummaryModel extends ViewModel<Block> {
	name;
	tag;

	start;
	end;

	characters: CharacterSummaryModel[];
}