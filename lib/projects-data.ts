export interface Project {
  id: string
  title: string
  category: string
  description: string
  client?: string
  year?: string
  services?: string[]
  images: string[]
  thumbnail: string
  challenge?: string
  solution?: string
  process?: string[]
  results?: string
  tools?: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  liveUrl?: string
  pdfUrl?: string // Added for PDF links
}

export const projects: Project[] = [
  // Branding Projects
  {
    id: "masaha-360-brand-campaign",
    title: "Masaha 360 – Brand Campaign",
    category: "branding",
    description:
      "Comprehensive brand campaign for Masaha 360 showcasing equipment rental services and brand positioning",
    client: "Masaha Global",
    year: "2024",
    services: ["Brand Campaign", "Visual Identity", "Marketing Collateral", "Digital Assets"],
    thumbnail: "/masaha-360-campaign-thumbnail-2.jpg",
    images: [
      "/masaha-360-campaign-Artboard-10.jpg",
      "/masaha-360-campaign-Artboard-20.jpg",
      "/masaha-360-campaign-Artboard-30.jpg",
      "/masaha-360-campaign-Artboard-40.jpg",
      "/masaha-360-campaign-Artboard-50.jpg",
      "/masaha-360-campaign-Artboard-60.jpg",
      "/masaha-360-campaign-Artboard-70.jpg",
      "/masaha-360-campaign-Artboard-80.jpg",
      "/masaha-360-campaign-Artboard-90.jpg",
      "/masaha-360-campaign-Artboard-100.jpg",
    ],
    challenge:
      "Create a compelling brand campaign for Masaha 360 that effectively communicates their equipment rental services while establishing a strong market presence in the industrial sector.",
    solution:
      "Developed a comprehensive brand campaign with cohesive visual identity, marketing collateral, and digital assets that position Masaha 360 as a trusted leader in equipment rental services.",
    process: [
      "Brand Strategy - Defined campaign messaging and positioning",
      "Visual Development - Created campaign visual language and assets",
      "Collateral Design - Designed marketing materials and touchpoints",
      "Digital Assets - Developed social media and web graphics",
      "Campaign Launch - Coordinated rollout across all channels",
    ],
    results:
      "The brand campaign successfully elevated Masaha 360's market presence, resulting in increased brand recognition and customer inquiries across the industrial equipment sector.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma"],
    testimonial: {
      quote:
        "The brand campaign transformed how we present ourselves in the market. The visual identity is strong and memorable.",
      author: "Masaha Global Team",
      role: "Client",
    },
  },
  {
    id: "perpetual-blessings-branding",
    title: "Branding: Perpetual Blessings",
    category: "branding",
    description:
      "Complete brand identity design for Perpetual Blessings including logo, color palette, and brand guidelines",
    client: "Perpetual Blessings",
    year: "2024",
    services: ["Logo Design", "Brand Identity", "Brand Guidelines", "Visual System"],
    thumbnail: "/images/Perpetual-Blessing-Thumbnail.jpg",
    images: [
      "/perpetual-blessings-1.jpg",
      "/perpetual-blessings-2.jpg",
      "/perpetual-blessings-3.jpg",
      "/perpetual-blessings-4.jpg",
      "/perpetual-blessings-5.jpg",
      "/perpetual-blessings-6.jpg",
      "/perpetual-blessings-7.jpg",
      "/perpetual-blessings-8.jpg",
      "/perpetual-blessings-9.jpg",
      "/perpetual-blessings-10.jpg",
      "/images/perpetual-blessings-11.jpg",
      "/images/perpetual-blessings-12.jpg",
    ],
    challenge:
      "Design a meaningful brand identity for Perpetual Blessings that reflects their mission and values while creating a memorable and versatile visual system.",
    solution:
      "Created a thoughtful brand identity with a distinctive logo, harmonious color palette, and comprehensive brand guidelines that ensure consistency across all applications.",
    process: [
      "Discovery - Explored brand values and target audience",
      "Concept Development - Created multiple logo concepts",
      "Refinement - Iterated based on feedback and testing",
      "Brand System - Developed complete visual identity system",
      "Guidelines - Documented brand standards and usage rules",
    ],
    results:
      "Delivered a complete brand identity that effectively communicates Perpetual Blessings' mission and provides a strong foundation for all brand communications.",
    tools: ["Adobe Illustrator", "Figma", "Adobe InDesign", "Adobe Photoshop"],
    testimonial: {
      quote:
        "The brand identity beautifully captures our essence. It's professional, meaningful, and works perfectly across all our materials.",
      author: "Perpetual Blessings Team",
      role: "Client",
    },
  },
  {
    id: "Al-Musaha-AlMushtaraka-Co",
    title: "Al-Masaha AlMushtaraka-Branding",
    category: "branding",
    description:
      "Annual report branding and design for Kuwait Bureau of Financial Controller with comprehensive financial oversight presentation",
    client: "Kuwait Bureau of Financial Controller",
    year: "2024",
    services: ["Branding", "Construction Branding"],
    thumbnail: "/mmc-branding-1.jpg",
    images: [
      "/mmc-branding-1.jpg",
      "/mmc-branding-2.jpg",
      "/mmc-branding-3.jpg",
      "/mmc-branding-4.jpg",
      "/mmc-branding-5.jpg",
      "/mmc-branding-6.jpg",
      "/mmc-branding-7.jpg",
      "/mmc-branding-8.jpg",
      "/mmc-branding-9.jpg",
      "/mmc-branding-10.jpg",
      "/mmc-branding-11.jpg",
      "/mmc-branding-12.jpg",
      "/mmc-branding-13.jpg",
      "/mmc-branding-14.jpg",
      "/mmc-branding-15.jpg",
      "/mmc-branding-16.jpg",
    ],
    challenge:
      "Create a comprehensive annual report brand identity for the Kuwait Bureau of Financial Controller that clearly presents financial oversight, compliance, and performance data in an authoritative format.",
    solution:
      "Designed a professional government report with cohesive branding, detailed financial data presentation, compliance metrics, and performance indicators in an accessible, authoritative format.",
    process: [
      "Brand Development - Created report visual identity and guidelines",
      "Data Organization - Structured financial information logically",
      "Design System - Developed government-appropriate visual design",
      "Compliance Review - Ensured adherence to reporting standards",
      "Final Production - Prepared report for official distribution",
    ],
    results:
      "The annual report successfully communicated the Bureau's financial oversight activities and met all government reporting requirements with clarity and professionalism.",
    tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "action-pro-film-directory",
    title: "Action Pro – Film Directory Company",
    category: "branding",
    description:
      "Professional brand identity for Action Pro, a film directory company connecting film industry professionals",
    client: "Action Pro",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Entertainment Branding", "Visual System"],
    thumbnail: "/action-thumbnail.png",
    images: [
      "/action-branding-1.jpg",
      "/action-branding-2.jpg",
      "/action-branding-3.jpg",
      "/action-branding-4.jpg",
      "/action-branding-5.jpg",
      "/action-branding-6.jpg",
      "/action-branding-7.jpg",
      "/action-branding-8.jpg",
      "/action-branding-9.jpg",
      "/action-branding-10.jpg",
      "/action-branding-11.jpg",
      "/action-branding-12.jpg",
    ],
    challenge:
      "Design a professional brand identity for a film directory company that conveys industry expertise, credibility, and connects with film professionals.",
    solution:
      "Created a bold, cinematic brand identity with a distinctive logo, professional color scheme, and visual system that reflects the dynamic nature of the film industry.",
    process: [
      "Industry Research - Analyzed film industry branding trends",
      "Logo Design - Developed cinematic, professional logo",
      "Visual Identity - Created comprehensive brand system",
      "Applications - Designed business materials and digital assets",
      "Guidelines - Documented brand standards for consistency",
    ],
    results:
      "The brand identity established Action Pro as a credible film industry resource, facilitating connections between professionals and building industry recognition.",
    tools: ["Adobe Illustrator", "Figma", "Adobe Photoshop"],
    testimonial: {
      quote:
        "The branding gives us instant credibility in the film industry. It's professional, memorable, and perfectly represents what we do.",
      author: "Action Pro Team",
      role: "Client",
    },
  },
  {
    id: "66-battalion-commandos",
    title: "66 Battalion – Commandos 25",
    category: "branding",
    description: "Military unit branding for 66 Battalion Commandos 25 with strong, authoritative visual identity",
    client: "66 Battalion",
    year: "2024",
    services: ["Military Branding", "Emblem Design", "Unit Identity", "Tactical Design"],
    thumbnail: "/images/battalion/background.jpg",
    images: [
      "/images/battalion/background.jpg",
      "/images/battalion/illustrations.jpg",
      "/images/battalion/shield-sketch.jpg",
      "/images/battalion/logo-grayscale.jpg",
      "/images/battalion/logo-full-color.jpg",
      "/images/battalion/color-codes.jpg",
      "/images/battalion/typography.jpg",
      "/images/battalion/flag.jpg",
      "/images/battalion/banner.jpg",
      "/images/battalion/pattern.jpg",
    ],
    challenge:
      "Design a powerful military unit brand identity that conveys strength, unity, and professionalism while honoring military traditions.",
    solution:
      "Created a strong, authoritative brand identity with a distinctive battalion emblem, tactical color scheme, and applications that instill pride and unit cohesion.",
    process: [
      "Military Research - Studied military branding traditions",
      "Emblem Design - Developed powerful battalion emblem",
      "Visual System - Created tactical, professional design system",
      "Applications - Designed unit materials and insignia",
      "Standards - Documented military branding guidelines",
    ],
    results:
      "The brand identity successfully strengthened unit cohesion and pride, creating a distinctive visual identity that honors military traditions.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    testimonial: {
      quote:
        "The emblem and branding perfectly represent our battalion's strength and unity. It's become a source of pride for all our members.",
      author: "66 Battalion Leadership",
      role: "Client",
    },
  },
  {
    id: "the-best-juice",
    title: "The Best Juice | عصير ذا بست",
    category: "branding",
    description: "Complete brand identity for The Best Juice, a fresh juice bar featuring Arabic and English branding",
    client: "The Best Juice",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Bilingual Design", "Food & Beverage Branding"],
    thumbnail: "/juice-01.png",
    images: [
      "/juice-01.png",
      "/juice-02.png",
      "/juice-03.png",
      "/juice-04.png",
      "/juice-05.png",
      "/juice-06.png",
      "/juice-07.png",
      "/juice-08.png",
      "/juice-10.png",
      "/juice-11.png",
      "/juice-12.png",
      "/juice-13.png",
    ],
    challenge:
      "Create a vibrant, appealing brand identity for a juice bar that works seamlessly in both Arabic and English while conveying freshness, quality, and health.",
    solution:
      "Developed a fresh, colorful brand identity with bilingual logo design, vibrant color palette inspired by fresh fruits, and versatile applications across menus, packaging, and signage.",
    process: [
      "Brand Discovery - Explored juice bar market and target audience",
      "Concept Development - Created bilingual logo concepts",
      "Color System - Developed fresh, fruit-inspired color palette",
      "Applications - Designed menus, packaging, and store graphics",
      "Brand Guidelines - Documented bilingual usage standards",
    ],
    results:
      "The brand identity successfully positioned The Best Juice as a fresh, quality-focused juice bar, attracting health-conscious customers and creating strong brand recognition.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    testimonial: {
      quote:
        "The branding perfectly captures our fresh, healthy vibe. Customers love the design and it works beautifully in both languages.",
      author: "The Best Juice Team",
      role: "Client",
    },
  },
  {
    id: "fateer-wa-teer-restaurant",
    title: "Fateer wa teer Restaurant - (الكويت) مطعم فطير وطير",
    category: "branding",
    description:
      "Traditional Arabic restaurant branding for Fateer wa teer in Kuwait, featuring cultural design elements",
    client: "Fateer wa teer Restaurant",
    year: "2024",
    services: ["Restaurant Branding", "Arabic Design", "Menu Design", "Cultural Branding"],
    thumbnail: "/fateer-wa-teer-thumbnail.jpg",
    images: ["/fateer-wa-teer-logo.jpg", "/fateer-wa-teer-menu.jpg", "/fateer-wa-teer-interior.jpg"],
    challenge:
      "Create an authentic Arabic restaurant brand identity that honors traditional Kuwaiti culinary culture while appealing to modern diners.",
    solution:
      "Developed a culturally rich brand identity with Arabic calligraphy, traditional patterns, warm colors, and menu designs that celebrate Kuwaiti food heritage.",
    process: [
      "Cultural Research - Studied Kuwaiti culinary traditions",
      "Design Development - Created Arabic-focused visual identity",
      "Menu Design - Designed traditional yet modern menu layouts",
      "Interior Graphics - Developed restaurant signage and decor",
      "Brand Guidelines - Documented cultural design standards",
    ],
    results:
      "The brand identity successfully connects with local customers through authentic cultural representation while attracting new diners with its modern presentation.",
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
    testimonial: {
      quote:
        "The branding beautifully represents our traditional food with a modern touch. Our customers feel the authentic Kuwaiti spirit.",
      author: "Fateer wa teer Team",
      role: "Client",
    },
  },

  // Print Design Projects
  {
    id: "masaha-company-profile",
    title: "Company Profile – Masaha Global",
    category: "print-design",
    description: "Professional company profile showcasing Masaha Global's services, capabilities, and market position",
    client: "Masaha Global",
    year: "2024",
    services: ["Company Profile Design", "Layout Design", "Print Production", "Content Organization"],
    thumbnail: "/masaha-company-profile-thumbnail.jpg",
    images: [
      "/masaha-company-profile-cover.jpg",
      "/masaha-company-profile-spreads.jpg",
      "/masaha-company-profile-details.jpg",
    ],
    challenge:
      "Design a comprehensive company profile that effectively presents Masaha Global's extensive services, capabilities, and market leadership in the equipment rental industry.",
    solution:
      "Created a professional, well-structured company profile with clear information hierarchy, engaging layouts, and high-quality imagery that showcases Masaha Global's expertise and market position.",
    process: [
      "Content Strategy - Organized company information and messaging",
      "Layout Design - Developed grid system and page templates",
      "Visual Design - Applied brand identity and professional aesthetics",
      "Print Preparation - Prepared high-resolution files for production",
      "Quality Control - Reviewed proofs and final production",
    ],
    results:
      "The company profile successfully communicates Masaha Global's value proposition and has become an essential tool for business development and client presentations.",
    tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
    testimonial: {
      quote:
        "The company profile perfectly represents our brand and capabilities. It's been instrumental in winning new business.",
      author: "Masaha Global Team",
      role: "Client",
    },
  },
  {
    id: "masaha-rental-equipment-brochure",
    title: "Rental Equipment Brochure (Masaha)",
    category: "print-design",
    description: "Detailed equipment rental brochure showcasing Masaha's comprehensive inventory and services",
    client: "Masaha Global",
    year: "2024",
    services: ["Brochure Design", "Product Catalog", "Print Layout", "Technical Specifications"],
    thumbnail: "/masaha-rental-brochure-thumbnail.jpg",
    images: [
      "/masaha-rental-brochure-cover.jpg",
      "/masaha-rental-brochure-equipment.jpg",
      "/masaha-rental-brochure-specs.jpg",
    ],
    challenge:
      "Design an informative rental equipment brochure that clearly presents Masaha's extensive inventory while maintaining visual appeal and easy navigation for potential clients.",
    solution:
      "Developed a well-organized brochure with clear equipment categories, detailed specifications, high-quality product images, and intuitive layout that helps clients quickly find the equipment they need.",
    process: [
      "Content Organization - Categorized equipment and specifications",
      "Layout Design - Created structured templates for equipment listings",
      "Photography Integration - Incorporated professional equipment photos",
      "Technical Details - Formatted specifications for clarity",
      "Print Production - Prepared files for professional printing",
    ],
    results:
      "The rental equipment brochure streamlined the client inquiry process and increased equipment rental bookings by providing clear, accessible information.",
    tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    id: "2025-wall-calendar",
    title: "2025 Wall Calendar",
    category: "print-design",
    description:
      "Custom designed 2025 wall calendar for Masaha Global with branded design, Kuwait holidays, and functional layout",
    client: "Masaha Global",
    year: "2024",
    services: ["Calendar Design", "Layout Design", "Print Production", "Brand Integration"],
    thumbnail: "/2025-calendar-thumbnail.jpg",
    images: ["/2025-calendar-thumbnail.jpg"], // Updated to a single representative image
    pdfUrl: "/2025-wall-calendar.pdf", // Added PDF link
    challenge:
      "Design an attractive and functional 2025 wall calendar that serves as both a practical tool and a year-round brand reminder for Masaha Global's clients and partners in Kuwait.",
    solution:
      "Created a beautifully designed desk-style wall calendar featuring Masaha's red and white brand colors, monthly layouts with ample writing space, Kuwait public holidays clearly marked, and equipment imagery showcasing the company's rental services.",
    process: [
      "Concept Development - Defined calendar theme aligned with Masaha's construction equipment brand",
      "Holiday Research - Compiled all Kuwait public holidays for 2025 including Islamic observances",
      "Layout Design - Designed clean monthly grids with bilingual information",
      "Visual Design - Applied Masaha brand colors, logo, and equipment photography",
      "Production Preparation - Set up files for high-quality calendar printing",
    ],
    results:
      "The 2025 wall calendar was well-received by clients and partners, providing year-round brand visibility and serving as a practical, appreciated gift that keeps Masaha Global top-of-mind.",
    tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
    testimonial: {
      quote:
        "The calendar design is beautiful and functional. Our clients love it and it keeps our brand visible all year long.",
      author: "Masaha Global Team",
      role: "Client",
    },
  },
  {
    id: "corporate-brochure",
    title: "Corporate Brochure Design",
    category: "print-design",
    description: "Professional brochure design for corporate clients",
    client: "Corporate Solutions",
    year: "2024",
    services: ["Brochure Design", "Print Layout", "Typography"],
    thumbnail: "/corporate-brochure.jpg",
    images: ["/corporate-brochure-cover.jpg", "/corporate-brochure-inside-pages.jpg", "/corporate-brochure-mockup.jpg"],
    challenge:
      "Design a professional corporate brochure that effectively communicates complex business solutions while maintaining visual appeal and readability for diverse stakeholders.",
    solution:
      "Created a clean, structured layout with clear information hierarchy, professional typography, and strategic use of white space. Incorporated infographics to simplify complex data and maintain reader engagement.",
    process: [
      "Content Strategy - Organized information architecture and messaging",
      "Layout Design - Developed grid system and page templates",
      "Visual Design - Applied brand colors and typography",
      "Print Preparation - Prepared files for professional printing",
      "Quality Control - Reviewed proofs and final production",
    ],
    results:
      "The brochure successfully communicated Corporate Solutions' value proposition, resulting in a 40% increase in qualified leads at trade shows and client meetings.",
    tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
    testimonial: {
      quote:
        "The brochure design perfectly balances professionalism with visual appeal. It's become our most effective sales tool.",
      author: "Michael Chen",
      role: "Marketing Director, Corporate Solutions",
    },
  },
  {
    id: "al-waha-schools-magazine",
    title: "Al Waha Schools – Magazine",
    category: "print-design",
    description:
      "Educational magazine design for Al Waha Schools featuring student work, school news, and educational content",
    client: "Al Waha Schools",
    year: "2024",
    services: ["Magazine Design", "Editorial Layout", "Educational Publishing", "Print Production"],
    thumbnail: "/al-waha-magazine-thumbnail.jpg",
    images: ["/al-waha-magazine-cover.jpg", "/al-waha-magazine-spreads.jpg", "/al-waha-magazine-features.jpg"],
    challenge:
      "Design an engaging school magazine that showcases student achievements, school activities, and educational content while maintaining professional quality and visual appeal.",
    solution:
      "Created a vibrant, well-organized magazine with dynamic layouts, student-friendly design, clear content sections, and professional production quality that celebrates school community.",
    process: [
      "Content Planning - Organized magazine sections and features",
      "Layout Design - Developed flexible grid system for varied content",
      "Visual Design - Applied school branding with engaging aesthetics",
      "Editorial Design - Designed article layouts and photo spreads",
      "Print Production - Prepared files for professional printing",
    ],
    results:
      "The magazine successfully engaged the school community, showcasing student work and school activities in a professional, appealing format that became a valued keepsake.",
    tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
    testimonial: {
      quote:
        "The magazine design beautifully showcases our students and school community. Parents and students love it!",
      author: "Al Waha Schools Administration",
      role: "Client",
    },
  },
  {
    id: "almasaha-almushtarakah-profile",
    title: "Al-Masaha Al-Mushtarakah Company Profile",
    category: "print-design",
    description:
      "Comprehensive company profile for Al-Masaha Al-Mushtarakah showcasing services and corporate capabilities",
    client: "Al-Masaha Al-Mushtarakah",
    year: "2024",
    services: ["Company Profile Design", "Corporate Design", "Layout Design", "Print Production"],
    thumbnail: "/almasaha-mushtarakah-profile-thumbnail.jpg",
    images: [
      "/almasaha-mushtarakah-profile-cover.jpg",
      "/almasaha-mushtarakah-profile-spreads.jpg",
      "/almasaha-mushtarakah-profile-services.jpg",
    ],
    challenge:
      "Design a professional company profile for Al-Masaha Al-Mushtarakah that effectively presents their services, capabilities, and market position to potential clients and partners.",
    solution:
      "Created a comprehensive, professionally designed company profile with clear information architecture, engaging layouts, and high-quality presentation that showcases corporate strengths.",
    process: [
      "Content Strategy - Organized company information and services",
      "Layout Design - Developed professional grid and page templates",
      "Visual Design - Applied corporate branding and aesthetics",
      "Print Preparation - Prepared high-resolution production files",
      "Quality Control - Reviewed proofs and final production",
    ],
    results:
      "The company profile successfully communicates Al-Masaha Al-Mushtarakah's value proposition and has become an essential business development tool for client presentations.",
    tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
    testimonial: {
      quote:
        "The company profile perfectly represents our business. It's professional, comprehensive, and has helped us win new contracts.",
      author: "Al-Masaha Al-Mushtarakah Team",
      role: "Client",
    },
  },

  // Social Media Projects
  {
    id: "instagram-campaign",
    title: "Instagram Marketing Campaign",
    category: "social-media",
    description: "Social media graphics for Instagram marketing campaign",
    client: "Fashion Brand",
    year: "2024",
    services: ["Social Media Graphics", "Content Design", "Brand Consistency"],
    thumbnail: "/instagram-posts.jpg",
    images: ["/instagram-feed-design.jpg", "/instagram-stories.jpg", "/instagram-carousel.jpg"],
    challenge:
      "Create a cohesive Instagram campaign that drives engagement and brand awareness while maintaining consistency across feed posts, stories, and carousel formats for a fashion brand's seasonal launch.",
    solution:
      "Developed a comprehensive visual system with consistent color palettes, typography, and design elements that work seamlessly across all Instagram formats. Created templates for easy content creation and brand consistency.",
    process: [
      "Brand Analysis - Studied brand guidelines and target audience",
      "Content Planning - Developed content calendar and themes",
      "Design System - Created templates for posts, stories, and carousels",
      "Asset Creation - Designed campaign graphics and animations",
      "Performance Tracking - Monitored engagement and optimized designs",
    ],
    results:
      "The campaign achieved 250% increase in engagement rate, 180% growth in followers, and generated over 1M impressions in the first month.",
    tools: ["Figma", "Adobe Photoshop", "Canva", "Adobe After Effects"],
    testimonial: {
      quote:
        "The Instagram campaign exceeded all our expectations. The designs are stunning and our engagement has never been higher.",
      author: "Emma Rodriguez",
      role: "Social Media Manager, Fashion Brand",
    },
  },

  // Presentations Projects
  {
    id: "sany-partnership-milestones",
    title: "Partnership with SANY and Major Milestones",
    category: "presentations",
    description: "Strategic presentation showcasing partnership achievements and major milestones with SANY",
    client: "SANY Partnership",
    year: "2024",
    services: ["Presentation Design", "Data Visualization", "Milestone Tracking", "Corporate Design"],
    thumbnail: "/sany-partnership-thumbnail.png", // CHANGED
    images: ["/sany-partnership-cover.jpg", "/sany-partnership-milestones.jpg", "/sany-partnership-data.jpg"],
    challenge:
      "MASAHA, part of the Fouad Al Ghanim & Sons group, needed to create a comprehensive presentation documenting their partnership journey with SANY since the agency contract was signed on May 15, 2017. The presentation needed to showcase the remarkable growth from initial equipment purchases to becoming one of Kuwait's leading construction and infrastructure equipment companies, while highlighting competitive positioning against major brands like Caterpillar, Komatsu, Volvo, and JCB.",
    solution:
      "Developed a data-rich presentation showcasing the partnership's success: 999 units of SANY equipment purchased totaling $128,645,981 from 2017 to December 2023. The presentation featured detailed breakdowns of equipment categories including mobile cranes, tower cranes, excavators, loaders, concrete equipment, and specialized machinery. Clear visualizations demonstrated year-over-year growth, competitive market positioning, and comprehensive product portfolio coverage across all major equipment categories.",
    process: [
      "Timeline Development - Created chronological partnership journey from May 15, 2017 contract signing to present",
      "Data Analysis - Compiled and categorized 999 equipment purchases across 50+ equipment models and types",
      "Financial Visualization - Designed charts showing $128.6M total investment and year-by-year purchase trends",
      "Competitive Analysis - Mapped MASAHA's positioning against key competitors (Caterpillar, Komatsu, Volvo, JCB, Liebherr, Tadano)",
      "Product Portfolio Showcase - Organized comprehensive equipment catalog by category and capacity",
      "Brand Integration - Incorporated MASAHA and SANY corporate identities throughout",
    ],
    results:
      "The presentation successfully demonstrated MASAHA's transformation into Kuwait's leading SANY dealer with nearly 1,000 units deployed. Clear data visualization of equipment categories (ranging from 10-ton tower cranes to 220-ton all-terrain cranes, 21.5-ton to 33.5-ton excavators, and complete concrete equipment solutions) validated the partnership's strength. The competitive analysis positioned MASAHA's SANY portfolio effectively against established brands, supporting continued partnership expansion and market growth.",
    tools: ["PowerPoint", "Figma", "Adobe Illustrator"],
    testimonial: {
      quote:
        "The presentation beautifully showcased our partnership journey from 2017 to present. The detailed equipment data and competitive positioning helped secure executive buy-in for our continued expansion.",
      author: "Partnership Development Team",
      role: "MASAHA Global",
    },
    pdfUrl: "/sany-partnership-presentation.pdf",
  },
  {
    id: "dashboard-reporting-kpis",
    title: "Dashboard Reporting KPIs",
    category: "presentations",
    description:
      "Comprehensive dashboard reporting system for tracking key performance indicators across 12 business departments",
    client: "Masaha Global",
    year: "2024",
    services: [
      "Dashboard Design",
      "KPI Visualization",
      "Data Analytics",
      "Performance Tracking",
      "Business Intelligence",
    ],
    thumbnail: "/dashboard-kpis-thumbnail.png",
    images: ["/dashboard-kpis-thumbnail.png", "/dashboard-kpis-thumbnail.png", "/dashboard-kpis-thumbnail.png"],
    pdfUrl: "/dashboard-reporting-kpis.pdf",
    challenge:
      "Masaha Global needed a unified dashboard reporting system to track and monitor KPIs across 12 diverse departments including Executive Management, Rental, Sales, Power Systems, Projects, Spare Parts, Service, HR, Finance, Procurement, Logistics, and Operations & HSE. The challenge was to create a real-time monitoring solution that would increase transparency, improve reaction time to operational risks, and drive alignment between departments through a single source of information.",
    solution:
      "Developed a comprehensive TV Dashboard system that enables faster, data-driven decisions at all levels - management, operational, and frontline. The solution provides real-time tracking of revenue, expenses, profitability, fleet utilization, project progress, inventory, and departmental KPIs. Each department dashboard is customized with relevant metrics while maintaining a consistent visual language and data structure that makes information more accessible and actionable across the organization.",
    process: [
      "Requirements Analysis - Identified critical KPIs for each of 12 departments (Executive, Rental, Sales, Power Systems, Projects, Spare Parts, Service, HR, Finance, Procurement, Logistics, Operations & HSE)",
      "Dashboard Architecture - Designed unified TV dashboard system for real-time monitoring across all business levels",
      "KPI Definition - Defined department-specific metrics including fleet utilization, revenue tracking, inventory turnover, project progress, manpower allocation, and operational efficiency",
      "Data Visualization - Created intuitive visual representations for complex metrics including charts, graphs, and progress indicators",
      "Integration Planning - Established data connectivity for live monitoring of revenue, expenses, profitability, overdue payments, and operational risks",
      "Department Customization - Tailored each dashboard (Rental, Sales, Projects, HR, Finance, etc.) with relevant KPIs while maintaining consistency",
      "Testing & Validation - Verified real-time data accuracy and dashboard responsiveness with stakeholders from each department",
      "Implementation Guide - Documented KPI examples and customization options for each department dashboard",
    ],
    results:
      "Successfully deployed a comprehensive dashboard system covering 12 departments that improved organizational performance through better cost control, target setting, and quality metrics. The solution increased transparency across all business functions, enabled faster reaction time to operational risks, improved performance monitoring, and drove department alignment through a unified source of information. Key benefits include real-time visibility into fleet utilization, project progress, inventory management, financial metrics, and operational KPIs, ultimately resulting in better business performance and increased profitability.",
    tools: ["PowerPoint", "Data Analytics Tools", "Business Intelligence Software", "Dashboard Design Tools"],
    testimonial: {
      quote:
        "The dashboard system has transformed how we monitor and manage our business operations. Having real-time visibility across all 12 departments allows us to make faster, more informed decisions and quickly identify areas that need attention.",
      author: "Operations Director",
      role: "Masaha Global",
    },
  },
  {
    id: "new-kuwait-strategic-development",
    title: "New Kuwait – Strategic Development 2035",
    category: "presentations",
    description: "Strategic development presentation for Kuwait's 2035 vision and major infrastructure projects",
    client: "Masaha Equipment Co.",
    year: "2024",
    services: ["Strategic Presentation", "Vision Communication", "Development Planning", "Government Design"],
    thumbnail: "/new-kuwait-2035-thumbnail.png",
    images: ["/kuwait-2035-vision.jpg", "/kuwait-2035-initiatives.jpg", "/kuwait-2035-roadmap.jpg"],
    challenge:
      "Masaha Equipment Co. needed a comprehensive presentation to communicate Kuwait's Vision 2035 strategic development plan to government stakeholders, highlighting major infrastructure projects across transportation, logistics, residential, oil & gas, and renewable energy sectors with clear investment figures and market forecasts.",
    solution:
      "Developed a strategic presentation showcasing Kuwait's transformation into a leading regional financial, commercial, and cultural hub by 2035, featuring detailed breakdowns of major projects including the $132 billion Madinat Al-Hareer, $30 billion oil production investment, GCC Railway integration, and renewable energy initiatives totaling 8.5 GW capacity.",
    process: [
      "Vision Overview - Introduced New Kuwait 2035 transformation goals",
      "Strategic Sectors - Identified six key development areas (Transportation, Infrastructure, Residential, Oil & Gas, Renewable Energy, Logistics)",
      "Project Portfolio - Detailed major initiatives with investment values: Logistics ($3.86B), Transportation ($6.98B), Residential Cities ($134.6B), Oil & Gas ($44.14B), Renewable Energy (8.5 GW)",
      "Market Analysis - Forecasted 3,000 machine requirements over 5 years",
      "Partnership Requirements - Outlined 3-year payment facilities and flexible product selection needs",
    ],
    results:
      "Successfully presented Kuwait's ambitious $189+ billion development portfolio across strategic sectors, positioned Masaha Equipment Co. for long-term partnership opportunities, and demonstrated market growth potential of 3,000 machines over 5 years. The presentation effectively communicated the scope of infrastructure transformation and equipment requirements.",
    tools: ["PowerPoint", "Figma", "Adobe Illustrator"],
    testimonial: {
      quote:
        "The presentation powerfully communicates Kuwait's vision for transformative development. The clear breakdown of strategic projects helps stakeholders understand the massive scale and opportunities ahead.",
      author: "Masaha Equipment Co.",
      role: "Client",
    },
    pdfUrl: "/new-kuwait-2035.pdf",
  },
  {
    id: "sany-business-plan-kuwait",
    title: "Business Plan – SANY Commercial Trucks Factory – Kuwait",
    category: "presentations",
    description: "Comprehensive business plan presentation for SANY commercial trucks factory establishment in Kuwait",
    client: "SANY Kuwait",
    year: "2024",
    services: ["Business Plan Design", "Financial Presentation", "Market Analysis", "Strategic Planning"],
    thumbnail: "/sany-business-plan-thumbnail.png", // CHANGED
    images: [
      "/sany-business-plan-overview.jpg",
      "/sany-business-plan-financials.jpg",
      "/sany-business-plan-market.jpg",
    ],
    challenge:
      "Develop a comprehensive business plan presentation for establishing a SANY commercial trucks factory in Kuwait, including market analysis, financial projections, and operational strategy.",
    solution:
      "Created a comprehensive business plan presentation with thorough market analysis, detailed financial projections, operational roadmap, and risk assessment that supports investment decisions.",
    process: [
      "Research - Analyzed market opportunity and competition",
      "Financial Modeling - Developed projections and ROI analysis",
      "Strategy Development - Outlined operational and growth plans",
      "Presentation Design - Created professional, data-rich slides",
      "Executive Preparation - Refined for investor presentations",
    ],
    results:
      "The business plan presentation successfully secured stakeholder approval and investment for the SANY commercial trucks factory project in Kuwait.",
    tools: ["PowerPoint", "Excel", "Figma", "Adobe Illustrator"],
    pdfUrl: "/sany-business-plan.pdf",
  },
  {
    id: "almasaha-annual-budget",
    title: "Al-Masaha Annual Budget",
    category: "presentations",
    description: "Annual budget presentation for Al-Masaha with financial planning and resource allocation",
    client: "Al-Masaha",
    year: "2024",
    services: ["Budget Presentation", "Financial Planning", "Resource Allocation", "Executive Reporting"],
    thumbnail: "/almasaha-budget-thumbnail.jpg",
    images: ["/almasaha-budget-overview.jpg", "/almasaha-budget-allocation.jpg", "/almasaha-budget-projections.jpg"],
    challenge:
      "Design a clear annual budget presentation that effectively communicates financial planning, resource allocation, and budget justification to executives and stakeholders.",
    solution:
      "Created a well-structured budget presentation with clear financial breakdowns, allocation visualizations, and comparative analysis that facilitates budget approval and resource planning.",
    process: [
      "Data Collection - Gathered budget data and requirements",
      "Financial Analysis - Analyzed spending patterns and needs",
      "Visualization - Created clear charts and allocation graphics",
      "Narrative Development - Built compelling budget justification",
      "Review Process - Refined based on finance team feedback",
    ],
    results:
      "The budget presentation streamlined the approval process and provided clear financial guidance for Al-Masaha's annual planning and resource allocation.",
    tools: ["PowerPoint", "Excel", "Figma"],
    testimonial: {
      quote:
        "The budget presentation made our financial planning clear and accessible. It significantly improved our approval process.",
      author: "Al-Masaha Finance Team",
      role: "Client",
    },
  },
  {
    id: "investor-pitch-deck",
    title: "Investor Pitch Deck",
    category: "presentations",
    description: "Professional pitch deck for startup funding",
    client: "StartupCo",
    year: "2024",
    services: ["Presentation Design", "Data Visualization", "Storytelling"],
    thumbnail: "/pitch-deck-presentation.png",
    images: ["/pitch-deck-cover.jpg", "/pitch-deck-slides.jpg", "/pitch-deck-charts.jpg"],
    challenge:
      "Design a compelling investor pitch deck that clearly communicates StartupCo's value proposition, market opportunity, and financial projections to secure Series A funding.",
    solution:
      "Created a visually striking presentation with clear narrative flow, professional data visualizations, and consistent branding. Simplified complex financial data into digestible charts and infographics that tell a compelling growth story.",
    process: [
      "Story Development - Crafted narrative arc and key messages",
      "Content Organization - Structured slides for maximum impact",
      "Visual Design - Designed slides with professional aesthetics",
      "Data Visualization - Created clear, impactful charts and graphs",
      "Refinement - Iterated based on practice presentations",
    ],
    results:
      "StartupCo successfully secured $5M in Series A funding. Investors praised the clarity and professionalism of the presentation, which helped close deals faster.",
    tools: ["Figma", "PowerPoint", "Keynote", "Adobe Illustrator"],
    testimonial: {
      quote:
        "The pitch deck was instrumental in our fundraising success. It perfectly communicated our vision and the design made our data come alive.",
      author: "David Park",
      role: "CEO, StartupCo",
    },
  },

  // Videos & Motion Projects
  {
    id: "brand-animation",
    title: "Brand Animation Video",
    category: "videos-motion",
    description: "Animated brand video for social media",
    client: "Creative Agency",
    year: "2024",
    services: ["Motion Graphics", "Video Editing", "Animation"],
    thumbnail: "/abstract-motion-graphics.png",
    images: [
      "/motion-graphics-storyboard.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    challenge:
      "Create an engaging 60-second brand animation that captures the creative agency's innovative spirit and showcases their services in a memorable way for social media platforms.",
    solution:
      "Developed a dynamic motion graphics video with smooth transitions, vibrant colors, and kinetic typography. Combined 2D and 3D elements to create visual interest while maintaining brand consistency throughout.",
    process: [
      "Concept Development - Created storyboard and animation concepts",
      "Script Writing - Developed concise, impactful messaging",
      "Design Assets - Created graphic elements and style frames",
      "Animation - Brought designs to life with motion graphics",
      "Sound Design - Added music and sound effects for impact",
    ],
    results:
      "The brand animation video generated 500K+ views across social platforms, increased website traffic by 85%, and became the agency's most shared content piece.",
    tools: ["After Effects", "Cinema 4D", "Premiere Pro", "Illustrator"],
    testimonial: {
      quote:
        "The animation perfectly captures our brand energy. It's been our most effective marketing asset and clients love it.",
      author: "Lisa Thompson",
      role: "Creative Director, Creative Agency",
    },
  },

  // Photography Projects
  {
    id: "product-photography",
    title: "Product Photography Session",
    category: "photography",
    description: "Professional product photography for e-commerce",
    client: "E-commerce Store",
    year: "2024",
    services: ["Product Photography", "Photo Editing", "Retouching"],
    thumbnail: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    challenge:
      "Create high-quality product photography that showcases e-commerce products in the best light, maintains consistency across the catalog, and drives conversions through professional presentation.",
    solution:
      "Executed a professional photography session with controlled lighting, multiple angles, and lifestyle shots. Applied consistent editing and retouching to create a cohesive product catalog that elevates the brand's perceived value.",
    process: [
      "Pre-Production - Planned shot list and lighting setups",
      "Photography Session - Captured products from multiple angles",
      "Selection - Curated best shots for each product",
      "Editing - Color correction and background removal",
      "Retouching - Final polish and consistency checks",
    ],
    results:
      "The professional product photography increased conversion rates by 45%, reduced return rates by 30%, and elevated the brand's premium positioning in the market.",
    tools: ["Canon EOS R5", "Profoto Lighting", "Adobe Lightroom", "Adobe Photoshop"],
    testimonial: {
      quote:
        "The product photos transformed our online store. Sales increased immediately and customers comment on how professional everything looks.",
      author: "Jennifer Martinez",
      role: "Owner, E-commerce Store",
    },
  },

  // Web Design Projects
  {
    id: "razan-fashion",
    title: "Razan Fashion",
    category: "web-design",
    description:
      "Modern modest fashion e-commerce platform specializing in hijabs and Islamic clothing with seamless shopping experience and payment integration.",
    client: "Razan Fashion",
    year: "2024",
    services: ["E-commerce Development", "React Development", "Payment Integration", "UI/UX Design"],
    thumbnail: "/razan-fashion-home.jpg",
    images: ["/razan-fashion-home.jpg", "/razan-fashion-products.jpg", "/razan-fashion-checkout.jpg"],
    liveUrl: "https://razan-fashion.vercel.app",
    challenge:
      "Create a modern e-commerce platform that caters to the modest fashion market while providing a seamless shopping experience with secure payment integration and intuitive navigation.",
    solution:
      "Built a responsive React-based e-commerce platform with integrated payment processing, product filtering, and a clean, elegant design that reflects the brand's values and appeals to the target audience.",
    process: [
      "Discovery - Researched modest fashion market and user preferences",
      "Design - Created wireframes and high-fidelity mockups",
      "Development - Built React frontend with payment integration",
      "Testing - Conducted user testing and performance optimization",
      "Launch - Deployed and monitored initial user feedback",
    ],
    results:
      "Successfully launched with positive user feedback, achieving smooth checkout flows and increased customer engagement through intuitive product browsing.",
    tools: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    testimonial: {
      quote:
        "The platform perfectly captures our brand essence while providing our customers with an exceptional shopping experience.",
      author: "Razan Fashion Team",
      role: "Client",
    },
  },
  {
    id: "yaseer-foundation",
    title: "Yaseer Foundation",
    category: "web-design",
    description:
      "Islamic educational charity website with donation management, program showcases, and community engagement features for supporting educational initiatives.",
    client: "Yaseer Foundation",
    year: "2024",
    services: ["WordPress Development", "Donation Management", "Content Management", "Responsive Design"],
    thumbnail: "/yaseer-foundation-home.jpg",
    images: ["/yaseer-foundation-home.jpg", "/yaseer-foundation-programs.jpg", "/yaseer-foundation-donate.jpg"],
    liveUrl: "https://yaseer-foundation.org",
    challenge:
      "Develop a comprehensive charity website that effectively communicates the foundation's mission, showcases educational programs, and provides a secure donation system to support Islamic educational initiatives.",
    solution:
      "Created a WordPress-based website with custom donation management, program showcases, and engaging content sections that inspire community support and clearly communicate the foundation's impact.",
    process: [
      "Planning - Defined site structure and donation workflows",
      "Design - Developed brand-aligned visual design",
      "Development - Built custom WordPress theme with donation features",
      "Content - Organized programs and impact stories",
      "Optimization - Enhanced performance and SEO",
    ],
    results:
      "Launched a professional charity website that effectively engages donors and showcases educational programs, resulting in increased community awareness and support.",
    tools: ["WordPress", "PHP", "MySQL", "CSS"],
  },
  {
    id: "alawnu-foundation",
    title: "Alawnu Foundation",
    category: "web-design",
    description:
      "Humanitarian organization website with donation management, campaign showcases, and community outreach programs for supporting those in need.",
    client: "Alawnu Foundation",
    year: "2024",
    services: ["Vue.js Development", "Campaign Management", "Donation System", "UI/UX Design"],
    thumbnail: "/alawnu-foundation-home.jpg",
    images: ["/alawnu-foundation-home.jpg", "/alawnu-foundation-campaigns.jpg", "/alawnu-foundation-impact.jpg"],
    liveUrl: "https://alawnu.org",
    challenge:
      "Build a dynamic humanitarian organization website that showcases ongoing campaigns, manages donations effectively, and engages the community in outreach programs.",
    solution:
      "Developed a Vue.js-powered website with interactive campaign displays, secure donation processing, and compelling storytelling that motivates community involvement in humanitarian efforts.",
    process: [
      "Research - Analyzed humanitarian sector best practices",
      "Architecture - Designed scalable Vue.js application structure",
      "Development - Built interactive components and donation flows",
      "Integration - Connected payment and campaign management systems",
      "Launch - Deployed with monitoring and analytics",
    ],
    results:
      "Created an engaging platform that effectively communicates the foundation's humanitarian mission and facilitates community support through streamlined donation processes.",
    tools: ["Vue.js", "Nuxt.js", "Node.js", "Tailwind CSS"],
  },
  {
    id: "yaseer-institute",
    title: "Yaseer Institute",
    category: "web-design",
    description:
      "Islamic educational platform offering structured learning programs for young Muslims with course management and progress tracking features.",
    client: "Yaseer Institute",
    year: "2024",
    services: ["WordPress Development", "LMS Integration", "Course Management", "Student Portal"],
    thumbnail: "/yaseer-institute-home.jpg",
    images: ["/yaseer-institute-home.jpg", "/yaseer-institute-courses.jpg", "/yaseer-institute-dashboard.jpg"],
    liveUrl: "https://yaseer-institute.org",
    challenge:
      "Create an educational platform that provides structured Islamic learning programs for young Muslims with effective course management and student progress tracking.",
    solution:
      "Built a WordPress-based learning management system with course organization, progress tracking, and an intuitive student portal that makes Islamic education accessible and engaging.",
    process: [
      "Requirements - Gathered educational program needs",
      "Design - Created student-friendly interface designs",
      "Development - Implemented LMS features and course structure",
      "Testing - Validated learning workflows with students",
      "Deployment - Launched with instructor training",
    ],
    results:
      "Successfully launched an educational platform that provides structured learning experiences, helping young Muslims engage with Islamic education in an organized and accessible way.",
    tools: ["WordPress", "LearnDash", "PHP", "JavaScript"],
  },
  {
    id: "triplexon",
    title: "Triplexon",
    category: "web-design",
    description:
      "Industrial services platform providing expert consultation and immediate access to specialized help for oil, gas, and industrial sectors.",
    client: "Triplexon",
    year: "2024",
    services: ["WordPress Development", "Service Portal", "Consultation Booking", "Industry Solutions"],
    thumbnail: "/triplexon-home.jpg",
    images: ["/triplexon-home.jpg", "/triplexon-services.jpg", "/triplexon-consultation.jpg"],
    liveUrl: "https://triplexon.com",
    challenge:
      "Develop a professional industrial services platform that connects clients with expert consultation and specialized help in the oil, gas, and industrial sectors.",
    solution:
      "Created a WordPress-based platform with service showcases, consultation booking, and industry-specific solutions that establish credibility and facilitate client engagement.",
    process: [
      "Discovery - Researched industrial sector requirements",
      "Strategy - Defined service offerings and user journeys",
      "Design - Developed professional, industry-appropriate design",
      "Development - Built service portal and booking system",
      "Launch - Deployed with client onboarding support",
    ],
    results:
      "Launched a professional platform that effectively showcases industrial expertise and provides clients with easy access to specialized consultation services.",
    tools: ["WordPress", "PHP", "MySQL", "CSS"],
  },
  {
    id: "alf-foundation",
    title: "Alf Foundation",
    category: "web-design",
    description:
      "Al-Farouk Humanitarian Foundation website with donation management, volunteer coordination, and impact tracking for humanitarian aid programs.",
    client: "Al-Farouk Humanitarian Foundation",
    year: "2024",
    services: ["WordPress Development", "Donation Platform", "Volunteer Management", "Impact Reporting"],
    thumbnail: "/alf-foundation-home.jpg",
    images: ["/alf-foundation-home.jpg", "/alf-foundation-programs.jpg", "/alf-foundation-volunteer.jpg"],
    liveUrl: "https://alf-foundation.org",
    challenge:
      "Build a comprehensive humanitarian foundation website that manages donations, coordinates volunteers, and tracks impact across multiple aid programs.",
    solution:
      "Developed a WordPress-based platform with integrated donation management, volunteer coordination tools, and impact reporting that demonstrates the foundation's humanitarian work.",
    process: [
      "Planning - Mapped donation and volunteer workflows",
      "Design - Created compassionate, mission-driven design",
      "Development - Built donation and volunteer management features",
      "Content - Organized programs and impact stories",
      "Launch - Deployed with training for foundation staff",
    ],
    results:
      "Created a comprehensive platform that effectively manages humanitarian operations while engaging donors and volunteers through transparent impact reporting.",
    tools: ["WordPress", "PHP", "MySQL", "JavaScript"],
  },

  // eLearning Projects
  {
    id: "new-to-canada-credit-score",
    title: "New to Canada? to Understand Your Credit Score",
    category: "elearning",
    description:
      "Interactive eLearning course helping newcomers to Canada understand credit scores and financial literacy",
    client: "Financial Education Platform",
    year: "2024",
    services: ["Course Design", "Articulate 360", "Interactive Learning", "Financial Education"],
    thumbnail: "/canada-credit-score-thumbnail.jpg",
    images: ["/canada-credit-score-intro.jpg", "/canada-credit-score-modules.jpg", "/canada-credit-score-quiz.jpg"],
    challenge:
      "Create an engaging eLearning course that helps newcomers to Canada understand the complex topic of credit scores in an accessible, culturally sensitive manner.",
    solution:
      "Developed an interactive Articulate 360 course with clear explanations, real-world scenarios, knowledge checks, and practical tips that make credit score concepts easy to understand for new Canadians.",
    process: [
      "Needs Analysis - Researched newcomer challenges with credit",
      "Content Development - Created clear, accessible learning content",
      "Interactive Design - Built scenarios and knowledge checks",
      "Cultural Sensitivity - Ensured inclusive, welcoming approach",
      "Testing - Validated with newcomer focus groups",
    ],
    results:
      "The course achieved 88% completion rate and received excellent feedback from newcomers, helping them build financial confidence and make informed credit decisions.",
    tools: ["Articulate 360", "Articulate Rise", "Adobe Illustrator"],
    testimonial: {
      quote:
        "This course made credit scores finally make sense. The examples were relevant and the pace was perfect for learning something new.",
      author: "Course Participant",
      role: "New Canadian",
    },
  },
  {
    id: "information-security-guide",
    title: "The No-Nonsense Guide to Information Security",
    category: "elearning",
    description: "Practical eLearning course on information security best practices for employees",
    client: "Corporate Training",
    year: "2024",
    services: ["Security Training", "Articulate 360", "Interactive Scenarios", "Compliance Training"],
    thumbnail: "/info-security-thumbnail.jpg",
    images: ["/info-security-intro.jpg", "/info-security-scenarios.jpg", "/info-security-assessment.jpg"],
    challenge:
      "Design an engaging information security training course that cuts through jargon and teaches practical security habits to employees of all technical levels.",
    solution:
      "Created a straightforward, scenario-based eLearning course using Articulate 360 with real-world examples, interactive decision points, and practical tips that employees can immediately apply.",
    process: [
      "Content Strategy - Identified critical security topics",
      "Scenario Development - Created realistic workplace situations",
      "Interactive Design - Built decision-based learning paths",
      "Assessment Design - Developed practical knowledge checks",
      "Compliance Review - Ensured training met security standards",
    ],
    results:
      "The course achieved 94% completion rate and demonstrated measurable improvement in security awareness, reducing security incidents by 60% in the first quarter.",
    tools: ["Articulate 360", "Articulate Storyline", "Adobe Photoshop"],
    testimonial: {
      quote:
        "Finally, a security training that doesn't put people to sleep. Our team actually enjoyed it and learned practical skills.",
      author: "IT Security Manager",
      role: "Corporate Client",
    },
  },
  {
    id: "sany-elearning-course",
    title: "SANY Commercial Trucks Factory",
    category: "elearning",
    description: "Comprehensive eLearning course on SANY commercial trucks factory operations and processes",
    client: "SANY",
    year: "2024",
    services: ["Industrial Training", "Articulate 360", "Process Documentation", "Technical Training"],
    thumbnail: "/sany-elearning-thumbnail.jpg",
    images: ["/sany-elearning-overview.jpg", "/sany-elearning-processes.jpg", "/sany-elearning-assessment.jpg"],
    challenge:
      "Develop a comprehensive training course for SANY commercial trucks factory that covers complex manufacturing processes, safety protocols, and quality standards for diverse workforce.",
    solution:
      "Built a detailed Articulate 360 eLearning course with visual process demonstrations, safety training modules, quality checkpoints, and assessments that ensure workforce competency.",
    process: [
      "Process Analysis - Documented factory operations and workflows",
      "Content Development - Created training modules for each process",
      "Visual Design - Developed clear process diagrams and videos",
      "Safety Integration - Incorporated safety protocols throughout",
      "Assessment Design - Built competency verification tests",
    ],
    results:
      "The training course successfully onboarded factory workers, reduced training time by 35%, and improved quality compliance scores across all production lines.",
    tools: ["Articulate 360", "Articulate Storyline", "Adobe Illustrator", "Video Production"],
    testimonial: {
      quote:
        "The eLearning course transformed our training program. Workers are better prepared and our quality metrics have improved significantly.",
      author: "SANY Training Manager",
      role: "Client",
    },
  },
  {
    id: "online-course-design",
    title: "Online Course Platform Design",
    category: "elearning",
    description: "Interactive eLearning course design with Articulate Rise",
    client: "Education Platform",
    year: "2024",
    services: ["Course Design", "Interactive Elements", "LMS Integration"],
    thumbnail: "/placeholder.svg",
     images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    // images: [
    //   "/placeholder.svg?height=600&width=800",
    //   "/placeholder.svg?height=600&width=800",
    //   "/placeholder.svg?height=600&width=800",
    // ],
    challenge:
      "Design an engaging online course that maintains learner attention, facilitates knowledge retention, and provides interactive learning experiences for a diverse audience of adult learners.",
    solution:
      "Created a comprehensive eLearning course using Articulate Rise with interactive elements, knowledge checks, scenario-based learning, and multimedia content. Designed for mobile-responsive learning with clear navigation and progress tracking.",
    process: [
      "Learning Objectives - Defined clear learning outcomes and assessments",
      "Content Structure - Organized modules and lesson flow",
      "Interactive Design - Created quizzes, scenarios, and activities",
      "Multimedia Integration - Added videos, graphics, and audio",
      "LMS Integration - Configured tracking and reporting features",
    ],
    results:
      "The course achieved 92% completion rate (vs. 45% industry average), 4.8/5 learner satisfaction score, and demonstrated measurable knowledge improvement through assessments.",
    tools: ["Articulate Rise", "Articulate Storyline", "Adobe Captivate", "Camtasia"],
    testimonial: {
      quote:
        "The course design is exceptional. Our learners are more engaged than ever and the completion rates speak for themselves.",
      author: "Dr. Robert Williams",
      role: "Director of Learning, Education Platform",
    },
  },
]

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(projects.map((project) => project.category)))
}
