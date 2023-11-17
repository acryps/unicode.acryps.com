import { Component } from "@acryps/page";
import { BlockSummaryModel, BlockViewModel, CharacterService } from "./managed/services";
import { BlockComponent } from "./block";

export class HomeComponent extends Component {
	blocks: BlockSummaryModel[];

	async onload() {
		this.blocks = await new CharacterService().getBlocks();
	}

	render() {
		return <ui-home>
			<ui-header>
				<ui-title>
					Unicode Character Table
				</ui-title>

				<ui-actions>
					<ui-action>
						Update Database
					</ui-action>
				</ui-actions>
			</ui-header>

			<ui-guide>
				Here are all unicode characters listed by their block, directly sourced from Unicode Servers.
				We have omitted the Han characters for performance reasons.
			</ui-guide>

			<ui-blocks>
				{this.blocks.map(block => <ui-block ui-href={`block/${block.tag}`}>
					<ui-name>{block.name}</ui-name>

					<ui-preview>
						{block.characters.filter(character => character.codePoint > 64).slice(0, 10).map(character => <ui-character>
							{String.fromCodePoint(character.codePoint)}
						</ui-character>)}
					</ui-preview>

					<ui-metrics>
						<ui-character-count>
							<ui-name>Characters</ui-name>
							<ui-value>{block.characters.length}</ui-value>
						</ui-character-count>

						<ui-range>
							<ui-name>Range</ui-name>
							<ui-value>0x{block.start.toString(16)} - 0x{block.end.toString(16)}</ui-value>
						</ui-range>
					</ui-metrics>
				</ui-block>)}
			</ui-blocks>
		</ui-home>;
	}
}