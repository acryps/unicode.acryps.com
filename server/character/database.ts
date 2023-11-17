import { get } from 'https';
import { Parse } from 'unzipper';
import { Block } from './block';
import { DOMParser } from 'xmldom';
import { Character } from './character';
import { writeFileSync } from 'fs';

export class CharacterDatabase {
	readonly source = process.env.CHARACTER_SOURCE;

	static blocks: Block[];

	async update() {
		const document = await this.downloadDocument();

		console.log(`[import] importing blocks`);
		const blocks: Block[] = [];
		
		for (let source of this.findElements('block', document)) {
			const block = new Block(
				source.getAttribute('name'), 
				parseInt(source.getAttribute('first-cp'), 16), 
				parseInt(source.getAttribute('last-cp'), 16)
			);

			blocks.push(block);
		}

		console.log(`[import] importing characters`);
		for (let source of this.findElements('char', document)) {
			const character = new Character();
			character.codePoint = parseInt(source.getAttribute('cp'), 16);
			character.name = source.getAttribute('na') || source.getAttribute('na1') || this.findElements('name-alias', source).find(alias => alias.getAttribute('alias'))?.getAttribute('alias');

			blocks.find(block => block.start <= character.codePoint && block.end >= character.codePoint)?.characters.push(character);
		}

		console.log(`[import] imported ${blocks.length} blocks`);
		CharacterDatabase.blocks = blocks;
	}

	async downloadDocument() {
		console.log(`[import] downloading archive from '${this.source}'...`);

		const source = await new Promise<Buffer>(done => get(this.source, response => {
			response.pipe(Parse()).on('entry', entry => {
				const chunks = [];

				entry.on('data', chunk => chunks.push(chunk));
				entry.on('finish', () => {
					done(Buffer.concat(chunks));
				});
			})
		}));

		console.log(`[import] unpacking archive`);
		return new DOMParser().parseFromString(source.toString('utf-8'), 'text/xml');
	}

	findElements(name: string, node) {
		const elements = [];

		let childIndex = 0;
		let child;

		while (child = node.childNodes[childIndex]) {
			if (child.tagName == name) {
				elements.push(child);
			} else if (child.childNodes) {
				elements.push(...this.findElements(name, child));
			}

			childIndex++;
		}

		return elements;
	}
}