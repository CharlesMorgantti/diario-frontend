using System;
using training_log.Models;
using System.Collections.Generic;

namespace training_log.Models{  
    public class Sessao
    {
        public int Id { get; set; }
        public DateTime DataSessao { get; set; }
      //  public DateTime DataInicial { get; set; }
     //   public DateTime DataFinal { get; set; }
        public string Observacoes { get; set; }
        public ICollection<Exercicio> ExerciciosList { get; set; }
         


    }
}