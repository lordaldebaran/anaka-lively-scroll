 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 
 const ContextSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section ref={ref} className="py-24 bg-muted/30">
       <div className="container px-4">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto text-center"
         >
           <h2 className="text-4xl md:text-5xl font-bold mb-6">
             Un moment <span className="text-gradient">historique</span>
           </h2>
           <div className="section-divider mb-10" />
           
           <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
           >
             C'est une année exceptionnelle ! En cette année <strong className="text-foreground">2026</strong>, 
             le calendrier nous offre un cadeau précieux : le <strong className="text-foreground">Ramadan</strong> et 
             le <strong className="text-foreground">Carême</strong> se déroulent en même temps.
           </motion.p>
 
           <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
           >
             C'est une occasion unique pour nos communautés de se rapprocher.
           </motion.p>
 
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={isInView ? { opacity: 1, scale: 1 } : {}}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="glass-card rounded-2xl p-8 md:p-12"
           >
             <p className="text-2xl md:text-3xl font-serif text-foreground mb-4">
               "En attendant <span className="text-secondary font-bold">2039</span>, où l'Aïd et Noël 
               tomberont en même temps..."
             </p>
             <p className="text-xl text-muted-foreground">
               Mais pourquoi attendre ? <strong className="text-primary">La fraternité, c'est maintenant.</strong>
             </p>
           </motion.div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default ContextSection;
