﻿import { IAbility, IMonster } from "./interfaces/gameInterfaces"     

export class MonsterDataService
{
    //private MonsterNames = { 0: { name: "Bulbasaur" }, 1: { name: "Ivysaur" }, 3: { name: "Venusaur" } }
    //private static moves: any = { bite: { name: "Bite", damage: 10, accuracy: 95 }, crunch: { name: "Crunch", damage: 20, accuracy: 75 } };
    private static abilities: Array<IAbility> = [{ name: "Bite", damage: 10, accuracy: 90 }, { name: "Crunch", damage: 15, accuracy: 75 }, { name: "Tackle", damage: 5, accuracy: 100 }, { name: "Vine Whip", damage: 8, accuracy: 100 }, { name: "godmode", damage: 100, accuracy: 100 }];
    private static MonsterList: Array<IMonster> = [{ id: 1, name: "Bulbasaur", abilityNames: ["tackle", "vine whip"] }, { id: 2, name: "Ivysaur", abilityNames: ["tackle", "vine whip"] }, { id: 3, name: "Venusaur", abilityNames: ["tackle", "vine whip"] }];
    //private static MonsterList: Array<IMonster> = [{ id: 1, name: "Bulbasaur" }, { id: 2, name: "Ivysaur" }, { id: 3, name: "Venusaur" }];
    private static playerInput: string;


    public static getRandomMonster = (): IMonster =>
    {
        const randomNumber = Math.floor(Math.random() * MonsterDataService.MonsterList.length);
        return MonsterDataService.MonsterList[randomNumber];
    }

    public static getAllMoves = () =>
    {
        return MonsterDataService.abilities;
    }

    public static getAllMovesByMonster = (moveName: string): Array<string> =>
    {
        for (let i = 0; i < MonsterDataService.MonsterList.length; i++)
        {
            if (MonsterDataService.MonsterList[i].name.toLowerCase() === moveName.toLowerCase())
            {
                return MonsterDataService.MonsterList[i].abilityNames;
            }
        }
        return null;
    }

    public static getMoveByName = (moveName: string): IAbility =>
    {
        for (let i = 0; i < MonsterDataService.abilities.length; i++)
        {
            if (MonsterDataService.abilities[i].name.toLowerCase() === moveName.toLowerCase())
            {
                return MonsterDataService.abilities[i];
            }
        }
        return null;
    }

    public static getPlayerInput = () =>
    {
        return MonsterDataService.playerInput;
    }

    public static setCurrentInput = (input: string) =>
    {
        MonsterDataService.playerInput = input;
    }
}