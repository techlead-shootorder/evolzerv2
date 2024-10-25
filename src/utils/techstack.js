import React from "react"

// Web Development Data

const webDevelopment = [
  // Stacks
  {
    name: "LAMP",
    imageUrl:"/images/tech-stack/lampstark.webp",
    navigate: "/web-development/",
    type: "stack",
  },
  {
    name: "MEAN",
    imageUrl:"/images/tech-stack/mean.webp",
    navigate: "/web-development/",
    type: "stack",
  },
  {
    name: "MERN",
    imageUrl: "/images/tech-stack/mern.webp",
    navigate: "/web-development/",
    type: "stack",
  },
  {
    name: "MEVN",
    imageUrl:"/images/tech-stack/mevn.webp",
    navigate: "/web-development/",
    type: "stack",
  },
  // Tools
  {
    name: "PHP",
    imageUrl:"/images/tech-stack/php.png",
    navigate: "/web-development/php",
    type: "tool",
  },
  {
    name: "Python",
    imageUrl:"/images/tech-stack/python.png",
    navigate: "/web-development/python-services",
    type: "tool",
  },
  {
    name: "JavaScript",
    imageUrl:"/images/tech-stack/javascript.webp",
    navigate: "/web-development/",
    type: "tool",
  },
  {
    name: "TypeScript",
    imageUrl:"/images/tech-stack/typescript.webp",
    navigate: "/web-development/",
    type: "tool",
  },
  {
    name: "Perl",
    imageUrl:"/images/tech-stack/perl.webp",
    navigate: "/web-development/",
    type: "tool",
  },
  {
    name: "Bash",
    imageUrl: "/images/tech-stack/Bash.webp",
    navigate: "/web-development/",
    type: "tool",
  },
  {
    name: "Go",
    imageUrl:"/images/tech-stack/go.webp",
    navigate: "/web-development/",
    type: "tool",
  },
  {
    name: "Rust",
    imageUrl:"/images/tech-stack/Rust.webp",
    navigate: "/web-development/",
    type: "tool",
  },
  // Frameworks
  {
    name: "React JS",
    imageUrl:"/images/tech-stack/img1.png",
    navigate: "/web-development/react",
    type: "framework",
  },
  {
    name: "Angular JS",
    imageUrl:"/images/tech-stack/img3.png",
    navigate: "/web-development/angular",
    type: "framework",
  },
  {
    name: "Vue JS",
    imageUrl: "/images/tech-stack/img4.jpg",
    navigate: "/web-development/vue",
    type: "framework",
  },
  {
    name: "Next JS",
    imageUrl:"/images/tech-stack/nexjs.webp",
    navigate: "/web-development/",
    type: "framework",
  },
  // Databases
  {
    name: "MongoDB",
    imageUrl:"/images/tech-stack/mangodb.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "MySQL",
    imageUrl:"/images/tech-stack/mysql.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "PostgreSQL",
    imageUrl:"/images/tech-stack/postgresql.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "SQlite",
    imageUrl: "/images/tech-stack/sql-lite.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "Microsoft Azure SQL Database",
    imageUrl: "/images/tech-stack/sql-azure.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "Oracle Database",
    imageUrl: "/images/tech-stack/oracle.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "IBM",
    imageUrl: "/images/tech-stack/ibm-db.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "Reddis",
    imageUrl: "/images/tech-stack/redis.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "Amazon DynamoDB",
    imageUrl: "/images/tech-stack/amazon-dynamo.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "Amazon RDS",
    imageUrl: "/images/tech-stack/amazon-rds.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "SAP Hana",
    imageUrl:"/images/tech-stack/sap-hana.webp",
    navigate: "/web-development/",
    type: "database",
  },

  // Platforms
  {
    name: "WordPress",
    imageUrl: "/images/tech-stack/wordpress.webp",
    navigate: "/web-development/",
    type: "platform",
  },
  {
    name: "Shopify",
    imageUrl:"/images/tech-stack/shopify.png",
    navigate: "/web-development/shopify",
    type: "platform",
  },
  {
    name: "BigCommerce",
    imageUrl: "/images/tech-stack/bigcommerce.webp",
    navigate: "/web-development/",
    type: "platform",
  },
  {
    name: "Squarespace",
    imageUrl: "/images/tech-stack/squarespace.webp",
    navigate: "/web-development/squarespace",
    type: "platform",
  },
  {
    name: "Wix",
    imageUrl: "/images/tech-stack/wix.webp",
    navigate: "/web-development/squarespace",
    type: "platform",
  },
  {
    name: "Maganto",
    imageUrl:"/images/tech-stack/Magento.webp",
    navigate: "/web-development/squarespace",
    type: "platform",
  },
]

// Filter the data into different categories
export const webDevelopmentStacks = webDevelopment.filter(
  item => item.type === "stack"
)

export const webDevelopmentFrameworks = webDevelopment.filter(
  item => item.type === "framework"
)

export const webDevelopmentTools = webDevelopment.filter(
  item => item.type === "tool"
)

export const webDevelopmentDatabases = webDevelopment.filter(
  item => item.type === "database"
)

export const webDevelopmentPlatforms = webDevelopment.filter(
  item => item.type === "platform"
)
