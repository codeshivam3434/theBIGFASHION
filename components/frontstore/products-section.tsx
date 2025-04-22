"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Trash2, Upload } from "lucide-react"
// Update the imports at the top to include our new components
import { OptimizedImage } from "@/components/ui/optimized-image"
import { getCategoryImage } from "@/lib/image-repository"

// Replace the mockProducts array with this updated version that uses our image repository
const mockProducts = [
  {
    id: "1",
    name: "Premium Cotton Shirt",
    description: "High-quality cotton shirt perfect for any occasion",
    price: 1299,
    images: [getCategoryImage("product", 0).src],
    category: "Shirts",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Designer Jeans",
    description: "Stylish jeans with perfect fit and comfort",
    price: 2499,
    images: [getCategoryImage("product", 1).src],
    category: "Pants",
    inStock: true,
    featured: false,
  },
  {
    id: "3",
    name: "Casual Blazer",
    description: "Elegant blazer for formal and casual settings",
    price: 3999,
    images: [getCategoryImage("product", 2).src],
    category: "Outerwear",
    inStock: false,
    featured: true,
  },
  {
    id: "4",
    name: "Summer Dress",
    description: "Light and comfortable dress for summer days",
    price: 1899,
    images: [getCategoryImage("product", 3).src],
    category: "Dresses",
    inStock: true,
    featured: false,
  },
]

interface ProductsSectionProps {
  preview?: boolean
}

export function ProductsSection({ preview = false }: ProductsSectionProps) {
  const [products, setProducts] = useState(mockProducts)
  const [activeProduct, setActiveProduct] = useState<any>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleAddProduct = (product: any) => {
    setProducts([...products, { ...product, id: Date.now().toString() }])
    setIsAddDialogOpen(false)
  }

  const handleEditProduct = (product: any) => {
    setProducts(products.map((p) => (p.id === product.id ? product : p)))
    setIsEditDialogOpen(false)
  }

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const handleFeatureToggle = (id: string) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p)))
  }

  if (preview) {
    return (
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative">
                <OptimizedImage
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  aspectRatio="aspect-[4/3]"
                />
                {product.featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">{product.description}</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <span className="font-semibold">₹{(product.price / 100).toFixed(2)}</span>
                <Button size="sm" disabled={!product.inStock}>
                  {product.inStock ? "View Details" : "Sold Out"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Products Management</CardTitle>
          <CardDescription>Add, edit, and manage your product catalog</CardDescription>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <ProductForm onSubmit={handleAddProduct} onCancel={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="in-stock">In Stock</TabsTrigger>
            <TabsTrigger value="out-of-stock">Out of Stock</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ProductsTable
              products={products}
              onEdit={(product) => {
                setActiveProduct(product)
                setIsEditDialogOpen(true)
              }}
              onDelete={handleDeleteProduct}
              onFeatureToggle={handleFeatureToggle}
            />
          </TabsContent>

          <TabsContent value="featured">
            <ProductsTable
              products={products.filter((p) => p.featured)}
              onEdit={(product) => {
                setActiveProduct(product)
                setIsEditDialogOpen(true)
              }}
              onDelete={handleDeleteProduct}
              onFeatureToggle={handleFeatureToggle}
            />
          </TabsContent>

          <TabsContent value="in-stock">
            <ProductsTable
              products={products.filter((p) => p.inStock)}
              onEdit={(product) => {
                setActiveProduct(product)
                setIsEditDialogOpen(true)
              }}
              onDelete={handleDeleteProduct}
              onFeatureToggle={handleFeatureToggle}
            />
          </TabsContent>

          <TabsContent value="out-of-stock">
            <ProductsTable
              products={products.filter((p) => !p.inStock)}
              onEdit={(product) => {
                setActiveProduct(product)
                setIsEditDialogOpen(true)
              }}
              onDelete={handleDeleteProduct}
              onFeatureToggle={handleFeatureToggle}
            />
          </TabsContent>
        </Tabs>
      </CardContent>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          {activeProduct && (
            <ProductForm
              product={activeProduct}
              onSubmit={handleEditProduct}
              onCancel={() => setIsEditDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  )
}

function ProductsTable({
  products,
  onEdit,
  onDelete,
  onFeatureToggle,
}: {
  products: any[]
  onEdit: (product: any) => void
  onDelete: (id: string) => void
  onFeatureToggle: (id: string) => void
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Image</th>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Price</th>
            <th className="text-left p-2">Category</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2">Featured</th>
            <th className="text-right p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-2">
                <div className="relative h-12 w-12 rounded overflow-hidden">
                  <OptimizedImage
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    width={48}
                    height={48}
                    aspectRatio="aspect-square"
                  />
                </div>
              </td>
              <td className="p-2">{product.name}</td>
              <td className="p-2">₹{(product.price / 100).toFixed(2)}</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">
                <Badge variant={product.inStock ? "default" : "destructive"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </td>
              <td className="p-2">
                <Button
                  variant={product.featured ? "default" : "outline"}
                  size="sm"
                  onClick={() => onFeatureToggle(product.id)}
                >
                  {product.featured ? "Featured" : "Not Featured"}
                </Button>
              </td>
              <td className="p-2 text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="icon" onClick={() => onEdit(product)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => onDelete(product.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ProductForm({
  product,
  onSubmit,
  onCancel,
}: {
  product?: any
  onSubmit: (product: any) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState(
    product || {
      name: "",
      description: "",
      price: 0,
      images: ["/placeholder.svg?height=300&width=300"],
      category: "",
      inStock: true,
      featured: false,
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: name === "price" ? Number.parseInt(value) * 100 : value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked })
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>{product ? "Edit Product" : "Add New Product"}</DialogTitle>
        <DialogDescription>
          {product
            ? "Update the details of your existing product"
            : "Fill in the details to add a new product to your store"}
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price (₹)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={formData.price / 100 || ""}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Shirts">Shirts</SelectItem>
                <SelectItem value="Pants">Pants</SelectItem>
                <SelectItem value="Dresses">Dresses</SelectItem>
                <SelectItem value="Outerwear">Outerwear</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.inStock ? "in-stock" : "out-of-stock"}
              onValueChange={(value) => handleSelectChange("inStock", value === "in-stock")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Product Image</Label>
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 rounded border overflow-hidden">
              <OptimizedImage
                src={formData.images[0] || "/placeholder.svg"}
                alt="Product image"
                width={96}
                height={96}
                aspectRatio="aspect-square"
              />
            </div>
            <Button variant="outline" type="button">
              <Upload className="mr-2 h-4 w-4" />
              Upload Image
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="featured"
            checked={formData.featured}
            onChange={(e) => handleCheckboxChange("featured", e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <Label htmlFor="featured">Feature this product on your store page</Label>
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onSubmit(formData)}>{product ? "Save Changes" : "Add Product"}</Button>
      </DialogFooter>
    </>
  )
}
