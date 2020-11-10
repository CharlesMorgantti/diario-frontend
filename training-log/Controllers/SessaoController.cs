using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using training_log.Models;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
//using System.Web.Http.RouteAttribute;
namespace training_log.Controllers
{
    public class SessaoController : Controller
    {

        public IActionResult Listagem(){
            Sessao s =new Sessao();
            s.Observacoes = "testando";
            ICollection<Sessao>sessoes = new List<Sessao>();
            sessoes.Add(s);
            return View(sessoes);
        }

        public IActionResult Cadastro(){

          //   SessaoService sessaoService = new SessaoService();
             //sessaoService.Inserir(s);
             return View();
         }

       // [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "GET, POST, PUT, DELETE, OPTIONS")]
        
         public IActionResult Cadastro1(Sessao s){

             SessaoService sessaoService = new SessaoService();
             sessaoService.Inserir(s);
             return RedirectToAction("Listagem");
         }



        
    }
}