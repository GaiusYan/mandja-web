import { BookOpen, LucideProps, Music, Users, Utensils } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const carouselData : {
    url: string, 
    title: string,
    hrefButton?: string,
    description: string,
}[] = [
    {
        url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNhcnZhbHxlbnwwfHx8fDE2ODQ5NTY1NzE&ixlib=rb-4.0.3&q=80&w=1080",
        title: "Paysage naturels",
        hrefButton: "/nature",
        description: "La nature à son meilleur, des montagnes aux plages.",
    },
    {
        url: "https://www.101lasttribes.com/images/mandja_02.jpg",
        title: "Architecture sacrée",
        hrefButton: "/architecture",
        description: "Découvrez la beauté des bâtiments historiques et modernes.",
    },
    {
        url: "https://www.101lasttribes.com/images/mandja_03.jpg",
        title: "Lieux des traditions",
        hrefButton: "/traditions",
        description: "Explorez les lieux chargés d'histoire et de culture.",
    },
]

export interface CardCarouselProps {
    name: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">> &  RefAttributes<SVGSVGElement>,
    color: string,
    description: string;
    buttonUrl?: string,
    buttonLabel?: string,
}

export const cultureCategorie : CardCarouselProps[] = [
    {
      name: "Traditions",
      icon: BookOpen,
      buttonUrl: "/traditions",
      color: "bg-gradient-to-br from-amber-500 to-yellow-600",
      description: "Rituels et coutumes transmis entre générations"
    },
    {
      name: "Musique",
      icon: Music,
      buttonUrl: "/music",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      description: "Sons, mélodies et rythmes caractéristiques"
    },
    {
      name: "Gastronomie",
      icon: Utensils,
      buttonUrl: "/gastronomy",
      color: "bg-gradient-to-br from-red-500 to-rose-600",
      description: "Cuisine, ingrédients et pratiques culinaires"
    },
    {
      name: "Artisanat",
      icon: Users,
      buttonUrl: "/craftsmanship",
      color: "bg-gradient-to-br from-emerald-500 to-green-600",
      description: "Techniques et savoir-faire ancestraux"
    }
]

export interface headlineProps {
  title: string,
  imageUrl: string,
  author: string,
  authorAvatar?: string,
  date:string,
  description:string,
}


export const headlineData : headlineProps[] = [
  {
    title: "Les merveilles de la nature",
    imageUrl: "https://img.freepik.com/photos-premium/paysage-republique-centrafricaine-riviere-generative-ai-art-belle-vue_163597-649.jpg",
    author: "Jean Dupont",
    authorAvatar: "https://randomuser.me/api/portraits",
    date: "2023-10-01",
    description: "Découvrez les paysages époustouflants de notre planète, des montagnes majestueuses aux plages paradisiaques. La nature est un véritable trésor à explorer.",
  },
  {
    title: "L'architecture à travers les âges",
    imageUrl: "https://101lasttribes.com/maps/mandja.jpg",
    author: "Marie Curie",
    authorAvatar: "",
    date: "2023-10-02",
    description: "L'architecture est le reflet de notre histoire et de notre culture. Explorez les styles architecturaux qui ont marqué les époques et les civilisations.",
  },
  {
    title: "Les traditions du monde",
    imageUrl: "https://www.101lasttribes.com/images/mandja_03.jpg",
    author: "Gaius Ocklefort Yan-bena",
    authorAvatar: "",
    date: "2023-10-03",
    description: "Chaque culture a ses propres traditions et coutumes. Découvrez les rituels, les fêtes et les croyances qui font la richesse de notre diversité culturelle.",
  }
]