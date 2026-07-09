// Inside the Hero component, find your main product Image and update it:
<Image
  src={featured.image}
  alt={featured.name}
  width={600} // Adjust based on your design
  height={600}
  priority={true} // CRITICAL: Preloads image for better LCP
  className="relative z-10 drop-shadow-2xl"
/>

// Add a floating animation to the product container:
<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  className="relative w-full max-w-md mx-auto"
>
  {/* Your product image and glow effects here */}
</motion.div>
