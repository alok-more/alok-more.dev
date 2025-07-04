import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/constants";

export function EducationSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-300">
        Academic Details
      </h2>
      <div className="grid gap-6 md:grid-cols-1">
        {education.map((educations, index) => (
          <Card
            key={index}
            className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardHeader>
              <CardTitle className="text-xl text-teal-600 dark:text-teal-400">
                {educations.collegeName}
              </CardTitle>
              <CardTitle className="text-md text-teal-600 dark:text-teal-400">
                {educations.department}
              </CardTitle>
              <CardTitle className="text-sm text-teal-600 dark:text-teal-400">
                {educations.duration}
              </CardTitle>
              <CardTitle className="text-sm text-teal-600 dark:text-teal-400">
                {educations.cgpa}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

            {/* Optional: Tech stack badges */}
            {/* <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                {experiences.techs.map((tech) => (
                    <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300"
                    >
                    {tech}
                    </Badge>
                ))}
                </div>
            </div> */}

            {/* Optional: Project link button */}
            {/* <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
            >
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                View Project
                <ExternalLink className="ml-2 h-4 w-4" />
                </a>
            </Button> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
