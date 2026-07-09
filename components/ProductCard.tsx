// Inside your return statement for ProductCard:
return (
  <motion.div
    whileHover={{ y: -8 }} // Subtle lift effect
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--border-hover)] transition-colors duration-300"
  >
    {/* Wishlist button with Accessibility */}
    <button
      onClick={handleWishlist}
      aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/80 transition-all"
    >
      {/* Your Heart Icon */}
    </button>

    {/* Image Container with Zoom */}
    <div className="relative aspect-square overflow-hidden bg-gray-900">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Info */}
    <div className="p-6">
       {/* ... existing text ... */}
       
       {/* Enhanced Add to Cart Button */}
       <motion.button
         whileTap={{ scale: 0.95 }}
         onClick={handleAddToCart}
         className={`w-full mt-4 py-3 rounded-xl font-medium transition-all duration-300 ${
           justAdded 
             ? "bg-green-600 text-white" 
             : "bg-white text-black hover:bg-gray-200"
         }`}
       >
         {justAdded ? "Added ✓" : "Add to Cart"}
       </motion.button>
    </div>
  </motion.div>
);
