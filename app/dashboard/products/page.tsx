"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, Heart, Star, Grid3X3, List, ArrowUpDown, Plus, Eye, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import FadeInSection from "@/components/fade-in-section"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { ProductOrderButton } from "@/components/dashboard/product-order-button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

// Sample product data with real images
const allProducts = [
  {
    id: "PROD-001",
    name: "Classic Oxford Shirt",
    category: "Men's Wear",
    price: "₹950",
    moq: 100,
    status: "in-stock",
    image:
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium quality cotton oxford shirts with modern fit",
    rating: 4.5,
    stock: 1250,
    brand: "Fashion Essentials",
    material: "100% Cotton",
    colors: ["White", "Blue", "Pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "PROD-002",
    name: "Slim Fit Chinos",
    category: "Men's Wear",
    price: "₹1,050",
    moq: 100,
    status: "in-stock",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable and stylish chinos for everyday wear",
    rating: 4.2,
    stock: 850,
    brand: "Urban Trends",
    material: "98% Cotton, 2% Elastane",
    colors: ["Beige", "Navy", "Olive", "Black"],
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: "PROD-003",
    name: "Floral Summer Dress",
    category: "Women's Wear",
    price: "₹1,250",
    moq: 100,
    status: "in-stock",
    image:
      "https://images.unsplash.com/photo-1623609163859-ca93c959b5b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Perfect for the summer season with vibrant floral patterns",
    rating: 4.7,
    trending: true,
    stock: 750,
    brand: "Bloom Collection",
    material: "Rayon",
    colors: ["Blue Floral", "Pink Floral", "Yellow Floral"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "PROD-004",
    name: "Casual Blazer",
    category: "Men's Wear",
    price: "₹1,850",
    moq: 50,
    status: "low-stock",
    image:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401f0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant design with attention to detail, perfect for semi-formal occasions",
    rating: 4.3,
    stock: 120,
    brand: "Elite Fashion",
    material: "Polyester Blend",
    colors: ["Navy", "Grey", "Black"],
    sizes: ["38", "40", "42", "44"],
  },
  {
    id: "PROD-005",
    name: "High-Waist Jeans",
    category: "Women's Wear",
    price: "₹1,150",
    moq: 100,
    status: "in-stock",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Durable denim material that lasts longer with perfect fit",
    rating: 4.6,
    stock: 980,
    brand: "Denim Deluxe",
    material: "98% Cotton, 2% Elastane",
    colors: ["Blue", "Black", "Light Wash"],
    sizes: ["26", "28", "30", "32", "34"],
  },
  {
    id: "PROD-006",
    name: "Linen Blend Shirt",
    category: "Men's Wear",
    price: "₹1,050",
    moq: 100,
    status: "in-stock",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Breathable linen blend perfect for summer and casual wear",
    rating: 4.4,
    stock: 650,
    brand: "Summer Essentials",
    material: "55% Linen, 45% Cotton",
    colors: ["White", "Beige", "Light Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "PROD-007",
    name: "Pleated Midi Skirt",
    category: "Women's Wear",
    price: "₹1,150",
    moq: 100,
    status: "in-stock",
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant pleated design that can be styled in multiple ways",
    rating: 4.8,
    trending: true,
    stock: 420,
    brand: "Elegance",
    material: "Polyester",
    colors: ["Black", "Navy", "Burgundy"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "PROD-008",
    name: "Lightweight Sweater",
    category: "Seasonal",
    price: "₹1,350",
    moq: 75,
    status: "low-stock",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
    description: "Perfect for transitional weather with comfortable fit",
    rating: 4.1,
    stock: 180,
    brand: "Cozy Comfort",
    material: "Cotton Blend",
    colors: ["Grey", "Navy", "Burgundy"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "PROD-009",
    name: "Traditional Kurta",
    category: "Traditional",
    price: "₹1,550",
    moq: 25,
    status: "in-stock",
    image:
      "https://images.unsplash.com/photo-1610366398516-46da9dec5931?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Authentic traditional design with premium fabric and embroidery",
    rating: 4.9,
    trending: true,
    stock: 320,
    brand: "Heritage Collection",
    material: "100% Cotton",
    colors: ["White", "Blue", "Yellow"],
    sizes: ["38", "40", "42", "44"],
  },
  {
    id: "PROD-010",
    name: "Denim Jacket",
    category: "Outerwear",
    price: "₹1,750",
    moq: 50,
    status: "in-stock",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic denim jacket with modern details",
    rating: 4.5,
    stock: 280,
    brand: "Denim Deluxe",
    material: "100% Cotton Denim",
    colors: ["Blue", "Black", "Light Wash"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "PROD-011",
    name: "Printed T-Shirt",
    category: "Casual Wear",
    price: "₹650",
    moq: 200,
    status: "in-stock",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable cotton t-shirts with trendy prints",
    rating: 4.2,
    stock: 1500,
    brand: "Urban Trends",
    material: "100% Cotton",
    colors: ["White", "Black", "Grey", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "PROD-012",
    name: "Formal Trousers",
    category: "Formal Wear",
    price: "₹1,250",
    moq: 100,
    status: "in-stock",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium formal trousers for professional settings",
    rating: 4.6,
    stock: 750,
    brand: "Business Elite",
    material: "Polyester Blend",
    colors: ["Black", "Navy", "Grey", "Khaki"],
    sizes: ["30", "32", "34", "36", "38", "40"],
  },
]

export default function ProductsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()

  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"name" | "price" | "rating" | "stock">("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [stockFilter, setStockFilter] = useState<"all" | "in-stock" | "low-stock">("all")
  const [brandFilter, setBrandFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [savedProducts, setSavedProducts] = useState<string[]>([])
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const itemsPerPage = 9

  // Extract URL search params
  useEffect(() => {
    const query = searchParams.get("search")
    if (query) {
      setSearchQuery(query)
    }

    const category = searchParams.get("category")
    if (category) {
      setCategoryFilter(category)
    }
  }, [searchParams])

  // Extract unique brands for filtering
  const brands = Array.from(new Set(allProducts.map((product) => product.brand)))

  // Apply filters and sorting
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.id.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
      const matchesStock = stockFilter === "all" || product.status === stockFilter
      const matchesBrand = brandFilter === "all" || product.brand === brandFilter

      // Price filter
      let matchesPrice = true
      if (minPrice && !isNaN(Number(minPrice))) {
        const productPrice = Number.parseInt(product.price.replace(/[^\d]/g, ""))
        matchesPrice = matchesPrice && productPrice >= Number(minPrice) * 100
      }
      if (maxPrice && !isNaN(Number(maxPrice))) {
        const productPrice = Number.parseInt(product.price.replace(/[^\d]/g, ""))
        matchesPrice = matchesPrice && productPrice <= Number(maxPrice) * 100
      }

      return matchesSearch && matchesCategory && matchesStock && matchesBrand && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      } else if (sortBy === "price") {
        const priceA = Number.parseInt(a.price.replace(/[^\d]/g, ""))
        const priceB = Number.parseInt(b.price.replace(/[^\d]/g, ""))
        return sortOrder === "asc" ? priceA - priceB : priceB - priceA
      } else if (sortBy === "rating") {
        return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
      } else if (sortBy === "stock") {
        return sortOrder === "asc" ? a.stock - b.stock : b.stock - a.stock
      }
      return 0
    })

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, categoryFilter, stockFilter, brandFilter, sortBy, sortOrder, minPrice, maxPrice])

  const renderStarRating = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < fullStars
                ? "text-amber-500 fill-amber-500"
                : i === fullStars && hasHalfStar
                  ? "text-amber-500 fill-amber-500 [clip-path:inset(0_50%_0_0)]"
                  : "text-muted-foreground"
            }`}
          />
        ))}
        <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
      </div>
    )
  }

  const handleSaveProduct = (productId: string) => {
    if (savedProducts.includes(productId)) {
      setSavedProducts(savedProducts.filter((id) => id !== productId))
      toast({
        title: "Product removed from saved items",
        description: "The product has been removed from your saved items.",
      })
    } else {
      setSavedProducts([...savedProducts, productId])
      toast({
        title: "Product saved",
        description: "The product has been added to your saved items.",
      })
    }
  }

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product)
    setShowProductDetail(true)
  }

  const handleRequestProduct = () => {
    toast({
      title: "Product request submitted",
      description: "Our team will contact you shortly to discuss your requirements.",
    })
  }

  const handleApplyFilters = () => {
    // Apply price filters
    toast({
      title: "Filters applied",
      description: "The product list has been updated based on your filters.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground text-lg">Browse our collection for your store</p>
        </div>
        <Button className="sm:self-start" size="lg" onClick={handleRequestProduct}>
          <Plus className="mr-2 h-4 w-4" />
          Request New Product
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[280px_1fr]">
        {/* Filters Sidebar */}
        <Card className="h-fit">
          <CardContent className="p-4 space-y-4">
            <div>
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="space-y-1">
                <Button
                  variant={categoryFilter === "all" ? "default" : "ghost"}
                  onClick={() => setCategoryFilter("all")}
                  className="w-full justify-start"
                  size="sm"
                >
                  All Categories
                </Button>
                {Array.from(new Set(allProducts.map((p) => p.category))).map((category) => (
                  <Button
                    key={category}
                    variant={categoryFilter === category ? "default" : "ghost"}
                    onClick={() => setCategoryFilter(category)}
                    className="w-full justify-start"
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Stock Status</h3>
              <div className="space-y-1">
                <Button
                  variant={stockFilter === "all" ? "default" : "ghost"}
                  onClick={() => setStockFilter("all")}
                  className="w-full justify-start"
                  size="sm"
                >
                  All Stock
                </Button>
                <Button
                  variant={stockFilter === "in-stock" ? "default" : "ghost"}
                  onClick={() => setStockFilter("in-stock")}
                  className="w-full justify-start"
                  size="sm"
                >
                  In Stock
                </Button>
                <Button
                  variant={stockFilter === "low-stock" ? "default" : "ghost"}
                  onClick={() => setStockFilter("low-stock")}
                  className="w-full justify-start"
                  size="sm"
                >
                  Low Stock
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Brands</h3>
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="number"
                  placeholder="Min"
                  className="w-full"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Max"
                  className="w-full"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            <Button className="w-full" onClick={handleApplyFilters}>
              Apply Filters
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {/* Search and Sort Controls */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-1">
                    <ArrowUpDown className="h-4 w-4" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      setSortBy("name")
                      setSortOrder("asc")
                    }}
                  >
                    Name (A-Z)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortBy("name")
                      setSortOrder("desc")
                    }}
                  >
                    Name (Z-A)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortBy("price")
                      setSortOrder("asc")
                    }}
                  >
                    Price (Low to High)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortBy("price")
                      setSortOrder("desc")
                    }}
                  >
                    Price (High to Low)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortBy("rating")
                      setSortOrder("desc")
                    }}
                  >
                    Rating (Highest)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortBy("stock")
                      setSortOrder("desc")
                    }}
                  >
                    Stock (Highest)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Grid View</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>List View</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {currentProducts.length} of {filteredProducts.length} products
            </p>
          </div>

          {/* Product Grid/List */}
          {currentProducts.length > 0 ? (
            <>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProducts.map((product) => (
                    <FadeInSection key={product.id} delay={0.05}>
                      <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow">
                        <div className="relative aspect-square">
                          <ImageWithFallback
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => handleViewProduct(product)}
                          />
                          {product.trending && (
                            <Badge className="absolute top-2 right-2 bg-primary text-white">Trending</Badge>
                          )}
                          {product.status === "low-stock" && (
                            <Badge className="absolute top-2 left-2 bg-amber-500 text-white">Low Stock</Badge>
                          )}
                        </div>
                        <CardContent className="flex-1 p-4">
                          <h3
                            className="font-semibold text-xl cursor-pointer hover:text-primary transition-colors"
                            onClick={() => handleViewProduct(product)}
                          >
                            {product.name}
                          </h3>
                          <p className="text-base text-muted-foreground">{product.category}</p>
                          <div className="mt-2">{renderStarRating(product.rating)}</div>
                          <div className="mt-3">
                            <p className="font-medium text-xl">{product.price}</p>
                            <p className="text-sm text-muted-foreground">Min Order: {product.moq} pieces</p>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm text-muted-foreground">Stock: {product.stock} units</p>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex gap-2">
                          <Button
                            variant={savedProducts.includes(product.id) ? "default" : "outline"}
                            size="lg"
                            className="flex-1 text-base"
                            onClick={() => handleSaveProduct(product.id)}
                          >
                            <Heart
                              className={`h-5 w-5 mr-2 ${savedProducts.includes(product.id) ? "fill-current" : ""}`}
                            />
                            {savedProducts.includes(product.id) ? "Saved" : "Save"}
                          </Button>
                          <ProductOrderButton productName={product.name} productId={product.id} price={product.price} />
                        </CardFooter>
                      </Card>
                    </FadeInSection>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {currentProducts.map((product) => (
                    <FadeInSection key={product.id} delay={0.05}>
                      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative w-full md:w-48 h-48">
                            <ImageWithFallback
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover cursor-pointer"
                              onClick={() => handleViewProduct(product)}
                            />
                            {product.trending && (
                              <Badge className="absolute top-2 right-2 bg-primary text-white">Trending</Badge>
                            )}
                            {product.status === "low-stock" && (
                              <Badge className="absolute top-2 left-2 bg-amber-500 text-white">Low Stock</Badge>
                            )}
                          </div>
                          <div className="flex-1 p-4">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                              <div>
                                <h3
                                  className="font-semibold text-xl cursor-pointer hover:text-primary transition-colors"
                                  onClick={() => handleViewProduct(product)}
                                >
                                  {product.name}
                                </h3>
                                <p className="text-base text-muted-foreground">
                                  {product.category} • {product.brand}
                                </p>
                                <div className="mt-2">{renderStarRating(product.rating)}</div>
                              </div>
                              <div className="mt-3 md:mt-0 md:text-right">
                                <p className="font-medium text-xl">{product.price}</p>
                                <p className="text-sm text-muted-foreground">Min Order: {product.moq} pieces</p>
                                <p className="text-sm text-muted-foreground">Stock: {product.stock} units</p>
                              </div>
                            </div>
                            <p className="mt-2 text-muted-foreground">{product.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {product.colors.map((color, index) => (
                                <Badge key={index} variant="outline">
                                  {color}
                                </Badge>
                              ))}
                            </div>
                            <div className="mt-4 flex justify-end gap-2">
                              <Button
                                variant={savedProducts.includes(product.id) ? "default" : "outline"}
                                size="sm"
                                onClick={() => handleSaveProduct(product.id)}
                              >
                                <Heart
                                  className={`h-4 w-4 mr-2 ${savedProducts.includes(product.id) ? "fill-current" : ""}`}
                                />
                                {savedProducts.includes(product.id) ? "Saved" : "Save"}
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleViewProduct(product)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => {
                                  toast({
                                    title: "Order initiated",
                                    description: `You're ordering ${product.name}`,
                                  })
                                }}
                              >
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Order Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </FadeInSection>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink onClick={() => setCurrentPage(page)} isActive={currentPage === page}>
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </>
          ) : (
            <div className="col-span-full flex items-center justify-center h-40">
              <p className="text-muted-foreground text-lg">No products found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={showProductDetail} onOpenChange={setShowProductDetail}>
        <DialogContent className="max-w-4xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
                <DialogDescription>
                  {selectedProduct.category} • {selectedProduct.brand}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <ImageWithFallback
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Description</h3>
                    <p className="text-muted-foreground">{selectedProduct.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Price</h3>
                    <p className="text-2xl font-bold">{selectedProduct.price}</p>
                    <p className="text-sm text-muted-foreground">
                      Minimum Order Quantity: {selectedProduct.moq} pieces
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Rating</h3>
                    <div className="flex items-center">{renderStarRating(selectedProduct.rating)}</div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Availability</h3>
                    <Badge className={selectedProduct.status === "in-stock" ? "bg-green-500" : "bg-amber-500"}>
                      {selectedProduct.status === "in-stock" ? "In Stock" : "Low Stock"}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">Available Stock: {selectedProduct.stock} units</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Details</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-sm font-medium">Material</p>
                        <p className="text-sm text-muted-foreground">{selectedProduct.material}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Brand</p>
                        <p className="text-sm text-muted-foreground">{selectedProduct.brand}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Available Colors</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProduct.colors.map((color: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Available Sizes</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProduct.sizes.map((size: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter className="flex justify-between items-center">
                <Button
                  variant={savedProducts.includes(selectedProduct.id) ? "default" : "outline"}
                  onClick={() => handleSaveProduct(selectedProduct.id)}
                >
                  <Heart
                    className={`h-4 w-4 mr-2 ${savedProducts.includes(selectedProduct.id) ? "fill-current" : ""}`}
                  />
                  {savedProducts.includes(selectedProduct.id) ? "Saved" : "Save"}
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowProductDetail(false)}>
                    Close
                  </Button>
                  <Button
                    onClick={() => {
                      toast({
                        title: "Order initiated",
                        description: `You're ordering ${selectedProduct.name}`,
                      })
                      setShowProductDetail(false)
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Order Now
                  </Button>
                </div>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
