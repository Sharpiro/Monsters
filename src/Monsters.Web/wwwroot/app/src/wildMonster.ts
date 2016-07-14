///<reference path="actor.ts"/>
///<reference path="./monsterDataService.ts"/>
///<reference path="./sharedFunctions.ts"/>

class WildMonster extends Actor
{
    constructor(name: string)
    {
        super(name, ActorType.Monster);
        let abilityNames = monsterDataService.getAllMovesByMonster(this.getName());
        for (let i = 0; i < abilityNames.length; i++)
        {
            this.abilities.push(monsterDataService.getMoveByName(abilityNames[i]));
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