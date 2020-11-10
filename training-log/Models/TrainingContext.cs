using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace training_log.Models
{
    public class training_logContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {                   
            optionsBuilder.UseMySql("Server=localhost;DataBase=Training;Uid=root;",
            builder => builder.EnableRetryOnFailure());
        }

        public DbSet<Sessao> Sessoes {get; set;}
        public DbSet<Exercicio> Exercicios {get; set;}
       
    }
}