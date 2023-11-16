import { Inject, StaticFileRoute, ViewModel } from "vlserver";
import { ManagedServer } from "./managed/server";
import { join } from "path";

const app = new ManagedServer();

app.createInjector = context => new Inject({
	Context: context
});

app.use(new StaticFileRoute('/', join(process.cwd(), '..', 'page', 'built')));
app.use(new StaticFileRoute('/assets', join(process.cwd(), '..', 'page', 'assets')));

app.prepareRoutes();
app.use(new StaticFileRoute('*', join(process.cwd(), '..', 'page', 'built', 'index.html')));

app.start(+process.env.PORT! || 2999);