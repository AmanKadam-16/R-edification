import { Button } from "@/components/ui/button"
import { GraduationCap, Users, BookOpen, BarChart2 } from "lucide-react"
import { useNavigate } from "react-router-dom";

 function Home() {
    const navigate = useNavigate();
    function handleRegister(){
navigate('/register');
    }
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="text-center text-primary-foreground z-10">
        <h2 className="text-2xl font-semibold mb-4 animate-fade-in-down">Welcome Admin</h2>
        <div className="flex items-center justify-center mb-6">
          <GraduationCap className="h-16 w-16 mr-4" />
          <h1 className="text-5xl font-bold">R-Edification</h1>
        </div>
        <p className="text-2xl mb-8 max-w-2xl mx-auto">
          Empowering minds through innovative online education
        </p>
        <Button onClick={handleRegister} size="lg" variant="outline" className="text-primary font-semibold px-8 py-3 text-lg hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300">
          Register Students
        </Button>
        
        {/* Quick stats */}
        <div className="mt-12 flex justify-center space-x-8">
          {[
            { icon: Users, label: "Students", value: "1,234" },
            { icon: BookOpen, label: "Courses", value: "56" },
            { icon: BarChart2, label: "Completion Rate", value: "78%" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon className="h-8 w-8 mb-2" />
              <span className="text-lg font-semibold">{stat.value}</span>
              <span className="text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;