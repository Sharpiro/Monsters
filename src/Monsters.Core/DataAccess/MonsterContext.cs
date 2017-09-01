using Microsoft.EntityFrameworkCore;
using Monsters.Core.Entities;

namespace Monsters.Core
{
    public class MonsterContext : DbContext
    {
        public DbSet<Monster> Monsters { get; set; }
        public DbSet<Move> Moves { get; set; }
        public DbSet<MonsterMove> Monster_Moves { get; set; }
    }
}
