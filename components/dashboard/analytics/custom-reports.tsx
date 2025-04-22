"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, FileText, Mail, Share2 } from "lucide-react"

interface CustomReportsProps {
  dateRange: { from: Date; to: Date }
}

export function CustomReports({ dateRange }: CustomReportsProps) {
  const [reportType, setReportType] = useState("sales")

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Custom Reports</CardTitle>
          <CardDescription>Generate detailed reports based on your specific requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="generate" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="generate">Generate Report</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
              <TabsTrigger value="saved">Saved Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="generate" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Report Type</label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Performance</SelectItem>
                      <SelectItem value="inventory">Inventory Analysis</SelectItem>
                      <SelectItem value="customers">Customer Insights</SelectItem>
                      <SelectItem value="products">Product Performance</SelectItem>
                      <SelectItem value="deadstock">Dead Stock Analysis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Format</label>
                  <Select defaultValue="pdf">
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Document</SelectItem>
                      <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                      <SelectItem value="csv">CSV File</SelectItem>
                      <SelectItem value="json">JSON Data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Data to Include</label>
                <div className="grid gap-2 md:grid-cols-2">
                  {reportType === "sales" && (
                    <>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sales-by-product" defaultChecked />
                        <label htmlFor="sales-by-product" className="text-sm">
                          Sales by Product
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sales-by-category" defaultChecked />
                        <label htmlFor="sales-by-category" className="text-sm">
                          Sales by Category
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sales-by-retailer" defaultChecked />
                        <label htmlFor="sales-by-retailer" className="text-sm">
                          Sales by Retailer
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sales-trends" defaultChecked />
                        <label htmlFor="sales-trends" className="text-sm">
                          Sales Trends
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="profit-margins" defaultChecked />
                        <label htmlFor="profit-margins" className="text-sm">
                          Profit Margins
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="comparison" defaultChecked />
                        <label htmlFor="comparison" className="text-sm">
                          Period Comparison
                        </label>
                      </div>
                    </>
                  )}

                  {reportType === "inventory" && (
                    <>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="current-stock" defaultChecked />
                        <label htmlFor="current-stock" className="text-sm">
                          Current Stock Levels
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="low-stock" defaultChecked />
                        <label htmlFor="low-stock" className="text-sm">
                          Low Stock Alerts
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="inventory-turnover" defaultChecked />
                        <label htmlFor="inventory-turnover" className="text-sm">
                          Inventory Turnover
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="restock-recommendations" defaultChecked />
                        <label htmlFor="restock-recommendations" className="text-sm">
                          Restock Recommendations
                        </label>
                      </div>
                    </>
                  )}

                  {reportType === "deadstock" && (
                    <>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="dead-stock-items" defaultChecked />
                        <label htmlFor="dead-stock-items" className="text-sm">
                          Dead Stock Items
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="days-in-inventory" defaultChecked />
                        <label htmlFor="days-in-inventory" className="text-sm">
                          Days in Inventory
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="clearance-recommendations" defaultChecked />
                        <label htmlFor="clearance-recommendations" className="text-sm">
                          Clearance Recommendations
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="value-at-risk" defaultChecked />
                        <label htmlFor="value-at-risk" className="text-sm">
                          Value at Risk
                        </label>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline">Save as Template</Button>
                <Button>Generate Report</Button>
              </div>
            </TabsContent>

            <TabsContent value="scheduled" className="pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Next Run</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Weekly Sales Summary</TableCell>
                    <TableCell>Sales Performance</TableCell>
                    <TableCell>Weekly (Monday)</TableCell>
                    <TableCell>5 recipients</TableCell>
                    <TableCell>May 27, 2024</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Monthly Inventory Report</TableCell>
                    <TableCell>Inventory Analysis</TableCell>
                    <TableCell>Monthly (1st)</TableCell>
                    <TableCell>3 recipients</TableCell>
                    <TableCell>Jun 1, 2024</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dead Stock Alert</TableCell>
                    <TableCell>Dead Stock Analysis</TableCell>
                    <TableCell>Weekly (Friday)</TableCell>
                    <TableCell>2 recipients</TableCell>
                    <TableCell>May 31, 2024</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-end">
                <Button>Schedule New Report</Button>
              </div>
            </TabsContent>

            <TabsContent value="saved" className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Q1 2024 Sales Analysis",
                    type: "Sales Performance",
                    created: "Apr 5, 2024",
                    icon: FileText,
                  },
                  {
                    name: "Summer Collection Performance",
                    type: "Product Performance",
                    created: "May 12, 2024",
                    icon: FileText,
                  },
                  {
                    name: "Customer Retention Analysis",
                    type: "Customer Insights",
                    created: "May 18, 2024",
                    icon: FileText,
                  },
                  {
                    name: "Inventory Turnover Report",
                    type: "Inventory Analysis",
                    created: "May 20, 2024",
                    icon: FileText,
                  },
                  {
                    name: "Dead Stock Clearance Plan",
                    type: "Dead Stock Analysis",
                    created: "May 22, 2024",
                    icon: FileText,
                  },
                ].map((report, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <report.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{report.name}</h4>
                        <p className="text-xs text-muted-foreground">{report.type}</p>
                        <p className="text-xs text-muted-foreground">Created: {report.created}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="mr-1 h-3 w-3" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="mr-1 h-3 w-3" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Report Insights</CardTitle>
          <CardDescription>AI-generated insights from your reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <h4 className="font-semibold">Sales Pattern Detected</h4>
              <p className="text-sm text-muted-foreground">
                Your sales reports show a consistent 15-20% increase in revenue during the first week of each month,
                suggesting optimal timing for new product launches.
              </p>
            </div>
            <div className="rounded-lg bg-primary/10 p-4">
              <h4 className="font-semibold">Inventory Optimization</h4>
              <p className="text-sm text-muted-foreground">
                Based on your inventory reports, reducing stock levels of seasonal items by 25% and increasing evergreen
                products by 15% could improve overall turnover by 22%.
              </p>
            </div>
            <div className="rounded-lg bg-primary/10 p-4">
              <h4 className="font-semibold">Dead Stock Prevention</h4>
              <p className="text-sm text-muted-foreground">
                Your dead stock reports indicate that items not selling within 45 days have an 80% chance of becoming
                dead stock. Consider implementing a 45-day review policy.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe to Insights
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
