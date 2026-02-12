const images = {
  ospina: new URL("../img/ospina.jpg", import.meta.url).href,
  vargas: new URL("../img/vargas.jpg", import.meta.url).href,
  josecuadrado: new URL("../img/josecuadrado.jpg", import.meta.url).href,
};

export const jugadoresData = [
  // Arqueros
  {
    id: 'ospina',
    nombre: 'David Ospina',
    imagen: images.ospina,
    posicion: 'Arquero',
    dorsal: 1,
    edad: 25,
    club: 'Nice',
  },
  {
    id: 'vargas',
    nombre: 'Camilo Vargas',
    imagen: images.vargas,
    posicion: 'Arquero',
    dorsal: 12,
    edad: 25,
    club: 'Santa Fe',
  },
  {
    id: 'cuadrado',
    nombre: 'José Cuadrado',
    imagen: images.josecuadrado,
    posicion: 'Arquero',
    dorsal: 22,
    edad: 26,
    club: 'Fiorentina',
  },
];