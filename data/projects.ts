export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    location: string;
    year: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Restauro Palazzo Storico",
        description: "Recupero conservativo di facciata e interni in palazzo del '900.",
        category: "Restauro Conservativo",
        imageUrl: "/progetti/progetto-01.jpeg", // Placeholder
        location: "Roma Centro",
        year: "2024",
    },
    {
        id: "2",
        title: "Appartamento Parioli",
        description: "Ristrutturazione completa chiavi in mano con finiture di pregio.",
        category: "Ristrutturazione Residenziale",
        imageUrl: "/progetti/progetto-02.jpeg", // Placeholder
        location: "Parioli, Roma",
        year: "2023",
    },
    {
        id: "3",
        title: "Villa all'Eur",
        description: "Rifacimento esterni e riqualificazione energetica.",
        category: "Esterni",
        imageUrl: "/progetti/progetto-03.jpeg", // Placeholder
        location: "Eur, Roma",
        year: "2023",
    },
    {
        id: "4",
        title: "Attico Vista Tevere",
        description: "Modernizzazione spazi interni e terrazza panoramica.",
        category: "Ristrutturazione Residenziale",
        imageUrl: "/progetti/progetto-04.jpeg", // Placeholder
        location: "Roma",
        year: "2024",
    },

];
