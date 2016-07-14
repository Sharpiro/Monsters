using Newtonsoft.Json;

namespace Monsters.Core.Models.MonsterApi
{
    public class MonsterApiMove
    {
        [JsonProperty(PropertyName = "learn_type")]
        public string LearnType { get; set; }
        public int Level { get; set; }
        public string Name { get; set; }
        [JsonProperty(PropertyName = "resource_uri")]
        public string ResourceUri { get; set; }
    }
}
