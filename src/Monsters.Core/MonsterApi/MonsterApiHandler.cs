using System;
using System.Linq;
using System.Threading.Tasks;
using Monsters.Core.Models.MonsterApi;

namespace Monsters.Core
{
    public class MonsterApiHandler
    {
        public async Task GetAllMonstermonMoveData()
        {
            var repository = new MonsterRepository();
            for (var i = 1; i < 722; i++)
            {
                var url = $"http://Monsterapi.co/api/v1/Monstermon/{i}/";
                var result = await WebHelper.GetASync(url);
                var Monstermon = JsonConvert.DeserializeObject<MonsterApiMonstermon>(result);
                var levelUpMoves = Monstermon.Moves.Where(m => m.LearnType == "level up").OrderBy(m => m.Level).ToList();
                foreach (var move in levelUpMoves)
                {
                    Console.WriteLine(repository.addMonstermonMoveRelationship(move.Level, move.Name, Monstermon.Name));
                }
            }
        }
    }
}
