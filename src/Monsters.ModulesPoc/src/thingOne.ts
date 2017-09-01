import {ThingTwo} from "./thingTwo";

export class ThingOne
{
    constructor()
    {
        this.do();
    }
    public do(): void
    {
        var thingTwo = new ThingTwo();
        thingTwo.do();
    }
}