import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";

// Need to generate static params for all known projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Find next project for the "Next Project" link
  const currentIndex = projects.findIndex((p) => p.id === resolvedParams.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-screen w-full">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-20 pt-32 container mx-auto px-6 md:px-12 z-10">
          <Link href="/work" className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors mb-12 w-fit">
            <ArrowLeft size={16} />
            <span className="text-sm uppercase tracking-widest font-medium">Back to Work</span>
          </Link>
          
          <RevealOnScroll direction="up">
            <div className="flex flex-wrap items-center space-x-4 mb-6 text-sm font-mono text-accent-primary uppercase">
              <span>{project.client}</span>
              <span className="w-1 h-1 rounded-full bg-accent-primary" />
              <span>{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-accent-primary" />
              <span>{project.year}</span>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight">
              {project.title}
            </h1>
          </RevealOnScroll>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Overview Info */}
          <div className="lg:col-span-4">
            <RevealOnScroll direction="up">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Client</h4>
                  <p className="text-xl font-medium">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Services</h4>
                  <p className="text-xl font-medium">{project.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Year</h4>
                  <p className="text-xl font-medium">{project.year}</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <RevealOnScroll direction="up" delay={0.1}>
              <SectionLabel>The Challenge</SectionLabel>
              <p className="text-xl md:text-3xl font-light leading-relaxed mb-20 text-gray-300">
                {project.description} We partnered with {project.client} to elevate their brand presence and communicate their complex offerings through high-end visual storytelling.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up">
              <SectionLabel>Our Approach</SectionLabel>
              <div className="prose prose-lg prose-invert max-w-none text-gray-400 font-light leading-relaxed mb-24">
                <p>
                  Morphed Studios approached this project by deeply understanding the target audience and market positioning. We utilized a mix of motion graphics, typography, and live-action elements to create a cohesive and impactful narrative.
                </p>
                <p>
                  The final deliverables not only met but exceeded the client's expectations, resulting in significant engagement and a stronger brand identity across all touchpoints.
                </p>
              </div>
            </RevealOnScroll>
            
            {/* Gallery Placeholder */}
            <div className="space-y-8 mb-32">
              <RevealOnScroll direction="up">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-surface">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Project Visual 1
                  </div>
                </div>
              </RevealOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <RevealOnScroll direction="up">
                  <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-surface">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Project Visual 2
                    </div>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll direction="up" delay={0.1}>
                  <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-surface">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Project Visual 3
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
        
        {/* Next Project Nav */}
        <RevealOnScroll direction="up">
          <div className="border-t border-white/10 pt-20 mt-20 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">Next Project</p>
            <Link href={`/work/${nextProject.id}`} className="group inline-block">
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 group-hover:text-accent-primary transition-colors duration-300">
                {nextProject.title}
              </h2>
              <div className="flex justify-center">
                <MagneticButton variant="outline" className="group-hover:bg-white group-hover:text-black">
                  <span>View Project</span>
                  <ArrowUpRight size={18} className="ml-2" />
                </MagneticButton>
              </div>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
