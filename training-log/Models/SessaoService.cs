using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace training_log.Models
{
    public class SessaoService 
    {


public ICollection<Sessao> ListarTodos()
        {
            using(training_logContext tc = new training_logContext())
            {
             IQueryable<Sessao> query;
            query = tc.Sessoes;
            return     query.ToList();
                
            }
        }

    public void Inserir(Sessao s)
        {
            using(training_logContext tc = new training_logContext())
            {
                tc.Sessoes.Add(s);
                tc.SaveChanges();
            }
        }








    }
}