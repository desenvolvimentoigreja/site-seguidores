import { History, Users2, X, type LucideIcon } from "lucide-react";
import { useState } from "react";

type Ministerio = {
  id: string;
  titulo: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  icon: LucideIcon | string;
};

const ministeriosData: Ministerio[] = [
  {
    id: "boas-vindas",
    titulo: "Boas-Vindas",
    descricaoCurta: "Acolhendo com graça e verdade desde o primeiro contato.",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Sobre o Ministério</h4>
      <p class="mb-4">
        O Ministério de Boas-Vindas expressa o amor de Cristo através da recepção
        e do cuidado com cada pessoa que chega à igreja. Cremos que a igreja
        não é um ponto de chegada, mas um ponto de partida — e tudo começa com
        um acolhimento sincero.
      </p>

      <h4 class="text-xl font-semibold mb-3">O que fazemos</h4>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Recepção e orientação aos visitantes</li>
        <li>Integração de novos membros</li>
        <li>Apoio durante as celebrações</li>
        <li>Conexão com Pequenos Grupos</li>
      </ul>
    `,
    icon: "/icons/Logomarca Seguidores Branco PNG.png",
  },

  {
    id: "louvor",
    titulo: "Louvor",
    descricaoCurta: "Conduzindo a igreja em adoração e celebração.",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Sobre o Ministério</h4>
      <p class="mb-4">
        O Ministério de Louvor conduz a igreja em momentos de celebração e
        adoração, reconhecendo a presença de Deus em nossas reuniões.
        Valorizamos excelência, unidade e sensibilidade ao Espírito Santo.
      </p>

      <h4 class="text-xl font-semibold mb-3">Nossa Missão</h4>
      <p class="mb-4">
        Servir à igreja criando um ambiente que favoreça a comunhão,
        a entrega e a exaltação do nome de Jesus Cristo.
      </p>
    `,
    icon: "/icons/Logomarca Seguidores Branco PNG.png",
  },

  {
    id: "sonosplastia",
    titulo: "Sonosplastia",
    descricaoCurta: "Excelência técnica a serviço da adoração.",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Sobre o Ministério</h4>
      <p class="mb-4">
        Responsável pela operação de som durante cultos e eventos,
        este ministério contribui para que a Palavra seja comunicada
        com clareza e a adoração aconteça com qualidade.
      </p>

      <p>
        Servimos com dedicação e compromisso, entendendo que cada detalhe
        técnico coopera para a edificação da igreja.
      </p>
    `,
    icon: "/icons/Logomarca Seguidores Branco PNG.png",
  },

  {
    id: "kids",
    titulo: "Kids",
    descricaoCurta: "Formando pequenos seguidores de Jesus.",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério Infantil</h4>
      <p class="mb-4">
        O Ministério Kids ensina a Palavra de Deus de maneira acessível,
        criativa e bíblica, ajudando as crianças a desenvolverem um
        relacionamento com Jesus desde cedo.
      </p>

      <p>
        Cremos que discipulado começa na infância e que cada criança
        é parte essencial do Corpo de Cristo.
      </p>
    `,
    icon: "/icons/Logomarca Seguidores Branco PNG.png",
  },

  {
    id: "bunkers",
    titulo: "Bunkers",
    descricaoCurta: "Jovens firmes na fé e no propósito.",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério de Jovens</h4>
      <p class="mb-4">
        O Bunkers reúne jovens que desejam viver uma fé prática,
        fundamentada na Palavra e comprometida com o discipulado.
      </p>

      <p>
        Promovemos comunhão, crescimento espiritual e preparo para
        impactar a sociedade com valores cristãos.
      </p>
    `,
    icon: "/icons/Logomarca Seguidores Branco PNG.png",
  },

  {
    id: "mulheres",
    titulo: "Mulheres",
    descricaoCurta: "Fortalecendo mulheres na Palavra e na comunhão.",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério Feminino</h4>
      <p class="mb-4">
        Um espaço de crescimento, apoio e edificação espiritual.
        O ministério promove discipulado, comunhão e desenvolvimento
        de dons para o serviço no Reino de Deus.
      </p>
    `,
    icon: "/icons/Logomarca Seguidores Branco PNG.png",
  },

  {
    id: "homens",
    titulo: "Homens",
    descricaoCurta: "Homens comprometidos com fé, caráter e liderança.",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério Masculino</h4>
      <p class="mb-4">
        Voltado ao fortalecimento espiritual dos homens, promovendo
        responsabilidade, maturidade cristã e liderança fundamentada
        na Palavra de Deus.
      </p>
    `,
    icon: "/icons/Logomarca Seguidores Branco PNG.png",
  },

  {
    id: "intercessao",
    titulo: "Intercessão",
    descricaoCurta: "Sustentando a igreja em oração.",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério de Intercessão</h4>
      <p class="mb-4">
        Dedicado à oração e intercessão pela igreja, liderança,
        famílias e cidade. Cremos no poder da oração como fundamento
        espiritual da obra de Deus.
      </p>
    `,
    icon: "/icons/Logomarca Seguidores Branco PNG.png",
  },

  {
    id: "iluminacao",
    titulo: "Iluminação",
    descricaoCurta: "Criando ambientes que auxiliam a celebração.",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério de Iluminação</h4>
      <p class="mb-4">
        Responsável pela ambientação visual dos cultos e eventos,
        colaborando para que cada momento de celebração aconteça
        com organização e excelência.
      </p>
    `,
    icon: "/icons/Logomarca Seguidores Branco PNG.png",
  },
];

export default function Sobre() {
  const [ministerioSelecionado, setMinisterioSelecionado] =
    useState<Ministerio | null>(null);

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative h-80 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1453219562534-36e2ce0ea18e?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Biblia simbolizando a história"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Nossa História</h1>
        </div>
      </section>

      {/* História */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="bg-slate-200 p-3 rounded-xl">
              <History className="w-8 h-8 text-slate-800" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Como Começamos
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Nossa história teve início em julho de 2013, na cidade de
                Diadema, através de cultos realizados no lar do Pastor Alan
                Duarte. Foram encontros simples, marcados por momentos de
                intimidade, oração, comunhão e ensino da Palavra. Desde o
                princípio, carregávamos o desejo de viver uma fé prática e
                genuína, fundamentada no Evangelho de Jesus Cristo.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                À medida que vidas eram alcançadas e fortalecidas, o espaço da
                casa já não comportava mais as pessoas que se reuniam. Tornou-se
                necessário buscar um local maior, e depois outro ainda maior.
                Mesmo com o crescimento, mantivemos a essência daqueles
                primeiros cultos: proximidade, discipulado intencional e
                relacionamento verdadeiro.
              </p>

              <div className="border-l-4 border-slate-800 pl-6 my-10">
                <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                  Cremos que a igreja não é um ponto de chegada, mas um ponto de
                  partida.
                </p>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Guiados pelo Espírito Santo, entendemos que nossa missão é
                ganhar pessoas para Cristo, anunciando o Evangelho e formando
                discípulos. Inserimos cada pessoa na vida ativa da igreja por
                meio dos Pequenos Grupos, discipulado e ministérios, promovendo
                crescimento espiritual, maturidade na fé e serviço no Corpo de
                Cristo.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Ao longo dos anos, Deus tem nos conduzido em um processo
                constante de expansão e consolidação. Estruturamos departamentos
                e ministérios com o propósito de desenvolver dons, fortalecer
                relacionamentos e preparar cada membro para viver sua vocação
                com responsabilidade e dedicação.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Hoje, permanecemos firmes em nossa identidade: uma igreja
                apaixonada por Jesus, fundamentada na Palavra de Deus e
                comprometida em viver o amor de Cristo na prática. Seguimos
                acolhendo com graça e verdade, investindo em discipulado e
                formando seguidores que impactam suas famílias, sua cidade e o
                mundo ao seu redor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liderança Premium */}
      <section className="py-28 px-6 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">
            Nossa Liderança
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Pastor */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10 text-center flex flex-col">
              <div className="relative mx-auto mb-8">
                <img
                  src="https://ik.imagekit.io/alicia16/fotopastoralan.jpg"
                  alt="Pastor Alan Duarte"
                  className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-white shadow-md"
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 tracking-wide">
                Alan Duarte
              </h3>
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mt-2 mb-6">
                Pastor Fundador
              </p>

              <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6" />

              <p className="text-gray-600 leading-relaxed text-base grow">
                Fundador da Igreja Seguidores de Cristo, o Pastor Alan Duarte
                lidera com dedicação à Palavra de Deus e profundo amor pelas
                pessoas. Seu ministério é marcado pelo serviço ao próximo,
                compromisso com o ensino bíblico e busca constante por
                excelência para a glória de Deus.
              </p>

              <a
                href="https://www.instagram.com/pastoralanduarte"
                target="_blank"
                className="mt-8 text-sm font-semibold tracking-wide text-gray-800 hover:text-black transition-colors"
              >
                Ver Instagram →
              </a>
            </div>

            {/* Pastora */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10 text-center flex flex-col">
              <div className="relative mx-auto mb-8">
                <img
                  src="https://ik.imagekit.io/alicia16/fotopastoraelenice.jpg"
                  alt="Pastora Elenice Duarte"
                  className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-white shadow-md"
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 tracking-wide">
                Elenice Duarte
              </h3>
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mt-2 mb-6">
                Pastora Fundadora
              </p>

              <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6" />

              <p className="text-gray-600 leading-relaxed text-base grow">
                A Pastora exerce seu ministério com sensibilidade, cuidado e
                dedicação ao serviço. Seu chamado é fortalecer vidas através do
                amor, da comunhão e do ensino fiel da Palavra, contribuindo com
                zelo espiritual e compromisso com a excelência.
              </p>

              <a
                href="https://www.instagram.com/praeleniceduarte"
                target="_blank"
                className="mt-8 text-sm font-semibold tracking-wide text-gray-800 hover:text-black transition-colors"
              >
                Ver Instagram →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        {/* Ministérios */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Ministérios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ministeriosData.map((ministerio) => (
                <div
                  key={ministerio.id}
                  onClick={() => setMinisterioSelecionado(ministerio)}
                  className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
                >
                  <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {typeof ministerio.icon === "string" ? (
                      <img
                        src={ministerio.icon}
                        alt={ministerio.titulo}
                        className="w-16 h-16 rounded-full"
                      />
                    ) : (
                      <ministerio.icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {ministerio.titulo}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {ministerio.descricaoCurta}
                  </p>
                  <span className="mt-4 text-blue-800 font-semibold hover:text-black">
                    Saiba mais →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal - adicionar depois da seção */}
        {/* Modal */}
        {ministerioSelecionado && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setMinisterioSelecionado(null)}
          >
            <div
              className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-200 w-14 h-14 rounded-full flex items-center justify-center">
                    <Users2 className="w-7 h-7 text-black" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {ministerioSelecionado.titulo}
                  </h2>
                </div>
                <button
                  onClick={() => setMinisterioSelecionado(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: ministerioSelecionado.descricaoCompleta,
                  }}
                />
              </div>

              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <button
                  onClick={() => setMinisterioSelecionado(null)}
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Linha do Tempo */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Marcos Históricos
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 m-5 text-black rounded-full flex items-center justify-center font-bold">
                    2013
                  </div>
                  <div className="w-1 h-full bg-slate-200 mt-2" />
                </div>
                <div className="pb-8 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    O Início
                  </h3>
                  <p className="text-gray-600">
                    Em julho de 2013, nossa história começou com cultos
                    realizados no lar do Pastor Alan Duarte, na cidade de
                    Diadema. Encontros simples, marcados por oração, comunhão e
                    ensino da Palavra, deram início a uma caminhada de fé e
                    propósito.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 m-5 text-black rounded-full flex items-center justify-center font-bold">
                    2014
                  </div>
                  <div className="w-1 h-full bg-slate-200 mt-2" />
                </div>
                <div className="pb-8 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Um Novo Espaço
                  </h3>
                  <p className="text-gray-600">
                    Com o crescimento das reuniões e o aumento no número de
                    pessoas, tornou-se necessário buscar um local maior. Em
                    resposta às orações, Deus nos conduziu a um espaço onde
                    pudemos concretizar nossa adoração e continuar expandindo a
                    obra.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 m-5 text-black rounded-full flex items-center justify-center font-bold">
                    Crescimento
                  </div>
                  <div className="w-1 h-full bg-slate-200 mt-2" />
                </div>
                <div className="pb-8 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Estrutura e Discipulado
                  </h3>
                  <p className="text-gray-600">
                    Ao longo dos anos, estruturamos ministérios, departamentos,
                    Pequenos Grupos e discipulado intencional. Nosso foco
                    permaneceu o mesmo: formar seguidores de Jesus Cristo,
                    promover maturidade espiritual e desenvolver cada pessoa
                    para viver seu propósito.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 text-left">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 m-5 text-black rounded-full flex items-center justify-center font-bold">
                    Hoje
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Um Igreja em Movimento
                  </h3>
                  <p className="text-gray-600">
                    Permanecemos firmes na missão de anunciar o Evangelho,
                    acolher com graça e verdade, e preparar pessoas para serem
                    enviadas e impactarem suas famílias, sua cidade e o mundo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
