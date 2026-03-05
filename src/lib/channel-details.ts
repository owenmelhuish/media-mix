export interface PhaseDetail {
  phase: string;
  kpis: string;
  approach: string[];
  timing: string[];
  creative: string[];
  placement: string[];
  targetMix: string[];
  estimates: {
    netBudget: string;
    rows: { label: string; estimate: string; benchmark: string }[];
  };
}

export interface ChannelDetail {
  id: string;
  phaseDetails: PhaseDetail[];
}

export const channelDetails: Record<string, ChannelDetail> = {
  "linear-tv": {
    id: "linear-tv",
    phaseDetails: [
      {
        phase: "Phase 2 & 3",
        kpis: "Primary: Reach / Impressions",
        approach: [
          "Lean into male skewing networks, dayparts and programming (Sports, Movies, Animated, Late Night)",
          "Ramp up frequency as we approach release date",
          "Frequency building by retargeting viewers that saw our linear TV ad (ACR retargeting) and other viewers that have seen our streaming ads. Introduce this retargeting 2 weeks prior to release",
        ],
        timing: [
          "Phase 2: 4/6 – 4/19",
          "Phase 3: 4/20 – 5/3 (Introduce 15s week of 4/27)",
        ],
        creative: ["30-second commercial", "15-second commercial"],
        placement: [
          "Broadcast Networks: ABC, CBS, FOX, NBC",
          "Cable Networks: A&E, Adult Swim, AMC, Comedy Central, Discovery, ESPN, FS1, FX, History, NFL Network, Paramount, Syfy, TBS, TNT, USA",
        ],
        targetMix: [
          "Demo: M25 – 54",
          "Schedule will include networks and programming that reach our behavioral insights:",
          "Sports",
          "Entertainment Seekers",
          "Movie Goers/Thriller + Action Movie Interests",
        ],
        estimates: {
          netBudget: "$3,612,500",
          rows: [
            { label: "A25-54 Imps", estimate: "104,608,000", benchmark: "$34.53 CPM" },
            { label: "M25-54 Imps", estimate: "65,106,000", benchmark: "$55.49 CPM" },
            { label: "P2+ Imps", estimate: "315,660,000", benchmark: "$11.44 CPM" },
          ],
        },
      },
    ],
  },
  streaming: {
    id: "streaming",
    phaseDetails: [
      {
        phase: "Phase 2 & 3",
        kpis: "Primary: Video Completion Rate",
        approach: [
          "Strategically use streaming to accomplish 3 objectives:",
          "Generate incremental reach of users not captured with our TV schedule",
          "Frequency building by retargeting viewers that saw our linear TV ad (ACR retargeting) and other viewers that have seen our streaming ads. Introduce this retargeting 2 weeks prior to release",
        ],
        timing: [
          "Phase 2: Incremental reach: 4/6 – 5/3",
          "Phase 3: Retargeting/Frequency: 4/20 – 5/3",
        ],
        creative: ["Video: 30-second", "Video: 15-second"],
        placement: [
          "TV extension streamers: Peacock, Paramount+, Max, Disney+/Hulu",
          "Digital native streamers: Prime Video, Netflix",
        ],
        targetMix: [
          "Audience Targeting: Movie Goers AND /Thriller + Action Movie Interests",
          "Sports (UFC, Live Soccer)",
          "Retargeting Video View Watchers",
        ],
        estimates: {
          netBudget: "$1,785,850",
          rows: [
            { label: "Impressions", estimate: "64,797,380", benchmark: "$27.56 CPM" },
            { label: "Completed Views/VCR", estimate: "61,557,511", benchmark: "95%+" },
          ],
        },
      },
    ],
  },
  ooh: {
    id: "ooh",
    phaseDetails: [
      {
        phase: "Phase 2 & 3",
        kpis: "Primary: Impressions / Reach",
        approach: [
          "Use a mix of high impact and efficient OOH placements to drive mass reach",
          "Leverage street level placements such as wildpostings, bus media, and station dominations as well as larger than life wallscapes and spectaculars",
          "Balance high impact + high-traffic reach + audience targeting (film lovers + trendsetters)",
        ],
        timing: [
          "Phase 2: 4/6 – 4/19",
          "Phase 3: 4/20 – 5/3",
        ],
        creative: ["Various sizes", "Opportunity to leverage 3D extensions on bulletins"],
        placement: [
          "NY: Station Dominations, Walls and Spectaculars, Bulletins (Static and Digital), Bus Media, Wildpostings",
          "NY Areas of Interest: Broadway (Midtown/SoHo), Penn Station, Grand Central Terminal, Union Square, Brooklyn (Williamsburg, DUMBO)",
          "LA: Walls and Spectaculars, Bulletins (Static and Digital), Bus Media, Wildpostings",
          "LA Areas of Interest: Sunset Strip, Santa Monica, Venice, Culver City, Westwood, Silverlake, Hollywood, Downtown",
        ],
        targetMix: [
          "Fans of survival thrillers",
          "Action Fans",
          "Fans of cast",
        ],
        estimates: {
          netBudget: "$935,000",
          rows: [
            { label: "Total Imps", estimate: "187,000,000", benchmark: "$5.00 CPM" },
            { label: "Digital Board Imps", estimate: "62,300,000", benchmark: "$8.50 CPM" },
            { label: "Static Imps", estimate: "124,700,000", benchmark: "$3.25 CPM" },
          ],
        },
      },
    ],
  },
  social: {
    id: "social",
    phaseDetails: [
      {
        phase: "Phase 1",
        kpis: "Meta Primary: CPCV + VCR\nTikTok Primary: Cost Per View (CPV)",
        approach: [
          "Meta: Focus on high performing video placements to drive cost-efficient CPCVs to maximize reach and awareness for Deep Water",
          "Meta: Utilize :15s cutdowns to drive higher video completes and effectively capture the user's attention. :15s will build a strong engaged audience to retarget in Phase 3",
          "Meta: Ensure a healthy mix of Instagram and Facebook placements to reach users across both social channels",
          "TikTok: Campaign will optimize towards 6s Video View (15s if available) towards all audience cohorts on TikTok Feed to deliver efficient CPVs and reach the audience",
          "TikTok: Have a mix of :30s and :15s cutdowns to provide different messaging and test out performance",
          "TikTok: Build high views to utilize for Phase 3 as a retargeting tactic to build upon frequency",
          "Pixel placement is required on Deep Water's landing page",
        ],
        timing: ["3/23 – 4/5"],
        creative: [
          "Meta: Trailer Cutdowns – 3x–4x :15s Cutdowns (Dimensions: 4x5, 9x16, 16x9)",
          "TikTok: Trailer Cutdowns – 2x–3x :30s, 3x–4x :15s (Dimensions: 9x16)",
        ],
        placement: [
          "Instagram: Feed, Stories, Reels, Profile Feed, Profile Reels, Search, Explore, & Explore Home",
          "Facebook: Feed, Stories, Reels, Profile Feed, Profile Reels, Search, & Instream",
          "TikTok Feed",
        ],
        targetMix: [
          "Demo: M/F 25 – 54",
          "All Cohorts",
        ],
        estimates: {
          netBudget: "$119,000",
          rows: [
            { label: "Meta Imps", estimate: "7,437,500", benchmark: "$8.00 CPM" },
            { label: "Meta Views", estimate: "2,975,000", benchmark: "$0.02 CPCV" },
            { label: "TikTok Imps", estimate: "9,916,667", benchmark: "$6.00 CPM" },
            { label: "TikTok Views", estimate: "2,975,000", benchmark: "$0.02 CPCV" },
          ],
        },
      },
      {
        phase: "Phase 2 & 3",
        kpis: "Phase 2 & 3 Primary: Reach and Frequency (CPM)",
        approach: [
          "Meta Phase 2: Prioritize maximizing reach utilizing :15s videos across the same placements to continue building frequency within Facebook and Instagram. Can include shorter form content",
          "Meta Phase 3: Introduce :6s & :10s Cutdowns through Retargeting Video View Watchers 2 weeks before release to increase frequency. Creatives should focus on highlighting the movie release / tickets available",
          "TikTok Phase 2: Reach campaign will layer in to further drive reach and awareness building frequency. Continue serving the main cohorts",
          "TikTok Phase 3: Introduce TopView – TikTok's most premium placement, the first impression a user will see when opening the app. 24-hour visibility guaranteeing high-impact, full-screen, sound-on video",
          "TikTok Phase 3: Introduce Retargeting towards Reach campaign with :10s and :6s cutdowns to build frequency",
          "Reddit Phase 2: Serve ads across highly relevant Subreddits such as r/thalassophobia, r/megalophobia, r/sharks, r/TheDepthsBelow, r/marvelstudios, r/WonderMan",
          "Reddit Phase 3: Introduce :6s and :10s Cutdowns to provide a different mix of length and continue building frequency prior to launch",
        ],
        timing: [
          "Phase 2: 4/6 – 4/19",
          "Phase 3: 4/20 – 5/3",
          "TikTok TopView: 5/1",
        ],
        creative: [
          "Meta Phase 2: 3x–4x :15s Cutdowns (Dimensions: 4x5, 9x16, 16x9)",
          "Meta Phase 3: 2x-3x :15s, 2x–3x :10s, 2x–3x :6s (Dimensions: 4x5, 9x16, 16x9)",
          "TikTok Phase 2: 3x–4x :15s Cutdowns (Dimensions: 9x16)",
          "TikTok Phase 3: 1x :3s TopView Video, 2x–3x :15s, 2x–3x :6s, 2x–3x :10s (Dimensions: 9x16)",
          "Reddit: 2x–3x :15s, 2x–3x :10s, 2x–3x :6s (Dimensions: 4x5 preferred or 16x9)",
        ],
        placement: [
          "Instagram: Feed, Stories, Reels, Profile Feed, Profile Reels, Search, Explore, & Explore Home",
          "Facebook: Feed, Stories, Reels, Profile Feed, Profile Reels, Search, & Instream",
          "TikTok Feed",
          "Reddit Feed",
        ],
        targetMix: [
          "Demo: M/F 25 – 54",
          "All Cohorts",
          "Retargeting Video View Watchers and Post Engagers",
          "Reddit Subreddits: r/thalassophobia, r/megalophobia, r/sharks, r/TheDepthsBelow, r/marvelstudios, r/WonderMan",
          "Reddit Keywords: Thalassophobia, thriller movies, action movies, Ben Kingsley, Aaron Eckhart, Li Wenham",
        ],
        estimates: {
          netBudget: "$955,087",
          rows: [
            { label: "Meta Imps", estimate: "104,833,333", benchmark: "$3.00 CPM" },
            { label: "Meta Reach", estimate: "10,483,333", benchmark: "10x+" },
            { label: "TikTok TopView Imps", estimate: "30,464,000", benchmark: "$12.31 CPM" },
            { label: "TikTok Reach Imps", estimate: "53,471,800", benchmark: "$4.00 CPM" },
            { label: "Reddit Imps", estimate: "9,272,727", benchmark: "$5.50 CPM" },
            { label: "Reddit Reach", estimate: "3,090,909", benchmark: "3x+" },
          ],
        },
      },
      {
        phase: "Phase 4",
        kpis: "Primary: Click Through Rate (CTR)",
        approach: [
          "Meta: Bring Deep Water back to the forefront for people who have engaged with Phase 1–3 content to drive traffic for PVOD",
          "Meta: Direct people to Deep Water's landing page showcasing options of where to buy, rent or stream",
          "Meta: Include main audience to expand reach and drive further traffic to the site",
          "TikTok: Support PVOD through directing traffic to Deep Water's landing page capturing users' attention through different video lengths",
          "TikTok: Continue utilizing audiences from previous phases and Retargeting Post Engagers and Video Watchers to bring Deep Water back on their mind",
        ],
        timing: ["6/15 – 6/28"],
        creative: [
          "Meta: 2x :15s Video, 2x :10s Video, 2x :6s Video",
          "TikTok: 2x :15s Video, 2x :10s Video, 2x :6s Video",
        ],
        placement: [
          "Instagram: Feed, Stories, Reels, Profile Feed, Profile Reels, Search, Explore, & Explore Home",
          "Facebook: Feed, Stories, Reels, Profile Feed, Profile Reels, Search, & Instream",
          "TikTok Feed",
        ],
        targetMix: [
          "Demo: M/F 25 – 54",
          "Movie Goers/Thriller + Action Movie Interests",
          "Sport Fans",
          "Retargeting Video View Watchers",
          "Retargeting Post Engagers",
        ],
        estimates: {
          netBudget: "$93,925",
          rows: [
            { label: "Meta Imps", estimate: "5,713,889", benchmark: "$9.00 CPM" },
            { label: "Meta Clicks", estimate: "68,567", benchmark: "1.2% – 1.5% CTR" },
            { label: "TikTok Imps", estimate: "4,722,222", benchmark: "$9.00 CPM" },
            { label: "TikTok Clicks", estimate: "33,056", benchmark: "0.5% – 1% CTR" },
          ],
        },
      },
    ],
  },
  direct: {
    id: "direct",
    phaseDetails: [
      {
        phase: "IMDb",
        kpis: "Primary: Click Through Rate",
        approach: [
          "Utilize high impact units on IMDB.com during phase 3 to create impact and influence the decision making process for movie ticket purchases",
        ],
        timing: ["Showtimes takeover week of 4/20"],
        creative: ["Video", "Display"],
        placement: [
          "Showtimes takeover week of 4/20: Unit close to point of sale, 100% SOV. Includes ROS inventory to amplify presence",
        ],
        targetMix: [
          "Genre: Action Thriller fans",
          "Lookalike",
          "Retargeting",
        ],
        estimates: {
          netBudget: "$216,000",
          rows: [
            { label: "Impressions", estimate: "18,000,000", benchmark: "CPM: $12" },
            { label: "CTR", estimate: "0.05% – 0.07%", benchmark: "—" },
          ],
        },
      },
      {
        phase: "Fandango",
        kpis: "Primary: Click Through Rate, Video Completion Rate\nMeasure sales with pixel on site",
        approach: [
          "Utilize a range of ad units across Fandango, Rotten Tomatoes, and Regal sites/apps to capture consumers close to the point of purchase",
        ],
        timing: [
          "Rotten Tomatoes Native App sponsorship: 4/27 – 5/3",
          "Fandango Network Pre-roll: 4/20 – 5/3",
          "Mobile Interstitial/Interscroller: 4/20 – 5/3",
          "Regal App Launch Unit & HP banner: 4/27 – 5/3",
        ],
        creative: ["Banners, :15 video, custom sizes"],
        placement: [
          "Rotten Tomatoes Native App sponsorship – Pre-roll, launch unit (50% SOV), sponsor card, HP flex card, interstitial, Discover skin/header (100% SOV), banners, background",
          "Fandango Network Pre-roll – Fandango, Fandango at Home, Rotten Tomatoes, RT YouTube channel",
          "Mobile Interstitial/Interscroller (Fandango, Rotten Tomatoes)",
          "Regal App Launch Unit & HP banner",
        ],
        targetMix: [
          "Moviegoers = Action Thriller fans",
        ],
        estimates: {
          netBudget: "$260,000",
          rows: [
            { label: "Impressions", estimate: "14,300,000", benchmark: "CPM: $18" },
            { label: "CTR", estimate: "0.5% – 0.15%", benchmark: "VCR: 73%" },
          ],
        },
      },
      {
        phase: "Fandom",
        kpis: "Click Through Rate (For takeovers), Video Completion Rate (video)",
        approach: [
          "Leverage key publication that reaches entertainment enthusiasts and fans to seed trailer, build Deep Water Communities, drive awareness and generate ticket sales",
          "Use Fandom's premier high impact units to reach fan communities, verticals that align with our audience",
          "Amplify trailer and capture attention with non-skippable pre-roll with a highly engaged audience",
        ],
        timing: [
          "Entertainment First Impression Takeover: P3 – 5/1",
          "Video trailer distribution: P1",
          "Rotational Cross Platform Takeovers: P1 & P2",
          "Deep Water Community Build Page: P2",
          "Featured Pre-roll Video: P1 & P2",
          "Social Post: P2",
        ],
        creative: [
          "Skybox: 1600x400, 1600x160, 640x360, 640x213, MP4",
          "300x600, 300x250, 320x50, 320x100",
          "Pre-roll: :06 & :15 video",
        ],
        placement: [
          "Entertainment First Impression Takeover (P3 – 5/1)",
          "Video trailer distribution (P1)",
          "Rotational Cross Platform Takeovers – includes auto-play video and companion units (P1 & P2)",
          "Deep Water Community Build Page (P2)",
          "Featured Pre-roll Video (P1 & P2)",
          "Social Post (P2)",
        ],
        targetMix: [
          "Fans of survival thrillers",
          "Action Fans",
          "Fans of cast",
        ],
        estimates: {
          netBudget: "$150,000",
          rows: [
            { label: "Impressions", estimate: "10,688,889", benchmark: "CPM: $14.03" },
            { label: "CTR", estimate: "0.20%", benchmark: "VCR: 50%" },
          ],
        },
      },
    ],
  },
  youtube: {
    id: "youtube",
    phaseDetails: [
      {
        phase: "Phase 1",
        kpis: "Primary: CPCV + VCR",
        approach: [
          "Skippable / Unskippable mix to maximize completed views",
          "YouTube Shorts for mobile-first vertical video reach",
          "Contextual targeting aligned with action, thriller, and sports content",
          "Build early awareness and capture intent from trailer launches",
        ],
        timing: ["3/23 – 4/5"],
        creative: [
          "Promotional Videos: 2x – 3x :30s Cutdowns (Dimensions: 16x9, 9x16, Unlisted Links)",
          "YouTube Shorts: 3x – 4x :15s Cutdowns (Dimensions: 9x16)",
        ],
        placement: [
          "Instream (Skippable)",
          "Instream (Non-Skippable)",
          "YouTube Shorts",
        ],
        targetMix: [
          "Demo: M/F 25 – 54",
          "Movie Goers / Thriller + Action Interests",
          "Contextual Targeting",
        ],
        estimates: {
          netBudget: "$73,738",
          rows: [
            { label: "Skippable Imps", estimate: "6,500,000", benchmark: "$8.53 CPM" },
            { label: "Skippable Views", estimate: "2,770,000", benchmark: "$0.02 CPCV" },
            { label: "Non-Skip Imps", estimate: "1,200,000", benchmark: "$15.23 CPM" },
            { label: "Non-Skip Views", estimate: "913,000", benchmark: "76% VCR" },
          ],
        },
      },
      {
        phase: "Phase 2 & 3",
        kpis: "Primary: Reach and Frequency (CPM)",
        approach: [
          "Phase 2: Reach campaign will focus on the main audience of Movie Goers, Sports Fans, Super Fans and Contextual Targeting to continue building frequency. Reach will launch 100% Skippable to keep costs low while maintaining effective performance",
          "Phase 3 – Masthead: Premium, high-visibility video ad that appears at the very top of the YouTube homepage across desktop, mobile, and TV screens. Run this 1 or 2 days leading to the 5/1 (priority day) to boost visibility on YouTube utilizing their premium content to drive reach and awareness",
          "Phase 3 – Reach: Campaign will continue and launch the retargeting tactic to build upon frequency. :6s Bumper Spots are Unskippable units due to their short length. They should focus on movie release/ability to purchase tickets",
        ],
        timing: [
          "Reach Campaign: 4/6 – 4/19",
          "Reach Campaign: 4/20 – 5/1",
          "Masthead: Week of Movie Release – dependent on avails",
        ],
        creative: [
          "Promotional Videos: 2x – 3x :30s Cutdowns, 3x – 4x :15s Cutdowns (Dimensions: 16x9, 9x16, Unlisted Links)",
          "Phase 3 Promotional Videos: 3x – 4x :15s, 3x – 4x :6s (Dimensions: 16x9, 9x16, Unlisted Links)",
        ],
        placement: [
          "Instream (Skippable)",
          "YouTube Shorts",
        ],
        targetMix: [
          "Demo: M/F 25 – 54",
          "All Cohorts",
          "Contextual Targeting",
          "Retargeting Video Viewers",
        ],
        estimates: {
          netBudget: "$467,500",
          rows: [
            { label: "Masthead Imps", estimate: "11,888,112", benchmark: "$14.30 CPM" },
            { label: "Masthead Reach", estimate: "4,755,244", benchmark: "2x – 3x" },
            { label: "Skippable Imps", estimate: "54,090,909", benchmark: "$5.50 CPM" },
            { label: "Skippable Reach", estimate: "5,409,090", benchmark: "10x+" },
          ],
        },
      },
      {
        phase: "Phase 4",
        kpis: "Primary: Click Through Rate (CTR)",
        approach: [
          "Traffic campaign focused on driving clicks to PVOD rental/purchase pages",
          "Retarget users who viewed trailer or engaged with prior YouTube ads",
          "Remove TV placements and focus budget on digital-native formats",
          "Sitelink extensions to streaming/rental platforms for direct conversion",
        ],
        timing: ["6/15 – 6/28"],
        creative: [
          "Promotional Videos: 3x – 4x :15s Cutdowns (Dimensions: 16x9, 9x16, Unlisted Links)",
          ":6s Bumper Spots focused on PVOD availability messaging",
        ],
        placement: [
          "Instream (Skippable)",
          "YouTube Shorts",
          "Discovery Ads",
        ],
        targetMix: [
          "Retargeting: Prior video viewers + engagers",
          "Demo: M/F 25 – 54",
          "Interest: Movie Goers, Streaming Enthusiasts",
        ],
        estimates: {
          netBudget: "$37,400",
          rows: [
            { label: "Impressions", estimate: "3,400,000", benchmark: "$11.00 CPM" },
            { label: "Clicks", estimate: "11,900", benchmark: "$3.14 CPC" },
            { label: "CTR", estimate: "0.35%", benchmark: "0.25% – 0.40%" },
          ],
        },
      },
    ],
  },
  ctv: {
    id: "ctv",
    phaseDetails: [
      {
        phase: "Phase 1–4",
        kpis: "Primary: Click Through Rate (CTR)\nSecondary: Reach / Impressions / CPM",
        approach: [
          "Use LG CTVs homepage to drive video views during phase 1",
          "Generate excitement and awareness of the release date. Use QR code to drive ticket sales during phase 2",
        ],
        timing: [
          "Phase 1: Drive trailer views on the LG homescreen via a deeplink to YouTube (3/2–3/29)",
          "Phase 2/3: Use home screen carousel and include a countdown clock & ticket link QR code leading up to the release",
          "Phase 4: PVOD support",
        ],
        creative: ["Carousel: 1629x420", "Recommendation: 300x250", "Inline Banner: 1770x221"],
        placement: [
          "LG Ad Solutions – High Impact on the LG TV Homepage",
        ],
        targetMix: [
          "1P ACR: 1P Survival Thriller Fans OR 1P Action Fans OR 1P Blockbuster / Commercial Film Fans OR 1P Survival Thriller OR Action Fans",
          "3P Frequent Moviegoers",
        ],
        estimates: {
          netBudget: "$87,500",
          rows: [
            { label: "Impressions", estimate: "4,975,430", benchmark: "CPM: $17.59" },
            { label: "CTR", estimate: "0.11%", benchmark: "Estimated SOV: 3%" },
          ],
        },
      },
    ],
  },
  search: {
    id: "search",
    phaseDetails: [
      {
        phase: "Phase 1",
        kpis: "Primary: Impression\nSecondary: Click Through Rate (CTR)",
        approach: [
          "Search will focus strongly on Branded Keywords to capture users interested in Deep Water from other media channels sparking action",
          "Branded Keywords will optimize towards Target Impression Share to get Search Ads on top of the fold to promote the movie",
          "Branded will ensure to catch Deep Water, Deep Water 2022 searches to showcase Deep Water 2026's movie release and capture user's attention",
          "Branded provides high-intent and highest cost-efficiencies",
          "Nonbranded Keywords will optimize towards Maximum Clicks, driving traffic to the custom Deep Water landing page for users to gain more information",
          "Pixel placement is required on Deep Water's landing page",
        ],
        timing: ["3/23 – 4/5"],
        creative: [
          "Headlines: 3 to 15 (max 30 characters each)",
          "Descriptions: 2 to 4 (max 90 characters each)",
          "Call to Action",
          "Landing Page Link",
        ],
        placement: ["Search"],
        targetMix: [
          "Branded and Nonbranded Keywords",
          "Keyword List",
        ],
        estimates: {
          netBudget: "$46,750",
          rows: [
            { label: "Target Imps Share – Imps", estimate: "187,000", benchmark: "$200 CPM" },
            { label: "Target Imps Share – Clicks", estimate: "37,400", benchmark: "20% – 25% CTR" },
            { label: "Max Clicks – Imps", estimate: "116,875", benchmark: "$80 CPM" },
            { label: "Max Clicks – Clicks", estimate: "5,843", benchmark: "5% CTR" },
          ],
        },
      },
      {
        phase: "Phase 2 & 3",
        kpis: "Phase 2 & 3 Primary: Impressions\nPhase 2 & 3 Secondary: Click Through Rate (CTR)",
        approach: [
          "Phase 2: Search will continue focusing on driving Impressions and Clicks across Branded and Nonbranded content similar to Phase 1. Ensured Deep Water stays atop the fold and captures user's intent",
          "Phase 3: Branded Search will introduce Showtimes and Ticket specific keywords to capture high intent users while serving Deep Water's Search ads on top of the fold",
          "Ensure ad has proper site links to direct them to ticket purchase sites such as Fandango",
          "Branded will continue to take majority of the budget to ensure Deep Water's ads are reaching relevant users",
          "Nonbrand will also introduce Showtimes and Ticket but for generic inquiries to interest people to click on Deep Water's site",
        ],
        timing: [
          "Phase 2: 4/6 – 4/19",
          "Phase 3: 4/20 – 5/3",
        ],
        creative: [
          "Headlines: 3 to 15 (max 30 characters each)",
          "Descriptions: 2 to 4 (max 90 characters each)",
          "Call to Action",
          "Landing Page Link",
        ],
        placement: ["Search"],
        targetMix: [
          "Branded and Nonbranded Keywords",
          "Keyword List",
          "Retargeting Search Ads",
        ],
        estimates: {
          netBudget: "$188,275",
          rows: [
            { label: "Target Imps Share – Imps", estimate: "753,100", benchmark: "$200 CPM" },
            { label: "Target Imps Share – Clicks", estimate: "150,620", benchmark: "20% – 25% CTR" },
            { label: "Max Clicks – Imps", estimate: "470,688", benchmark: "$80 CPM" },
            { label: "Max Clicks – Clicks", estimate: "23,534", benchmark: "5% CTR" },
          ],
        },
      },
      {
        phase: "Phase 4",
        kpis: "Primary: Click Through Rate (CTR)",
        approach: [
          "Shift focus to Maximum Clicks across Branded and Nonbranded to drive strong traffic to site with majority of budget still focused on Branded to ensure the audience's attention is captured",
          "Branded has the strongest CTRs due to higher intent searches compared to Nonbrand",
          "Nonbrand will support any user searching for new movie releases to rent, buy, or stream and have Deep Water as a contender to consider",
          "Sitelink to any streaming or rental sites to provide the option for users to directly go versus to the landing page first",
        ],
        timing: ["6/15 – 6/28"],
        creative: [
          "Headlines: 3 to 15 (max 30 characters each)",
          "Descriptions: 2 to 4 (max 90 characters each)",
          "Call to Action",
          "Landing Page Link",
        ],
        placement: ["Search"],
        targetMix: [
          "Branded and Nonbranded Keywords",
          "Keyword List",
          "Retargeting Search Ads",
        ],
        estimates: {
          netBudget: "$34,000",
          rows: [
            { label: "Branded Max Clicks – Imps", estimate: "113,333", benchmark: "$200 CPM" },
            { label: "Branded Max Clicks – Clicks", estimate: "28,333", benchmark: "25% CTR" },
            { label: "Nonbranded Max Clicks – Imps", estimate: "104,615", benchmark: "$65 CPM" },
            { label: "Nonbranded Max Clicks – Clicks", estimate: "5,231", benchmark: "5% CTR" },
          ],
        },
      },
    ],
  },
};
