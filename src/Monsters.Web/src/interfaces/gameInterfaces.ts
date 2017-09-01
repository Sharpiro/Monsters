export interface IMonsterGame
{
    start(): void;
    updateConsoleInput(input: string): void;
}

export interface IAbility
{
    accuracy: number;
    name: string;
    damage: number;
    hitSuccess?: boolean;
    critSuccess?: boolean;
}

export interface IAttack
{
    damageDone: number;
    attackType: ATTACK_TYPE;
    hitSuccess: boolean;
}

export interface ITexture {
    image: HTMLImageElement;
    name: string;
}

export interface IMonster
{
    id: number;
    name: string;
    abilityNames: Array<string>;
}

export interface IScreen
{
    tilesX: number;
    tilesY: number;
    tileSize: number;
}

export interface IActor
{
    attack(input?: string): IAbility;
    doDamage(damageDone: number): void;
    getHealth(): number;
    setHealth(newHealth: number): void;
    getAbilities(): Array<IAbility>;
    getName(): string;
    getActorType(): ActorType;
}

export enum GameState
{
    Normal, Battle
}

export enum BattleState
{
    Started, PlayerTurnStart, SelectMove, EnemyMove, Ended
}

export enum ActorType
{
    Player, Trainer, Monster
}

export enum ATTACK_TYPE
{
    Damage, Status
}

export enum KEYS {
    Left, Right, Up, Down, E, R, Q, Delete, C, V
}