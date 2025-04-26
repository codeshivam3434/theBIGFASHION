export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">BigApparels</h1>
      <p className="text-xl mb-8">Revolutionizing fashion retail with technology</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {[
          "Inventory Management",
          "Sales Analytics",
          "Customer Insights",
          "Growth Tools",
          "Supply Chain",
          "Financial Solutions",
        ].map((feature) => (
          <div key={feature} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{feature}</h2>
            <p>Advanced solutions for modern fashion retailers.</p>
          </div>
        ))}
      </div>
      <footer className="mt-16 text-sm text-gray-500">© {new Date().getFullYear()} BigApparels • Version 1.0.0</footer>
    </main>
  )
}
