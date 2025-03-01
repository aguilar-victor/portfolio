import { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Cpu } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "Personalized Meal Planner",
      description: "An AI-powered meal planner",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      link: "https://yourmealplanner.streamlit.app"
    },
    {
      title: "Ice Breaker",
      description: "Automated full-stack application",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      link: "https://youricebreaker.netlify.app"
    },
    {
      title: "Codecademy docs",
      description: "Documentation for PyTorch",
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      link: "https://www.codecademy.com/resources/docs/pytorch/tensor-operations/from-numpy"
    }
  ];

  // Set up intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.1], // Trigger both at start and slightly into view
      rootMargin: '-100px 0px' // Start animation slightly before element comes into view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add a small delay before removing the class when scrolling up
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          setTimeout(() => {
            if (!entry.isIntersecting) {
              entry.target.classList.remove('show');
            }
          }, 300);
        }
      });
    }, observerOptions);

    // Observe all elements with the 'reveal' class
    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Glow effects */}
      <div className="fixed inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Hero section */}
        <div className="relative max-w-3xl mx-auto reveal">
          <div className="relative backdrop-blur-sm bg-black/50 rounded-2xl p-12 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

            <h1 className="text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text leading-loose">
              Victor Aguilar
            </h1>
            <p className="text-2xl text-center text-cyan-200 mb-8 font-light tracking-wide">
              Junior Software Engineer | Southern California
            </p>
            
            {/* Social links */}
            <div className="flex justify-center gap-8 mb-8">
              <a href="https://github.com/aguilar-victor" target="_blank" rel="noopener noreferrer"
                className="p-4 rounded-lg bg-black/50 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] group">
                <Github className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300" />
              </a>
              <a href="https://www.linkedin.com/in/ag-victor" target="_blank" rel="noopener noreferrer"
                className="p-4 rounded-lg bg-black/50 border border-purple-500/30 hover:border-purple-400 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] group">
                <Linkedin className="w-7 h-7 text-purple-400 group-hover:text-purple-300" />
              </a>
              <a href="mailto:vicagilr@gmail.com"
                className="p-4 rounded-lg bg-black/50 border border-blue-500/30 hover:border-blue-400 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] group">
                <Mail className="w-7 h-7 text-blue-400 group-hover:text-blue-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <h2 className="text-4xl font-bold text-center mt-24 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text leading-[1.4] reveal">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} 
              className={`reveal delay-${index} group backdrop-blur-sm bg-black/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:-translate-y-1`}>
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <a href={project.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-2 duration-300">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
