using Microsoft.AspNetCore.Mvc;
using Monsters.Core;

namespace MasterSite.Web.Api.Monster
{
    public class MonsterApiController : Controller
    {
        public readonly MonsterRepository _repository = new MonsterRepository();
        public IActionResult GetMoves()
        {
            var moves = _repository.GetMoves();
            return Ok(moves);
        }

        public IActionResult GetMoveById(int id)
        {
            var move = _repository.GetMoveById(id);
            return Ok(move);
        }

        public IActionResult GetMoveByName(string name)
        {
            var move = _repository.GetMoveByName(name);
            return Ok(move);
        }

        public IActionResult GetMovesByType(string type)
        {
            var moves = _repository.GetMovesByType(type);
            return Ok(moves);
        }

        public IActionResult GetMovesByMonster(string MonsterName)
        {
            var moves = _repository.GetMovesByMonster(MonsterName);
            return Ok(moves);
        }
    }
}
