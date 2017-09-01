/////<reference path="../app.ts"/>

//class monsterDataController
//{
//    constructor(private scope: any, private monsterApiService: monsterApiService)
//    {
//        scope.message = "test monsterDataController";
//        scope.inputName = "psychic";
//        scope.vm = this;
//    }

//    private getAllMoves = () =>
//    {
//        this.monsterApiService.getMovesList().then((data: any) =>
//        {
//            this.scope.moves = data.data;
//            console.log(data);
//        });
//    }

//    private getMoveByName(name: string)
//    {
//        this.monsterApiService.getMoveByName(name).then((data: any) => {
//            this.scope.moves = <any>[];
//            this.scope.moves.push(data.data);
//            console.log(data);
//        });
//        console.log(name);
//    }

//    private getMoveByType(name: string)
//    {
//        this.monsterApiService.getMovesByType(name).then((data: any) =>
//        {
//            this.scope.moves = data.data;
//            console.log(data);
//        });
//        console.log(name);
//    }

//    private getMoveByMonster(MonsterName: string)
//    {
//        this.monsterApiService.getMoveByMonster(MonsterName).then((data: any) =>
//        {
//            this.scope.moves = data.data;
//            console.log(data);
//        });
//        console.log(name);
//    }
//}
//monsterApp.controller("monsterDataController", ["$scope", "monsterApiService", monsterDataController]); 