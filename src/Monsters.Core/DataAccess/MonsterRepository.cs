using System;
using System.Collections.Generic;
using System.Linq;
using Monsters.Core.Entities;

namespace Monsters.Core
{
    public class MonsterRepository
    {
        public IEnumerable<Move> GetMoves()
        {
            using (var context = new MonsterContext())
            {
                var moves = context.Moves.ToList();
                return moves;
            }
        }

        public Move GetMoveById(int id)
        {
            using (var context = new MonsterContext())
            {
                var move = context.Moves.Single(m => m.Id == id);
                return move;
            }
        }

        public Move GetMoveByName(string name)
        {
            using (var context = new MonsterContext())
            {
                var move = context.Moves.FirstOrDefault(p => p.Name == name);
                return move;
            }
        }

        public IEnumerable<Move> GetMovesByType(string type)
        {
            using (var context = new MonsterContext())
            {
                var moves = context.Moves.Where(m => m.Type == type).OrderByDescending(m => m.Power).ToList();
                return moves;
            }
        }

        public void AddMonsterMoveRelationship(int level, string moveName, string monsterName)
        {
            if (moveName == null || monsterName == null || level <= 0)
                throw new ArgumentException();
            using (var context = new MonsterContext())
            {
                var monster = context.Monsters.FirstOrDefault(p => p.Name == monsterName);
                var move = context.Moves.FirstOrDefault(m => m.Name == moveName);
                if (move == null || monster == null)
                    throw new ArgumentException();
                var monstermove = new MonsterMove
                {
                    MoveId = move.MoveId,
                    MonsterId = monster.MonsterId,
                    Level = level
                };
                context.Monster_Moves.Add(monstermove);
                context.SaveChanges();
            }
        }

        public IEnumerable<Move> GetMovesByMonster(string name)
        {
            using (var context = new MonsterContext())
            {
                var monster = context.Monsters.FirstOrDefault(p => p.Name == name);
                IEnumerable<Move> data = null;
                try
                {
                    data = context.Monster_Moves
                        .Join(context.Moves, pm => pm.MoveId, m => m.MoveId, (pm, m) => new { PM = pm, M = m })
                        .Where(selection => selection.PM.MonsterId == monster.MonsterId).Select(final => final.M)
                        .ToList();
                }
                catch (Exception)
                {
                    Console.WriteLine("No Data available");
                }
                return data;
            }
        }

        public void DeleteAllmonster()
        {
            using (var context = new MonsterContext())
            {
                var allmonster = context.Monsters;
                context.Monsters.RemoveRange(allmonster);
                context.SaveChanges();
            }
        }
        public void DeleteAllMoves()
        {
            using (var context = new MonsterContext())
            {
                var allMoves = context.Moves;
                context.Moves.RemoveRange(allMoves);
                context.SaveChanges();
            }
        }

        public void DeleteAllData()
        {
            DeleteAllmonster();
            DeleteAllMoves();
        }
    }
}
