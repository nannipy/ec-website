import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectGallery({ limit }: { limit?: number }) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4 max-w-screen-xl ">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 ">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">I Nostri Progetti</h2>
            <p className="text-muted-foreground max-w-xl">
              Una selezione dei nostri migliori interventi di restauro e ristrutturazione.
            </p>
          </div>
          {limit && (
            <Link href="/progetti" className="text-primary hover:underline underline-offset-4 font-medium">
              Vedi tutti i progetti
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => (
            <Link 
              href={`/progetti`} 
              key={project.id} 
              className="group block"
            >
              <Card className="overflow-hidden border-none shadow-none bg-transparent">
                <CardContent className="p-0 relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                     <Badge variant="secondary" className="mb-3 font-bold text-black border-none">{project.category}</Badge>
                     <h3 className="font-heading text-xl md:text-2xl font-bold">{project.title}</h3>
                     <p className="text-sm opacity-90 mt-1">{project.location}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
