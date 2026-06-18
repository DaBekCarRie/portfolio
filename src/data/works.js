import barinstrom from '../assets/workpic/barinstrom.png'
import todoApp from '../assets/workpic/todoApp.png'
import crud from '../assets/workpic/crud.png'
import cocktails from '../assets/workpic/cocktails.png'
import expenseTracker from '../assets/workpic/expense-tracker.png'
import kbtg from '../assets/workpic/kbtg.JPG'
import teochew from '../assets/workpic/teochew.png'

export const works = [
    {
        id: 1,
        name: "Barin Strom",
        image: barinstrom,
        github: "https://github.com/Barinstrom/barin-frontend",
        demo: "https://barin-frontend.vercel.app",
        description: "A web platform for student club registration and management.",
        tags: ["Next.js", "Tailwind CSS", "WebSockets", "Stripe"],
        type: "project"
    },
    {
        id: 2,
        name: "Todo-App With Firebase",
        image: todoApp,
        github: "https://github.com/DaBekCarRie/todo-firebase-crud",
        demo: "https://todo-firebaes-crud.web.app",
        description: "Real-time task organizer with authentication and cloud data persistence.",
        tags: ["React", "Firebase", "Firestore", "Tailwind CSS"],
        type: "project"
    },
    {
        id: 3,
        name: "Crud With REST Api",
        image: crud,
        github: "https://github.com/DaBekCarRie/crud-callmeapi-postman",
        demo: "https://crud-callmeapi-postman.web.app",
        description: "A data portal connecting user registries with mock backend REST services.",
        tags: ["React", "Material UI", "REST API", "Postman"],
        type: "project"
    },
    {
        id: 4,
        name: "Cocktails Landing Page",
        image: cocktails,
        github: "https://github.com/DaBekCarRie/gasp_cocktail",
        demo: "https://gasp-cocktail-phi.vercel.app",
        description: "High-end product landing page utilizing immersive GSAP-driven scroll animation spells.",
        tags: ["React", "GSAP", "Tailwind CSS", "Vite"],
        type: "project"
    },
    {
        id: 5,
        name: "Expense Tracker",
        image: expenseTracker,
        github: "https://github.com/DaBekCarRie/smart-expense-tracker",
        demo: "https://expense-tracker-react-app.web.app",
        description: "Inventory stock system integrated with an AI API to scan purchase receipts and automatically record logs.",
        tags: ["Next.js", "FastAPI", "TypeScript", "Python", "PostgreSQL", "AI Integration"],
        type: "project"
    },
    {
        id: 6,
        name: "Teochew-Thai Dictionary & Learning",
        image: teochew,
        github: "https://github.com/DaBekCarRie/teochew",
        demo: "",
        description: "A dictionary and language learning platform for the Teochew dialect, tailored for Thai speakers to study vocabulary and practice pronunciations.",
        tags: ["React Native", "Supabase"],
        type: "project"
    },
    {
        id: 7,
        name: "Frontend Intern @ KBTG",
        image: kbtg,
        github: "",
        demo: "https://www.kbtg.tech",
        description: "Developed a property consignment website project.",
        tags: ["Next.js", "FastAPI", "PostgreSQL"],
        type: "experience"
    }
]
 