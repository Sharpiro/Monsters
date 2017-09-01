import {Actor} from "./actor"
import {MonsterDataService} from "./monsterDataService"
import {SharedFunctions} from "./sharedFunctions"
import { IAbility, ActorType } from "./interfaces/gameInterfaces"


export class WildMonster extends Actor
{
    constructor(name: string)
    {
        super(name, ActorType.Monster);
        let abilityNames = MonsterDataService.getAllMovesByMonster(this.getName());
        for (let i = 0; i < abilityNames.length; i++)
        {
            this.abilities.push(MonsterDataService.getMoveByName(abilityNames[i]));
        }
    }

    public attack = (): IAbility =>
    {
        const abilityNumber = SharedFunctions.getRandomNumber(0, 1);
        const ability = this.abilities[abilityNumber];
        ability.hitSuccess = SharedFunctions.chance(ability.accuracy);
        if (ability.hitSuccess)
        {
            ability.damage = this.abilities[abilityNumber].damage;
        }
        return ability;
    }
}