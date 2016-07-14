﻿
namespace Monsters.Core.Entities
{
    public class Monster_Move
    {
        [Key]
        [Column(Order=1)]
        public int MonsterId { get; set; }
        [Key]
        [Column(Order = 2)]
        public int MoveId { get; set; }
        public int Level { get; set; }
    }
}
