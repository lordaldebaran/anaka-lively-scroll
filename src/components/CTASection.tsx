 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 
 const CTASection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="inscription" ref={ref} className="py-24 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50" />
       
       <motion.div
         className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
         animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 10, repeat: Infinity }}
       />
       <motion.div
         className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"
         animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
         transition={{ duration: 8, repeat: Infinity }}
       />
 
       <div className="container px-4 relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="max-w-3xl mx-auto text-center"
         >
           <h2 className="text-4xl md:text-5xl font-bold mb-6">
             Créons du <span className="text-gradient">lien</span>
           </h2>
           <div className="section-divider mb-8" />
           
           <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
             Venons découvrir nos points communs, partager nos sourires 
             et construire des ponts plutôt que des murs.
           </p>
 
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
           >
             <a
               href="https://forms.gle/xXAoy8baaq1xMYeK6"
               className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
             >
               Je participe ✨
             </a>
           </motion.div>
 
           <motion.p
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="mt-8 text-muted-foreground"
           >
             La porte est ouverte à tous. Venez comme vous êtes.
           </motion.p>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default CTASection;
