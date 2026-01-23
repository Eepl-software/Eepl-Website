/**
 * EEPL Projects Data
 * Data-driven architecture for dynamic project rendering
 */

const projectsData = [
  // ============ COMPLETED PROJECTS ============
  {
    id: 1,
    title: "Textile Industry ZLD",
    category: "zld",
    status: "completed",
    client: "Godrej Industries",
    location: "Tamil Nadu, India",
    year: 2023,
    stats: {
      capacity: "5 MLD",
      efficiency: "99.5% Water Recovery",
      energy: "120 kWh/day"
    },
    description: "Full-scale Zero Liquid Discharge implementation with proprietary membrane technology. Achieved industry-leading water recovery rates while meeting all environmental compliance standards.",
    thumbnail: "public/assets/g3.png",
    gallery: [
      "public/assets/g3.png",
      "public/assets/antigravity_cetp_hero.png"
    ],
    tags: ["ZLD", "Membrane Tech", "Water Recovery"]
  },
  {
    id: 2,
    title: "Pharmaceutical CETP",
    category: "cetp",
    status: "completed",
    client: "Cipla Limited",
    location: "Maharashtra, India",
    year: 2022,
    stats: {
      capacity: "10 MLD",
      efficiency: "95% COD Reduction",
      energy: "200 kWh/day"
    },
    description: "Advanced Common Effluent Treatment Plant serving the pharmaceutical cluster. Zero compliance issues for over 5 years of continuous operation.",
    thumbnail: "public/assets/g3.png",
    gallery: [
      "public/assets/g3.png"
    ],
    tags: ["CETP", "Pharma", "Compliance"]
  },
  {
    id: 3,
    title: "Municipal Waste-to-Energy",
    category: "wte",
    status: "completed",
    client: "Municipal Corporation",
    location: "Karnataka, India",
    year: 2023,
    stats: {
      capacity: "100 TPD",
      efficiency: "5MW Power Output",
      energy: "Net Positive"
    },
    description: "Generating 5MW power from municipal solid waste using advanced incineration technology. A landmark project in sustainable waste management.",
    thumbnail: "public/assets/g3.png",
    gallery: [
      "public/assets/g3.png"
    ],
    tags: ["Waste-to-Energy", "Municipal", "Power"]
  },
  {
    id: 4,
    title: "Food Processing ETP",
    category: "etp",
    status: "completed",
    client: "ITC Limited",
    location: "Andhra Pradesh, India",
    year: 2021,
    stats: {
      capacity: "3 MLD",
      efficiency: "98% BOD Reduction",
      energy: "80 kWh/day"
    },
    description: "Customized Effluent Treatment Plant for food processing industry with specialized organic waste handling and biogas recovery.",
    thumbnail: "public/assets/g3.png",
    gallery: [
      "public/assets/g3.png"
    ],
    tags: ["ETP", "Food Industry", "Biogas"]
  },
  {
    id: 5,
    title: "IT Park STP",
    category: "stp",
    status: "completed",
    client: "Prestige Group",
    location: "Bangalore, India",
    year: 2022,
    stats: {
      capacity: "2 MLD",
      efficiency: "100% Water Recycling",
      energy: "50 kWh/day"
    },
    description: "State-of-the-art Sewage Treatment Plant with complete water recycling for landscaping and flushing. Green building certification compliant.",
    thumbnail: "public/assets/g3.png",
    gallery: [
      "public/assets/g3.png"
    ],
    tags: ["STP", "Green Building", "Recycling"]
  },

  // ============ ONGOING PROJECTS ============
  {
    id: 101,
    title: "Karnataka Mega CETP",
    category: "cetp",
    status: "ongoing",
    completion: 65,
    client: "State Government of Karnataka",
    location: "Karnataka, India",
    expectedCompletion: "Q3 2026",
    phases: [
      { name: "Design & Engineering", status: "done", icon: "📐" },
      { name: "Civil Construction", status: "in-progress", icon: "🏗️" },
      { name: "Equipment Installation", status: "pending", icon: "⚙️" },
      { name: "Commissioning", status: "pending", icon: "🚀" }
    ],
    description: "Mega Common Effluent Treatment Plant serving the industrial corridor. Currently in civil construction phase with advanced membrane bioreactor technology.",
    thumbnail: "public/assets/antigravity_cetp_hero.png",
    gallery: [
      "public/assets/antigravity_cetp_hero.png"
    ],
    tags: ["CETP", "Government", "MBR"]
  },
  {
    id: 102,
    title: "Textile Cluster ZLD Expansion",
    category: "zld",
    status: "ongoing",
    completion: 40,
    client: "KIADB",
    location: "Doddaballapur, Karnataka",
    expectedCompletion: "Q1 2027",
    phases: [
      { name: "Design & Engineering", status: "done", icon: "📐" },
      { name: "Civil Construction", status: "in-progress", icon: "🏗️" },
      { name: "MVRE Installation", status: "pending", icon: "⚙️" },
      { name: "Testing & Commissioning", status: "pending", icon: "🚀" }
    ],
    description: "Expansion of existing ZLD facility with Multi-Effect Mechanical Vapor Recompression Evaporator. Targeting 99.8% water recovery.",
    thumbnail: "public/assets/g3.png",
    gallery: [
      "public/assets/g3.png"
    ],
    tags: ["ZLD", "Expansion", "MVRE"]
  },
  {
    id: 103,
    title: "Pharma Park STP + RO",
    category: "stp",
    status: "ongoing",
    completion: 25,
    client: "BIAL",
    location: "Bangalore, India",
    expectedCompletion: "Q4 2026",
    phases: [
      { name: "Design & Engineering", status: "in-progress", icon: "📐" },
      { name: "Civil Construction", status: "pending", icon: "🏗️" },
      { name: "RO System Setup", status: "pending", icon: "⚙️" },
      { name: "Commissioning", status: "pending", icon: "🚀" }
    ],
    description: "New Sewage Treatment Plant with integrated Reverse Osmosis for high-quality recycled water. Designed for pharma-grade water reuse.",
    thumbnail: "public/assets/g3.png",
    gallery: [
      "public/assets/g3.png"
    ],
    tags: ["STP", "RO", "Pharma Grade"]
  }
];

// Category definitions for filters
const projectCategories = [
  { id: "all", label: "All Projects", icon: "🌐" },
  { id: "etp", label: "ETP", icon: "🏭" },
  { id: "stp", label: "STP", icon: "🚿" },
  { id: "cetp", label: "CETP", icon: "🏗️" },
  { id: "zld", label: "ZLD", icon: "💧" },
  { id: "wte", label: "Waste-to-Energy", icon: "⚡" }
];

// Export for use in projects.html
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projectsData, projectCategories };
}
