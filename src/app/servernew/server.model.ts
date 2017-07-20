import { ServerType } from './serverType.enum'

export class Server {
    constructor(public name: string, public content: string, public type: ServerType) { }
}