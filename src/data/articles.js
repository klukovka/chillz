export const ARTICLE_ALL = "all";
export const ARTICLE_CATEGORY_AUDIENCE_GROWTH = "audience-growth";
export const ARTICLE_CATEGORY_CONTENT_CREATION = "content-creation";
export const ARTICLE_CATEGORY_SOCIAL_MEDIA = "social-media";
export const ARTICLE_CATEGORY_SEO = "seo";
export const ARTICLE_CATEGORY_ANALYTICS = "analytics";
export const ARTICLE_CATEGORY_MONETIZATION = "monetization";

export const ARTICLE_CATEGORIES = [
  ARTICLE_ALL,
  ARTICLE_CATEGORY_AUDIENCE_GROWTH,
  ARTICLE_CATEGORY_CONTENT_CREATION,
  ARTICLE_CATEGORY_SOCIAL_MEDIA,
  ARTICLE_CATEGORY_SEO,
  ARTICLE_CATEGORY_ANALYTICS,
  ARTICLE_CATEGORY_MONETIZATION,
];

export const ARTICLES = [
  {
    id: 50,
    title: "How AI Can Revolutionize Your Content Strategy",
    shortDescription:
      "Leverage artificial intelligence to create engaging content and grow your audience faster than ever before.",
    date: new Date(2025, 2, 11), // March 11, 2025
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/36aa83c8-a6b5-4415-b7ff-ecc1fd47c213/modern-ai-content.jpg",
    readingTime: 9,
    author: "Polina Arbuzova",
    trending: true,
    content: [
      {
        title: "Embracing AI for Content Creation",
        description:
          "Artificial intelligence tools can help you create more content in less time, allowing you to focus on strategy and audience engagement rather than production details.",
      },
      {
        title: "Embracing AI for Content Creation",
        description:
          "Artificial intelligence tools can help you create more content in less time, allowing you to focus on strategy and audience engagement rather than production details.",
      },
      {
        title: "Embracing AI for Content Creation",
        description:
          "Artificial intelligence tools can help you create more content in less time, allowing you to focus on strategy and audience engagement rather than production details.",
      },
      {
        title: "Embracing AI for Content Creation",
        description:
          "Artificial intelligence tools can help you create more content in less time, allowing you to focus on strategy and audience engagement rather than production details.",
      },
      {
        title: "Embracing AI for Content Creation",
        description:
          "Artificial intelligence tools can help you create more content in less time, allowing you to focus on strategy and audience engagement rather than production details.",
      },
    ],
  },
  {
    id: 49,
    title: "5 Proven Email Marketing Tactics for 2025",
    shortDescription:
      "Email remains one of the most effective channels. Learn how to optimize your campaigns for maximum engagement.",
    date: new Date(2025, 2, 10),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/36aa83c8-a6b5-4415-b7ff-ecc1fd47c213/modern-ai-content.jpg",
    readingTime: 11,
    author: "Marcus Chen",
    trending: true,
    content: [
      {
        title: "Personalization at Scale",
        description:
          "Modern email platforms allow for incredible personalization that goes beyond just using the recipient's name. Learn how to segment your audience effectively.",
      },
    ],
  },
  {
    id: 48,
    title: "The Psychology Behind Viral Content",
    shortDescription:
      "Understanding what makes content spread can help you design more shareable posts and articles.",
    date: new Date(2025, 2, 9),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/36aa83c8-a6b5-4415-b7ff-ecc1fd47c213/modern-ai-content.jpg",
    readingTime: 14,
    author: "Samantha Wu",
    trending: false,
    content: [
      {
        title: "Emotional Triggers and Sharing Behavior",
        description:
          "Content that evokes high-arousal emotions like awe, anger, or anxiety is more likely to be shared. Learn how to ethically trigger these responses.",
      },
    ],
  },
  {
    id: 47,
    title: "Building Community Around Your Brand",
    shortDescription:
      "Loyal communities can amplify your message and provide valuable feedback. Here's how to nurture them.",
    date: new Date(2025, 2, 8),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/36aa83c8-a6b5-4415-b7ff-ecc1fd47c213/modern-ai-content.jpg",
    readingTime: 10,
    author: "Jamal Williams",
    trending: true,
    content: [
      {
        title: "Creating Spaces for Authentic Connection",
        description:
          "Whether it's a Discord server, forum, or social media group, dedicated spaces where your audience can interact with each other are crucial for community development.",
      },
    ],
  },
  {
    id: 46,
    title: "Optimizing Your Content for Voice Search",
    shortDescription:
      "With the rise of smart speakers and voice assistants, adapting your SEO strategy is essential.",
    date: new Date(2025, 2, 7),
    category: ARTICLE_CATEGORY_SEO,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/36aa83c8-a6b5-4415-b7ff-ecc1fd47c213/modern-ai-content.jpg",
    readingTime: 8,
    author: "Elena Rodriguez",
    trending: false,
    content: [
      {
        title: "Understanding Natural Language Queries",
        description:
          "Voice searches tend to be conversational and question-based. Your content should address these types of queries directly.",
      },
    ],
  },
  {
    id: 45,
    title: "Leveraging Short-Form Video for Brand Growth",
    shortDescription:
      "From TikTok to Instagram Reels, short videos continue to dominate engagement metrics.",
    date: new Date(2025, 2, 6),
    category: ARTICLE_CATEGORY_SOCIAL_MEDIA,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/36aa83c8-a6b5-4415-b7ff-ecc1fd47c213/modern-ai-content.jpg",
    readingTime: 7,
    author: "Tyler Johnson",
    trending: true,
    content: [
      {
        title: "Creating Memorable Hooks",
        description:
          "You have approximately 3 seconds to capture attention. Learn techniques for creating openings that stop the scroll.",
      },
    ],
  },
  {
    id: 44,
    title: "The Power of User-Generated Content",
    shortDescription:
      "Encourage your audience to create content for you and watch your engagement soar.",
    date: new Date(2025, 2, 5),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 9,
    author: "Priya Patel",
    trending: false,
    content: [
      {
        title: "Creating Effective UGC Campaigns",
        description:
          "The best user-generated content campaigns make participation easy, fun, and rewarding for your audience members.",
      },
    ],
  },
  {
    id: 43,
    title: "Advanced Analytics for Content Creators",
    shortDescription:
      "Move beyond basic metrics to gain deeper insights into your content performance.",
    date: new Date(2025, 2, 4),
    category: ARTICLE_CATEGORY_ANALYTICS,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 15,
    author: "David Kim",
    trending: false,
    content: [
      {
        title: "Cohort Analysis for Content Strategy",
        description:
          "By analyzing how different audience segments interact with your content over time, you can make more informed decisions about future content creation.",
      },
    ],
  },
  {
    id: 42,
    title: "Creating Accessible Content for All Audiences",
    shortDescription:
      "Inclusive design principles that make your content available to people with disabilities also improve general usability.",
    date: new Date(2025, 2, 3),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 12,
    author: "Maya Johnson",
    trending: false,
    content: [
      {
        title: "Beyond Alt Text",
        description:
          "While proper image descriptions are important, true accessibility requires considering content structure, color contrast, keyboard navigation, and more.",
      },
    ],
  },
  {
    id: 41,
    title: "Monetizing Your Newsletter in 2025",
    shortDescription:
      "With changing subscriber expectations, here's how to generate revenue without alienating your audience.",
    date: new Date(2025, 2, 2),
    category: ARTICLE_CATEGORY_MONETIZATION,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 10,
    author: "Olivia Martinez",
    trending: true,
    content: [
      {
        title: "Tiered Content Models",
        description:
          "Creating multiple subscription levels with different benefits allows readers to engage at their preferred price point while maximizing your revenue potential.",
      },
    ],
  },
  {
    id: 40,
    title: "Building a Personal Brand as a Content Creator",
    shortDescription:
      "In a crowded marketplace, differentiation through personal branding is more important than ever.",
    date: new Date(2025, 2, 1),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 13,
    author: "Ryan Thompson",
    trending: false,
    content: [
      {
        title: "Authenticity vs. Consistency",
        description:
          "The tension between showing your true self and maintaining a consistent brand presence is one every creator must navigate carefully.",
      },
    ],
  },
  {
    id: 39,
    title: "The Rise of Audio Content Marketing",
    shortDescription:
      "From podcasts to audio articles, sound-based content continues to grow in popularity.",
    date: new Date(2025, 1, 28),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 8,
    author: "Sarah Johnson",
    trending: false,
    content: [
      {
        title: "Creating Immersive Audio Experiences",
        description:
          "Beyond basic narration, techniques like sound design and creative formatting can make your audio content more engaging and memorable.",
      },
    ],
  },
  {
    id: 38,
    title: "Ethical Data Collection for Audience Insights",
    shortDescription:
      "With privacy regulations tightening, here's how to gather useful data while respecting your audience.",
    date: new Date(2025, 1, 27),
    category: ARTICLE_CATEGORY_ANALYTICS,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 11,
    author: "Omar Hassan",
    trending: false,
    content: [
      {
        title: "Transparent Data Practices",
        description:
          "Being upfront about what data you collect and how you use it not only keeps you compliant but builds trust with your audience.",
      },
    ],
  },
  {
    id: 37,
    title: "Creating Content for the Global Marketplace",
    shortDescription:
      "Reach international audiences with content that resonates across cultural boundaries.",
    date: new Date(2025, 1, 26),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 14,
    author: "Lucia Fernandez",
    trending: false,
    content: [
      {
        title: "Cultural Sensitivity in Content Design",
        description:
          "From color choices to idiomatic expressions, learn how to create content that avoids cultural pitfalls and connects with diverse audiences.",
      },
    ],
  },
  {
    id: 36,
    title: "Mastering Multi-Platform Content Distribution",
    shortDescription:
      "Create once, publish everywhere—but with strategic adaptations for each platform.",
    date: new Date(2025, 1, 25),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 9,
    author: "Alex Wong",
    trending: true,
    content: [
      {
        title: "Platform-Specific Optimizations",
        description:
          "Each platform has its own algorithm preferences, audience expectations, and format requirements. Learn how to adapt your core content accordingly.",
      },
    ],
  },
  {
    id: 35,
    title: "The Science of Headline Writing",
    shortDescription:
      "Craft titles that capture attention without resorting to clickbait tactics.",
    date: new Date(2025, 1, 24),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 6,
    author: "Emma Blackwell",
    trending: false,
    content: [
      {
        title: "Psychological Triggers in Headlines",
        description:
          "Certain words and phrases tap into fundamental human desires and fears. Used responsibly, they can significantly increase your content's performance.",
      },
    ],
  },
  {
    id: 34,
    title: "Building Effective Content Partnerships",
    shortDescription:
      "Collaborations can expand your reach and bring fresh perspectives to your audience.",
    date: new Date(2025, 1, 23),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://im.indiatimes.in/content/2025/Jan/FotoJet-26_6791ed0e4e16e.jpg?w=1200&h=900&cc=1&webp=1&q=75",
    readingTime: 10,
    author: "Naomi Clark",
    trending: false,
    content: [
      {
        title: "Finding the Right Partners",
        description:
          "The best collaborations bring complementary strengths together, allowing both parties to provide greater value to their respective audiences.",
      },
    ],
  },
  {
    id: 33,
    title: "Visual Storytelling Techniques for Digital Content",
    shortDescription:
      "Images and graphics can convey complex ideas quickly and memorably.",
    date: new Date(2025, 1, 22),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 12,
    author: "Daniel Lee",
    trending: false,
    content: [
      {
        title: "The Power of Visual Metaphors",
        description:
          "Abstract concepts become more accessible when represented through familiar visual frameworks. Learn how to create effective metaphorical imagery.",
      },
    ],
  },
  {
    id: 32,
    title: "Measuring Content ROI Beyond Pageviews",
    shortDescription:
      "Sophisticated metrics that better reflect your content's true business impact.",
    date: new Date(2025, 1, 21),
    category: ARTICLE_CATEGORY_ANALYTICS,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 15,
    author: "Tanya Sharma",
    trending: true,
    content: [
      {
        title: "Attribution Modeling for Content Marketing",
        description:
          "Understanding how content contributes to conversions across complex customer journeys requires more sophisticated approaches than last-click attribution.",
      },
    ],
  },
  {
    id: 31,
    title: "Interactive Content Creation for Higher Engagement",
    shortDescription:
      "Quizzes, calculators, and other interactive elements can dramatically increase time on page.",
    date: new Date(2025, 1, 20),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 8,
    author: "Michael Stevens",
    trending: false,
    content: [
      {
        title: "Designing Effective Interactive Experiences",
        description:
          "The best interactive content provides immediate value while collecting useful data that can inform your future content strategy.",
      },
    ],
  },
  {
    id: 30,
    title: "The Future of Content Discovery",
    shortDescription:
      "How emerging technologies are changing the way audiences find and consume content.",
    date: new Date(2025, 1, 19),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 11,
    author: "Zoe Williams",
    trending: false,
    content: [
      {
        title: "Beyond Search and Social",
        description:
          "New discovery mechanisms like recommendation engines, content aggregators, and AI assistants are becoming increasingly important channels.",
      },
    ],
  },
  {
    id: 29,
    title: "Creating Evergreen Content That Drives Long-Term Traffic",
    shortDescription:
      "Some content can continue to perform for years, becoming valuable assets for your platform.",
    date: new Date(2025, 1, 18),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 13,
    author: "Benjamin Green",
    trending: false,
    content: [
      {
        title: "Identifying Evergreen Topics",
        description:
          "The best evergreen content addresses fundamental questions and problems that remain relevant regardless of current trends or news cycles.",
      },
    ],
  },
  {
    id: 28,
    title: "Video Optimization Techniques for Higher Retention",
    shortDescription:
      "Keep viewers watching longer with these proven production strategies.",
    date: new Date(2025, 1, 17),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 10,
    author: "Cameron Phillips",
    trending: true,
    content: [
      {
        title: "The Hook-Problem-Solution Framework",
        description:
          "Opening with an attention-grabbing hook, establishing a relatable problem, and delivering a clear solution is a proven structure for informational videos.",
      },
    ],
  },
  {
    id: 27,
    title: "Designing Content for Different Stages of the Buyer's Journey",
    shortDescription:
      "Match your content strategy to your audience's current decision-making phase.",
    date: new Date(2025, 1, 16),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 12,
    author: "Sophia Anderson",
    trending: false,
    content: [
      {
        title: "Awareness Stage Content Strategies",
        description:
          "At this stage, focus on educational content that addresses pain points without explicitly promoting your product or service.",
      },
    ],
  },
  {
    id: 26,
    title: "Repurposing Content Effectively Across Platforms",
    shortDescription:
      "Get more value from your existing content by adapting it for different formats and channels.",
    date: new Date(2025, 1, 15),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 8,
    author: "Leo Martinez",
    trending: false,
    content: [
      {
        title: "Content Atomization",
        description:
          "Breaking down comprehensive pieces into smaller, platform-specific components allows you to maintain a consistent presence with less production effort.",
      },
    ],
  },
  {
    id: 25,
    title: "SEO Writing That Satisfies Both Algorithms and Humans",
    shortDescription:
      "Creating content that ranks well without sacrificing readability or engagement.",
    date: new Date(2025, 1, 14),
    category: ARTICLE_CATEGORY_SEO,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 11,
    author: "Grace Liu",
    trending: true,
    content: [
      {
        title: "Semantic SEO Techniques",
        description:
          "Modern search engines look beyond keywords to understand topic relevance and comprehensiveness. Learn how to create content that demonstrates expertise.",
      },
    ],
  },
  {
    id: 24,
    title: "Building a Sustainable Content Calendar",
    shortDescription:
      "Create a production schedule that drives results without leading to creator burnout.",
    date: new Date(2025, 1, 13),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 9,
    author: "Isaac Hernandez",
    trending: false,
    content: [
      {
        title: "Balancing Consistency and Quality",
        description:
          "While regular publishing builds audience habits, maintaining high standards is equally important. Find the production cadence that works for your resources.",
      },
    ],
  },
  {
    id: 23,
    title: "Content Localization Strategies for Global Brands",
    shortDescription:
      "Adapt your message for different regions while maintaining brand consistency.",
    date: new Date(2025, 1, 12),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/20241028_thelastattackmovie_1.jpg?v=1730100114",
    readingTime: 14,
    author: "Natalia Kowalski",
    trending: false,
    content: [
      {
        title: "Beyond Translation",
        description:
          "True localization considers cultural references, humor, images, and even content structure to resonate with local audiences.",
      },
    ],
  },
  {
    id: 22,
    title: "Storytelling Frameworks for Memorable Content",
    shortDescription:
      "Narrative structures that keep audiences engaged and improve information retention.",
    date: new Date(2025, 1, 11),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.themarysue.com/wp-content/uploads/2023/02/levi-ackermann-attack-on-titan-final-seaon.jpg",
    readingTime: 10,
    author: "Jordan Taylor",
    trending: true,
    content: [
      {
        title: "The Hero's Journey for Brand Narratives",
        description:
          "Adapting this classic story structure can help create compelling origin stories, case studies, and customer testimonials.",
      },
    ],
  },
  {
    id: 21,
    title: "Leveraging Data Visualization in Content Marketing",
    shortDescription:
      "Complex information becomes more accessible and engaging when presented visually.",
    date: new Date(2025, 1, 10),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.themarysue.com/wp-content/uploads/2023/02/levi-ackermann-attack-on-titan-final-seaon.jpg",
    readingTime: 12,
    author: "Hannah White",
    trending: false,
    content: [
      {
        title: "Choosing the Right Chart Types",
        description:
          "Different data relationships call for specific visualization formats. Learn when to use pie charts, bar graphs, scatter plots, and more.",
      },
    ],
  },
  {
    id: 20,
    title: "Niche Content Strategies for Specialized Audiences",
    shortDescription:
      "When targeting specific professional or interest groups, generic advice won't cut it.",
    date: new Date(2025, 1, 9),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://www.themarysue.com/wp-content/uploads/2023/02/levi-ackermann-attack-on-titan-final-seaon.jpg",
    readingTime: 11,
    author: "Victor Nguyen",
    trending: false,
    content: [
      {
        title: "The Power of Insider Language",
        description:
          "Using industry-specific terminology demonstrates credibility while creating a sense of community among your specialist audience.",
      },
    ],
  },
  {
    id: 19,
    title: "Creating Content Teams That Scale",
    shortDescription:
      "Organizational structures and workflows for growing content operations.",
    date: new Date(2025, 1, 8),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.themarysue.com/wp-content/uploads/2023/02/levi-ackermann-attack-on-titan-final-seaon.jpg",
    readingTime: 15,
    author: "Amelia Richardson",
    trending: true,
    content: [
      {
        title: "Specialist vs. Generalist Models",
        description:
          "Deciding whether to hire for specific content roles or flexible multi-skilled team members depends on your production needs and growth stage.",
      },
    ],
  },
  {
    id: 18,
    title: "Mastering the Art of Content Curation",
    shortDescription:
      "Sharing others' content strategically can build authority and save production resources.",
    date: new Date(2025, 1, 7),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.themarysue.com/wp-content/uploads/2023/02/levi-ackermann-attack-on-titan-final-seaon.jpg",
    readingTime: 7,
    author: "Lucas Brown",
    trending: false,
    content: [
      {
        title: "Adding Value Through Context",
        description:
          "The best curation adds unique perspective or organizes information in ways that create new value for your audience.",
      },
    ],
  },
  {
    id: 17,
    title: "Designing Lead Magnets That Convert",
    shortDescription:
      "Create downloadable resources that attract qualified prospects to your email list.",
    date: new Date(2025, 1, 6),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://www.themarysue.com/wp-content/uploads/2023/02/levi-ackermann-attack-on-titan-final-seaon.jpg",
    readingTime: 9,
    author: "Rachel Cohen",
    trending: false,
    content: [
      {
        title: "Problem-Solving Resources",
        description:
          "The most effective lead magnets provide immediate solutions to specific problems your target audience faces regularly.",
      },
    ],
  },
  {
    id: 16,
    title: "Content Analytics Tools Worth Investing In",
    shortDescription:
      "Beyond basic metrics, these specialized tools provide deeper audience insights.",
    date: new Date(2025, 1, 5),
    category: ARTICLE_CATEGORY_ANALYTICS,
    imageUrl:
      "https://www.themarysue.com/wp-content/uploads/2023/02/levi-ackermann-attack-on-titan-final-seaon.jpg",
    readingTime: 13,
    author: "Kevin Park",
    trending: true,
    content: [
      {
        title: "Heat Mapping for Content Optimization",
        description:
          "Understanding exactly how users interact with your content visually can reveal opportunities for improving layout and call-to-action placement.",
      },
    ],
  },
  {
    id: 15,
    title: "The Psychology of Persuasive Content",
    shortDescription:
      "Ethical principles of influence that can make your content more compelling.",
    date: new Date(2025, 1, 4),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.themarysue.com/wp-content/uploads/2023/02/levi-ackermann-attack-on-titan-final-seaon.jpg",
    readingTime: 10,
    author: "Diana Reynolds",
    trending: false,
    content: [
      {
        title: "Social Proof in Digital Content",
        description:
          "Testimonials, usage statistics, and expert endorsements tap into our natural tendency to look to others when making decisions.",
      },
    ],
  },
  {
    id: 14,
    title: "Creating Accessible Video Content",
    shortDescription:
      "Best practices for ensuring your videos can be enjoyed by audiences with disabilities.",
    date: new Date(2025, 1, 3),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://www.themarysue.com/wp-content/uploads/2023/02/levi-ackermann-attack-on-titan-final-seaon.jpg",
    readingTime: 11,
    author: "Marcus Johnson",
    trending: false,
    content: [
      {
        title: "Quality Captioning",
        description:
          "Well-formatted, accurate captions benefit not only deaf and hard-of-hearing viewers but also those watching in noisy environments or learning your language.",
      },
    ],
  },
  {
    id: 13,
    title: "Micro-Content Strategies for Social Media",
    shortDescription:
      "Small pieces of content can drive big engagement when strategically designed.",
    date: new Date(2025, 1, 2),
    category: ARTICLE_CATEGORY_SOCIAL_MEDIA,
    imageUrl:
      "https://hips.hearstapps.com/vidthumb/images/attack-on-titan-64a2f3943cf21.jpg?crop=1.00xw:0.895xh;0,0.105xh&resize=1200:*",
    readingTime: 8,
    author: "Olivia Chen",
    trending: true,
    content: [
      {
        title: "Creating Shareable Moments",
        description:
          "Designing content specifically for screenshot sharing can significantly increase organic distribution on platforms like Instagram.",
      },
    ],
  },
  {
    id: 12,
    title: "Building Authority Through Thought Leadership Content",
    shortDescription:
      "Position yourself or your brand as an industry leader with strategic content.",
    date: new Date(2025, 1, 1),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://hips.hearstapps.com/vidthumb/images/attack-on-titan-64a2f3943cf21.jpg?crop=1.00xw:0.895xh;0,0.105xh&resize=1200:*",
    readingTime: 14,
    author: "Samuel Wilson",
    trending: false,
    content: [
      {
        title: "Original Research as Authority Content",
        description:
          "Conducting and publishing unique studies or surveys establishes your brand as a primary source rather than just a commentator.",
      },
    ],
  },
  {
    id: 11,
    title: "Content Distribution Channels You're Overlooking",
    shortDescription:
      "Beyond the obvious platforms, these content distribution methods can reach new audiences.",
    date: new Date(2025, 0, 31),
    category: ARTICLE_CATEGORY_AUDIENCE_GROWTH,
    imageUrl:
      "https://hips.hearstapps.com/vidthumb/images/attack-on-titan-64a2f3943cf21.jpg?crop=1.00xw:0.895xh;0,0.105xh&resize=1200:*",
    readingTime: 9,
    author: "Aria Thompson",
    trending: false,
    content: [
      {
        title: "Industry Directories and Resource Lists",
        description:
          "Many professional organizations maintain content libraries that can drive highly qualified traffic to your specialized content.",
      },
    ],
  },
  {
    id: 10,
    title: "The Science of Readable Content",
    shortDescription:
      "Research-backed techniques for making your content more accessible and engaging.",
    date: new Date(2025, 0, 30),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://hips.hearstapps.com/vidthumb/images/attack-on-titan-64a2f3943cf21.jpg?crop=1.00xw:0.895xh;0,0.105xh&resize=1200:*",
    readingTime: 10,
    author: "Eric Sullivan",
    trending: true,
    content: [
      {
        title: "Sentence and Paragraph Structure",
        description:
          "Varying sentence length creates rhythm while keeping paragraphs short improves comprehension, especially on mobile devices.",
      },
    ],
  },
  {
    id: 9,
    title: "Maximizing Content Performance on LinkedIn",
    shortDescription:
      "Platform-specific strategies for professional audience engagement.",
    date: new Date(2025, 0, 29),
    category: ARTICLE_CATEGORY_SOCIAL_MEDIA,
    imageUrl:
      "https://hips.hearstapps.com/vidthumb/images/attack-on-titan-64a2f3943cf21.jpg?crop=1.00xw:0.895xh;0,0.105xh&resize=1200:*",
    readingTime: 12,
    author: "Natalie Morris",
    trending: false,
    content: [
      {
        title: "Document Posts vs. Article Publishing",
        description:
          "Understanding the algorithmic differences between LinkedIn's native post formats can significantly impact your content's reach and engagement.",
      },
    ],
  },
  {
    id: 8,
    title: "Content Calendar Planning for Seasonal Businesses",
    shortDescription:
      "How to maintain audience engagement during your industry's off-season.",
    date: new Date(2025, 0, 28),
    category: ARTICLE_CATEGORY_CONTENT_CREATION,
    imageUrl:
      "https://hips.hearstapps.com/vidthumb/images/attack-on-titan-64a2f3943cf21.jpg?crop=1.00xw:0.895xh;0,0.105xh&resize=1200:*",
    readingTime: 11,
    author: "Thomas Zhang",
    trending: false,
    content: [
      {
        title: "Evergreen Foundation, Seasonal Layers",
        description:
          "Build your content strategy around year-round topics, then layer in seasonal themes to maintain consistency while capturing tim",
      },
    ],
  },
];
