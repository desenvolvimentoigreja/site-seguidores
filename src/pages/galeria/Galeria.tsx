import { useState } from "react";

const galleryImages = [
  {
    url: "https://ik.imagekit.io/alicia16/cultocorredordomeio?updatedAt=1778062298548",
    alt: "Momento de ministração",
    category: "Cultos",
  },
  {
    url: "https://ik.imagekit.io/alicia16/oracaopupito?updatedAt=1778061542875",
    alt: "Momento de oração",
    category: "Cultos",
  },
  {
    url: "https://ik.imagekit.io/alicia16/ceia/mesaceia",
    alt: "Mesa da Ceia",
    category: "Celebração",
  },
  {
    url: "https://ik.imagekit.io/alicia16/Fotos%20dos%20Espa%C3%A7os/Culto%20domingo%20vista%20do%20port%C3%A3o_.jpg",
    alt: "Momento da palavra",
    category: "Cultos",
  },
  {
    url: "https://ik.imagekit.io/alicia16/sextoucomelas?updatedAt=1778061560814",
    alt: "Sextou com Elas - Evento de Mulheres",
    category: "Eventos",
  },
  {
    url: "https://ik.imagekit.io/alicia16/cultolouvor?updatedAt=1778061576026",
    alt: "Momento do louvor",
    category: "Cultos",
  },
  {
    url: "https://ik.imagekit.io/alicia16/batismo/WhatsApp%20Image%202026-05-06%20at%2007.36.06.jpeg",
    alt: "Dia do batismo",
    category: "Celebração",
  },
  {
    url: "https://ik.imagekit.io/alicia16/dinamicasextoucomelas?updatedAt=1778062297693",
    alt: "Sextou com Elas - Dinâmica",
    category: "Eventos",
  },
  {
    url: "https://ik.imagekit.io/alicia16/oracaovisitantes?updatedAt=1778069667688",
    alt: "Momento dos visitantes",
    category: "Cultos",
  },
];

/*const categories = [
  "Todos",
  "Cultos",
  "Ministérios",
  "Eventos",
  "Infraestrutura",
]; */

export default function Gallery() {
  const [selectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-black to-sky-950 py-16 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Galeria de Fotos
          </h1>
          <p className="text-xl text-blue-100">
            Momentos especiais da nossa comunidade
          </p>
        </div>
      </section>

      {/* Filtros 
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Grid de Imagens */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
