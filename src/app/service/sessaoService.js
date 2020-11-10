import ApiService from '../apiservice'


class SessaoService extends ApiService{

        constructor(){
            super('')
        }

        listar(){
            return this.get('/Sessao/Listagem')
        }
        listarPorId(id){
            return this.get(`/listaum/${id}`);
        }
        salvar(sessao){
            return this.post('/Sessao/Cadastro', sessao);
        }
}
export default SessaoService