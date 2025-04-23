"use client"
import { useBreakpoint } from "@/hooks/use-breakpoint"
import { useWindowSize } from "@/hooks/use-window-size"
import { useElementSize } from "@/hooks/use-element-size"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useOrientation } from "@/hooks/use-orientation"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { ResponsiveContainer } from "@/components/ui/responsive-container"
import { ResponsiveGrid } from "@/components/ui/responsive-grid"
import { ResponsiveImage } from "@/components/ui/responsive-image"
import { ResponsiveText } from "@/components/ui/responsive-text"
import { ResponsiveStack } from "@/components/ui/responsive-stack"
import { ResponsiveVisibility } from "@/components/ui/responsive-visibility"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ResponsiveUtilitiesExample() {
  const breakpoint = useBreakpoint()
  const windowSize = useWindowSize()
  const [ref, elementSize] = useElementSize()
  const isWideScreen = useMediaQuery("(min-width: 1200px)")
  const orientation = useOrientation()
  const scrollPosition = useScrollPosition()

  return (
    <div className="py-8">
      <ResponsiveContainer className="space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-6">Responsive Utilities Demo</h1>
          <p className="text-lg text-muted-foreground mb-8">
            This page demonstrates the various responsive utility hooks and components available in the project.
          </p>
        </div>

        {/* Hooks Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Responsive Hooks</h2>
          <ResponsiveGrid xs={1} md={2} lg={3} gap={6}>
            <Card>
              <CardHeader>
                <CardTitle>useBreakpoint</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Current breakpoint: <strong>{breakpoint.breakpoint}</strong>
                </p>
                <ul className="mt-2 space-y-1">
                  <li>isMobile: {breakpoint.isSmDown ? "Yes" : "No"}</li>
                  <li>isTablet: {breakpoint.isMd ? "Yes" : "No"}</li>
                  <li>isDesktop: {breakpoint.isLgUp ? "Yes" : "No"}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>useWindowSize</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Window width: <strong>{windowSize.width}px</strong>
                </p>
                <p>
                  Window height: <strong>{windowSize.height}px</strong>
                </p>
                <p>
                  Aspect ratio: <strong>{windowSize.aspectRatio.toFixed(2)}</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>useElementSize</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  ref={ref}
                  className="border border-gray-300 p-4 rounded-md resize-both overflow-auto min-h-[100px] min-w-[200px]"
                >
                  <p>This element is resizable</p>
                  <p>
                    Width: <strong>{elementSize.width.toFixed(0)}px</strong>
                  </p>
                  <p>
                    Height: <strong>{elementSize.height.toFixed(0)}px</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>useMediaQuery</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Is wide screen (min-width: 1200px): <strong>{isWideScreen ? "Yes" : "No"}</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>useOrientation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Current orientation: <strong>{orientation}</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>useScrollPosition</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Scroll Y: <strong>{scrollPosition.y}px</strong>
                </p>
                <p>
                  Direction: <strong>{scrollPosition.direction}</strong>
                </p>
                <p>
                  Percentage: <strong>{scrollPosition.percentage}%</strong>
                </p>
              </CardContent>
            </Card>
          </ResponsiveGrid>
        </section>

        <Separator />

        {/* Components Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Responsive Components</h2>

          <div className="space-y-12">
            {/* ResponsiveContainer */}
            <div>
              <h3 className="text-xl font-medium mb-3">ResponsiveContainer</h3>
              <ResponsiveContainer className="bg-gray-100 p-4 rounded-md">
                <p className="text-center">This container adapts its width based on screen size</p>
              </ResponsiveContainer>
            </div>

            {/* ResponsiveGrid */}
            <div>
              <h3 className="text-xl font-medium mb-3">ResponsiveGrid</h3>
              <ResponsiveGrid xs={1} sm={2} md={3} lg={4} gap={4}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="bg-gray-100 p-6 rounded-md text-center">
                    Item {item}
                  </div>
                ))}
              </ResponsiveGrid>
            </div>

            {/* ResponsiveImage */}
            <div>
              <h3 className="text-xl font-medium mb-3">ResponsiveImage</h3>
              <ResponsiveImage
                src="/adaptable-devices.png"
                mobileSrc="/modern-office-communication.png"
                alt="Responsive image example"
                width={600}
                height={400}
                className="rounded-md"
                xs="h-40"
                md="h-60"
                lg="h-80"
              />
            </div>

            {/* ResponsiveText */}
            <div>
              <h3 className="text-xl font-medium mb-3">ResponsiveText</h3>
              <ResponsiveText
                as="p"
                xs="text-sm"
                sm="text-base"
                md="text-lg"
                lg="text-xl"
                xl="text-2xl"
                className="font-medium"
              >
                This text changes size based on the viewport width
              </ResponsiveText>
            </div>

            {/* ResponsiveStack */}
            <div>
              <h3 className="text-xl font-medium mb-3">ResponsiveStack</h3>
              <ResponsiveStack
                direction="column"
                switchAt="md"
                switchTo="row"
                spacing={4}
                align="center"
                justify="between"
                className="bg-gray-100 p-4 rounded-md"
              >
                <div className="bg-white p-4 rounded-md">Item 1</div>
                <div className="bg-white p-4 rounded-md">Item 2</div>
                <div className="bg-white p-4 rounded-md">Item 3</div>
              </ResponsiveStack>
            </div>

            {/* ResponsiveVisibility */}
            <div>
              <h3 className="text-xl font-medium mb-3">ResponsiveVisibility</h3>
              <div className="space-y-4">
                <ResponsiveVisibility hiddenOn={["xs", "sm"]}>
                  <div className="bg-green-100 p-4 rounded-md">This content is hidden on mobile devices (xs, sm)</div>
                </ResponsiveVisibility>

                <ResponsiveVisibility visibleOn={["xs", "sm"]}>
                  <div className="bg-blue-100 p-4 rounded-md">
                    This content is only visible on mobile devices (xs, sm)
                  </div>
                </ResponsiveVisibility>
              </div>
            </div>
          </div>
        </section>
      </ResponsiveContainer>
    </div>
  )
}
