 import { motion } from "framer-motion";
 import logo from "@/assets/logo.png";
 
 const HeroSection = () => {
   return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5">
         <div className="absolute inset-0" style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
         }} />
       </div>
       
       {/* Decorative elements */}
       <motion.div 
         className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl"
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 8, repeat: Infinity }}
       />
       <motion.div 
         className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
         animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
         transition={{ duration: 10, repeat: Infinity }}
       />
 
       <div className="container relative z-10 px-4 text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-8"
         >
           <img 
             src={logo} 
             alt="Logo Fraternité Chatou" 
             className="w-32 h-32 mx-auto object-contain animate-float"
           />
         </motion.div>
 
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
         >
           <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider uppercase rounded-full bg-secondary/20 text-secondary">
             🌙 Ramadan & Carême 2026 ✨
           </span>
         </motion.div>
 
         <motion.h1
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
         >
           Repas de{" "}
           <span className="text-gradient">Fraternité</span>
           <br />
           <span className="text-4xl md:text-5xl font-normal text-muted-foreground">
             à Chatou
           </span>
         </motion.h1>
 
         <motion.p
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light"
         >
           Chrétiens et Musulmans unis pour un moment de partage
         </motion.p>
 
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="flex flex-col sm:flex-row gap-4 justify-center"
         >
           <a
             href="#details"
             className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
           >
             Découvrir l'événement
           </a>
           <a
             href="#inscription"
             className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
           >
             S'inscrire
           </a>
         </motion.div>
 
         {/* Scroll indicator */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2"
         >
           <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
           >
             <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
           </motion.div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default HeroSection;