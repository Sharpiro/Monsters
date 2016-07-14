///<reference path="../app.ts"/>

class MonsterApiService
{

    constructor(private $http: ng.IHttpService, private $q: ng.IQService)
    {
    }

    public getMovesList(): ng.IPromise<any>
    {
        //dfd.reject();
        //const dfd = this.$q.defer();
        //return dfd.promise;
        return this.$http.get(`/api/monsterapi/getmoves`);
    }

    public getMoveByName(name: string): ng.IPromise<any> {
        return this.$http.get(`/api/monsterapi/getmovebyname?name=${name}`);
    }
        
    public getMovesByType(name: string): ng.IPromise<any>
    {
        return this.$http.get(`/api/monsterapi/getmovesbytype?type=${name}`);
    }

    public getMoveByMonster(MonsterName: string): ng.IPromise<any>
    {
        return this.$http.get(`/api/monsterapi/getmovesbyMonster?Monstername=${MonsterName}`);
    }
}
monsterApp.service("monsterApiService", ["$http", "$q", MonsterApiService]); 
