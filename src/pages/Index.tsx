import { Navigation } from "@/components/Navigation";
import { TechBackground } from "@/components/TechBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ExternalLink, Code2, Database, Layout, Server } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with payment integration and inventory management",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with interactive maps",
      tech: ["React", "API Integration", "Chart.js", "CSS3"],
      link: "#",
    },
  ];

  const skills = [
    { name: "Frontend", icon: Layout, items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { name: "Backend", icon: Server, items: ["Node.js", "Express", "REST APIs", "GraphQL"] },
    { name: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "Supabase", "Redis"] },
    { name: "Tools", icon: Code2, items: ["Git", "Docker", "VS Code", "Figma"] },
  ];

  return (
    <div className="relative min-h-screen">
      <TechBackground />
      <Navigation />

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6 animate-fade-in">
              <p className="text-primary font-mono text-sm md:text-base">Hi, my name is</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Athulkrishna PP
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
                I build things for the web
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                I'm a full-stack developer specializing in building exceptional digital experiences.
                Currently focused on creating accessible, human-centered products.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-6">
                <Button size="lg" className="tech-glow">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline">
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 flex items-center gap-4">
              <span className="gradient-text">01.</span> About Me
              <div className="flex-1 h-px bg-border" />
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Athulkrishna, a passionate developer who loves creating things that live on
                  the internet. My interest in web development started back in 2018 when I decided to
                  build my first website.
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of working on various projects ranging
                  from e-commerce platforms to complex web applications. My main focus these days is
                  building accessible, performant products.
                </p>
                <p>
                  I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm
                  not coding, you'll find me exploring new technologies and contributing to open-source.
                </p>
              </div>
              <Card className="p-8 border-2 border-primary/20 tech-glow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
              <span className="gradient-text">02.</span> Featured Projects
              <div className="flex-1 h-px bg-border" />
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 hover:border-primary/50 transition-all duration-300 hover:tech-glow group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <Code2 className="h-10 w-10 text-primary" />
                      <a
                        href={project.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
              <span className="gradient-text">03.</span> Skills & Technologies
              <div className="flex-1 h-px bg-border" />
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((category, index) => (
                <Card key={index} className="p-6 hover:border-primary/50 transition-all">
                  <category.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              <span className="gradient-text">04.</span> Get In Touch
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to
              say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button size="lg" className="tech-glow">
                <Mail className="mr-2 h-4 w-4" />
                Say Hello
              </Button>
            </div>
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border">
          <div className="container mx-auto text-center text-muted-foreground text-sm">
            <p>Built with React & Tailwind CSS</p>
            <p className="mt-2">© {new Date().getFullYear()} Athulkrishna PP. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
