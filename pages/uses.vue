<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import Skill from "./skill.vue"; 

const languages = [
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Python", icon: "logos:python" },
  { name: "Java", icon: "logos:java" },
  { name: "Go", icon: "logos:go" },
  { name: "Rust", icon: "logos:rust" },
  { name: "C", icon: "logos:c" },
  { name: "C++", icon: "logos:c-plusplus" },
  { name: "C#", icon: "logos:c-sharp" },
  { name: "Swift", icon: "logos:swift" },
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "SCSS / SASS", icon: "logos:sass" },
  { name: "SQL", icon: "vscode-icons:file-type-sql" },
  { name: "Bash", icon: "logos:bash-icon" },
  { name: "PowerShell", icon: "logos:powershell" },
  { name: "Matlab", icon: "logos:matlab" },
  { name: "RISC-V", icon: "simple-icons:riscv" },
  { name: "VHDL", icon: "simple-icons:vhdl" },
];

const frameworks = [
  { name: "React", icon: "logos:react" },
  { name: "React Native", icon: "logos:react" },
  { name: "Vue", icon: "logos:vue" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Nuxt", icon: "logos:nuxt-icon" },
  { name: "Pinia", icon: "logos:pinia" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Express.js", icon: "simple-icons:express" },
  { name: "Flask", icon: "simple-icons:flask" },
  { name: "Django", icon: "logos:django" },
  { name: "FastAPI", icon: "simple-icons:fastapi" },
  { name: "PyTorch", icon: "logos:pytorch" },
  { name: "Expo", icon: "logos:expo" },
  { name: "Prisma", icon: "logos:prisma" },
  { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Material UI", icon: "logos:material-ui" },
  { name: "DaisyUI", icon: "simple-icons:daisyui" },
  { name: "EJS", icon: "vscode-icons:file-type-ejs" },
  { name: "RESTful API", icon: "mdi:api" },
  { name: "OpenAI", icon: "simple-icons:openai" },
  { name: ".NET", icon: "logos:dotnet" },
  { name: "Spring", icon: "logos:spring" },
  { name: "Selenium", icon: "logos:selenium" },
  { name: "Pytest", icon: "mdi:test-tube" },
  { name: "Electron", icon: "logos:electron" },
  { name: "HTMX", icon: "simple-icons:htmx" },
  { name: "tRPC", icon: "simple-icons:trpc" },
  { name: "LangChain", icon: "simple-icons:langchain" },
  { name: "Spark", icon: "logos:apachespark" },
  { name: "Databricks", icon: "logos:databricks" },
];

const databases = [
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "SQLite", icon: "logos:sqlite" },
  { name: "Firebase", icon: "logos:firebase" },
  { name: "Supabase", icon: "logos:supabase-icon" },
  { name: "Redis", icon: "logos:redis" },
];

const tools = [
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub", icon: "logos:github-icon" },
  { name: "GitHub Actions", icon: "logos:github-actions" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Kubernetes", icon: "logos:kubernetes" },
  { name: "AWS", icon: "logos:aws" },
  { name: "Azure", icon: "logos:microsoft-azure" },
  { name: "Azure Functions", icon: "simple-icons:azurefunctions" },
  { name: "Terraform", icon: "logos:terraform-icon" },
  { name: "Netlify", icon: "logos:netlify" },
  { name: "Vercel", icon: "logos:vercel-icon" },
  { name: "Cloudflare", icon: "logos:cloudflare" },
  { name: "Postman", icon: "logos:postman" },
  { name: "GraphQL", icon: "logos:graphql" },
  { name: "Kafka", icon: "logos:apache-kafka" },
  { name: "Airflow", icon: "logos:apache-airflow" },
  { name: "Linux", icon: "logos:linux-tux" },
  { name: "VS Code", icon: "logos:visual-studio-code" },
  { name: "NumPy", icon: "logos:numpy" },
  { name: "Pandas", icon: "logos:pandas" },
  { name: "Matplotlib", icon: "logos:matplotlib" },
  { name: "Scikit-Learn", icon: "logos:scikit-learn" },
  { name: "Power BI", icon: "logos:powerbi" },
  { name: "Azure DevOps", icon: "simple-icons:azuredevops" },
];
  
onMounted(() => {
  AOS.init({ duration: 1500, once: true });
});
</script>

<template>
  <div class="flex flex-col justify-center px-0">
    <h1 class="mt-10 md:mt-20 text-center mb-10 text-6xl font-serif">My Skills</h1>

    <!-- Languages -->
    <h2 class="text-3xl font-bold mt-5 mb-3">Languages</h2>
    <ul class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <Skill v-for="lang in languages" :key="lang.name" :name="lang.name" :icon="lang.icon" />
    </ul>

    <!-- Frameworks & Libraries -->
    <h2 class="text-3xl font-bold mt-10 mb-3">Frameworks & Libraries</h2>
    <ul class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <Skill v-for="fw in frameworks" :key="fw.name" :name="fw.name" :icon="fw.icon" />
    </ul>

    <!-- Databases -->
    <h2 class="text-3xl font-bold mt-10 mb-3">Databases</h2>
    <ul class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <Skill v-for="db in databases" :key="db.name" :name="db.name" :icon="db.icon" />
    </ul>

    <!-- Tools & Services -->
    <h2 class="text-3xl font-bold mt-10 mb-3">Tools & Services</h2>
    <ul class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <Skill v-for="tool in tools" :key="tool.name" :name="tool.name" :icon="tool.icon" />
    </ul>
  </div>
</template>
