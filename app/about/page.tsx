import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Heart, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4" variant="secondary">
                About Us
              </Badge>
             
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Mege Tours and Holidays was founded with a simple vision: to share the incredible beauty and rich
                    culture of Sri Lanka with travelers from around the world. What started as a small family business
                    has grown into one of the most trusted tour operators on the island.
                  </p>
                  <p>
                    Our founders, born and raised in Sri Lanka, have an intimate knowledge of every corner of this
                    beautiful island. From hidden beaches to ancient temples, from bustling markets to serene tea
                    plantations, we know the best spots and the stories behind them.
                  </p>
                  <p>
                    Over the years, we've hosted thousands of guests from more than 50 countries, each leaving with
                    unforgettable memories and many returning year after year. Our success is built on genuine
                    hospitality, local expertise, and a passion for showcasing the true spirit of Sri Lanka.
                  </p>
                </div>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <Heart className="h-48 w-48 text-primary/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Authentic Experiences</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We prioritize genuine cultural experiences and meaningful connections with local communities
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Your safety and comfort are our top priorities with well-maintained vehicles and trained guides
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every tour is tailored to your interests, ensuring a unique and memorable experience
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We maintain the highest standards in service quality and customer satisfaction
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our guides are not just knowledgeable—they're storytellers who bring Sri Lanka's history and culture
                    to life. Many of them have been with us for over a decade.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Itineraries</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you want to follow our carefully crafted tours or create a custom itinerary, we're happy to
                    accommodate your preferences and pace.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Small Group Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We keep our tour groups small to ensure personalized attention and a more intimate experience of Sri
                    Lanka's wonders.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Tourism</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're committed to responsible tourism practices that benefit local communities and preserve Sri
                    Lanka's natural and cultural heritage.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From the moment you book until you return home, our team is available around the clock to assist
                    with any questions or concerns.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No hidden fees or surprise charges. Our pricing is clear and competitive, with excellent value for
                    the quality we provide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Behind Mege Tours and Holidays is a dedicated team of travel professionals, experienced guides, and
                support staff who share a common goal: making your Sri Lankan adventure extraordinary. Our multilingual
                guides speak English, German, French, Japanese, and Chinese, ensuring clear communication throughout
                your journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each team member undergoes rigorous training in customer service, safety protocols, and cultural
                sensitivity. Many of our guides hold certifications from the Sri Lanka Tourism Development Authority and
                have years of experience in the tourism industry.
              </p>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Awards & Recognition</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">TripAdvisor Certificate of Excellence</h3>
                    <p className="text-sm text-muted-foreground">2018-2025</p>
                  </CardContent>
                </Card>
                <Card>
                  {/* <CardContent className="pt-6 text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">Best Tour Operator</h3>
                    <p className="text-sm text-muted-foreground">Sri Lanka Tourism Awards 2023</p>
                  </CardContent> */}
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">Sustainable Tourism Certification</h3>
                    <p className="text-sm text-muted-foreground">Travelife Partner</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
