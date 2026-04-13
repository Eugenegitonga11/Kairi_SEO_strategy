import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Search, TrendingUp, Link, Zap, Users, Globe, Target, Award, AlertCircle, CheckCircle, Activity, MessageCircle, Send, X } from 'lucide-react';

const KairiSEOAudit = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [chatOpen, setChatOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "🦁 Hello! I'm your Kairi SEO Audit Assistant.\n\nI've analysed kairi.co.ke — Kenya's oldest safari agency — and found significant digital gaps despite their 40-year heritage.\n\n🎯 I can help you with:\n• Critical issues blocking rankings\n• Performance & speed data\n• Competitor analysis\n• Keyword opportunities\n• The 8-month fix roadmap\n\nWhat would you like to explore?",
      suggestions: ["What are the biggest issues?", "Show me performance problems", "Who are the competitors?", "What keywords should we target?"]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  React.useEffect(() => {
    if (!hasGreeted) {
      const t = setTimeout(() => { setChatOpen(true); setHasGreeted(true); }, 2000);
      return () => clearTimeout(t);
    }
  }, [hasGreeted]);

  // ── DATA ───────────────────────────────────────────────────────────────────
  const semrushData = {
    authorityScore: 12,
    organicTraffic: 320,
    organicKeywords: 38,
    backlinks: 142,
    referringDomains: 28,
    trafficShare: 34,
    paidTraffic: 0,
    paidKeywords: 0,
    aiVisibility: 0,
    aiMentions: 0,
    citedPages: 2,
  };

  const performanceData = {
    mobile: { lcp: 7.4, inp: 210, cls: 0.22, fcp: 5.1, ttfb: 3.8, score: 38 },
    desktop: { lcp: 5.9, inp: 195, cls: 0.19, fcp: 4.3, ttfb: 3.2, score: 52 },
  };

  const seoMetricsComparison = [
    { metric: 'Authority', current: 12, target: 45, competitor: 38 },
    { metric: 'Traffic', current: 320, target: 5000, competitor: 3200 },
    { metric: 'Keywords', current: 38, target: 500, competitor: 380 },
    { metric: 'Ref. Domains', current: 28, target: 150, competitor: 110 },
    { metric: 'Backlinks', current: 142, target: 600, competitor: 420 },
  ];

  const coreWebVitalsData = [
    { metric: 'LCP (s)', mobile: 7.4, desktop: 5.9, target: 2.5 },
    { metric: 'INP (ms)', mobile: 210, desktop: 195, target: 200 },
    { metric: 'CLS', mobile: 0.22, desktop: 0.19, target: 0.1 },
    { metric: 'FCP (s)', mobile: 5.1, desktop: 4.3, target: 1.8 },
    { metric: 'TTFB (s)', mobile: 3.8, desktop: 3.2, target: 0.8 },
  ];

  const seoHealthData = [
    { category: 'Technical SEO', score: 32 },
    { category: 'Content Quality', score: 55 },
    { category: 'Backlinks', score: 22 },
    { category: 'User Experience', score: 38 },
    { category: 'Mobile', score: 30 },
    { category: 'Local SEO', score: 48 },
    { category: 'International SEO', score: 20 },
  ];

  const competitorData = [
    { name: 'Kairi', score: 32, speed: 'Poor' },
    { name: 'Bonfire Adv.', score: 76, speed: 'Good' },
    { name: 'Pollmans', score: 72, speed: 'Good' },
    { name: 'Gamewatchers', score: 80, speed: 'Excellent' },
    { name: 'Kibo Slopes', score: 68, speed: 'Fair' },
    { name: 'Expeditions Maasai', score: 62, speed: 'Fair' },
  ];

  const criticalIssues = [
    { issue: 'Slow LCP — 7.4s mobile / 5.9s desktop (target <2.5s). Users wait 5+ seconds before main content loads.', priority: 'URGENT' },
    { issue: 'High TTFB — 3.8s mobile / 3.2s desktop (target <0.8s). Server response is 3× too slow.', priority: 'URGENT' },
    { issue: 'CLS 0.22 mobile — severe layout shift (target <0.1). Heavy hero images load without dimensions.', priority: 'URGENT' },
    { issue: 'Core Web Vitals FAILED on both mobile & desktop — active Google ranking penalty.', priority: 'URGENT' },
    { issue: 'No online booking / enquiry form — all conversions require phone or email; high friction for international visitors.', priority: 'High' },
    { issue: 'Zero AI Search Visibility — Kairi does not appear in Google AI Overviews for any safari query.', priority: 'High' },
    { issue: 'Menu cluttered with 5 phone numbers — damages UX on mobile and dilutes conversion focus.', priority: 'High' },
    { issue: 'No TripAdvisor / Google review widget — 40 years of trust signals are invisible on-site.', priority: 'High' },
    { issue: 'No dedicated landing pages for high-intent queries ("3 day Masai Mara safari", "budget safari Kenya").', priority: 'Medium' },
    { issue: 'Missing schema markup (TouristAttraction, TourPackage, LocalBusiness, FAQPage).', priority: 'Medium' },
  ];

  const quickWins = [
    { action: 'Compress & convert all images to WebP (hero images are 2–4 MB)', impact: 'Save ~2–3s on LCP', difficulty: 'Easy' },
    { action: 'Enable Cloudflare CDN (free tier)', impact: 'Reduce TTFB by ~1–2s globally', difficulty: 'Easy' },
    { action: 'Set explicit width & height on all <img> tags', impact: 'Reduce CLS from 0.22 → <0.1', difficulty: 'Easy' },
    { action: 'Enable lazy-loading for below-fold images', impact: 'Improve FCP by ~1–2s', difficulty: 'Easy' },
    { action: 'Add LocalBusiness + TouristAttraction schema markup', impact: 'Appear in local pack & AI Overviews', difficulty: 'Easy' },
    { action: 'Add sticky WhatsApp & enquiry CTA on every page', impact: 'Immediate conversion lift', difficulty: 'Easy' },
  ];

  const roadmapPhases = [
    {
      label: 'Months 1–2', title: '🚨 Performance Emergency & Technical Foundation',
      color: '#7f1d1d', border: '#dc2626',
      tasks: [
        'WEEK 1: Upgrade shared hosting → managed WordPress host (Kinsta / WP Engine)',
        'WEEK 1: Deploy Cloudflare CDN — target TTFB <0.8s',
        'WEEK 1: Compress all images & convert to WebP using ShortPixel',
        'WEEK 2: Set explicit dimensions on all images (fix CLS 0.22 → <0.1)',
        'WEEK 2: Enable lazy-loading for all below-fold images',
        'WEEK 2: Minify CSS/JS; defer non-critical scripts',
        'WEEK 3: Inline critical CSS; remove render-blocking resources',
        'WEEK 3: Enable Gzip/Brotli compression + browser caching',
        'WEEK 4: Implement schema (LocalBusiness, TouristAttraction, TourPackage)',
        'WEEK 4: Run PageSpeed — target 75+/100 mobile',
      ],
      kpi: 'PageSpeed 75+, LCP <3.5s, CLS <0.1, Core Web Vitals PASSED',
      budget: 'KES 15,000–25,000 (hosting upgrade + tools)',
    },
    {
      label: 'Month 3', title: '⚡ Homepage Redesign & Conversion Architecture',
      color: '#7c2d12', border: '#ea580c',
      tasks: [
        'Redesign homepage: full-width hero video/image, USP highlights ("Since 1984", JKIA office)',
        'Build sticky WhatsApp + booking enquiry form CTA',
        'Create clear navigation: max 2 levels, remove phone numbers from menu',
        'Build dedicated "Why Kairi" page featuring 40-year heritage & JKIA USP',
        'Optimise Google Business Profile — post 3×/week, 100+ photos, enable messaging',
        'Embed Google & TripAdvisor review widgets prominently on homepage',
        'Set up GA4 + Google Search Console tracking',
        'Mobile UX audit — ensure all buttons ≥48px touch targets',
      ],
      kpi: 'Bounce rate -20%, Enquiry form live, GBP fully optimised',
      budget: 'KES 20,000–35,000 (design + development)',
    },
    {
      label: 'Month 4', title: '📄 Package Pages, Destinations & On-Page SEO',
      color: '#713f12', border: '#ca8a04',
      tasks: [
        'Build standardised template for all safari package pages (price, inclusions, CTA)',
        'Create 20+ destination pages (Masai Mara, Amboseli, Tsavo, Samburu, Serengeti, etc.)',
        'Keyword-optimise all existing content (titles, H1s, meta descriptions)',
        'Add FAQPage schema to each service & destination page',
        'Build Rhino Tourist Camp dedicated page (own accommodation = huge USP)',
        'Create JKIA Office landing page — unique selling point, target "last minute safari Kenya"',
        'Internal linking audit — connect package pages → destination pages → blog',
        'Review schema implementation — aggregate rating widget for credibility',
      ],
      kpi: '20+ package pages indexed, 5+ keywords in top 10, Schema validated in GSC',
      budget: 'KES 15,000–25,000 (content writing + dev)',
    },
    {
      label: 'Month 5', title: '📝 Content Strategy & Blog Launch',
      color: '#14532d', border: '#16a34a',
      tasks: [
        'Publish 4 long-form destination guides (2,000+ words each)',
        '"Best time to visit Masai Mara" — high-volume seasonal content',
        '"Budget safari Kenya: complete guide" — targets primary revenue keyword',
        '"3-day Masai Mara safari from Nairobi" — high-intent transactional',
        '"Big Five in Kenya: where & when" — educational, high-traffic',
        'Create FAQ hub answering top 50 safari planning questions',
        'Launch social sharing with Open Graph meta tags on all pages',
        'Email newsletter opt-in on blog to capture leads',
        'Start citation building: 25 Kenya tourism & business directories',
      ],
      kpi: 'Blog live with 4 posts, 25 citations, impressions growing in GSC',
      budget: 'KES 18,000–28,000 (content creation)',
    },
    {
      label: 'Months 6–7', title: '🔗 Authority Building & Link Acquisition',
      color: '#1e3a5f', border: '#2563eb',
      tasks: [
        'Guest posts on 4 high-authority Kenya travel & lifestyle blogs',
        'Press release: "Kenya oldest safari company launches new website"',
        'Reach out to travel bloggers who visited Kenya for backlink mentions',
        'KATO (Kenya Association of Tour Operators) membership listing & link',
        'Kenya Tourism Board directory listing',
        'Pitch safari travel to influential YouTube/Instagram travel creators',
        'Build 50+ quality backlinks total (reach 80 referring domains)',
        'TripAdvisor profile complete with 100+ reviews; embed on site',
        'Set up heatmap (Microsoft Clarity) to improve conversion UX',
      ],
      kpi: '80+ referring domains, Domain Authority 28+, 100+ keywords ranking',
      budget: 'KES 20,000–35,000 (outreach + PR)',
    },
    {
      label: 'Month 8', title: '🏆 Scale, Launch & Handover',
      color: '#312e81', border: '#7c3aed',
      tasks: [
        'Full QA audit across mobile, tablet, desktop (Chrome, Safari, Firefox)',
        '301 redirects from all old URLs confirmed and tested',
        'Submit XML sitemap to Google Search Console & Bing Webmaster',
        'Publish 4 more blog posts, targeting Great Migration seasonal traffic',
        'Set up automated post-safari email review request sequence',
        'Build online booking enquiry workflow with WhatsApp integration',
        'Staff CMS training — basic editing, image upload, blog publishing',
        'Monthly SEO reporting dashboard (GA4 + GSC + Semrush)',
        'Deliver handover documentation + ongoing maintenance plan',
      ],
      kpi: '#1 for primary keywords, 500+ organic visits/month, 150+ backlinks',
      budget: 'KES 10,000–15,000 (QA + training + reporting)',
    },
  ];

  const keywords = [
    { topic: 'Budget safari Kenya', vol: 'High', diff: 'Medium', priority: 'High', action: '2,500+ word guide + package landing page' },
    { topic: '3 day Masai Mara safari Nairobi', vol: 'High', diff: 'Medium', priority: 'High', action: 'Transactional landing page with pricing & CTA' },
    { topic: 'Kenya safari company Nairobi', vol: 'Medium', diff: 'Medium', priority: 'High', action: 'About/Why Kairi page + local SEO' },
    { topic: 'Family safari Kenya affordable', vol: 'Medium', diff: 'Low', priority: 'High', action: 'Family safari dedicated category page' },
    { topic: 'Last minute safari Kenya', vol: 'Medium', diff: 'Low', priority: 'High', action: 'JKIA office landing page — Kairi s unique USP' },
    { topic: 'Masai Mara budget camp', vol: 'Medium', diff: 'Low', priority: 'High', action: 'Rhino Tourist Camp dedicated page' },
    { topic: 'Tanzania safari tours Nairobi', vol: 'Medium', diff: 'Medium', priority: 'Medium', action: 'Tanzania safari package hub page' },
    { topic: 'Uganda gorilla safari', vol: 'Low-Med', diff: 'Low', priority: 'Medium', action: 'Uganda safari category page' },
    { topic: 'Hot air balloon Masai Mara', vol: 'Medium', diff: 'Medium', priority: 'Medium', action: 'Dedicated balloon safari page + schema' },
    { topic: 'Best time visit Masai Mara', vol: 'High', diff: 'Low', priority: 'High', action: 'Evergreen long-form blog post' },
  ];

  // ── AI CHAT ────────────────────────────────────────────────────────────────
  const getAIResponse = (msg) => {
    const m = msg.toLowerCase();
    if (m.includes('critical') || m.includes('urgent') || m.includes('problem') || m.includes('issue')) {
      return {
        content: "🚨 Kairi's top CRITICAL issues:\n\n1. **LCP 7.4s mobile** (target <2.5s) — visitors wait 5+ seconds\n2. **TTFB 3.8s** — server is 3× too slow, root cause of everything\n3. **CLS 0.22** — heavy hero images shift content on load\n4. **Core Web Vitals FAILED** — active Google ranking penalty\n5. **No booking/enquiry form** — all conversions require a phone call\n6. **Zero AI Search Visibility** — missing from Google AI Overviews\n\nDespite 40 years of heritage, the site is nearly invisible online. Performance fixes in Month 1 are non-negotiable.",
        action: { tab: 'overview', label: 'View All Critical Issues' }
      };
    }
    if (m.includes('performance') || m.includes('speed') || m.includes('slow') || m.includes('lcp') || m.includes('core web')) {
      return {
        content: "📊 **Performance Numbers:**\n\n**Mobile:** LCP 7.4s, FCP 5.1s, TTFB 3.8s, CLS 0.22 ❌\n**Desktop:** LCP 5.9s, FCP 4.3s, TTFB 3.2s, CLS 0.19 ❌\n\n**Root cause:** Uncompressed hero images (2–4MB each) + slow shared hosting = catastrophically high TTFB cascading into all other metrics.\n\n**Quick wins this week:**\n• Upgrade to Kinsta/WP Engine (saves 2–3s TTFB)\n• WebP images via ShortPixel (saves 2s on LCP)\n• Cloudflare CDN (saves 1–2s globally)\n• Set image dimensions (fixes CLS 0.22 → <0.1)",
        action: { tab: 'performance', label: 'See Full Performance Data' }
      };
    }
    if (m.includes('competitor') || m.includes('bonfire') || m.includes('pollman') || m.includes('gamewatcher')) {
      return {
        content: "👥 **Safari Competitor Landscape:**\n\nKairi (32/100) vs:\n• Gamewatchers: 80/100\n• Bonfire Adventures: 76/100\n• Pollman's: 72/100\n• Kibo Slopes: 68/100\n\n**Key gap:** All competitors have PageSpeed 60–85. Kairi is at 38.\n\n**Kairi's advantages competitors can't copy:**\n• Since 1984 — Kenya's oldest\n• Only company with JKIA Arrivals Terminal 1A office\n• Rhino Tourist Camp — owned accommodation\n\nThese USPs need to be front and centre in every page, title tag, and schema markup.",
        action: { tab: 'competitors', label: 'Full Competitor Analysis' }
      };
    }
    if (m.includes('keyword') || m.includes('rank') || m.includes('traffic') || m.includes('search')) {
      return {
        content: "🔍 **Keyword Opportunities:**\n\nTop targets:\n• 'Budget safari Kenya' — high volume, fits positioning perfectly\n• '3 day Masai Mara safari Nairobi' — transactional, high intent\n• 'Last minute safari Kenya' — Kairi's JKIA office is a unique angle\n• 'Family safari Kenya affordable' — underserved\n• 'Masai Mara budget camp' — Rhino Camp is a USP\n\nCurrently ranking for only 38 keywords vs competitors at 300–500. Content strategy + technical fixes = 10× keyword growth in 8 months.",
        action: { tab: 'strategy', label: 'View Full Keyword Strategy' }
      };
    }
    if (m.includes('semrush') || m.includes('authority') || m.includes('backlink') || m.includes('domain')) {
      return {
        content: "📊 **Domain Analysis:**\n\n• Authority Score: 12/100 (Low)\n• Organic Traffic: ~320/month\n• Ranking Keywords: 38\n• Backlinks: 142 (28 referring domains)\n• AI Visibility: 0\n\n**Despite 40 years in business**, kairi.co.ke has weaker domain authority than competitors founded in 2014. This is fixable — the brand recognition and heritage are strong, the digital footprint just hasn't kept up.",
        action: { tab: 'semrush', label: 'View Full SEMrush Analysis' }
      };
    }
    if (m.includes('roadmap') || m.includes('plan') || m.includes('timeline') || m.includes('month')) {
      return {
        content: "🗺️ **8-Month Roadmap:**\n\n**Months 1–2:** Performance fixes (URGENT)\n**Month 3:** Homepage redesign + conversion\n**Month 4:** Package & destination pages\n**Month 5:** Blog launch + content\n**Months 6–7:** Link building + authority\n**Month 8:** Scale + handover\n\n**Goal:** #1 for 'budget safari Kenya', 500+ organic visits/month, Domain Authority 35+\n\nBreak-even expected Month 4–5 based on safari package values.",
        action: { tab: 'roadmap', label: 'View Full Roadmap' }
      };
    }
    if (m.includes('usp') || m.includes('unique') || m.includes('heritage') || m.includes('jkia') || m.includes('1984')) {
      return {
        content: "🦁 **Kairi's Untapped USPs:**\n\n1. **Since 1984** — oldest indigenously owned safari agency in Kenya\n2. **JKIA Arrivals Terminal 1A** — only agency with an airport office. Target 'last minute safari Kenya'\n3. **Rhino Tourist Camp** — own accommodation 1km from Maasai Mara gate\n4. **40 years of local guides** — multilingual, expert, trusted\n\nNone of these are properly leveraged in title tags, schema, or landing pages. Competitors can't match this heritage — we just need to make Google and travellers see it.",
        action: { tab: 'strategy', label: 'See SEO Strategy' }
      };
    }
    return {
      content: "I can help you explore:\n\n• 🚨 Critical issues & priorities\n• 📊 Performance & Core Web Vitals\n• 🔍 Domain authority & backlinks\n• 👥 Competitor comparison\n• 🔑 Keyword opportunities\n• 🗺️ 8-month roadmap\n• 🦁 Kairi's untapped USPs\n\nWhat would you like to know?",
      suggestions: ["What's most critical?", "Show keyword opportunities", "Who are the competitors?", "What are Kairi's USPs?"]
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    const userMsg = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 800));
    const response = getAIResponse(userMsg);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response.content, action: response.action, suggestions: response.suggestions }]);
  };

  const handleSuggestionClick = (s) => { setInputMessage(s); setTimeout(handleSendMessage, 50); };
  const handleActionClick = (tab) => { setActiveTab(tab); setChatOpen(false); };

  const tabs = [
    { id: 'overview', name: 'Executive Summary', icon: Target },
    { id: 'semrush', name: 'Domain Analysis', icon: Search },
    { id: 'performance', name: 'Performance', icon: Activity },
    { id: 'technical', name: 'Technical Fixes', icon: Zap },
    { id: 'competitors', name: 'Competitors', icon: Users },
    { id: 'strategy', name: 'SEO Strategy', icon: TrendingUp },
    { id: 'roadmap', name: '8-Month Roadmap', icon: Award },
  ];

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6 border-t-4 border-amber-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Kairi Tours & Safaris — SEO Audit</h1>
              <p className="text-gray-600 mb-3">kairi.co.ke · Kenya's oldest indigenous safari agency · Est. 1984</p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold text-sm">❌ Core Web Vitals: FAILED</div>
                <div className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg font-semibold text-sm">⚠️ Authority Score: 12/100</div>
                <div className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg font-semibold text-sm">🔍 38 keywords ranking</div>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-5xl font-bold text-red-600">38/100</div>
              <div className="text-sm text-gray-600 mt-1">Mobile PageSpeed Score</div>
              <div className="text-xs text-red-600 mt-1 font-semibold">POOR — Immediate action needed</div>
            </div>
          </div>
        </div>

        {/* FLOATING CHAT BUTTON */}
        {!chatOpen && (
          <button onClick={() => setChatOpen(true)}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-700 to-green-700 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all z-50 flex items-center gap-2">
            <MessageCircle size={22} />
            <span className="font-semibold text-sm">Ask AI Assistant</span>
          </button>
        )}

        {/* CHAT WINDOW */}
        {chatOpen && (
          <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px] border-2 border-amber-200">
            <div className="bg-gradient-to-r from-amber-700 to-green-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white bg-opacity-20 rounded-full flex items-center justify-center">🦁</div>
                <div><div className="font-bold text-sm">Kairi SEO Assistant</div><div className="text-xs opacity-80">Safari SEO expert</div></div>
              </div>
              <button onClick={() => setChatOpen(false)} className="hover:bg-white hover:bg-opacity-20 p-1 rounded"><X size={18} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 shadow-sm text-sm ${msg.role === 'user' ? 'bg-amber-700 text-white rounded-tr-sm' : 'bg-white border-2 border-amber-100 rounded-tl-sm text-gray-800'}`}>
                    <div className="whitespace-pre-line">{msg.content}</div>
                    {msg.action && (
                      <button onClick={() => handleActionClick(msg.action.tab)}
                        className="mt-3 w-full bg-amber-700 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-amber-800 transition-colors">
                        {msg.action.label} →
                      </button>
                    )}
                    {msg.suggestions && (
                      <div className="mt-3 space-y-1.5">
                        {msg.suggestions.map((s, si) => (
                          <button key={si} onClick={() => handleSuggestionClick(s)}
                            className="w-full text-left bg-amber-50 hover:bg-amber-100 text-amber-800 px-3 py-2 rounded-lg text-xs transition-colors border border-amber-200">
                            💬 {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border-2 border-amber-100 rounded-2xl rounded-tl-sm p-3">
                    <div className="flex gap-1">
                      {[0, 150, 300].map(d => <div key={d} className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />)}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-3 border-t border-gray-200 bg-white rounded-b-2xl">
              <div className="flex gap-2">
                <input type="text" value={inputMessage} onChange={e => setInputMessage(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about the SEO audit..."
                  className="flex-1 px-3 py-2 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-400 text-sm" />
                <button onClick={handleSendMessage} className="bg-amber-700 text-white p-2 rounded-xl hover:bg-amber-800 transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TABS */}
        <div className="bg-white rounded-xl shadow-lg mb-6 p-2 flex gap-1.5 overflow-x-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap text-sm ${activeTab === tab.id ? 'bg-amber-700 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
                <Icon size={16} />{tab.name}
              </button>
            );
          })}
        </div>

        {/* ── OVERVIEW ──────────────────────────────────────────────────────── */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white rounded-xl p-6 shadow-2xl">
              <div className="flex items-start gap-4">
                <AlertCircle size={36} className="flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-2">🚨 CRITICAL: 40 Years of Heritage — Almost Zero Online Visibility</h2>
                  <p className="text-lg mb-3">Kairi Tours & Safaris has <strong>FAILED Core Web Vitals</strong> on both mobile and desktop. Despite being Kenya's oldest safari agency since 1984, the website is losing an estimated <strong>65–75% of potential organic bookings</strong> to competitors due to:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Site loads in 7.4 seconds on mobile (Google threshold: 2.5s) — 53% of users leave before it loads</li>
                    <li>• Only 38 keywords ranking vs competitors with 300–500</li>
                    <li>• No online enquiry form — all leads require phone/email friction</li>
                    <li>• Zero appearance in Google AI Overviews for any safari query</li>
                  </ul>
                  <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-lg">
                    <strong>Opportunity:</strong> Kairi's 40-year heritage, JKIA airport office, and owned Rhino Tourist Camp are USPs no competitor can match. A revamped site could dominate "budget safari Kenya" within 8 months.
                  </div>
                </div>
              </div>
            </div>

            {/* Performance quick cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Activity className="text-red-600" />Mobile Performance (FAILED ❌)</h3>
                <div className="space-y-3">
                  {[
                    { label: 'LCP', value: '7.4s', target: '<2.5s', s: 'critical' },
                    { label: 'INP', value: '210ms', target: '<200ms', s: 'warning' },
                    { label: 'CLS', value: '0.22', target: '<0.1', s: 'critical' },
                    { label: 'FCP', value: '5.1s', target: '<1.8s', s: 'critical' },
                    { label: 'TTFB', value: '3.8s', target: '<0.8s', s: 'critical' },
                  ].map(m => (
                    <div key={m.label} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div><div className="font-semibold">{m.label}</div><div className="text-xs text-gray-500">Target: {m.target}</div></div>
                      <div className={`text-xl font-bold ${m.s === 'critical' ? 'text-red-600' : m.s === 'warning' ? 'text-amber-600' : 'text-green-600'}`}>{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Activity className="text-orange-600" />Desktop Performance (FAILED ❌)</h3>
                <div className="space-y-3">
                  {[
                    { label: 'LCP', value: '5.9s', target: '<2.5s', s: 'critical' },
                    { label: 'INP', value: '195ms', target: '<200ms', s: 'good' },
                    { label: 'CLS', value: '0.19', target: '<0.1', s: 'critical' },
                    { label: 'FCP', value: '4.3s', target: '<1.8s', s: 'critical' },
                    { label: 'TTFB', value: '3.2s', target: '<0.8s', s: 'critical' },
                  ].map(m => (
                    <div key={m.label} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div><div className="font-semibold">{m.label}</div><div className="text-xs text-gray-500">Target: {m.target}</div></div>
                      <div className={`text-xl font-bold ${m.s === 'critical' ? 'text-red-600' : m.s === 'warning' ? 'text-amber-600' : 'text-green-600'}`}>{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Radar chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Zap className="text-amber-600" />Overall SEO Health Radar</h2>
              <ResponsiveContainer width="100%" height={380}>
                <RadarChart data={seoHealthData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Kairi" dataKey="score" stroke="#b45309" fill="#b45309" fillOpacity={0.55} />
                </RadarChart>
              </ResponsiveContainer>
              <p className="text-center text-gray-600 mt-2 text-sm">Weakest areas: Backlinks (22), Technical SEO (32), Mobile (30), International SEO (20)</p>
            </div>

            {/* Critical issues */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AlertCircle className="text-red-600" />Critical Issues</h2>
              <div className="space-y-3">
                {criticalIssues.map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
                    <div className="flex-1 pr-4"><p className="font-medium text-gray-900 text-sm">{item.issue}</p></div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0 ${item.priority === 'URGENT' ? 'bg-red-100 text-red-700' : item.priority === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}`}>{item.priority}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick wins */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border border-green-200">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-800"><CheckCircle className="text-green-600" />Quick Wins — Do This Week</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {quickWins.map((w, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                    <div><div className="font-semibold text-gray-900 text-sm">{w.action}</div><div className="text-xs text-green-700 mt-1 font-medium">{w.impact}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── SEMRUSH ───────────────────────────────────────────────────────── */}
        {activeTab === 'semrush' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-700 to-green-800 text-white rounded-xl p-6 shadow-2xl">
              <div className="flex items-start gap-4">
                <Search size={36} className="flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-2">📊 Domain Analysis — kairi.co.ke</h2>
                  <p className="text-lg mb-4">Kenya's oldest safari agency has the weakest digital footprint of all major competitors — a 40-year-old brand with a domain that behaves like a brand-new website.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { val: '12/100', label: 'Authority Score' },
                      { val: '~320', label: 'Monthly Visitors' },
                      { val: '38', label: 'Ranking Keywords' },
                      { val: '28', label: 'Referring Domains' },
                    ].map(s => (
                      <div key={s.label} className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                        <div className="text-3xl font-bold">{s.val}</div>
                        <div className="text-xs mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Current vs Target vs Competitor Average</h2>
              <ResponsiveContainer width="100%" height={380}>
                <BarChart data={seoMetricsComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" fill="#ef4444" name="Kairi (Current)" />
                  <Bar dataKey="competitor" fill="#f59e0b" name="Competitor Avg" />
                  <Bar dataKey="target" fill="#16a34a" name="Target (8 months)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Metric detail cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Authority Score', val: '12/100', label: 'VERY LOW', border: 'border-red-500', bg: 'bg-red-50', textColor: 'text-red-600', desc: 'Competitors average 35–80. Despite 40 years of business, the digital presence hasn\'t built link authority. No mentions on tourism portals, no KATO directory listing, no press coverage linking back.', goal: '🎯 Target 45+ within 12 months via structured link building and PR' },
                { title: 'Organic Traffic', val: '~320/mo', label: 'BELOW POTENTIAL', border: 'border-orange-500', bg: 'bg-orange-50', textColor: 'text-orange-600', desc: 'Given Kairi\'s 40-year brand and diverse safari offerings across Kenya, Tanzania, and Uganda, 320 monthly organic visitors is a fraction of what this domain should be earning. Competitors with far less history get 3,000–10,000/month.', goal: '🎯 Target 5,000+ monthly visitors within 12 months' },
                { title: 'Organic Keywords', val: '38', label: 'MINIMAL', border: 'border-amber-500', bg: 'bg-amber-50', textColor: 'text-amber-600', desc: 'Only 38 keywords ranking — most on page 3–10 of Google. The site has 30+ destination pages and 10+ package categories but almost none are keyword-optimised. Each page is a missed ranking opportunity.', goal: '🎯 Target 500+ keywords in 8 months through on-page SEO + content' },
                { title: 'Backlink Profile', val: '142 / 28 domains', label: 'WEAK', border: 'border-yellow-500', bg: 'bg-yellow-50', textColor: 'text-yellow-600', desc: 'Low referring domain count. Most backlinks appear to be from low-authority sources. KATO membership, TripAdvisor profile, tourism board listings, and press mentions are either missing or not properly linked.', goal: '🎯 Target 150 referring domains in 12 months through PR and directory strategy' },
              ].map(c => (
                <div key={c.title} className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${c.border}`}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{c.title}</h3>
                    <div className={`text-2xl font-bold ${c.textColor}`}>{c.val}</div>
                  </div>
                  <span className={`px-3 py-1 ${c.bg} ${c.textColor} rounded-full text-xs font-bold`}>{c.label}</span>
                  <p className="text-sm text-gray-700 mt-3 mb-3">{c.desc}</p>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200 text-sm font-semibold text-green-800">{c.goal}</div>
                </div>
              ))}
            </div>

            {/* AI Visibility */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg p-6 border-2 border-purple-200">
              <h2 className="text-2xl font-bold mb-4 text-purple-900">🤖 AI Search Visibility (Google AI Overview)</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {[
                  { val: 0, label: 'AI Visibility Score' },
                  { val: 0, label: 'AI Mentions' },
                  { val: 2, label: 'Cited Pages' },
                ].map(s => (
                  <div key={s.label} className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-1">{s.val}</div>
                    <div className="text-sm text-gray-700">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                <h4 className="font-bold text-purple-900 mb-3">How to get Kairi into AI Overviews:</h4>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>• Add FAQPage schema to all destination & service pages</li>
                  <li>• Write comprehensive "How to plan a Kenya safari" guides (2,000+ words)</li>
                  <li>• Answer the 50 most common safari planning questions in dedicated FAQ pages</li>
                  <li>• Add structured data: TouristAttraction, TourPackage, Event (migration dates)</li>
                  <li>• Build E-E-A-T signals: expert author bios, credentials, "since 1984" trust signals</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ── PERFORMANCE ──────────────────────────────────────────────────── */}
        {activeTab === 'performance' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Activity className="text-amber-600" />Core Web Vitals — Mobile vs Desktop vs Target</h2>
              <ResponsiveContainer width="100%" height={380}>
                <BarChart data={coreWebVitalsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="mobile" fill="#3b82f6" name="Mobile (Current)" />
                  <Bar dataKey="desktop" fill="#10b981" name="Desktop (Current)" />
                  <Bar dataKey="target" fill="#6b7280" name="Target (Google)" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-800 font-semibold text-sm">⚠️ LCP and TTFB are the primary bottlenecks — both 3–5× above target. The root cause is uncompressed hero images loaded from a slow shared hosting server. Fix hosting + images and 80% of all metrics improve simultaneously.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: '🚨 LCP — Largest Contentful Paint', mob: '7.4s', desk: '5.9s', target: '<2.5s', s: 'critical', desc: 'Kairi\'s homepage hero uses large uncompressed JPEG images (estimated 2–4MB each). The browser waits for the full image to download before "painting" it. This is the #1 fix.', fix: 'Convert hero images to WebP, compress to <200KB, preload the hero image with <link rel="preload">.' },
                { title: '🚨 TTFB — Time to First Byte', mob: '3.8s', desk: '3.2s', target: '<0.8s', s: 'critical', desc: 'The server itself takes nearly 4 seconds to start responding. This is a hosting problem. Shared hosting under load in Kenya can see TTFB 3–5s. This cascades into every other metric.', fix: 'Migrate to Kinsta, WP Engine, or a VPS with server-side caching (Redis/Memcached). Add Cloudflare CDN.' },
                { title: '🚨 CLS — Cumulative Layout Shift', mob: '0.22', desk: '0.19', target: '<0.1', s: 'critical', desc: 'Content jumps around as images load because no explicit width/height attributes are set on <img> tags. Safari package cards and gallery images are the likely culprits.', fix: 'Add width="" height="" to every <img> tag. Set CSS aspect-ratio on image containers. Reserve space for ads/maps.' },
                { title: '🚨 FCP — First Contentful Paint', mob: '5.1s', desk: '4.3s', target: '<1.8s', s: 'critical', desc: 'Render-blocking CSS and JavaScript prevent the browser from drawing any content for 5 seconds. Users see a blank white screen.', fix: 'Inline critical CSS. Defer/async non-critical JS. Remove unnecessary plugins. Preload web fonts.' },
                { title: '⚠️ INP — Interaction to Next Paint', mob: '210ms', desk: '195ms', target: '<200ms', s: 'warning', desc: 'Slightly above threshold on mobile. Heavy JavaScript (likely page builder scripts) blocks the main thread. Desktop passes — mobile just misses.', fix: 'Audit and defer JavaScript from Elementor/WPBakery. Remove unused scripts. Consider lightweight page builder.' },
              ].map(c => (
                <div key={c.title} className={`bg-white rounded-lg p-5 shadow-md border-l-4 ${c.s === 'critical' ? 'border-red-500' : 'border-amber-500'}`}>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{c.title}</h3>
                  <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
                    <div><div className="text-gray-500 text-xs">Mobile</div><div className="font-bold text-lg text-red-600">{c.mob}</div></div>
                    <div><div className="text-gray-500 text-xs">Desktop</div><div className="font-bold text-lg text-orange-600">{c.desk}</div></div>
                    <div><div className="text-gray-500 text-xs">Target</div><div className="font-bold text-lg text-green-600">{c.target}</div></div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{c.desc}</p>
                  <p className="text-xs text-purple-700 font-semibold"><strong>Fix:</strong> {c.fix}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">📈 Expected Outcomes After Optimisation</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { before: '7.4s', after: '<2.5s', label: 'Mobile LCP', note: '✅ Passes Core Web Vitals' },
                  { before: '3.8s', after: '<0.8s', label: 'TTFB', note: '✅ 80% faster server' },
                  { before: '38', after: '85+', label: 'PageSpeed Score', note: '✅ Good rating' },
                ].map(o => (
                  <div key={o.label} className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{o.before} → {o.after}</div>
                    <div className="text-sm text-gray-700 font-medium">{o.label}</div>
                    <div className="text-xs text-green-600 mt-1">{o.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TECHNICAL ─────────────────────────────────────────────────────── */}
        {activeTab === 'technical' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Technical SEO Fix Priority Matrix</h2>
              {[
                {
                  heading: '🚨 Week 1 — URGENT (Server & Images)', color: 'border-red-500',
                  fixes: [
                    { item: 'Upgrade to managed WordPress hosting (Kinsta/WP Engine)', savings: '~2–3s TTFB reduction', p: 'URGENT' },
                    { item: 'Deploy Cloudflare CDN — free tier', savings: '~1–2s improvement globally', p: 'URGENT' },
                    { item: 'Compress all images with ShortPixel or TinyPNG', savings: '~2–3s LCP improvement', p: 'URGENT' },
                    { item: 'Convert all images to WebP format', savings: '30–50% file size reduction', p: 'URGENT' },
                    { item: 'Add width/height attributes to all <img> tags', savings: 'CLS: 0.22 → <0.1', p: 'URGENT' },
                    { item: 'Enable lazy-loading (loading="lazy") on all below-fold images', savings: '~1–2s FCP', p: 'URGENT' },
                  ]
                },
                {
                  heading: '🟠 Week 2 — High Priority (Code & Caching)', color: 'border-orange-500',
                  fixes: [
                    { item: 'Minify CSS, JavaScript, HTML (WP Rocket or LiteSpeed Cache)', savings: '~0.5–1s', p: 'High' },
                    { item: 'Defer all non-critical JavaScript (sliders, tracking)', savings: '~1–2s FCP', p: 'High' },
                    { item: 'Inline critical above-fold CSS', savings: '~0.5s FCP', p: 'High' },
                    { item: 'Enable Gzip/Brotli compression on server', savings: '60–80% file transfer reduction', p: 'High' },
                    { item: 'Enable server-side caching (Redis/Memcached)', savings: '~1–2s overall', p: 'High' },
                    { item: 'Set Cache-Control headers: 1 year for images/fonts, 1hr for HTML', savings: 'Repeat visits 50% faster', p: 'High' },
                  ]
                },
                {
                  heading: '🟡 Week 3–4 — Medium Priority (Schema & On-Page)', color: 'border-amber-500',
                  fixes: [
                    { item: 'Add LocalBusiness + TouristAttraction schema (JSON-LD)', savings: 'Local pack + AI Overview visibility', p: 'High' },
                    { item: 'Add TourPackage schema to all package pages', savings: 'Rich results in SERP', p: 'High' },
                    { item: 'Add FAQPage schema to destination and service pages', savings: 'Expandable FAQs in Google results', p: 'Medium' },
                    { item: 'Add Review/AggregateRating schema from TripAdvisor reviews', savings: 'Star ratings visible in search', p: 'High' },
                    { item: 'Implement srcset/sizes for responsive images (mobile vs desktop)', savings: '~1–2s mobile load', p: 'Medium' },
                    { item: 'Add preload hints for hero image and key fonts', savings: '~0.3–0.5s perceived load', p: 'Medium' },
                  ]
                },
                {
                  heading: '✅ Ongoing — Maintenance & Monitoring', color: 'border-green-500',
                  fixes: [
                    { item: 'Monthly PageSpeed audit and regression checks', savings: 'Maintain 85+ score', p: 'Ongoing' },
                    { item: 'Compress images before uploading (process training)', savings: 'Prevent regression', p: 'Ongoing' },
                    { item: 'Keep WordPress core, theme, and plugins updated', savings: 'Security + performance', p: 'Ongoing' },
                    { item: 'Monitor Core Web Vitals in Google Search Console monthly', savings: 'Early warning system', p: 'Ongoing' },
                    { item: 'Check for new broken links and 404 errors monthly', savings: 'Protect authority', p: 'Ongoing' },
                    { item: 'Quarterly full technical SEO audit', savings: 'Continuous improvement', p: 'Ongoing' },
                  ]
                },
              ].map(section => (
                <div key={section.heading} className={`border-l-4 ${section.color} pl-5 mb-8`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.heading}</h3>
                  <div className="space-y-2">
                    {section.fixes.map((f, i) => (
                      <div key={i} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1 pr-4">
                          <div className="font-medium text-sm text-gray-900">{f.item}</div>
                          <div className="text-xs text-green-700 mt-0.5">💡 {f.savings}</div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold flex-shrink-0 ${f.p === 'URGENT' ? 'bg-red-100 text-red-700' : f.p === 'High' ? 'bg-orange-100 text-orange-700' : f.p === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{f.p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── COMPETITORS ───────────────────────────────────────────────────── */}
        {activeTab === 'competitors' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Safari Competitor SEO Scores</h2>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={competitorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#b45309" name="Overall SEO Score" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-800 font-semibold text-sm">⚠️ Kairi (32/100) is significantly behind all major safari competitors despite having more brand heritage than any of them.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Bonfire Adventures', rank: '#1 Digital Competitor', score: 76, speed: '78/100', str: ['Strong social media presence (100K+ followers)', 'Fast-loading site, 78/100 PageSpeed', 'Prominent TripAdvisor reviews embedded', 'Clear pricing on all packages', 'Online booking system with instant confirmation'], weak: ['Less heritage/history than Kairi', 'More mass-market, less personalised'], gap: 'Kairi is 44 points behind in SEO score' },
                { name: 'Gamewatchers Safaris', rank: '#2 Competitor', score: 80, speed: '83/100', str: ['Conservation-focused positioning = quality backlinks', 'Excellent PageSpeed (83/100)', 'Strong international press coverage', '200+ referring domains', 'Expert content hub with destination guides'], weak: ['Premium-only pricing limits budget searchers', 'Less destination breadth than Kairi'], gap: 'Kairi is 48 points behind' },
                { name: "Pollman's Tours", rank: '#3 Competitor', score: 72, speed: '70/100', str: ['Established since 1950s — comparable heritage', 'Decent PageSpeed (70/100)', 'Fleet of 200+ vehicles — strong authority signal', 'Presence on major OTAs (TripAdvisor, SafariBookings)'], weak: ['Less digital content than newer competitors', 'Menu complexity on mobile'], gap: 'Kairi is 40 points behind' },
                { name: 'Expedition Maasai Safaris', rank: 'Fast-Growing Competitor', score: 62, speed: '66/100', str: ['Founded 2014 yet ranks higher than Kairi', 'Clear budget positioning and pricing transparency', 'Active blog generating organic traffic'], weak: ['Less overall authority than Kairi\'s heritage should deliver', 'Limited destinations vs Kairi'], gap: 'Founded 10 years ago, already outranking Kairi' },
              ].map(c => (
                <div key={c.name} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-600">
                  <div className="flex items-start justify-between mb-3">
                    <div><h3 className="text-xl font-bold text-gray-900">{c.name}</h3><p className="text-sm text-gray-500">{c.rank}</p></div>
                    <div className="text-right"><div className="text-3xl font-bold text-amber-700">{c.score}</div><div className="text-xs text-gray-500">SEO Score</div><div className="text-sm text-green-600">{c.speed}</div></div>
                  </div>
                  <div className="mb-3 p-2 bg-red-50 rounded border border-red-200"><p className="text-xs text-red-700 font-semibold">{c.gap}</p></div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-green-700 text-sm mb-1 flex items-center gap-1"><CheckCircle size={14} />Strengths</h4>
                      <ul className="space-y-0.5">{c.str.map((s, i) => <li key={i} className="text-xs text-gray-700 pl-3">• {s}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 text-sm mb-1 flex items-center gap-1"><AlertCircle size={14} />Weaknesses</h4>
                      <ul className="space-y-0.5">{c.weak.map((w, i) => <li key={i} className="text-xs text-gray-700 pl-3">• {w}</li>)}</ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Kairi's unique competitive advantages */}
            <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-xl shadow-lg p-6 border border-amber-200">
              <h2 className="text-2xl font-bold mb-4 text-amber-900">🦁 Kairi's Unmatched Competitive Advantages</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '🏛️', title: 'Since 1984 — Kenya\'s oldest indigenous agency', desc: 'No competitor can claim this. "Kenya\'s #1 safari company since 1984" should be in every title tag, H1, and schema sameAs property.' },
                  { icon: '✈️', title: 'JKIA Arrivals Terminal 1A office', desc: 'The only safari agency in Kenya with an airport desk. This is a goldmine for "last minute safari Kenya" and "safari booking Nairobi airport" keywords.' },
                  { icon: '🏕️', title: 'Rhino Tourist Camp — owned accommodation', desc: 'Located 1km from Oloolaimutia gate, Masai Mara. Competitors don\'t own camps. This enables "stay + safari" packages and a dedicated SEO landing page.' },
                  { icon: '🌍', title: '40-year guide network across Kenya, Tanzania, Uganda', desc: 'Multilingual expert guides with decades of field experience = trust signals for international travellers searching for the best Kenya safari operator.' },
                ].map(a => (
                  <div key={a.title} className="bg-white rounded-lg p-5 shadow-sm">
                    <div className="text-3xl mb-2">{a.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{a.title}</h3>
                    <p className="text-xs text-gray-700">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── STRATEGY ──────────────────────────────────────────────────────── */}
        {activeTab === 'strategy' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">🔑 High-Priority Keyword Targets</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-amber-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Keyword</th>
                      <th className="px-4 py-3 text-left font-semibold">Volume</th>
                      <th className="px-4 py-3 text-left font-semibold">Difficulty</th>
                      <th className="px-4 py-3 text-left font-semibold">Priority</th>
                      <th className="px-4 py-3 text-left font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {keywords.map((k, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{k.topic}</td>
                        <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs ${k.vol === 'High' ? 'bg-green-100 text-green-700' : k.vol === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>{k.vol}</span></td>
                        <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs ${k.diff === 'Low' ? 'bg-green-100 text-green-700' : k.diff === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{k.diff}</span></td>
                        <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${k.priority === 'High' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-700'}`}>{k.priority}</span></td>
                        <td className="px-4 py-3 text-xs text-gray-600">{k.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">🔗 Link Building Strategy</h3>
                <div className="space-y-3">
                  {[
                    { source: 'KATO directory listing', diff: 'Easy', timeline: 'Week 1', cost: 'Membership fee' },
                    { source: 'Kenya Tourism Board listing', diff: 'Easy', timeline: 'Week 2', cost: 'Free' },
                    { source: 'TripAdvisor full profile', diff: 'Easy', timeline: 'Week 1', cost: 'Free' },
                    { source: 'SafariBookings.com listing', diff: 'Easy', timeline: 'Week 2', cost: 'Free–commission' },
                    { source: 'Kenya travel blog guest posts', diff: 'Medium', timeline: 'Month 2–3', cost: 'KES 3,000–8,000/post' },
                    { source: 'Press release: heritage + relaunch', diff: 'Easy–Med', timeline: 'Month 3', cost: 'KES 5,000' },
                    { source: 'International travel YouTubers', diff: 'Medium', timeline: 'Month 3–5', cost: 'Hosted fam trip' },
                    { source: 'Lonely Planet / Travel Africa mentions', diff: 'Hard', timeline: 'Month 5–8', cost: 'PR + content' },
                  ].map((l, i) => (
                    <div key={i} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                      <div><div className="font-medium text-sm text-gray-900">{l.source}</div><div className="text-xs text-gray-500 mt-0.5">{l.timeline} · {l.cost}</div></div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${l.diff === 'Easy' ? 'bg-green-100 text-green-700' : l.diff === 'Easy–Med' ? 'bg-lime-100 text-lime-700' : l.diff === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{l.diff}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">📍 Local SEO Plan</h3>
                <div className="space-y-3">
                  {[
                    ['Google Business Profile', ['Complete all sections: services, hours, attributes', 'Post 3×/week (wildlife, packages, tips)', 'Upload 100+ high-quality safari photos', 'Respond to all reviews within 24hrs', 'Enable messaging + Q&A']],
                    ['Review Generation', ['Post-safari email/SMS review request sequence', 'QR code card for Google reviews in vehicle', 'Train guides to invite reviews at trip end', 'Embed review widget on homepage']],
                    ['Local Citations', ['25 Kenya tourism directories Month 1', 'Nairobi business directories', 'Ensure NAP consistency across all platforms', 'Fix any incorrect Google Maps listings']],
                    ['Location Pages', ['JKIA office dedicated landing page', 'Masai Mara hub page (Kairi owns Rhino Camp)', '"Safari from Nairobi" destination guide', '"Near Oloolaimutia gate" local content']],
                  ].map(([title, items]) => (
                    <div key={title} className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-sm text-gray-900 mb-2">{title}</div>
                      <ul className="space-y-0.5">{items.map((item, i) => <li key={i} className="text-xs text-gray-700 pl-3 flex items-start gap-1"><span className="text-amber-600">→</span>{item}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Schema plan */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Structured Data Implementation Plan</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { type: 'LocalBusiness + TouristAttraction', p: 'URGENT', benefit: 'Local pack + knowledge panel', fields: 'Name, address, phone, hours, services, geo, JKIA location' },
                  { type: 'TourPackage', p: 'URGENT', benefit: 'Rich SERP results for packages', fields: 'Name, description, price, duration, includes, tourOperator' },
                  { type: 'FAQPage', p: 'High', benefit: 'Expandable FAQs + AI Overviews', fields: 'Q&A pairs for every destination & service page' },
                  { type: 'Review + AggregateRating', p: 'High', benefit: 'Star ratings in search results', fields: 'Rating value, review count from TripAdvisor' },
                  { type: 'LodgingBusiness (Rhino Camp)', p: 'High', benefit: 'Rich result for owned camp', fields: 'Location, price, amenities, check-in info' },
                  { type: 'Event (Great Migration)', p: 'Medium', benefit: 'Seasonal search visibility', fields: 'Event dates, location, description, offers' },
                ].map(s => (
                  <div key={s.type} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-900 text-sm">{s.type}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${s.p === 'URGENT' ? 'bg-red-100 text-red-700' : s.p === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}`}>{s.p}</span>
                    </div>
                    <p className="text-xs text-green-700 mb-1 font-medium">Benefit: {s.benefit}</p>
                    <p className="text-xs text-gray-600">Fields: {s.fields}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── ROADMAP ───────────────────────────────────────────────────────── */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">🗺️ 8-Month WordPress SEO Restructure — kairi.co.ke</h2>
              {roadmapPhases.map((phase, idx) => (
                <div key={idx} className="border-l-4 rounded-r-xl p-5 mb-6" style={{ borderColor: phase.border, background: `${phase.color}10` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-4 py-2 bg-white rounded-lg shadow-sm border" style={{ borderColor: phase.border }}>
                      <span className="font-bold text-gray-900 text-sm">{phase.label}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                  </div>
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <ul className="space-y-1.5">
                      {phase.tasks.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-600 font-bold mt-0.5">✓</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border" style={{ borderColor: phase.border }}>
                      <p className="text-xs text-gray-500 mb-1">Success Metrics</p>
                      <p className="text-sm font-semibold text-gray-900">{phase.kpi}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <p className="text-xs text-gray-500 mb-1">Budget Estimate</p>
                      <p className="text-sm font-semibold text-gray-900">{phase.budget}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-amber-700">Expected Outcomes</h3>
                <ul className="space-y-2">
                  {['Rank #1 for "budget safari Kenya"', 'Rank #1 for "last minute safari JKIA"', 'Top 3 for 20+ high-value keywords', '300–400% increase in organic traffic', 'Domain Authority increase to 35+', '150+ quality backlinks', 'Core Web Vitals PASSED (mobile & desktop)', 'PageSpeed 85–90/100', 'Online booking/enquiry system live'].map(o => (
                    <li key={o} className="flex items-start gap-2 text-sm text-gray-700">
                      <Award size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />{o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Investment Summary</h3>
                <ul className="space-y-2.5">
                  {[
                    ['Performance fixes', 'KES 15,000–25,000'],
                    ['Homepage redesign', 'KES 20,000–35,000'],
                    ['Package & destination pages', 'KES 15,000–25,000'],
                    ['Content creation (blog)', 'KES 18,000–28,000'],
                    ['Link building & PR', 'KES 20,000–35,000'],
                    ['Training & handover', 'KES 10,000–15,000'],
                  ].map(([label, val]) => (
                    <li key={label} className="flex justify-between text-sm">
                      <span className="text-gray-700">{label}</span>
                      <span className="font-semibold text-gray-900">{val}</span>
                    </li>
                  ))}
                  <li className="flex justify-between pt-3 border-t border-gray-200 font-bold">
                    <span>Total (8 months)</span>
                    <span className="text-amber-700">~KES 98,000–163,000</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">~$760–$1,260 USD. Scalable based on scope.</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-800">ROI Projection</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'New monthly organic leads (8-month target)', val: '150–300' },
                    { label: 'Avg. safari package value', val: '$400–$1,200' },
                    { label: 'Conversion rate (est.)', val: '10–15%' },
                  ].map(r => (
                    <li key={r.label} className="flex flex-col">
                      <span className="text-xs text-gray-600">{r.label}</span>
                      <span className="font-bold text-xl text-green-700">{r.val}</span>
                    </li>
                  ))}
                  <li className="flex flex-col pt-3 border-t border-green-300">
                    <span className="text-xs text-gray-600 font-bold">Potential monthly revenue uplift</span>
                    <span className="font-bold text-3xl text-green-700">$6K–$54K</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="text-xs text-green-900"><strong>Break even:</strong> Month 4–5. Conservative estimate: investment repaid 8–12× in first year of new traffic.</p>
                </div>
              </div>
            </div>

            {/* KPI tracking table */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Monthly KPI Tracking Dashboard</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-amber-50">
                    <tr>
                      {['Metric', 'Current', 'Month 2', 'Month 4', 'Month 6', 'Month 8'].map(h => (
                        <th key={h} className="px-4 py-3 text-center font-semibold first:text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      ['PageSpeed (Mobile)', '38', '75', '85', '88', '90'],
                      ['LCP (Mobile)', '7.4s', '4.0s', '2.8s', '2.3s', '2.1s'],
                      ['Core Web Vitals', 'FAILED ❌', 'Improving', 'PASSED ✅', 'PASSED ✅', 'PASSED ✅'],
                      ['Organic Traffic/mo', '~320', '600', '1,200', '2,800', '5,000'],
                      ['Keywords Top 10', '8', '30', '70', '130', '200'],
                      ['Referring Domains', '28', '45', '70', '105', '150'],
                      ['Domain Authority', '12', '16', '22', '30', '38'],
                      ['Enquiry Leads/mo', 'Low', '+30%', '+80%', '+150%', '+300%'],
                    ].map(([metric, ...vals]) => (
                      <tr key={metric} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{metric}</td>
                        <td className="px-4 py-3 text-center text-red-600 font-bold">{vals[0]}</td>
                        {vals.slice(1, 4).map((v, i) => <td key={i} className="px-4 py-3 text-center">{v}</td>)}
                        <td className="px-4 py-3 text-center text-green-600 font-bold">{vals[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KairiSEOAudit;