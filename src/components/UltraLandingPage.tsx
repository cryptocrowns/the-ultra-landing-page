import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, BookOpen, TrendingUp, Download, CheckCircle2, XCircle, Zap, Brain, Clock, ArrowRight, Crown, CheckCircle, Sparkles } from 'lucide-react';

const UltraLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1729] via-[#1a2340] to-[#0f1729]">
      {/* Navigation */}
      <nav className="bg-[#0a0f1e] border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">THE ULTRA</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#learn" className="text-gray-300 hover:text-white transition-colors">What You'll Learn</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </div>
            <a href="https://mogulld.gumroad.com/l/ozxig" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <ArrowRight className="mr-2 h-4 w-4" />
                Get The Book
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-700/50 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">The Complete Guide to Crypto's Most Dangerous Game</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Turn </span>
            <span className="text-green-400">$100</span>
            <span className="text-white"> into </span>
            <span className="text-orange-400">$1,000,000</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            in 24 Hours <span className="text-gray-400">(And Keep Your Sanity... Maybe)</span>
          </p>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Master the psychology of ultra-high-risk crypto trading. Learn the mindset that separates{' '}
            <span className="text-yellow-400 font-semibold">winning traders</span> from the 99% who lose everything in Hour 19.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-blue-300">
              <Brain className="w-5 h-5" />
              <span className="text-sm">Psychology-First Approach</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-300">
              <Clock className="w-5 h-5" />
              <span className="text-sm">24-Hour Execution Plans</span>
            </div>
            <div className="flex items-center gap-2 text-green-300">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">Real Case Studies</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://mogulld.gumroad.com/l/ozxig" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-6">
                <ArrowRight className="mr-2 h-5 w-5" />
                Get The Ultra Now
              </Button>
            </a>
            <a href="#pricing">
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-6">
                Learn More
              </Button>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-orange-400 text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Risk Warning: This book covers extremely high-risk trading strategies. For every person who turns $100 into millions, thousands lose everything. Trade responsibly.</span>
          </div>
        </div>

        {/* Psychology Section */}
        <div className="mb-24" id="about">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            <span className="text-sky-400">The Psychology </span>
            <span className="text-yellow-400">Nobody Talks </span>
            <span className="text-yellow-400">About</span>
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
            This isn't another "get rich quick" scheme. It's the raw, unfiltered truth about what happens in your mind when you're sitting on life-changing money at 3 AM.
          </p>
        </div>

        {/* What You'll Learn */}
        <div className="mb-24" id="learn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#1a2340]/50 border-blue-800/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">The 24-Hour Mindset</h4>
                    <p className="text-gray-400">Understanding asymmetric risk, how million-dollar flips actually happen, and why 99% lose while 1% control the game</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1a2340]/50 border-blue-800/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">The $100 Playbook</h4>
                    <p className="text-gray-400">Selecting the right chain (Solana, BSC, or Base), using DEXs, bots, and wallet split strategies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1a2340]/50 border-blue-800/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Narrative Sniping</h4>
                    <p className="text-gray-400">How to find narratives before they explode (AI, GameFi, Memecoins) and spot insider liquidity footprints</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1a2340]/50 border-blue-800/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">The 1-100x Flip Method</h4>
                    <p className="text-gray-400">Launch tracker plays, degen entry rules, and compounding plays using ladder-style flipping</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1a2340]/50 border-blue-800/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">24-Hour Timeline</h4>
                    <p className="text-gray-400">Hour-by-hour breakdown: scanning, positioning, entry, distribution, and exit strategies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1a2340]/50 border-blue-800/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Psychology of Lightning Wealth</h4>
                    <p className="text-gray-400">Avoiding greed, handling FOMO and confirmation bias, emotional resets between trades</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-24" id="pricing">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Choose Your Path
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Three tiers designed for different stages of your ultra-trading journey
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Base Tier */}
            <Card className="bg-gradient-to-b from-blue-900/30 to-blue-950/30 border-blue-700/50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Download className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-blue-300 text-sm mb-2">Base</p>
                  <h3 className="text-2xl font-bold text-white mb-2">The Ultra: Digital Edition</h3>
                  <div className="text-4xl font-bold text-white mb-2">$9.99</div>
                  <p className="text-gray-400 text-sm">Perfect entry point for new traders</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete eBook (PDF format)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete eBook (ePub format)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Instant download access</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">All core strategies & psychology</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">24-hour trading timeline</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Risk management protocols</span>
                  </li>
                </ul>
                
                <a href="https://mogulld.gumroad.com/l/ezapws" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Start Your Journey
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Pro Tier */}
            <Card className="bg-gradient-to-b from-gray-700 to-gray-800 border-orange-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                MOST POPULAR
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <CheckCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <p className="text-orange-300 text-sm mb-2">Pro</p>
                  <h3 className="text-2xl font-bold text-white mb-2">The Ultra: Playbook Bundle</h3>
                  <div className="text-4xl font-bold text-white mb-2">$29.99</div>
                  <p className="text-gray-400 text-sm">Most popular choice for serious traders</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything in Digital Edition</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">King's Scanner Settings (exact filters)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">King's Personal Reflections</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">24-Hour Trading Plan Template</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Top 10 Legendary Trades Report</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Compound-Flip Spreadsheet</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Voice Memo Scripts & Protocols</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Emergency Exit Protocol</span>
                  </li>
                </ul>
                
                <a href="https://mogulld.gumroad.com/l/ozxig" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Get The Playbook
                  </Button>
                </a>
                <p className="text-center text-orange-400 text-xs mt-3 flex items-center justify-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Converts best when shown as "Most Popular"
                </p>
              </CardContent>
            </Card>

            {/* Elite Tier */}
            <Card className="bg-gradient-to-b from-purple-900/30 to-purple-950/30 border-purple-700/50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Crown className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <p className="text-purple-300 text-sm mb-2">Elite</p>
                  <h3 className="text-2xl font-bold text-white mb-2">The Ultra Masterclass Kit</h3>
                  <div className="text-4xl font-bold text-white mb-2">$97</div>
                  <p className="text-gray-400 text-sm">King's personal trading arsenal</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything in Playbook Bundle</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Elite Workbook (King's personal system)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Pre-Trade Focus Session Script</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Private Mindset Reset Script</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced psychological frameworks</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete preparation protocols</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">King's exact pre-trade rituals</span>
                  </li>
                </ul>
                
                <a href="https://mogulld.gumroad.com/l/ybnak" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Get The Elite Kit
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Three Tiers */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 mb-24 border border-blue-800/30">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">Why Three Tiers?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-blue-300 font-semibold mb-2">Tier 1: Entry-level impulse buy.</p>
              <p className="text-gray-400 text-sm">Perfect for funneling new leads.</p>
            </div>
            <div>
              <p className="text-orange-300 font-semibold mb-2">Tier 2: Ideal upseller.</p>
              <p className="text-gray-400 text-sm">Converts best when shown as "Most Popular"</p>
            </div>
            <div>
              <p className="text-purple-300 font-semibold mb-2">Tier 3: Premium anchor.</p>
              <p className="text-gray-400 text-sm">Drives perceived value and boosts average order.</p>
            </div>
          </div>
        </div>

        {/* Is This For You */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            <span className="text-pink-400">Is This For You?</span>
          </h2>
          <p className="text-gray-300 text-center mb-12">
            The Ultra isn't for everyone. Here's who should (and shouldn't) read this book.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-8 h-8" />
                Perfect For You If:
              </h3>
              <div className="space-y-4">
                <Card className="bg-teal-900/20 border-teal-700/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Experienced Traders</h4>
                        <p className="text-gray-400 text-sm">You've made some profits but want to level up to ultra-high-risk territory</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-teal-900/20 border-teal-700/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Psychology-Minded Traders</h4>
                        <p className="text-gray-400 text-sm">You understand that trading is 80% mental and want to master the psychological game</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-teal-900/20 border-teal-700/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Memecoin Enthusiasts</h4>
                        <p className="text-gray-400 text-sm">You're already in the memecoin space and want a systematic approach to massive gains</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-teal-900/20 border-teal-700/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">High-Risk Tolerant</h4>
                        <p className="text-gray-400 text-sm">You can afford to lose $100 and want to understand how to potentially turn it into life-changing money</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <XCircle className="w-8 h-8" />
                NOT For You If:
              </h3>
              <div className="space-y-4">
                <Card className="bg-red-900/20 border-red-700/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-300 text-sm">Complete beginners who have never traded crypto</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-900/20 border-red-700/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-300 text-sm">People who can't afford to lose their investment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-900/20 border-red-700/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-300 text-sm">Those looking for 'guaranteed' or 'safe' trading strategies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-900/20 border-red-700/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-300 text-sm">Investors seeking long-term, low-risk approaches</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Brutal Reality Check */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-12 mb-24 border-2 border-orange-500/50">
          <div className="text-center mb-8">
            <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Brutal Reality Check</h2>
            <p className="text-gray-300 mb-2">
              <span className="text-yellow-400 font-bold">This book covers extremely high-risk strategies.</span> For every success story, there are thousands of failures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">99.9%</div>
              <p className="text-gray-300">will lose their money</p>
            </div>
            
            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">0.099%</div>
              <p className="text-gray-300">will make significant gains</p>
            </div>
            
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">0.001%</div>
              <p className="text-gray-300">will hit the true ultra-gains</p>
            </div>
          </div>
          
          <p className="text-gray-400 text-center text-sm">
            <strong>This book won't change the odds.</strong> But it will teach you the psychology to handle the pressure if you're in that tiny percentage who catches lightning in a bottle.
          </p>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg p-12 mb-16 border border-blue-700/50">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            <span className="text-white">Ready to Master</span><br />
            <span className="text-yellow-400">Hour 19?</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-2">
            When you're sitting on <span className="text-green-400 font-bold">$127,000</span> at 3 AM, and everyone's screaming different advice, you'll have the plan.
          </p>
          <p className="text-lg text-gray-300 text-center mb-2">You'll trust past-you.</p>
          <p className="text-xl text-yellow-400 font-bold text-center mb-8">You'll execute perfectly.</p>
          
          <div className="text-center mb-12">
            <a href="https://mogulld.gumroad.com/l/ozxig" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-xl px-12 py-6">
                <ArrowRight className="mr-2 h-6 w-6" />
                Get The Ultra Now
              </Button>
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 text-center">
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">Instant Access</h4>
              <p className="text-gray-400 text-sm">Download immediately after purchase</p>
            </div>
            
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">Proven Strategies</h4>
              <p className="text-gray-400 text-sm">Based on real $7K → $3M case studies</p>
            </div>
            
            <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-6 text-center">
              <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">24-Hour Focus</h4>
              <p className="text-gray-400 text-sm">Complete ultra-trading timeline</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-gray-300 italic text-center mb-2">
              "The hardest part isn't finding the trade. It's <span className="text-yellow-400 font-bold">trusting the plan when the plan says keep going</span>."
            </p>
            <p className="text-gray-400 text-center text-sm">— The Ultra, Hour Zero</p>
          </div>
        </div>

        {/* Footer Warning */}
        <div className="flex items-center justify-center gap-2 text-orange-400 text-sm text-center mb-8">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <p>
            Final Risk Warning: Ultra-high-risk trading. Only invest what you can afford to lose completely. 
            Past performance does not guarantee future results.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="text-sm">
            © 2025 The Ultra. For educational purposes only. Not financial advice. Trade at your own risk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltraLandingPage;
