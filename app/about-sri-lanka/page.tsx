import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Mountain, Palmtree, Coffee, Heart } from "lucide-react"

export default function AboutSriLankaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4" variant="secondary">
                The Pearl of the Indian Ocean
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">About Sri Lanka</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                A tropical paradise where ancient culture meets natural beauty, offering unforgettable experiences for
                every traveler.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Welcome to Paradise</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Sri Lanka, officially the Democratic Socialist Republic of Sri Lanka, is an island nation in South
                    Asia, located in the Indian Ocean southwest of the Bay of Bengal and southeast of the Arabian Sea.
                  </p>
                  <p>
                    Despite its small size, Sri Lanka boasts incredible diversity. From pristine beaches and lush
                    rainforests to misty mountains and ancient ruins, this teardrop-shaped island offers an abundance of
                    natural beauty and cultural treasures.
                  </p>
                  <p>
                    With over 2,500 years of recorded history, eight UNESCO World Heritage Sites, and a rich tapestry of
                    cultures and religions living in harmony, Sri Lanka is truly a unique destination that captivates
                    every visitor.
                  </p>
                </div>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <MapPin className="h-48 w-48 text-primary/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Quick Facts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Capital</h3>
                      <p className="text-sm text-muted-foreground">
                        Colombo (Commercial) / Sri Jayawardenepura Kotte (Legislative)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Population</h3>
                      <p className="text-sm text-muted-foreground">Approximately 22 million people</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Languages</h3>
                      <p className="text-sm text-muted-foreground">Sinhala, Tamil, and English</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mountain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Highest Point</h3>
                      <p className="text-sm text-muted-foreground">Pidurutalagala (2,524 meters / 8,281 feet)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Palmtree className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Climate</h3>
                      <p className="text-sm text-muted-foreground">Tropical with distinct monsoon seasons</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Coffee className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Famous For</h3>
                      <p className="text-sm text-muted-foreground">Ceylon Tea, Spices, Gemstones, Cricket</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Must-See Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sigiriya Rock Fortress</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    An ancient rock fortress and palace with breathtaking frescoes and spectacular views. This UNESCO
                    World Heritage site is one of the most iconic landmarks in Sri Lanka.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Temple of the Tooth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Located in Kandy, this sacred Buddhist temple houses a relic of the tooth of Buddha and is an
                    important pilgrimage site for Buddhists worldwide.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Yala National Park</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Home to the highest density of leopards in the world, plus elephants, sloth bears, crocodiles, and
                    hundreds of bird species.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Galle Fort</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A fortified old city built by Portuguese colonials, enhanced by the Dutch, featuring well-preserved
                    colonial architecture and charming streets.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ella & Nine Arch Bridge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A picturesque mountain village offering stunning viewpoints, waterfalls, and the famous Nine Arch
                    Bridge surrounded by tea plantations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tea Country</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Visit Nuwara Eliya and surrounding areas to experience lush tea plantations, colonial architecture,
                    and learn about Ceylon tea production.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pristine Beaches</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From Mirissa and Unawatuna to Arugam Bay and Trincomalee, Sri Lanka offers world-class beaches for
                    surfing, diving, and relaxation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ancient Cities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore Anuradhapura and Polonnaruwa, ancient capitals with magnificent ruins, stupas, and rock
                    carvings dating back over 2,000 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Cuisine */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Rich Culture & Heritage</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Sri Lanka's culture is a vibrant blend of indigenous traditions mixed with colonial Portuguese,
                    Dutch, and British influences. The majority of the population practices Buddhism, but you'll also
                    find Hindu, Muslim, and Christian communities living harmoniously.
                  </p>
                  <p>
                    Traditional dance forms like Kandyan dancing, vibrant festivals throughout the year, and ancient
                    crafts such as mask making and batik weaving showcase the island's rich artistic heritage.
                  </p>
                  <p>
                    The famous Esala Perahera in Kandy, one of Asia's most spectacular festivals, features elaborately
                    decorated elephants, traditional dancers, and fire performers in a magnificent procession.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Delicious Cuisine</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Sri Lankan cuisine is a flavorful journey influenced by South Indian, Portuguese, Dutch, and British
                    culinary traditions. Rice and curry form the staple of most meals, featuring an array of vegetables,
                    lentils, and meat or fish dishes.
                  </p>
                  <p>
                    Must-try dishes include hoppers (bowl-shaped pancakes), kottu roti (chopped flatbread stir-fry),
                    lamprais (rice baked in banana leaves), and an incredible variety of spicy curries. Don't miss the
                    fresh seafood along the coast!
                  </p>
                  <p>
                    Sri Lanka's famous Ceylon tea is exported worldwide. Visit a tea plantation to learn about tea
                    production and enjoy a fresh cup with stunning mountain views.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sri Lanka is a year-round destination, but the best time to visit depends on which part of the island
                you plan to explore.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">West & South Coasts</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      December to March - Perfect for beach holidays with dry weather and calm seas. Ideal for visiting
                      Colombo, Galle, and the southern beaches.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">East Coast</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      April to September - Best time for Trincomalee, Arugam Bay, and Batticaloa when the east enjoys
                      dry, sunny weather while the west experiences monsoon.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Hill Country</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      January to March - Cool and pleasant weather for visiting tea plantations, Nuwara Eliya, Ella, and
                      enjoying mountain scenery.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Cultural Triangle</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      February to September - Good weather for exploring ancient cities like Sigiriya, Anuradhapura, and
                      Polonnaruwa with less rainfall.
                    </p>
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
