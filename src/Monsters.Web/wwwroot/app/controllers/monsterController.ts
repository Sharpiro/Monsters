﻿///<reference path="../app.ts"/>
///<reference path="../logic/game.ts"/>

class MonsterController
{
    private textarea = document.getElementById("textArea");
    private game: ImonsterGame;

    constructor(private scope: any)
    {
        scope.testing = [{ label: "one", popup: "popup one" }, { label: "two", popup: "popup two" }, { label: "three", popup: "popup three" }];
        scope.message = "test message";
        this.game = new Game();
        this.game.start();
        scope.vm = this;
        scope.test = "";
        scope.textArray = [];
    }

    private submit = (data: string) =>
    {
        this.game.updateConsoleInput(data);
    }
}
monsterApp.controller("MonsterController", ["$scope", MonsterController]); 