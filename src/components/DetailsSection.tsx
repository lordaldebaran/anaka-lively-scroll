 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Calendar, MapPin, Users } from "lucide-react";
 
 const details = [
   {
     icon: Calendar,
     title: "Quand ?",
     value: "Vendredi 20 février 2026",
     subtitle: "Au coucher du soleil, 18h30",
   },
   {
     icon: MapPin,
     title: "Où ?",
     value: "Relais Saint louis",
     subtitle: "30 bis rue Auguste Renoir, 78400 Chatou",
   },
   {
     icon: Users,
     title: "Pour qui ?",
     value: "Pour TOUS",
     subtitle: "La porte est ouverte",
   },
 ];
 
 const DetailsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="details" ref={ref} className="py-24">
       <div className="container px-4">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
         >
           <h2 className="text-4xl md:text-5xl font-bold mb-6">
             🍽️ Invitation au Repas <span className="text-gradient">Fraternel</span>
           </h2>
           <div className="section-divider mb-8" />
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Nous convions chaleureusement les Musulmans, les Chrétiens, les Athées 
             et toutes les personnes de bonne volonté de Chatou et des environs.
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           {details.map((detail, index) => (
             <motion.div
               key={detail.title}
               initial={{ opacity: 0, y: 50 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: index * 0.2 }}
               className="group"
             >
               <div className="glass-card rounded-2xl p-8 text-center h-full transition-all hover:shadow-xl hover:-translate-y-2">
                 <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                   <detail.icon className="w-8 h-8 text-primary" />
                 </div>
                 <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                   {detail.title}
                 </p>
                 <p className="text-2xl font-bold text-foreground mb-1">
                   {detail.value}
                 </p>
                 <p className="text-muted-foreground">
                   {detail.subtitle}
                 </p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default DetailsSection;
