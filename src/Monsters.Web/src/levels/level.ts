﻿import { ITexture } from "../interfaces/gameInterfaces"
import { AssetManager } from "../graphics/graphics"


export class Level
{
    protected mapData: any;
    protected textures: Array<ITexture> = [];
    protected assetManager = new AssetManager();

    constructor()
    {

    }

    public getMapData(): any
    {
        return this.mapData;
    }

    public setMapData(data: any): any
    {
        this.mapData = data;
    }


}