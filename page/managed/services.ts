export class BlockViewModel {
    tag: string;
	characters: CharacterViewModel[];
	name: string;

    private static $build(raw) {
        const item = new BlockViewModel();
        raw.tag === undefined || (item.tag = raw.tag === null ? null : `${raw.tag}`)
		raw.characters === undefined || (item.characters = raw.characters ? raw.characters.map(i => CharacterViewModel["$build"](i)) : null)
		raw.name === undefined || (item.name = raw.name === null ? null : `${raw.name}`)
        
        return item;
    }
}

export class BlockSummaryModel {
    tag: string;
	characters: CharacterSummaryModel[];
	name: string;
	start: number;
	end: number;

    private static $build(raw) {
        const item = new BlockSummaryModel();
        raw.tag === undefined || (item.tag = raw.tag === null ? null : `${raw.tag}`)
		raw.characters === undefined || (item.characters = raw.characters ? raw.characters.map(i => CharacterSummaryModel["$build"](i)) : null)
		raw.name === undefined || (item.name = raw.name === null ? null : `${raw.name}`)
		raw.start === undefined || (item.start = raw.start === null ? null : +raw.start)
		raw.end === undefined || (item.end = raw.end === null ? null : +raw.end)
        
        return item;
    }
}

export class CharacterViewModel {
    name: string;
	codePoint: number;

    private static $build(raw) {
        const item = new CharacterViewModel();
        raw.name === undefined || (item.name = raw.name === null ? null : `${raw.name}`)
		raw.codePoint === undefined || (item.codePoint = raw.codePoint === null ? null : +raw.codePoint)
        
        return item;
    }
}

export class CharacterSummaryModel {
    codePoint: number;

    private static $build(raw) {
        const item = new CharacterSummaryModel();
        raw.codePoint === undefined || (item.codePoint = raw.codePoint === null ? null : +raw.codePoint)
        
        return item;
    }
}

export class Service {
    static baseUrl = "";

    static toURL(request) {
        return `${this.baseUrl}${request}`;
    }
}

export class CharacterService {
    async getBlocks(): Promise<Array<BlockSummaryModel>> {
        const $data = new FormData();
        

        return await fetch(Service.toURL("Z0YmdpMTNvcmAyZnAzcmZoeXR5c3N2cn"), {
            method: "post",
            credentials: "include",
            body: $data
        }).then(res => res.json()).then(r => {
            if ("data" in r) {
                const d = r.data;

                return d.map(d => d === null ? null : BlockSummaryModel["$build"](d));
            } else if ("aborted" in r) {
                throw new Error("request aborted by server");
            } else if ("error" in r) {
                throw new Error(r.error);
            }
        });
    }

	async getBlock(tag: string): Promise<BlockViewModel> {
        const $data = new FormData();
        $data.append("U0cWsyNDZ0bWliaGNwZWFmdDVvM3dwdT", JSON.stringify(tag))

        return await fetch(Service.toURL("FvZmZjNGRkMnBwYWluMGpic3F2cGI3em"), {
            method: "post",
            credentials: "include",
            body: $data
        }).then(res => res.json()).then(r => {
            if ("data" in r) {
                const d = r.data;

                return d === null ? null : BlockViewModel["$build"](d);
            } else if ("aborted" in r) {
                throw new Error("request aborted by server");
            } else if ("error" in r) {
                throw new Error(r.error);
            }
        });
    }
}