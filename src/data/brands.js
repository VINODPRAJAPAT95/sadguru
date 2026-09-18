// Brand data — swap image URLs for files in src/assets/images/brands/ once available.

import mummaLogo from "../assets/images/brands/mumma-logo.png";
import t2mLogo from "../assets/images/brands/t2m-logo.png";
import milletvedaLogo from "../assets/images/brands/milletveda-logo.png";
import ahaarsutraLogo from "../assets/images/brands/ahaarsutra-logo.png";

const brands = [
  {
    id: "brand-1",
    slug: "brand-1",
    number: "01",
    name: "Mumma",
    tagline: "The Brand Parents Trust. The Nutrition Kids Deserve.",
    logo: mummaLogo,
    colors: {
      primary: "#DF1C51",
      white: "#FEFEFE",
      blue: "#3CA9E0",
      yellow: "#FCE700",
    },
    heroImage:
      mummaLogo,
    cardImage:
      mummaLogo,
    description:
      "Mumma is a child-focused nutrition brand built around the bond between a mother and her child — love, care, trust, protection and nourishment, in every product.",

    about:
      'Mumma is a child-focused nutrition brand built around one of the strongest and most universal relationships — the bond between a mother and her child. The name "Mumma" represents love, care, trust, protection, and nourishment. It reflects the belief that when parents choose food for their children, they look for the same care and responsibility that they would give themselves.\n\nMumma was created with a simple purpose: to make nutritious food for children convenient, enjoyable, and trustworthy for parents. In a world where parents are increasingly conscious about what goes into their children\'s food, Mumma focuses on creating thoughtfully formulated products using wholesome ingredients and child-friendly recipes — ensuring healthy food is not something children have to compromise on.',

    philosophy:
      "Mumma believes that healthy children grow into happy and confident individuals. Every bite matters during childhood, and therefore, food should provide more than just taste — it should contribute to everyday nourishment and healthy development.\n\nThe brand combines the goodness of real ingredients with nutrition-focused formulation to create food products suitable for growing children, making wholesome choices easier for parents without making food routines complicated.",

    standsFor: [
      { title: "Clean & Thoughtful Ingredients", desc: "Wholesome cereals, pulses, millets, fruits, vegetables, nuts, dates, and other carefully selected ingredients.", icon: "Leaf" },
      { title: "Nutrition-Focused Formulation", desc: "Products developed with attention to the nutritional needs of growing children.", icon: "Sparkles" },
      { title: "Child-Friendly Taste", desc: "Healthy food designed to be enjoyable, appealing, and easy for children to accept.", icon: "Smile" },
      { title: "Convenience for Parents", desc: "Practical food solutions designed for today's busy families.", icon: "Clock" },
      { title: "Quality & Safety", desc: "Strong emphasis on responsible sourcing, processing, hygiene, and quality.", icon: "ShieldCheck" },
      { title: "Trust & Transparency", desc: "Creating a brand parents can feel confident bringing into their homes.", icon: "HeartHandshake" },
    ],

    whoWeServe:
      "Mumma primarily focuses on children and their parents, addressing the nutritional requirements of growing children while also considering the expectations of modern parents. The brand is designed around the needs of families looking for convenient food options that are nutritious, wholesome, tasty, and thoughtfully made — making everyday food choices simpler without adding complexity to busy family routines.\n\nMumma also aims to create awareness among children and parents about making better food choices, encouraging them to reduce their dependence on junk and highly processed foods.",

    vision:
      "Mumma aims to become a trusted household name in children's nutrition — a brand that parents associate with care, purity, nourishment, and trust.",

    promise: "Every bite made with the care of a Mumma.",

    
    values: [
      { title: "Small Batches", desc: "We cook in limited runs so every batch stays fresh and consistent." },
      { title: "Visible Ingredients", desc: "If you can't picture it in your kitchen, it isn't in our snacks." },
      { title: "No Shortcuts", desc: "Traditional tempering and roasting, never rushed." },
    ],
    
  },

  {
    id: "brand-2",
    slug: "brand-2",
    number: "02",
    name: "T2M",
    tagline: "Traditional Taste. Everyday Value. Modern Standards.",
    logo: t2mLogo,
    colors: {
      primary: "#5B2A9D",
      white: "#FEFEFE",
      yellow: "#FBBF09",
    },
    heroImage:
      t2mLogo,
    cardImage:
      "https://images.unsplash.com/photo-1599490659213-e0b2757c5a91?auto=format&fit=crop&w=1200&q=80",
    description:
      "T2M is Sadguru Foods' everyday healthy snacking brand — bringing familiar Indian flavours to consumers in convenient, affordable and hygienically processed formats.",

    about:
      "T2M is Sadguru Foods' everyday healthy snacking brand created to bring familiar Indian flavours to consumers in convenient, affordable, and hygienically processed formats.\n\nIndia has a rich snacking culture. From a simple handful of peanuts to crunchy millets, superfoods, murukkus, chikkis, mixtures, popcorn, potato chips and a wide variety of snacks are part of everyday life across generations. T2M builds on this cultural connection by bringing traditional favourites together with modern food processing, packaging, quality control, and distribution.\n\nThe brand is designed to make good quality snacking accessible to a broad consumer base, particularly across Tier-2, Tier-3, and Tier-4 markets, where consumers value familiar taste, affordability, availability, and dependable quality.",

    purpose:
      "T2M exists to make everyday snacking accessible, enjoyable, hygienic, and reliable. The brand focuses on delivering the flavours consumers already know and love while maintaining consistency in quality, packaging, portion sizes, and food safety — giving consumers a dependable snacking experience every time they pick up a T2M product.",

    whatWeOffer:
      "T2M's portfolio is designed around a diverse range of familiar Indian snacking preferences, offering convenient, affordable, and hygienically processed options for everyday consumption.\n\nThe products are planned in convenient pack sizes, making them suitable for individual consumption, retail counters, impulse purchases, corporate snacking, gifting hampers, and wider distribution — while maintaining consistency in taste, quality, portion size, and food safety.",

    marketFocus:
      "T2M is particularly positioned for consumers in Tier-2, Tier-3, and Tier-4 markets, where affordability, taste, availability, and trust are important purchasing factors. With the right distribution infrastructure, T2M has the potential to expand from regional markets into a wider national network and eventually international markets.",
    distributionChain: ["Distributors", "Wholesalers", "Retailers", "Consumers"],

    differentiators: [
      "Affordable",
      "Convenient",
      "Familiar",
      "Consistent",
      "Hygienically Processed",
      "Retail-Friendly",
      "Mass-Market Suitable",
      "Customised Packaging",
    ],

    vision:
      "To build T2M into a reliable and accessible Indian snacking brand, reaching millions of consumers across India and creating opportunities in global markets.",

    promise: "India's favourite flavours, made for everyday snacking.",

    products: [
      { name: "Classic Roasted Peanuts", category: "Namkeen & Nuts", image: "https://images.unsplash.com/photo-1599490659213-e0b2757c5a91?auto=format&fit=crop&w=800&q=80", desc: "Lightly salted, roasted the traditional way." },
      { name: "Crunchy Millet Mixture", category: "Mixtures", image: "https://images.unsplash.com/photo-1621447504864-d8686f12c84a?auto=format&fit=crop&w=800&q=80", desc: "A wholesome millet-based namkeen blend." },
      { name: "Traditional Murukku", category: "Traditional Snacks", image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?auto=format&fit=crop&w=800&q=80", desc: "Crisp, spiral-shaped rice and lentil snack." },
      { name: "Classic Salted Chips", category: "Potato Chips", image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&w=800&q=80", desc: "Everyday chips, made for everyday snacking." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599490659213-e0b2757c5a91?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1621447504864-d8686f12c84a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&w=900&q=80",
    ],
  },

  {
    id: "brand-3",
    slug: "brand-3",
    number: "03",
    name: "Milletveda",
    tagline: "Ancient Grains. Modern Nourishment.",
    logo: milletvedaLogo,
    colors: {
      primary: "#8B5E34",
      green: "#6B8E4E",
      gold: "#D9A441",
      white: "#FEFEFE",
    },
    heroImage:
      milletvedaLogo,
    cardImage:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Milletveda is a nutrition-focused brand inspired by the natural goodness, versatility, and traditional importance of millets — bringing ancient grains into modern, everyday formats.",

    about:
      "Milletveda is a nutrition-focused brand inspired by the natural goodness, versatility, and traditional importance of millets.\n\nFor generations, millets have been part of Indian food culture. They are traditional grains that have supported communities through their versatility and nutritional value. Milletveda seeks to bring this heritage into the modern food landscape by creating convenient, enjoyable, and contemporary millet-based food choices.\n\nThe brand is built on the idea that traditional ingredients can have a meaningful place in modern lifestyles when they are presented in convenient and appealing formats.",

    philosophy:
      "Milletveda believes that better food choices do not have to be complicated. The brand focuses on making millet-based foods more accessible to today's consumers by combining traditional grains with modern product development, thoughtful recipes, and convenient formats.\n\nRather than treating millets as an occasional alternative, Milletveda aims to make them part of everyday eating by offering familiar, convenient formats that fit naturally into modern routines.",

    standsFor: [
      { title: "Traditional Goodness", desc: "Bringing the heritage of Indian millets into modern food.", icon: "Sprout" },
      { title: "Nutrition", desc: "Focusing on naturally nutrient-rich ingredients.", icon: "HeartPulse" },
      { title: "Innovation", desc: "Exploring new ways to incorporate millets into contemporary food products.", icon: "Lightbulb" },
      { title: "Convenience", desc: "Creating formats suitable for modern consumers and busy lifestyles.", icon: "Clock" },
      { title: "Mindful Eating", desc: "Encouraging consumers to make better everyday food choices.", icon: "Brain" },
      { title: "Sustainability Awareness", desc: "Supporting greater appreciation for traditional grains and responsible food choices.", icon: "Recycle" },
    ],

    whoWeServe:
      "Milletveda is designed for modern consumers who are becoming more conscious of what they eat and are looking for alternatives to conventional food choices.",
    audiences: [
      "Health-conscious consumers",
      "Working professionals",
      "Families",
      "Fitness and wellness-oriented consumers",
      "Consumers seeking millet-based alternatives",
      "Individuals interested in traditional Indian grains",
    ],

    vision:
      "Milletveda aims to become a recognizable millet-based food brand that connects India's traditional grain heritage with the needs of modern consumers. The brand seeks to make millets more approachable, enjoyable, and relevant to everyday lifestyles.",

    promise: "The goodness of traditional grains, made for modern living.",

    products: [
      { name: "Foxtail Millet Flakes", category: "Breakfast Millets", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80", desc: "A light, nutty base for a quick, wholesome breakfast." },
      { name: "Millet Cookies", category: "Snacking", image: "https://images.unsplash.com/photo-1599490659213-e0b2757c5a91?auto=format&fit=crop&w=800&q=80", desc: "Naturally sweetened, baked with a blend of millets." },
      { name: "Ragi Multigrain Mix", category: "Flours & Mixes", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", desc: "Finger millet blended with everyday grains." },
      { name: "Millet Energy Bars", category: "On-the-Go", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80", desc: "A quick, nutrient-dense bite for busy days." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1599490659213-e0b2757c5a91?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80",
    ],
  },

  {
    id: "brand-4",
    slug: "brand-4",
    number: "04",
    name: "Ahaarsutra",
    tagline: "Food with Purpose. Nutrition with Philosophy. Wellness in Every Bite.",
    logo: ahaarsutraLogo,
    accent: "#2B7A5B",
    heroImage:
     ahaarsutraLogo,
    cardImage:
      ahaarsutraLogo,
    description:
      "Ahaarsutra is a wellness-focused food brand built around a simple idea: food should have a purpose — combining nutrition science, purposeful formulation, and mindful eating.",

    about:
      'Ahaarsutra is a wellness-focused food brand built around a simple idea: food should have a purpose.\n\nThe name combines two meaningful concepts — "Ahaar," meaning food, and "Sutra," meaning a guiding principle or philosophy. Together, Ahaarsutra represents a thoughtful approach to food and nutrition.\n\nThe brand brings together nutrition science, purposeful formulation, and mindful eating to develop food solutions that align with different nutritional and lifestyle needs.',

    story:
      "Ahaarsutra believes that nutrition is not one-size-fits-all. Different individuals have different nutritional requirements, lifestyles, preferences, and wellness goals. Therefore, the brand focuses on developing products with a clear nutritional purpose rather than simply creating another snack. Ahaarsutra aims to transform everyday eating into a more intentional experience — helping consumers understand that what we eat can be part of how we care for ourselves.",

    philosophy:
      "Ahaarsutra believes that nutrition is not one-size-fits-all. The brand focuses on developing products with a clear nutritional purpose, transforming everyday eating into a more intentional experience — helping consumers understand that what we eat can be part of how we care for ourselves.",

    approach:
      "Ahaarsutra combines food and nutrition thinking rather than treating them as separate concepts. Its product development approach is informed by inputs from Clinical Nutritionists, Healthcare Practitioners, Fitness Coaches, and other wellness professionals, while formulations are crafted by Food Technologists with a focus on nutritional purpose, ingredient selection, food safety, taste, quality, and convenience.\n\nThe approach follows: Purpose → Expert Inputs → Nutrition → Ingredients → Formulation → Taste → Convenience.",

    whoWeServe:
      "Ahaarsutra is intended for consumers who are increasingly conscious about their health and want food choices that align with their individual wellness goals. It is positioned for people who want to eat with awareness, choose with purpose, and make nutrition part of their everyday lifestyle.",

    vision:
      "To create a trusted wellness food brand that makes purposeful nutrition accessible, convenient, understandable, and enjoyable. Ahaarsutra aims to become a bridge between modern consumers and meaningful nutrition — helping people make better food choices without compromising on taste or convenience.",

    promise: "Food with Purpose. Nutrition with Philosophy. Wellness in Every Bite.",

    // Areas of Focus — used as the "Product Categories" section
    categories: [
      { name: "Diabetes-Conscious Nutrition", desc: "Formulated with ingredients thoughtful to blood sugar management." },
      { name: "Heart-Focused Nutrition", desc: "Purposeful choices to support everyday heart wellness." },
      { name: "Weight Management", desc: "Balanced formulations designed to support healthy weight goals." },
      { name: "Kidney-Conscious Nutrition", desc: "Ingredient selection mindful of kidney health needs." },
      { name: "Gut Wellness", desc: "Formulated to support digestion and everyday gut health." },
      { name: "Liver Wellness", desc: "Nutrition designed with liver-conscious ingredients." },
      { name: "Women's Wellness", desc: "Purposeful nutrition aligned with women's health needs." },
      { name: "Senior Nutrition", desc: "Gentle, nutrient-dense formulations for senior wellness." },
      { name: "Children's Nutrition", desc: "Wholesome, purpose-built nutrition for growing children." },
      { name: "General Lifestyle Wellness", desc: "Everyday nutrition for mindful, balanced living." },
    ],

    products: [
      { name: "Diabetic-Friendly Millet Mix", category: "Diabetes-Conscious Nutrition", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", desc: "A low-GI grain mix formulated for blood-sugar-conscious diets." },
      { name: "Heart-Wellness Nut Blend", category: "Heart-Focused Nutrition", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80", desc: "A curated mix of heart-friendly nuts and seeds." },
      { name: "Gut-Wellness Fiber Mix", category: "Gut Wellness", image: "https://images.unsplash.com/photo-1517093602195-b40af9124025?auto=format&fit=crop&w=800&q=80", desc: "A fiber-rich formulation to support everyday digestion." },
      { name: "Women's Wellness Bar", category: "Women's Wellness", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80", desc: "Nutrient-dense bar formulated for women's everyday wellness needs." },
    ],

    // "What Makes Ahaarsutra Different" — three-column values
    values: [
      { title: "Expert-Led Formulation", desc: "Guided by Clinical Nutritionists, Healthcare Practitioners, and Fitness Coaches at every step." },
      { title: "Purpose Before Product", desc: "Every product starts with a clear nutritional purpose, not just a snacking idea." },
      { title: "Taste Meets Function", desc: "Formulated by Food Technologists to stay enjoyable, safe, and convenient — never a compromise." },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export default brands;