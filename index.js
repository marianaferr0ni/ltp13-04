class Noticia{
  constructor(titulo, data_da_publicacao, resumo, texto){
    this.titulo = titulo;
    this.data_da_publicacao = data_da_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }
  mostrarNoticia(){
    return this.titulo + "\n" + this.data_da_publicacao + "\n" + this.resumo + "\n" +        this.texto;
  }
}
class Destaques extends Noticia
{
  constructor(caminho_imagem, titulo, data_da_publicacao, resumo, texto)
  {
    super(titulo, data_da_publicacao, resumo, texto);
    this.imagem = caminho_imagem;
  }
  mostrarDestaque()
  {
    return this.imagem + "\n" + this.titulo + "\n" + this.data_da_publicacao + "\n" + this.resumo + "\n" + "\n" + this.texto + "\n";
  }
}
let noticia = new Destaques("http://www.ifms.edu.br/imagem.jpg", "Título da notícia.", "23/04/2021", "Aqui vai o texto do resumo.", "Aqui vai o texto da notícia.")

console.log(noticia.mostrarDestaque())