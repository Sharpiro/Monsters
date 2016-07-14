namespace MasterSite.Web.Api.Monster
{
    public class MonsterApiController : ApiController
    {
        public readonly monsterRepository _repository = new monsterRepository();
        public IHttpActionResult GetMoves()
        {
            var moves = _repository.GetMoves();
            return Ok(moves);
        }

        public IHttpActionResult GetMoveById(int id)
        {
            var move = _repository.GetMoveById(id);
            return Ok(move);
        }

        public IHttpActionResult GetMoveByName(string name)
        {
            var move = _repository.GetMoveByName(name);
            return Ok(move);
        }

        public IHttpActionResult GetMovesByType(string type)
        {
            var moves = _repository.GetMovesByType(type);
            return Ok(moves);
        }

        public IHttpActionResult GetMovesByMonster(string MonsterName)
        {
            var moves = _repository.GetMovesByMonster(MonsterName);
            return Ok(moves);
        }
    }
}
