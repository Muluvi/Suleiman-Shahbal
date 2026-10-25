import React, { useState } from 'react';
import { Share2, Copy, Check, Download, MessageCircle, ExternalLink, Image } from 'lucide-react';

interface CardTemplate {
  id: string;
  topic: string;
  headline: string;
  statistic: string;
  statLabel: string;
  coreMessage: string;
  sourceCitation: string;
  hashtag: string;
}

export const ShareableCardGenerator: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string>('turnout');
  const [aspectRatio, setAspectRatio] = useState<'square' | 'landscape'>('square');
  const [copiedText, setCopiedText] = useState<boolean>(false);

  const cards: CardTemplate[] = [
    {
      id: 'turnout',
      topic: 'Electoral Mathematics',
      headline: 'The Decisive Majority Stayed Home in 2022',
      statistic: '66%',
      statLabel: '424,000 Registered Mombasa Voters Abstained in 2022',
      coreMessage: 'Mombasa does not need political squabbling. It needs economic leadership that gives our youth a reason to turn out and vote.',
      sourceCitation: 'Source: Official IEBC Gubernatorial Declaration, August 29, 2022.',
      hashtag: '#MombasaMpya #Shahbal2027'
    },
    {
      id: 'license',
      topic: 'Mama Mboga & Trader Dignity',
      headline: 'End Askari Harassment with One Unified License',
      statistic: 'KES 28k',
      statLabel: 'Average Annual Savings per Kongowea & Open Market Stall',
      coreMessage: 'Replace five overlapping daily permits with one single digital license. Zero daily cash collection, 24/7 security, and clean sanitation.',
      sourceCitation: 'Source: Firefly SME Regulatory Analysis / Mombasa CIDP 2023-2027.',
      hashtag: '#HeshimaKazini #MamaMbogaMombasa'
    },
    {
      id: 'housing',
      topic: 'Proven Urban Delivery',
      headline: 'From 1950s Squalor to Modern Titled Homes',
      statistic: '1,800+',
      statLabel: 'Affordable Apartments Delivered at Buxton Point Phase 1',
      coreMessage: 'Leadership measurable by tangible concrete execution. Proven track record of upgrading municipal estates while protecting local residents.',
      sourceCitation: 'Source: GulfCap Real Estate / State Dept for Housing Handover.',
      hashtag: '#UongoziWaVitendo #RekodiInaongea'
    },
    {
      id: 'port_jobs',
      topic: 'Blue Economy & Industrialization',
      headline: 'Restoring Maritime Jobs to Mombasa Youth',
      statistic: '15,000',
      statLabel: 'Projected Direct & Logistics Jobs at Jomvu Special Economic Zone',
      coreMessage: 'Reclaiming value-addition at the Port of Mombasa through international capital partnerships with DP World and TradeMark Africa.',
      sourceCitation: 'Source: Kenya Ministry of Investments, Trade & Industry (MITI).',
      hashtag: '#BandariYetuFaidaYetu #UchumiImara'
    }
  ];

  const currentCard = cards.find((c) => c.id === selectedCardId) || cards[0];

  const handleCopyShareText = () => {
    const textToCopy = `*${currentCard.headline}*\n\n📊 *${currentCard.statistic}* — ${currentCard.statLabel}\n\n"${currentCard.coreMessage}"\n\n📌 _${currentCard.sourceCitation}_\n\n🔗 Read the full independent strategy proposal: https://mombasa2027.firefly.ke\n\n${currentCard.hashtag}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2200);
  };

  const handleWhatsAppShare = () => {
    const textToShare = encodeURIComponent(
      `*${currentCard.headline}*\n\n📊 *${currentCard.statistic}* — ${currentCard.statLabel}\n\n"${currentCard.coreMessage}"\n\n📌 _${currentCard.sourceCitation}_\n\n${currentCard.hashtag}`
    );
    window.open(`https://api.whatsapp.com/send?text=${textToShare}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block">
            Visual Storytelling · Visual Guide §6.5 &amp; §12.1 (Shareable WhatsApp &amp; Social Cards)
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
            High-Contrast WhatsApp &amp; Social Cards Built for Viral P2P Forwarding
          </h3>
          <p className="text-xs text-neutral-600 mt-0.5">
            Format 1:1 square and 16:9 landscape cards carrying verifiable quotes, Swahili soundbites, and direct campaign links.
          </p>
        </div>

        {/* Aspect Ratio Switch */}
        <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg text-xs font-medium">
          <button
            onClick={() => setAspectRatio('square')}
            className={`px-3 py-1 rounded-md transition-colors ${
              aspectRatio === 'square' ? 'bg-white text-neutral-950 shadow-xs font-semibold' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Square (1:1 / WhatsApp)
          </button>
          <button
            onClick={() => setAspectRatio('landscape')}
            className={`px-3 py-1 rounded-md transition-colors ${
              aspectRatio === 'landscape' ? 'bg-white text-neutral-950 shadow-xs font-semibold' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Landscape (16:9 / X &amp; OG)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Template Selector & Actions (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <label className="text-xs font-bold text-neutral-700 uppercase block font-mono">
            Select Campaign Topic:
          </label>
          <div className="space-y-2">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => setSelectedCardId(card.id)}
                className={`w-full p-3 rounded-lg border text-left transition-colors flex items-center justify-between ${
                  selectedCardId === card.id
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                <div>
                  <span className={`text-xs font-mono font-bold block ${selectedCardId === card.id ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {card.topic}
                  </span>
                  <span className="text-xs font-bold block mt-0.5">{card.headline}</span>
                </div>
                <span className="text-sm font-mono font-extrabold ml-2 shrink-0">{card.statistic}</span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2">
            <button
              onClick={handleWhatsAppShare}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share Direct to WhatsApp</span>
            </button>

            <button
              onClick={handleCopyShareText}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-semibold transition-colors border border-neutral-200"
            >
              {copiedText ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedText ? 'Formatted Text Copied!' : 'Copy Formatted WhatsApp Text'}</span>
            </button>
          </div>
        </div>

        {/* Right: Real-Time Rendered Visual Card (7 cols) */}
        <div className="lg:col-span-7 flex justify-center">
          <div
            className={`w-full max-w-md bg-neutral-950 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative border border-neutral-800 ${
              aspectRatio === 'square' ? 'aspect-square' : 'aspect-16/9 min-h-[300px]'
            }`}
          >
            {/* Top Bar of Card */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                Firefly Strategy Brief · Mombasa 2027
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {currentCard.topic}
              </span>
            </div>

            {/* Central Stat & Message */}
            <div className="space-y-3 my-auto py-2">
              <span className="text-4xl sm:text-5xl font-black font-mono text-amber-400 tabular-nums block leading-none">
                {currentCard.statistic}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                {currentCard.statLabel}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                "{currentCard.coreMessage}"
              </p>
            </div>

            {/* Card Footer with Brand, Web Address, and Source (§6.5 & §15) */}
            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
              <div className="flex items-center gap-1.5 truncate max-w-[220px]">
                <span className="text-amber-400 font-bold">Firefly Strategy</span>
                <span>·</span>
                <span className="text-slate-300">mombasa2027.firefly.ke</span>
              </div>
              <span className="font-bold text-white shrink-0">{currentCard.hashtag.split(' ')[0]}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
