export class Zodiaco {
  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';

  signo: string = '';
  imagen: string = '';
  edad: number = 0;

  CalculoZodiaco(): void {
    const signosChinos = [
  { animal: "Rata", img: "https://definicion.de/wp-content/uploads/2013/11/rata-1.jpg" },
  { animal: "Buey", img: "https://www.razanostra.com/wp-content/uploads/2022/06/buey-blog.webp" },
  { animal: "Tigre", img: "https://inaturalist-open-data.s3.amazonaws.com/photos/13207883/original.jpg" },
  { animal: "Conejo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJku6sqcZhyWIb0Fvl-WqWwzfAjjUJiWW_w&s" },
  { animal: "Dragón", img: "https://confuciomag.com/wp-content/uploads/2017/07/dragon-china-remate.jpg" },
  { animal: "Serpiente", img: "https://cdn0.expertoanimal.com/es/posts/5/8/3/tipos_de_serpientes_24385_600.jpg" },
  { animal: "Caballo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-xd-q_9Fb8uozs5vtQ8aftWBwcEymV4XWA&s" },
  { animal: "Cabra", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMk2aOzVP_WJCjUA8DvwKx9Orma9uGn2qWA&s" },
  { animal: "Mono", img: "https://www.mexicosocial.org/wp-content/uploads/2024/11/24-mono-arana-1280x720.jpg" },
  { animal: "Gallo", img: "https://picturebirdai.com/image-handle/image/1080/154171373005045796.jpeg?x-oss-process=image/format,webp" },
  { animal: "Perro", img: "https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2016/08/golden-retriever.jpg?strip=all&lossy=1&ssl=1" },
  { animal: "Cerdo", img: "https://tiendaabrasadorencasa.com/cdn/shop/articles/1_e5891632-1073-4e22-b703-21f6331443a1.png?v=1716200908" }
];

    const actual = new Date().getFullYear();
    this.edad = actual - this.anio;
    const indice = (this.anio - 4) % 12;
    const signo = signosChinos[indice];

    this.signo = signo.animal;
    this.imagen = signo.img;
  }
}
