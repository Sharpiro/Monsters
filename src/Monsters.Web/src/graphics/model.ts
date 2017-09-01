import { Window2D } from "./graphics"

export abstract class Model
{
    protected width: number;
    protected height: number;

    constructor()
    {
        this.width = 14;
        this.height = 21;
    }
    public draw(window: Window2D): void
    {
        
    }
}