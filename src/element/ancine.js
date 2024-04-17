
import TipoSolucoes from '../component/tipo-solucoes';
import Image from 'next/image'

function Ancine() {
  return (

	<div className='bg-ancine'>
		<section className="container pt-6 pb-6">
			<div className='rounded ancine'>
				<div className='col-12 col-md-6'>
					<h2 className="title">Gestão Financeira de Projetos Incentivados Ancine</h2>
					<h3 className="sub-title">Facilite a sua rotina e reduza o tempo de trabalho na gestão financeira dos projetos</h3>
					<ul>
						<li><i><Image src="/images/icon/check.svg" alt="check" width={16} height={16} /></i>Relação de pagamentos - Padrão Ancine</li>
						<li><i><Image src="/images/icon/check.svg" alt="check" width={16} height={16} /></i>Demonstrativo de Extrato - Padrão Ancine</li>
						<li><i><Image src="/images/icon/check.svg" alt="check" width={16} height={16} /></i>Demonstrativo Orçamentário - Padrão Ancine</li>
						<li><i><Image src="/images/icon/check.svg" alt="check" width={16} height={16} /></i>Relatório de Grandes Itens - Ancine</li>
						<li><i><Image src="/images/icon/check.svg" alt="check" width={16} height={16} /></i>Fontes de financiamentos e Contas bancárias separadas por projeto</li>
					</ul>
				</div>
				<div className='col-12 col-md-6'>
					<div className="logo-ancine move-4">
						<Image src="/images/logo/logo-ancine.svg" alt="ancine" width={120} height={80} />
					</div>
				</div>
			</div>
		</section>
	</div>
  )
}

export default Ancine;