import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Star, MapPin } from "lucide-react"

const oneDayTours = [
  {
    id: 1,
    title: "Colombo City Tour",
    description:
      "Explore the vibrant capital city with visits to historic temples, colonial architecture, and bustling markets.",
    duration: "8 hours",
    price: "$45",
    rating: 4.8,
    participants: "1-15",
    highlights: ["Gangaramaya Temple", "Galle Face Green", "Pettah Market"],
  },
  {
    id: 2,
    title: "Sigiriya Rock Fortress",
    description: "Climb the ancient rock fortress and marvel at the spectacular views and frescoes.",
    duration: "10 hours",
    price: "$85",
    rating: 4.9,
    participants: "1-12",
    highlights: ["Lion Rock", "Ancient Frescoes", "Royal Gardens"],
  },
  {
    id: 3,
    title: "Galle Fort Heritage Tour",
    description: "Walk through the UNESCO World Heritage site with Dutch colonial architecture and ocean views.",
    duration: "9 hours",
    price: "$65",
    rating: 4.7,
    participants: "1-20",
    highlights: ["Dutch Fort", "Lighthouse", "Historic Churches"],
  },
  {
    id: 4,
    title: "Yala Safari Adventure",
    description: "Experience Sri Lanka's wildlife with leopards, elephants, and exotic birds in their natural habitat.",
    duration: "12 hours",
    price: "$95",
    rating: 4.9,
    participants: "1-8",
    highlights: ["Leopard Spotting", "Wild Elephants", "Exotic Birds"],
  },
]

const multiDayTours = [
  {
    id: 1,
    title: "Cultural Triangle Explorer",
    description: "Discover ancient kingdoms, temples, and historical sites across Sri Lanka's cultural heartland.",
    duration: "5 Days / 4 Nights",
    price: "$650",
    rating: 4.9,
    participants: "2-12",
    highlights: ["Sigiriya", "Polonnaruwa", "Dambulla", "Kandy"],
  },
  {
    id: 2,
    title: "Island Paradise Tour",
    description: "Experience the best of Sri Lanka from beaches to mountains, culture to wildlife.",
    duration: "7 Days / 6 Nights",
    price: "$950",
    rating: 5.0,
    participants: "2-10",
    highlights: ["Colombo", "Kandy", "Nuwara Eliya", "Yala", "Galle", "Bentota"],
  },
  {
    id: 3,
    title: "Tea Country & Beaches",
    description: "Journey through misty tea plantations and relax on pristine southern beaches.",
    duration: "4 Days / 3 Nights",
    price: "$480",
    rating: 4.8,
    participants: "2-15",
    highlights: ["Nuwara Eliya", "Ella", "Mirissa Beach", "Unawatuna"],
  },
  {
    id: 4,
    title: "Complete Sri Lanka Experience",
    description: "The ultimate 10-day journey covering all major attractions and hidden gems.",
    duration: "10 Days / 9 Nights",
    price: "$1,350",
    rating: 5.0,
    participants: "2-8",
    highlights: ["All major cities", "Wildlife safaris", "Tea country", "Beach paradise"],
  },
]

export default function ToursPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4" variant="secondary">
                Our Tours
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">
                Explore Sri Lanka with Us
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Choose from our carefully crafted one-day excursions or multi-day adventures. Each tour is designed to
                showcase the best of Sri Lanka's culture, nature, and heritage.
              </p>
            </div>
          </div>
        </section>

        {/* One Day Tours */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">One Day Tours</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Perfect for short visits or day trips from your hotel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {oneDayTours.map((tour) => (
                <Card key={tour.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{tour.duration}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-medium">{tour.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{tour.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tour.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{tour.participants} people</span>
                      </div>
                      <div className="space-y-1">
                        {tour.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <MapPin className="h-3 w-3 text-primary shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{tour.price}</div>
                      <div className="text-xs text-muted-foreground">per person</div>
                    </div>
                    <Button asChild>
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Multi Day Tours */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Multi-Day Tours</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Comprehensive packages for the ultimate Sri Lankan experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {multiDayTours.map((tour) => (
                <Card key={tour.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="text-sm">
                        {tour.duration}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-medium">{tour.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{tour.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground leading-relaxed mb-4">{tour.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{tour.participants} people</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-2">Tour Highlights:</div>
                        <div className="flex flex-wrap gap-2">
                          {tour.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-primary">{tour.price}</div>
                      <div className="text-sm text-muted-foreground">per person</div>
                    </div>
                    <Button asChild size="lg">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Tours CTA */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="py-12 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Need a Custom Tour?</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                  We can create a personalized itinerary based on your interests, schedule, and budget. Contact us to
                  discuss your dream Sri Lankan adventure.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
