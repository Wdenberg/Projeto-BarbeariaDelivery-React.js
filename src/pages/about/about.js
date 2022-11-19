import 'animate.css';
import TelaPrincipal from '../../assets/tela-1.jpg';
import TelaSegund from '../../assets/tela-2.jpg';
import Home from '../menu/home';
import './about.css';

export const About = () => {

  return (
    <>

      <div className='about-container'>
        <div className='about-text'>
          <h1 className='animate__animated animate__flip'>Fábrica de Software</h1>

          <p>Segundo um levantamento realizado pela Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC, 2016), os homens brasileiros vêm, progressivamente, questionando convenções sociais e estereótipos de gênero que instituíam o que deveriam consumir pelo fato de serem "machos". No mercado brasileiro de higiene e beleza voltado para o público masculino, os produtos e serviços associados aos cuidados com a barba e o cabelo foram os que mais se destacaram quanto a crescimento nos últimos anos (ABIHPEC, 2016; Datamonitor Consumer, 2015).</p>
          <br />
          <p>No Brasil, um dos principais canais de varejo que estimulam o consumo de produtos e serviços de beleza entre homens são as denominadas "barbershops", um tipo novo de barbearia que combina o visual retrô das barbearias antigas com tratamentos modernos e serviços adicionais, como a oferta de bebidas alcoólicas e entretenimentos (ABIHPEC, 2017). No período de 2008 a 2014, houve um aumento de 100% no número de barbearias no mercado brasileiro, e a previsão é que esse crescimento se mantenha até 2019 (ABIHPEC, 2016).
          </p>
          <br />
          <p>Diante desse cenário, o presente trabalho busca analisar como as identidades de gênero masculinas são construídas, administradas e negociadas em espaços de barbearias. Para tal, este trabalho está dividido em quatro partes. Na primeira, são apresentadas as bases teóricas que apoiaram o estudo. A segunda seção trata da metodologia que conduziu essa pesquisa e, em seguida, são discutidas a análise e interpretação dos achados. Por fim, apresentamos as considerações finais do estudo, juntamente com suas implicações gerenciais e sugestões para pesquisas futuras.</p>
          <br />

          <button className='btn-about'>Saiba Mais</button>
        </div>
        <div className='about-telas '>
          <img src={TelaPrincipal} />
          <img src={TelaSegund} />
        </div>
      </div>

    </>
  );
}
