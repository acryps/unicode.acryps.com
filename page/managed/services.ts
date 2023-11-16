export class Service {
    static baseUrl = "";

    static toURL(request) {
        return `${this.baseUrl}${request}`;
    }
}