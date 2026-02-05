 import logo from "@/assets/logo.png";
 
 const Footer = () => {
   return (
     <footer className="py-12 border-t border-border bg-muted/30">
       <div className="container px-4">
         <div className="flex flex-col items-center text-center">
           <img 
             src={logo} 
             alt="Logo Fraternité Chatou" 
             className="w-16 h-16 mb-4 opacity-80"
           />
           <p className="font-serif text-xl mb-2 text-foreground">
             Fraternité Chatou
           </p>
           <p className="text-muted-foreground text-sm">
             Rencontre fraternelle entre Chrétiens et Musulmans
           </p>
           <p className="mt-6 text-xs text-muted-foreground/60">
             © 2026 Fraternité Chatou. Fait avec ❤️
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;