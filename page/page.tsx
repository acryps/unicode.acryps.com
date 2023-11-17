import { Component } from '@acryps/page';

export class PageComponent extends Component {
	render(child) {
		return <ui-page>
			<ui-navigation>
				<ui-brand ui-href='/'>
					<ui-logo>¨̮</ui-logo> <ui-name>Unicode</ui-name>
				</ui-brand>
			</ui-navigation>

			{child}
		</ui-page>;
	}
}