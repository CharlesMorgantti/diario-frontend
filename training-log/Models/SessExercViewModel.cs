using System.Collections.Generic;

namespace training_log.Models
{
    public class SessExercViewModel
    {
        public ICollection<Exercicio> Exercicios { get; set; }
        public Sessao Sessao { get; set; }
    }
}