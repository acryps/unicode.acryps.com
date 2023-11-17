import { Component, PathRouter, Router } from '@acryps/page';
import { registerDirectives } from '@acryps/page-default-directives';
import { PageComponent } from './page';
import { HomeComponent } from './home';
import { CharacterComponent } from './character';
import { BlockComponent } from './block';
import { Service } from './managed/services';

export class Application {
	static router: Router;

	static async main() {
		Service.baseUrl = '/';
		
		this.router = new PathRouter(PageComponent
			.route('/', HomeComponent)
			.route('/block/:tag', BlockComponent)
			.route('/:codePoint', CharacterComponent)
		);
		
		registerDirectives(Component, this.router);

		this.router.host(document.body);
	}

	static copy(content: string) {
		navigator.clipboard.writeText(content);
	}
}

Application.main();