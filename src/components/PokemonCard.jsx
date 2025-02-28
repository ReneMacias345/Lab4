export const PokemonCard = ({ id, name, sprites = [] }) => {
    return (
      <section style={{ height: 200 }}>
        <h2 className="text-capitalize">
          #{id} - {name}
        </h2>
        {/* Imágenes */}
        <div>
          {sprites.map((sprite) => (
            <img
              src={sprite}
              key={sprite}
              alt={`Sprite de ${name}`}
              style={{ width: 100, height: 100, margin: 5 }} // Estilo para las imágenes
            />
          ))}
        </div>
      </section>
    );
  };