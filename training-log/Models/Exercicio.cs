using System;

   namespace training_log.Models{  
 
    public class Exercicio
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public double Carga { get; set; }
        public int Repeticoes { get; set; }
        public int Series { get; set; }

        public int SessaoId  { get; set; }
        public Sessao Sessao { get; set; }


    }
   }