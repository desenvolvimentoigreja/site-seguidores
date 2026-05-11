import { InstagramLogoIcon } from "@phosphor-icons/react";
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router";
import logoBranca from "../../assets/Logomarca Seguidores Branco PNG.png";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-black to-sky-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img className="w-8 h-8 text-sky-600" src={logoBranca} />
              <span className="text-xl font-semibold">
                <Link to="/">Igreja Seguidores de Cristo</Link>
              </span>
            </div>
            <p className="text-gray-400">
              Uma comunidade de fé, amor e serviço.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <Link
                to="/sobre"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Sobre Nós
              </Link>
              <Link
                to="/galeria"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Galeria
              </Link>
              <Link
                to="/recursos"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {/*Recursos*/}
              </Link>
              <Link
                to="/contato"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              {/* Localização */}
              <div>
                <a
                  target="_blank"
                  className="flex items-start gap-3"
                  href="/contato"
                >
                  <MapPin className="w-5 h-5 text-white mt-0.5" />
                  <span className="text-gray-400 hover:text-gray-200">
                    Rua Serra do Mar, 176
                    <br />
                    Parque Reid, Diadema - SP
                  </span>
                </a>
              </div>

              {/* Redes Sociais */}
              <div>
                <a
                  target="_blank"
                  className="flex items-center gap-3"
                  href="https://www.instagram.com/igrejaseguidoresoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                >
                  <InstagramLogoIcon className="w-5 h-6 text-whitw" />
                  <span className="text-gray-400 hover:text-white">
                    {" "}
                    Acompanhe no Instagram{" "}
                  </span>
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <p className="text-gray-400 hover:text-white">
                  <a href="mailto:administracap@igrejaseguidores.com.br">
                    administracao@igrejaseguidores.com.br
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2026 Igreja Seguidores de Cristo. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
