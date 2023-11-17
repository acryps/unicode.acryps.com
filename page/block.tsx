import { Component } from "@acryps/page";
import { BlockViewModel, CharacterService } from "./managed/services";
import { Application } from ".";

export class BlockComponent extends Component {
	declare parameters: { tag };

	block: BlockViewModel;

	async onload() {
		this.block = await new CharacterService().getBlock(this.parameters.tag);
	}

	render() {
		return <ui-block>
			<ui-header>
				<ui-name>{this.block.name}</ui-name>
			</ui-header>

			<ui-code-points>
				{this.block.characters.map(character => <ui-code-point ui-click={() => Application.copy(String.fromCodePoint(character.codePoint))}>
					<ui-character>
						<ui-bounding-box>
							{String.fromCodePoint(character.codePoint)}
						</ui-bounding-box>
					</ui-character>

					<ui-name>
						{character.name.toLowerCase()}
					</ui-name>
					
					<ui-hex>
						0x{character.codePoint.toString(16)}
					</ui-hex>
				</ui-code-point>)}
			</ui-code-points>
		</ui-block>;
	}
}