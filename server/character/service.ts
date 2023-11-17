import { Service } from "vlserver";
import { BlockSummaryModel, BlockViewModel } from "./block";
import { CharacterDatabase } from "./database";

export class CharacterService extends Service {
	getBlocks() {
		return BlockSummaryModel.from(CharacterDatabase.blocks);
	}

	getBlock(tag: string) {
		return new BlockViewModel(CharacterDatabase.blocks.find(block => block.tag == tag));
	}
}