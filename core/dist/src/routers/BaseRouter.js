export default class BaseRouter {
    async register(app) {
        await app.instance.register(this.routes.bind(this), { prefix: this.prefix });
    }
    get prefix() {
        return undefined;
    }
    async routes(instance) { }
}
