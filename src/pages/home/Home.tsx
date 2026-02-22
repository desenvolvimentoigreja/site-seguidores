import { Link } from "react-router";
import { Calendar, Heart, BookOpen, Users } from "lucide-react";
import logoEscritaBranca from "../../assets/Logotipo Seguidores Branco PNG.png";

export default function Home() {
  return (
    <>
      <div className="">
        {/* Seção Inicial/Banner */}

        <section className="relative h-full flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem da Home"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center px-4">
            <img
              className="inset-0 w-full h-full max-w-75 mx-auto my-8"
              src={logoEscritaBranca}
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sobre"
                className="bg-gray-700 hover:bg-gray-900 text-white px-8 py-3 mb-10 rounded-lg font-semibold transition-colors border-solid-white"
              >
                Conheça a Igreja
              </Link>
              <Link
                to="/contato"
                className="bg-gray-700 hover:bg-gray-900 text-white px-8 py-3 mb-10 rounded-lg font-semibold transition-colors"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </section>

        {/* Programação Semanal*/}
        <section className=" py-10 px-4 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Participe dos Nossos Cultos
            </h2>
            {/* Grid das caixas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {" "}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Domingo</h3>
                <p className="text-blue-100 mb-1">Culto de Celebração</p>
                <p className="text-2xl font-bold">09:30</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Terça-feira</h3>
                <p className="text-blue-100 mb-1">Oração e Intercessão</p>
                <p className="text-2xl font-bold">20:00</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Quarta-feira</h3>
                <p className="text-blue-100 mb-1">Imersão</p>
                <p className="text-2xl font-bold">20:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Amor</h3>
                <p className="text-gray-600">
                  Vivemos o amor que um dia nos encontrou, alcançando pessoas
                  por meio de relacionamentos significativos, comunhão
                  verdadeira e cuidado mútuo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <BookOpen className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Palavra</h3>
                <p className="text-gray-600">
                  Somos fundamentados no ensino do Evangelho e na Bíblia como
                  Palavra de Deus, buscando compreender, obedecer e viver seus
                  princípios em nosso dia a dia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Comunidade e Serviço
                </h3>
                <p className="text-gray-600">
                  Vivemos como família, inseridos em pequenos grupos,
                  discipulado e ministérios, apoiando uns aos outros e servindo
                  com propósito no desenvolvimento do Corpo de Cristo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Adoração</h3>
                <p className="text-gray-600">
                  Celebramos a Deus com alegria em nossas reuniões e cultos,
                  reconhecendo Sua presença e fortalecendo nossa fé em comunhão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nós */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Quem Somos
                </h2>
                <p className="text-gray-600 text-lg mb-4">
                  Somos uma igreja apaixonada por Jesus e por Sua Palavra, que
                  busca viver o Evangelho de forma simples, prática e
                  verdadeira. A Igreja Seguidores de Cristo nasceu com o
                  propósito de alcançar pessoas e torná-las seguidoras de Jesus,
                  ensinando o Evangelho do Reino de Deus e conduzindo cada
                  pessoa a uma vida de relacionamento com Cristo, maturidade
                  espiritual e comunhão sincera. Cremos que a igreja não é um
                  ponto de chegada, mas um ponto de partida. Por isso, vivemos
                  um discipulado intencional, inserindo pessoas no contexto da
                  família da fé, promovendo crescimento espiritual,
                  desenvolvimento pessoal e serviço no Corpo de Cristo. Somos
                  uma comunidade formada por pessoas que desejam conhecer mais a
                  Jesus e torná-Lo conhecido, influenciando vidas através de uma
                  fé viva, contemporânea e inspirada pelo Espírito Santo. Nos
                  reunimos para celebrar, aprender, servir e crescer juntos,
                  crendo que cada pessoa tem um propósito no Reino de Deus.
                </p>

                <Link
                  to="/sobre"
                  className="inline-block bg-gray-700 hover:bg-sky-950 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Saiba Mais
                </Link>
              </div>
              <div className="relative h-100 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1713552108094-2de99ab121a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHdvcnNoaXB8ZW58MXx8fHwxNzY5NDc5MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Interior da igreja"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Convite */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Venha Nos Visitar
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Venha conhecer nossa comunidade, estamos te esperando!.
            </p>
            <Link
              to="/contato"
              className="inline-block bg-gray-700 hover:bg-sky-950 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
