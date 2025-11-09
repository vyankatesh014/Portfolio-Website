import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchTimeline } from "@/redux/slices/timelineSlice";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Users,
  Laptop,
} from "lucide-react";

export const About = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items: timeline, status } = useSelector(
    (state: RootState) => state.timeline
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTimeline());
    }
  }, [status, dispatch]);

  const staticTimelineData = [
    {
      _id: "1",
      title: "Web Development Intern",
      company: "Sanyu Infotech Pvt. Ltd., Pune",
      year: "Dec 2024 – Feb 2025",
      description:
        "Developed responsive and user-friendly interfaces for a logistics platform using React.js, enhancing real-time visibility and user experience across devices. Integrated dynamic dashboards and interactive UI elements using Tailwind CSS and collaborated with backend teams to ensure smooth data flow through RESTful APIs.",
      type: "work",
      achievements: [
        "Built responsive React components for logistics dashboards.",
        "Integrated RESTful APIs for real-time data synchronization.",
        "Improved UI/UX and user engagement with modern design principles.",
        "Enhanced team collaboration through version control and code reviews.",
      ],
    },
    {
      _id: "2",
      title: "Grocery Website – Online Grocery Shopping Platform",
      company: "Personal Project",
      year: "2025",
      description:
        "Built a complete full-stack grocery web app using the MERN stack. Enabled users to browse, search, and shop online with authentication, admin product management, and real-time stock updates.",
      type: "project",
      achievements: [
        "Developed full-stack app using MERN (MongoDB, Express, React, Node).",
        "Created secure authentication and admin CRUD dashboard.",
        "Used Tailwind CSS for clean, responsive UI.",
        "Implemented real-time stock and offer updates.",
      ],
    },
    {
      _id: "3",
      title: "Agri App – Government Schemes for Farmers",
      company: "Academic Project",
      year: "2023",
      description:
        "Developed a mobile app using Android (Java, XML) and Firebase to help farmers access government schemes with eligibility checks, document uploads, and secure Aadhaar/PAN verification.",
      type: "project",
      achievements: [
        "Integrated Firebase Authentication and Firestore.",
        "Enabled real-time scheme updates and data access.",
        "Simplified the process of applying for schemes.",
        "Published project in IJARSCT Journal (Vol. 3, Issue 8, Apr 2023).",
      ],
    },
    {
      _id: "4",
      title: "B.E. in Computer Engineering",
      company:
        "Sandip Institute of Technology and Research Centre, Nashik, Maharashtra",
      year: "2023 – 2026",
      description:
        "Currently pursuing a Bachelor's degree in Computer Engineering with a strong focus on Web Development, Databases, and Software Design. CGPA: 8.48 (Third Year)",
      type: "education",
      achievements: [
        "Core Subjects: DSA, OS, DBMS, Computer Networks, ML.",
        "Coordinator at CESA – Organized digital gaming events and workshops.",
        "Promoted teamwork and leadership among 380+ students.",
      ],
    },
    {
      _id: "5",
      title: "Diploma in Computer Technology",
      company: "Amrutvahini Polytechnic, Sangamner, Maharashtra",
      year: "2020 – 2023",
      description:
        "Completed a diploma in Computer Technology with focus on core CS subjects and practical exposure through academic projects.",
      type: "education",
      achievements: [
        "Completed key subjects: Software Engineering, CN, DSA, DBMS.",
        "Built academic projects demonstrating technical skills.",
        "Achieved strong foundation in software development principles.",
      ],
    },
  ];

  const timelineItems =
    status === "succeeded" && Array.isArray(timeline) && timeline.length > 0
      ? [...timeline].reverse()
      : staticTimelineData;

  const mainTimeline = timelineItems.slice(0, 3);
  const additionalTimeline = timelineItems.slice(3);

  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "C/C++", "JavaScript (ES6+)"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Frontend Development",
      items: ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
      icon: Globe,
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Express.js", "MongoDB", "MySQL"],
      icon: Database,
      color: "from-purple-500 to-violet-500",
    },
    {
      category: "Tools & Core Concepts",
      items: [
        "Git & GitHub",
        "RESTful APIs",
        "Data Structures & Algorithms",
        "Problem Solving",
      ],
      icon: Laptop,
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "5+", label: "Projects Completed", icon: Award },
    { number: "2+", label: "Years Experience", icon: Calendar },
    { number: "3", label: "Internships & Major Projects", icon: Users },
    { number: "24/7", label: "Learning & Availability", icon: Globe },
  ];

  return (
    <section
      id="about"
      className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20 mt-4">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            ABOUT ME
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-snug md:leading-tight bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Driven Computer Engineering Student
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            Passionate about full-stack web development, backend systems, and
            scalable applications. I love learning new technologies and
            delivering high-quality digital solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Layout Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  My Journey
                </h3>
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    As a{" "}
                    <span className="font-semibold text-blue-600">
                      Computer Engineering student
                    </span>{" "}
                    with a passion for{" "}
                    <span className="font-semibold text-purple-600">  
                      full-stack development
                    </span>
                    , I specialize in building dynamic, responsive, and
                    performance-driven web applications using modern frameworks.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    My technical expertise spans{" "}
                    <span className="font-semibold text-green-600">
                      JavaScript, React, Node.js, MongoDB
                    </span>{" "}
                    and more. I enjoy solving complex problems, optimizing
                    systems, and creating scalable backend structures while
                    ensuring clean UI/UX designs.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What drives me:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Creating real-world impact through code
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Continuous learning and professional growth
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Building reliable, scalable digital solutions
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skillCategory, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${skillCategory.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <skillCategory.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900">
                        {skillCategory.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Timeline */}
            {additionalTimeline.length > 0 && (
              <div className="space-y-8">
                {additionalTimeline.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        {index < additionalTimeline.length - 1 && (
                          <div className="absolute top-4 left-2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-30"></div>
                        )}
                      </div>
                      <Card className="ml-6 flex-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                            <Badge
                              variant={
                                item.type === "work" ? "default" : "secondary"
                              }
                              className="capitalize"
                            >
                              {item.type}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-xl mb-1 text-gray-900">
                            {item.title}
                          </h4>
                          <div className="text-base font-medium text-gray-700 mb-2">
                            {item.company}
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="space-y-2">
                            <h5 className="font-semibold text-gray-800">
                              Key Achievements:
                            </h5>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="flex items-center text-sm text-gray-600"
                                >
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Main Timeline Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              Work Experience & Projects
            </h3>
            <div className="space-y-8">
              {mainTimeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      {index < mainTimeline.length - 1 && (
                        <div className="absolute top-4 left-2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-30"></div>
                      )}
                    </div>
                    <Card className="ml-6 flex-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                          <Badge
                            variant={
                              item.type === "work" ? "default" : "secondary"
                            }
                            className="capitalize"
                          >
                            {item.type}
                          </Badge>
                        </div>
                        <h4 className="font-bold text-xl mb-1 text-gray-900">
                          {item.title}
                        </h4>
                        <div className="text-base font-medium text-gray-700 mb-2">
                          {item.company}
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-800">
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-center text-sm text-gray-600"
                              >
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
