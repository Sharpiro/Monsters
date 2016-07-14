using System.Collections.Generic;

namespace Monsters.Core.Models.MonsterApi
{
    public class Monster
    {
        public IEnumerable<MonsterApiMove> Moves { get; set; }
        public string Name { get; set; }
        [JsonProperty(PropertyName = "national_id")]
        public int NationalId { get; set; }
    }
}
