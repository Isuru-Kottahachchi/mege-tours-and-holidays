import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Palmtree, Mountain, Waves, Users, Star, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Hero.jpeg"
              alt="Sri Lanka landscape"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 " />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
            <div className="flex justify-end">
              <div className="max-w-3xl">
                <Badge className="mb-6" variant="secondary">
                  Welcome to Paradise
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
                  Discover the Magic of <span className="text-primary">Sri Lanka</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                  Experience unforgettable adventures in the pearl of the Indian Ocean. From pristine beaches to ancient
                  temples, tea plantations to wildlife safaris, we bring you the best of Sri Lanka.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base">
                    <Link href="/tours">
                      Explore Tours
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute right-0 top-0 -z-10 opacity-20">
            <div className="relative h-96 w-96">
              <Palmtree className="h-full w-full text-primary" />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Megë Tours?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                We're committed to providing exceptional travel experiences with personalized service and local
                expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Expert Guides</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Professional, friendly guides with deep local knowledge
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <Star className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Best Value</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Competitive pricing with no hidden fees
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Flexible Schedule</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Customizable tours to fit your timeline
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <Waves className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Safe & Comfortable</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Air-conditioned vehicles and safety first approach
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Popular Destinations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explore the most breathtaking locations across Sri Lanka
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative h-56 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Waves className="h-24 w-24 text-primary/40" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Beautiful Beaches</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Golden sands, crystal clear waters, and stunning sunsets await you
                  </p>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/tours">
                      View Tours <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative h-56 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                  <Mountain className="h-24 w-24 text-accent/40" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Hill Country</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Misty mountains, lush tea plantations, and cool climate
                  </p>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/tours">
                      View Tours <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative h-56 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <Palmtree className="h-24 w-24 text-secondary/40" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Cultural Heritage</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ancient temples, historical sites, and rich traditions
                  </p>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/tours">
                      View Tours <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="py-12 sm:py-16">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Ready to Start Your Adventure?</h2>
                  <p className="text-lg text-muted-foreground mb-8 text-pretty">
                    Contact us today to plan your perfect Sri Lankan getaway. Our team is here to help create
                    unforgettable memories.
                  </p>
                  <Button asChild size="lg" className="text-base">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
