using DemoTask.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace DemoTask.Data
{
    public class DemoTaskContext : DbContext
    {
        public DbSet<Record> Records { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog=DemoTask");
        }
    }
}
