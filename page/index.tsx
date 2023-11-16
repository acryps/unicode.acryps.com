import { Component, PathRouter, Router } from '@acryps/page';
import { registerDirectives } from '@acryps/page-default-directives';
import { PageComponent } from './page';
import { HomeComponent } from './home';
import { CharacterComponent } from './character';

export class Application {
	static router: Router;

	static async main() {
		this.router = new PathRouter(PageComponent
			.route('/', HomeComponent)
			.route('/:codePoint', CharacterComponent)
		);
		
		registerDirectives(Component, this.router);

		this.router.host(document.body);
	}
}

Application.main();