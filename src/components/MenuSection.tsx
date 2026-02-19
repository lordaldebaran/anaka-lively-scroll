 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Heart, Moon } from "lucide-react";
 
 const MenuSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section ref={ref} className="py-24 bg-muted/30">
       <div className="container px-4">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
         >
           <h2 className="text-4xl md:text-5xl font-bold mb-6">
             🙏 Un menu dans le <span className="text-gradient">respect</span> de chacun
           </h2>
           <div className="section-divider mb-8" />
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Parce que la fraternité, c'est aussi respecter les convictions de l'autre, 
             ce repas sera organisé avec soin :
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="glass-card rounded-2xl p-8 md:p-10"
           >
             <div className="w-14 h-14 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
               <Heart className="w-7 h-7 text-accent" />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-foreground">
               Respect du Vendredi Saint
             </h3>
             <p className="text-muted-foreground leading-relaxed">
               Le repas sera <strong className="text-foreground">sans viande et sans gras</strong> pour 
               honorer la tradition du Carême.
             </p>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="glass-card rounded-2xl p-8 md:p-10"
           >
             <div className="w-14 h-14 mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
               <Moon className="w-7 h-7 text-secondary" />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-foreground">
               Respect du Ramadan
             </h3>
             <p className="text-muted-foreground leading-relaxed">
               L'heure du repas sera précisément calée sur la <strong className="text-foreground">rupture du jeûne</strong> pour 
               que nos frères et sœurs musulmans puissent s'attabler avec nous dès le coucher du soleil, et le repas sera sans boisson alcolisée.
             </p>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default MenuSection;
