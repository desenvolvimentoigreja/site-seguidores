import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://sheetdb.io/api/v1/q42yhbeimd6sb`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            nome: formData.name,
            email: formData.email,
            telefone: formData.phone,
            mensagem: formData.message,
            data: new Date().toLocaleString("pt-br"),
          },
        }),
      });

      if (response.ok) {
        toast.success(
          "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-black to-sky-950 py-16 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Entre em Contato
          </h1>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Envie uma Mensagem
            </h2>
            <p className="text-black">
              Estamos prontos para ouvir você. Retornaremos o mais brevemente
              possível.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="(11) 12345-6789"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                placeholder="Como podemos ajudá-lo?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-700 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envie sua mensagem agora
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Endereço
                    </h3>
                    <p className="text-gray-600">
                      Rua Serra do Mar, 176
                      <br />
                      Diadema, Campanário - SP
                      <br />
                      CEP: 09930-650
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Telefone
                    </h3>
                    <p className="text-gray-600 hover:text-blue-600">
                      <a href="tel:(11) 91546-0145">(11) 91546-0145</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      E-mail
                    </h3>
                    <p className="text-gray-600 hover:text-blue-600">
                      <a href="mailto:contato@igrejaseguidores.com.br">
                        contato@igrejaseguidores.com.br
                      </a>
                    </p>
                  </div>
                </div>

                {/* Horários de Atendimento */}
                <div className="flex items-start gap-4 h-full">
                  <div className="bg-black p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Horários de Atendimento
                    </h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 17h</p>
                    <p className="text-gray-600">E durante horário de culto</p>
                    <p className="text-gray-600">
                      Horário do cultos: Terças e quartas ás 20hrs e no domingo
                      ás 8hrs
                    </p>
                    <p className="text-gray-600">
                      Para mais detalhes confira nossas redes sociais
                    </p>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Redes Sociais
                  </h3>
                  <div className="flex gap-4">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/igrejaseguidoresoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                      aria-label="Instagram"
                    >
                      <span className="text-slate-600 font-semibold">📷</span>
                    </a>

                    <a
                      target="_blank"
                      href="https://youtube.com/@igrejaseguidoresoficial?si=rTRR3KFn7aPwITdu"
                      className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                      aria-label="YouTube"
                    >
                      <span className="text-sky-700 font-semibold">▶</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-gray-50 p-2">
        <div className="max-w-7xl mx-auto p-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Nossa Localização
          </h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-150 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-gray-700 text-lg font-medium mb-2">
                Rua Serra do Mar, 176
              </p>
              <p className="text-gray-600 p-4">Centro, São Paulo - SP</p>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.041123856074!2d-46.62251989999997!3d-23.674487300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44dccb8967b3%3A0xf541acb951f9b447!2sR.%20Serra%20do%20Mar%2C%20176%20-%20Campan%C3%A1rio%2C%20Diadema%20-%20SP%2C%2009930-650!5e0!3m2!1spt-BR!2sbr!4v1770961364257!5m2!1spt-BR!2sbr"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
