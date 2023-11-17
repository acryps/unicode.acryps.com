import { BaseServer, ViewModel, Inject } from "vlserver";

import { BlockSummaryModel } from "././../character/block";
import { BlockViewModel } from "././../character/block";
import { CharacterDatabase } from "././../character/database";
import { CharacterService } from "././../character/service";
import { CharacterViewModel } from "./../character/character";
import { CharacterSummaryModel } from "./../character/character";
import { Block } from "./../character/block";
import { Character } from "./../character/character";

Inject.mappings = {
	
};

export class ManagedServer extends BaseServer {
	prepareRoutes() {
		this.expose(
			"Z0YmdpMTNvcmAyZnAzcmZoeXR5c3N2cn",
			{},
			inject => inject.construct(CharacterService),
			(controller, params) => controller.getBlocks(
				
			)
		);

		this.expose(
			"FvZmZjNGRkMnBwYWluMGpic3F2cGI3em",
			{
				"U0cWsyNDZ0bWliaGNwZWFmdDVvM3dwdT": {
					isArray: false,
					type: "string"
				}
			},
			inject => inject.construct(CharacterService),
			(controller, params) => controller.getBlock(
				params["U0cWsyNDZ0bWliaGNwZWFmdDVvM3dwdT"]
			)
		)
	}
}

ViewModel.mappings = {
	BlockViewModel: class ComposedBlockViewModel extends BlockViewModel {
		async map() {
			return {
				tag: this.model.tag,
				characters: this.model.characters,
				name: this.model.name
			}
		};

		static get items() {
			return this.getPrefetchingProperties(ViewModel.maximumPrefetchingRecursionDepth, []);
		}

		static getPrefetchingProperties(level: number, parents: string[]) {
			let repeats = false;

			for (let size = 1; size <= parents.length / 2; size++) {
				if (!repeats) {
					for (let index = 0; index < parents.length; index++) {
						if (parents[parents.length - 1 - index] == parents[parents.length - 1 - index - size]) {
							repeats = true;
						}
					}
				}
			}

			if (repeats) {
				level--;
			}

			if (!level) {
				return {};
			}

			return {
				tag: true,
				characters: true,
				name: true
			};
		};

		static toViewModel(data) {
			const item = new BlockViewModel(null);
			"tag" in data && (item.tag = data.tag === null ? null : `${data.tag}`);
			"characters" in data && (undefined);
			"name" in data && (item.name = data.name === null ? null : `${data.name}`);

			return item;
		}

		static async toModel(viewModel: BlockViewModel) {
			const model = new Block();
			
			"tag" in viewModel && (model.tag = viewModel.tag === null ? null : `${viewModel.tag}`);
			"characters" in viewModel && (undefined);
			"name" in viewModel && (model.name = viewModel.name === null ? null : `${viewModel.name}`);

			return model;
		}
	},
	BlockSummaryModel: class ComposedBlockSummaryModel extends BlockSummaryModel {
		async map() {
			return {
				tag: this.model.tag,
				characters: this.model.characters,
				name: this.model.name,
				start: this.model.start,
				end: this.model.end
			}
		};

		static get items() {
			return this.getPrefetchingProperties(ViewModel.maximumPrefetchingRecursionDepth, []);
		}

		static getPrefetchingProperties(level: number, parents: string[]) {
			let repeats = false;

			for (let size = 1; size <= parents.length / 2; size++) {
				if (!repeats) {
					for (let index = 0; index < parents.length; index++) {
						if (parents[parents.length - 1 - index] == parents[parents.length - 1 - index - size]) {
							repeats = true;
						}
					}
				}
			}

			if (repeats) {
				level--;
			}

			if (!level) {
				return {};
			}

			return {
				tag: true,
				characters: true,
				name: true,
				start: true,
				end: true
			};
		};

		static toViewModel(data) {
			const item = new BlockSummaryModel(null);
			"tag" in data && (item.tag = data.tag === null ? null : `${data.tag}`);
			"characters" in data && (undefined);
			"name" in data && (item.name = data.name === null ? null : `${data.name}`);
			"start" in data && (item.start = data.start === null ? null : +data.start);
			"end" in data && (item.end = data.end === null ? null : +data.end);

			return item;
		}

		static async toModel(viewModel: BlockSummaryModel) {
			const model = new Block();
			
			"tag" in viewModel && (model.tag = viewModel.tag === null ? null : `${viewModel.tag}`);
			"characters" in viewModel && (undefined);
			"name" in viewModel && (model.name = viewModel.name === null ? null : `${viewModel.name}`);
			"start" in viewModel && (model.start = viewModel.start === null ? null : +viewModel.start);
			"end" in viewModel && (model.end = viewModel.end === null ? null : +viewModel.end);

			return model;
		}
	},
	CharacterViewModel: class ComposedCharacterViewModel extends CharacterViewModel {
		async map() {
			return {
				name: this.model.name,
				codePoint: this.model.codePoint
			}
		};

		static get items() {
			return this.getPrefetchingProperties(ViewModel.maximumPrefetchingRecursionDepth, []);
		}

		static getPrefetchingProperties(level: number, parents: string[]) {
			let repeats = false;

			for (let size = 1; size <= parents.length / 2; size++) {
				if (!repeats) {
					for (let index = 0; index < parents.length; index++) {
						if (parents[parents.length - 1 - index] == parents[parents.length - 1 - index - size]) {
							repeats = true;
						}
					}
				}
			}

			if (repeats) {
				level--;
			}

			if (!level) {
				return {};
			}

			return {
				name: true,
				codePoint: true
			};
		};

		static toViewModel(data) {
			const item = new CharacterViewModel(null);
			"name" in data && (item.name = data.name === null ? null : `${data.name}`);
			"codePoint" in data && (item.codePoint = data.codePoint === null ? null : +data.codePoint);

			return item;
		}

		static async toModel(viewModel: CharacterViewModel) {
			const model = new Character();
			
			"name" in viewModel && (model.name = viewModel.name === null ? null : `${viewModel.name}`);
			"codePoint" in viewModel && (model.codePoint = viewModel.codePoint === null ? null : +viewModel.codePoint);

			return model;
		}
	},
	CharacterSummaryModel: class ComposedCharacterSummaryModel extends CharacterSummaryModel {
		async map() {
			return {
				codePoint: this.model.codePoint
			}
		};

		static get items() {
			return this.getPrefetchingProperties(ViewModel.maximumPrefetchingRecursionDepth, []);
		}

		static getPrefetchingProperties(level: number, parents: string[]) {
			let repeats = false;

			for (let size = 1; size <= parents.length / 2; size++) {
				if (!repeats) {
					for (let index = 0; index < parents.length; index++) {
						if (parents[parents.length - 1 - index] == parents[parents.length - 1 - index - size]) {
							repeats = true;
						}
					}
				}
			}

			if (repeats) {
				level--;
			}

			if (!level) {
				return {};
			}

			return {
				codePoint: true
			};
		};

		static toViewModel(data) {
			const item = new CharacterSummaryModel(null);
			"codePoint" in data && (item.codePoint = data.codePoint === null ? null : +data.codePoint);

			return item;
		}

		static async toModel(viewModel: CharacterSummaryModel) {
			const model = new Character();
			
			"codePoint" in viewModel && (model.codePoint = viewModel.codePoint === null ? null : +viewModel.codePoint);

			return model;
		}
	}
};