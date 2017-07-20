export class A5User {
    constructor(public name: string, public active: boolean) {}

    toggleActive() { this.active = !this.active; }

    getActiveString(): string { return this.active ? 'active' : 'inactive'; }
}
