import { User2, Code2,ShieldCheck } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";

const aboutSections = [
  {
    icon: User2,
    title: "Who Are We",
    description: [
      "IDF tech graduates and top developers from around the world.",
      "Blending experience from military and civilian worlds.",
      "Learning new technologies to stay ahead in the tech world.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What We Do",
    description: [
      "Manage projects from analysis to deployment and support AS.",
      "Develop strong, modern intuitive web and mobile apps.",
      "Leverage AI to automate, analyze, and deliver smart solutions.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "Our Goals",
    description: [
      "Aiming for excellence in everything we do.",
      "Working together to build meaningful partnerships.",
      "Committed to lasting success through professional care.",
    ],
    color: "bg-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Our strengths",
    description: [
      "Adaptable to diverse requirements and industries.",
      "Competitive pricing with great value for every client.",
      "Expertise in advanced technologies and development platforms.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle>About us</SectionTitle>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16 text-start">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey there! we are <span className="text-blue-600 font-semibold">Code Kitchen</span>,
            a young software boutique, dynamic and full of passion, founded by A group of friends experienced developers and creative. 
            We believe that technology Advanced should be accessible to every business,regardless of its size or budget. 
            Ours task is to turn ideas into successful digital solutions, while maintaining high quality and competitive prices.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
              🚀 we like to build products and solve problems
            </span>
          </div>
        </div>

        {/* About Section Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSections.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group">
              {/* Background Effect */}
              <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-4">
                  {/* Icon */}
                  <div className={`p-3 ${color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                </div>
                <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
