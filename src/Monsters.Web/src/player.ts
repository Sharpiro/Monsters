import {Actor} from "./actor"
import {MonsterDataService} from "./MonsterDataService"
import {SharedFunctions} from "./sharedFunctions"
import { KEYS, ITexture, ActorType, IAbility } from "./interfaces/gameInterfaces"
import { Game } from "./Game"
import { Window2D, Model } from "./graphics/graphics"
import { GameConsole } from "./gameConsole"

export class Player extends Model
{
    public offsetX = 0;
    public offsetY = 0;
    public direction = KEYS.Up;
    public oldDirection = KEYS.Up;
    public spriteIndex = 3;
    public leftLeg = false;
    public canMove = true;
    //public currentPlayerTexture: HTMLImageElement;
    public playerTextures = <Array<ITexture>>[];
    public lastAnimationTick: number;
    public latestAnimationTick: number;

    constructor(name: string, private currentMap: Array<Array<any>>)
    {
        super();
        //this.abilities.push(MonsterDataService.getMoveByName("bite"));
        //this.abilities.push(MonsterDataService.getMoveByName("godmode"));
    }

    public setPlayerImages(playerImages: Array<ITexture>)
    {
        this.playerTextures = playerImages;
        //this.currentPlayerTexture = this.playerTextures[this.spriteIndex].image;
    }

    //public attack = (currentInput: string): IAbility =>
    //{
    //    const moveNumber = parseInt(currentInput) - 1;
    //    const move = this.abilities[moveNumber];
    //    move.hitSuccess = SharedFunctions.chance(move.accuracy);
    //    if (move.hitSuccess)
    //    {
    //        move.damage = this.abilities[moveNumber].damage;
    //    }
    //    return move;
    //}

    public getPosition()
    {
        var x = (Window2D.width / 2) - (this.width / 2);
        var y = (Window2D.height / 2) + 8 - (this.height);
        return { left: x, top: y };
    }

    private setCustomTimeout(func: any, milliseconds: number)
    {
        func();
    }

    public move = (map: any[][]) =>
    {
        this.canMove = false;
        const tileInfo = this.getFacingTile();
        if (tileInfo.facingTile.type !== "grass")
        {
            this.canMove = true;
            console.log("collision detected!");
        }
        else
        {
            requestAnimationFrame(this.animate);
        }
    }

    private animate = (time: number) =>
    {
        if (!this.lastAnimationTick)
            this.lastAnimationTick = time;
        var delta = time - this.lastAnimationTick
        this.lastAnimationTick = time;
        //console.log(delta);
        if (this.offsetX == 0 && this.offsetY == 0)
        {
            this.spriteIndex += (this.leftLeg) ? 1 : 2;
            this.leftLeg = !this.leftLeg;
        }
        if (this.canMove || Math.abs(this.offsetX) >= 15 || Math.abs(this.offsetY) >= 15)
        {
            this.reset();
            return;
        }
        switch (this.direction)
        {
            case KEYS.Up:
                this.offsetY += 1;
                break;
            case KEYS.Down:
                this.offsetY += -1;
                break;
            case KEYS.Left:
                this.offsetX += 1;
                break;
            case KEYS.Right:
                this.offsetX += -1;
                break;
        }
        requestAnimationFrame(this.animate);
    }

    private reset = () =>
    {
        switch (this.direction)
        {
            case KEYS.Up:
                Window2D.viewPort.y--;
                this.spriteIndex = 3;
                break;
            case KEYS.Down:
                Window2D.viewPort.y++;
                this.spriteIndex = 0;
                break;
            case KEYS.Left:
                Window2D.viewPort.x--;
                this.spriteIndex = 9;
                break;
            case KEYS.Right:
                Window2D.viewPort.x++;
                this.spriteIndex = 6;
                break;
        }
        this.offsetX = 0;
        this.offsetY = 0;
        this.canMove = true;
    }

    public deleteItem(tile?: any)
    {
        const tileInfo = this.getFacingTile();
        if (tile)
        {
            this.setTileMouse(tile);
        }
        else if (tileInfo.facingTile.type !== "grass")
        {
            console.log("Deleting item!");
            this.setTile(tileInfo, "grass");
        }
        this.canMove = true;
    }

    public interact()
    {
        const tileInfo = this.getFacingTile();
        if (tileInfo.facingTile.value)
        {
            //GameConsole.writeToConsole("Here is a random message with some Long text.  It has been split up into 5 words per page so that it fits in this text box");
            GameConsole.writeToConsole(tileInfo.facingTile.value);
            console.log(tileInfo.facingTile.value);
        }
        this.canMove = true;
    }

    public setValue(value?: string)
    {
        const tileInfo = this.getFacingTile();
        if (tileInfo.facingTile.value)
        {
            let input = prompt("Enter a value");
            if (input)
            {
                this.setTile(tileInfo, tileInfo.facingTile.type, input);
                //GameConsole.writeToConsole(tileInfo.facingTile.value);
                console.log("Value set!");

            }
        }
    }

    public draw(window: Window2D): void
    {
        const playerTexture = this.playerTextures[this.spriteIndex];
        if (playerTexture)
        {
            const playerPosition = this.getPosition();
            window.context.drawImage(playerTexture.image, playerPosition.left, playerPosition.top);
            //console.log(`${playerPosition.left}, ${playerPosition.top}`);
            super.draw(window);
        }
    }

    public placeRock()
    {
        const tileInfo = this.getFacingTile();
        if (tileInfo.facingTile.type !== "rock")
        {
            this.setTile(tileInfo, "rock");
            console.log("placing rock!");
        }
        this.canMove = true;
    }

    public getFacingTile()
    {
        let x = 0;
        let y = 0;
        let facingTile = { type: " ", value: "" };

        switch (this.direction)
        {
            case KEYS.Up:
                y = 1;
                break;
            case KEYS.Down:
                y = -1;
                break;
            case KEYS.Left:
                x = 1;
                break;
            case KEYS.Right:
                x = -1;
                break;
        }
        const toY = Window2D.viewPort.y + (Window2D.screen.tilesY / 2 - 0.5) - y;
        const toX = Window2D.viewPort.x + (Window2D.screen.tilesX / 2 - 0.5) - x;
        if (this.currentMap[toY] && this.currentMap[toY][toX])
        {
            facingTile = this.currentMap[toY][toX];
        }

        return { x: x, y: y, toY: toY, toX: toX, facingTile: facingTile };
    }

    public setTile(tileInfo: any, type: string, value?: string)
    {
        this.currentMap[tileInfo.toY][tileInfo.toX] = { type: type, value: value }
    }
    public setTileMouse(tileInfo: any)
    {
        const selectedY = tileInfo.toY + Window2D.viewPort.y;
        const selectedX = tileInfo.toX + Window2D.viewPort.x;
        this.currentMap[selectedY][selectedX] = { type: "grass" }
        console.log(`${selectedX}, ${selectedY}`);
        //console.log(`${tileInfo.toX}, ${tileInfo.toY}`);
        //console.log(`${Window2D.viewPort.x}, ${Window2D.viewPort.y}`);
    }
}