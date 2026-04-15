import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Bot, User, ArrowRight } from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'
const SF_ORG = '00D5i00000Cvxdu'

// Knowledge base - will be populated with Salesforce data
const knowledge = {
  "what is salesforce": "Salesforce is the world's leading cloud-based CRM platform that helps businesses manage sales, service, marketing, and commerce operations. It serves over 150,000 companies worldwide and generated $41.45 billion in revenue in fiscal year 2026, with an ecosystem projected to create $2 trillion in economic value by 2028.",
  "what is agentforce": "Agentforce is Salesforce's autonomous AI agent platform that enables organizations to build, customize, and deploy AI agents for sales, service, marketing, and commerce. Unlike traditional chatbots, Agentforce agents use generative AI and the Atlas Reasoning Engine to independently execute multi-step workflows, make decisions, and take actions across Salesforce clouds.",
  "how does agentforce work": "Agentforce works through Topics (defining what jobs agents handle) and Actions (the tools agents use to complete those jobs). When a customer or user interacts with an agent, the Atlas Reasoning Engine identifies the relevant topic, retrieves data from CRM and Data Cloud, reasons through the best approach, and executes actions autonomously.",
  "what is the atlas reasoning engine": "The Atlas Reasoning Engine is the \"brain\" behind Agentforce, using a Reason-Act-Observe (ReAct) loop to simulate human thinking and planning. It includes a Planner, Action Selector, Tool Execution Engine, Memory Module, Reflection Module, and State Tracker that work together to analyze data, generate plans, and refine approaches until confident in delivering results.",
  "how does atlas reasoning engine prevent hallucinations": "Atlas prevents hallucinations by prompting LLMs to share their reasoning behind each action, providing visibility into behavior so admins can fine-tune agents. It uses advanced RAG (Retrieval Augmented Generation) to ground responses in real data, and its Reflection Module allows it to retry and refine actions when initial results aren't satisfactory.",
  "what are agentforce use cases": "Agentforce use cases span customer service automation (60-90% case deflection), sales development (24/7 lead qualification), order management, IT ticket routing, finance approvals, healthcare scheduling, property matching, and retail personalization. In 2026, Agentforce touches nearly every role that uses Salesforce, from sales reps and marketers to service agents and executives.",
  "what is agentforce service agent": "Agentforce Service Agent is a conversational AI agent that operates 24/7 across self-service portals and messaging channels to handle customer service tasks autonomously. It retrieves customer data from CRM, Data Cloud, and other integrated systems to provide personalized responses, and only escalates to human agents for complex cases with full context prepared.",
  "how to set up agentforce service agent": "To set up Agentforce Service Agent, use the guided setup wizard in Salesforce to create an agent, then associate Topics that define the scope of jobs it can handle. Configure Actions (using Flows, Apex, or APIs) for each topic, set guardrails for escalation rules, and deploy to your preferred channels like web chat, messaging, or self-service portals.",
  "what is agentforce sdr agent": "Agentforce SDR Agent is a digital sales assistant that manages lead qualification, answers initial prospect questions, conducts personalized outreach, and schedules meetings on sellers' behalf. It operates 24/7 across email, web chat, Slack, and WhatsApp, using the Atlas Reasoning Engine to understand buying intent and Einstein AI to score leads in real-time.",
  "agentforce sdr agent features": "Key features include automated lead scoring and qualification, multi-channel communication (email, chat, Slack, WhatsApp), calendar integration with Outlook and Google for meeting scheduling, automated follow-ups based on prospect behavior, multi-language support, and objection handling with alternative responses. It sends conversation summaries to sales reps for seamless handoffs.",
  "what is agentforce sales coach": "Agentforce Sales Coach provides personalized AI-powered role-play sessions for sales teams, using Salesforce data and generative AI to help sellers practice pitches and handle objections tailored to specific deals. It helps reps improve their skills without requiring manager time for one-on-one coaching sessions.",
  "what is agentforce personal shopper": "Agentforce Personal Shopper acts as a digital concierge on ecommerce sites or messaging apps, offering personalized product recommendations and assisting with search queries. It uses customer data and purchase history to deliver tailored shopping experiences that increase conversion rates and average order values.",
  "what is agentforce campaign optimizer": "Agentforce Campaign Optimizer automates the full marketing campaign lifecycle, using AI to analyze business goals, generate campaign content, personalize messaging, and optimize performance. It helps marketers create more effective campaigns with less manual effort by leveraging data from across the Salesforce ecosystem.",
  "agentforce agent types list": "Agentforce offers several pre-built agent types: Service Agent (customer support), SDR Agent (lead qualification and outreach), Sales Coach (rep training), Personal Shopper (ecommerce assistance), Campaign Optimizer (marketing automation), Merchant (commerce operations), and Buyer Agent (procurement). Custom agents can also be built using Agent Builder.",
  "agentforce pricing": "Agentforce uses Flex Credits pricing where each standard action costs $0.10 (20 credits) and voice actions cost $0.15 (30 credits), with credits purchased at $500 per 100,000. Alternatively, the Conversations model charges $2 per conversation and is more cost-effective when average conversations involve 20+ actions. Every org gets 250 free Flex Credits to start.",
  "agentforce pricing model explained": "Agentforce offers three payment options: pay-as-you-go, pre-commit, and pre-purchase Flex Credits. For teams wanting predictable costs, Agentforce Add-ons provide unlimited usage for a flat per-user fee. The top-tier Einstein 1 Sales edition at $550/user/month includes Agentforce capabilities built in.",
  "how much does agentforce cost per conversation": "Under the Conversations pricing model, Agentforce costs $2 per conversation. This model is more cost-effective when your average conversation involves more than 20 actions, since 20 actions at $0.10 each via Flex Credits also equals $2.00. Organizations should analyze their typical interaction complexity to choose the best pricing model.",
  "agentforce roi case studies": "Wiley achieved 213% ROI with Agentforce and 40%+ improvement in self-service efficiency. A B2B financial services firm generated $19.2M in additional pipeline annually and $3.46M in closed revenue. Salesforce's own Agentforce handled 380,000+ support interactions and resolved 84% of cases autonomously.",
  "agentforce roi statistics": "The average return on AI customer service is $3.50 per $1 spent, with top performers hitting 8x returns. ROI compounds over time: 41% in year one, 87% in year two, and 124%+ by year three. Speed-to-lead improvement (from 4 hours to 45 seconds) accounts for more than half of conversion rate improvements.",
  "agentforce implementation best practices": "Start with a pilot focused on a simple, well-defined use case like password resets or order tracking to show value quickly. Ensure clean, well-structured data as the foundation, use precise instructions for NLP-based actions, and always check if standard actions exist before building custom ones. Treat implementation as iterative, not a one-time setup.",
  "agentforce implementation how long": "A basic Agentforce implementation can be completed in 2-4 weeks for a focused use case like service case deflection. More complex multi-agent deployments across sales, service, and marketing typically take 2-3 months. Starting with a controlled pilot and gradually expanding to more complex use cases is the recommended approach.",
  "agentforce security and trust": "Agentforce is protected by the Einstein Trust Layer, which includes data masking, TLS encryption, zero data retention with LLMs, toxicity detection, and prompt defense against injection attacks. Guardrails set operational boundaries to prevent misuse and policy violations, and an audit trail tracks every prompt through each step of its journey.",
  "agentforce vs microsoft copilot": "Agentforce works as a digital worker that independently executes multi-step workflows, while Microsoft Copilot functions as a digital assistant that enhances productivity with human confirmation required before actions. Agentforce excels in CRM-focused tasks resolving 90% of queries autonomously, while Copilot integrates natively with Microsoft 365, Teams, and Dynamics 365.",
  "agentforce vs copilot which is better": "Agentforce is better for organizations already using Salesforce who need autonomous CRM workflow automation across sales, service, and marketing. Microsoft Copilot is better for companies embedded in the Microsoft 365 ecosystem who want AI-assisted productivity across Office apps, Teams, and SharePoint. The choice depends on your existing tech stack and automation needs.",
  "how to build custom agentforce agent": "Use Agentforce Builder to create custom agents by defining Topics (scope of work), writing natural language Instructions, and configuring Actions (Flows, Apex, APIs). Test with the Agent Tester to simulate conversations and examine the Reasoning Log to see which topics and actions the agent selects. Refine instructions iteratively based on test results.",
  "agentforce guardrails": "Agentforce guardrails set operational boundaries as dynamic safeguards that prevent misuse, policy violations, and unintended outputs. You can require human approval for actions with financial, legal, or customer-facing consequences. The Einstein Trust Layer adds toxicity detection, content filtering, data masking, and prompt defense to form a critical line of defense.",
  "what is sales cloud": "Sales Cloud is Salesforce's CRM solution for sales teams that manages leads, opportunities, accounts, contacts, and the entire sales pipeline. It includes AI-powered features like Einstein Lead Scoring, Pipeline Inspection, Revenue Intelligence, and Agentforce SDR to help reps close deals faster and forecast revenue more accurately.",
  "sales cloud pricing": "Sales Cloud pricing starts at $25/user/month for Starter Suite, $100/user/month for Pro Suite, $175/user/month for Enterprise, $350/user/month for Unlimited, and $550/user/month for Einstein 1 Sales (includes Agentforce). All plans require annual billing, and additional costs may apply for add-ons like CPQ and Territory Management.",
  "sales cloud einstein features": "Sales Cloud Einstein includes Lead Scoring (1-99 scores based on conversion likelihood), Opportunity Scoring, Activity Capture (auto-logs emails/calendar events), Automated Contacts, Einstein Insights (follow-up reminders), AI-powered Forecasting, Sales Assistant (side panel summaries), personalized Sales Emails generation, and Call Summaries with automatic transcription.",
  "what is einstein lead scoring": "Einstein Lead Scoring uses machine learning to assign scores from 1-99 to leads based on their likelihood to convert, analyzing historical conversion patterns and customer data. It automatically prioritizes high-potential leads for sales reps, helping them focus their time on the most promising opportunities rather than manually evaluating every lead.",
  "what is pipeline inspection": "Pipeline Inspection gives sales managers and reps centralized visibility into their pipeline with key metrics, AI insights, data visualization, and inline editing. It tracks pipeline changes over time with visual indicators for deal amount, stage, opportunity score, and close date changes, helping teams identify at-risk deals and forecast revenue accurately.",
  "what is revenue intelligence": "Revenue Intelligence is a Sales Cloud add-on that enhances Pipeline Inspection with AI-powered deal scoring (0-100), flow charts showing deal movement, and advanced analytics. It helps sales managers understand deal health, identify pipeline trends, and make data-driven coaching decisions using Einstein AI predictions and insights.",
  "what is salesforce cpq": "Salesforce CPQ (Configure, Price, Quote) automates product configuration, pricing calculations, and quote generation for complex sales. It supports guided selling, bundling rules, volume/regional pricing, automated discounts, and professional PDF/Word quote generation. CPQ pricing starts at $75/user/month with implementation costs typically ranging from $50,000 to $250,000.",
  "salesforce cpq end of sale": "Salesforce has announced CPQ End of Sale in 2026, meaning the traditional CPQ product is being transitioned to a newer revenue lifecycle management solution. Organizations currently using CPQ should plan their migration strategy to Salesforce's updated quoting and billing capabilities to avoid disruption.",
  "sales cloud vs hubspot": "Sales Cloud excels in customization, enterprise analytics, and AI-powered automation (Agentforce), making it ideal for complex sales organizations. HubSpot offers faster deployment (2-4 weeks vs 3-6 months), better ease of use, and lower cost, making it better for small-to-mid-size marketing-led teams. HubSpot has a free tier while Salesforce starts at $25/user/month.",
  "sales cloud vs microsoft dynamics 365": "Sales Cloud offers maximum flexibility through customization and the AppExchange ecosystem, with more powerful AI via Agentforce. Microsoft Dynamics 365 shines with native integration into Outlook, Teams, and SharePoint, scoring 100 vs Salesforce's 86 for communication features. Dynamics is ideal for Microsoft-embedded organizations with hybrid cloud/on-premises needs.",
  "sales cloud vs zoho crm": "Zoho CRM delivers the most features per dollar at every pricing tier, with its Enterprise plan ($40/user/month) including AI predictions, advanced automation, and territory management that Salesforce charges $165+/user/month for. However, Salesforce offers superior customization, a larger ecosystem (7,000+ AppExchange apps), and more powerful enterprise AI capabilities.",
  "what is service cloud": "Service Cloud is Salesforce's customer service platform that manages cases, provides omni-channel support, and enables field service operations. It includes features like Omni-Channel Routing, Knowledge Base, Einstein Case Classification, Field Service, and Agentforce Service Agent to help support teams resolve issues faster and improve customer satisfaction.",
  "service cloud pricing": "Service Cloud follows the same edition pricing as Sales Cloud: Starter Suite at $25/user/month, Pro Suite at $100/user/month, Enterprise at $175/user/month, and Unlimited at $350/user/month. Additional costs apply for add-ons like Field Service ($150/user/month), Digital Engagement, and Service Cloud Einstein features.",
  "what is omni-channel routing": "Omni-Channel Routing in Service Cloud automatically routes customer interactions to the right agent based on availability, capacity, skills, and priority. It supports queue-based and skills-based routing across channels like chat, email, phone, and messaging, ensuring customers connect with the right person for quick resolution without manual assignment.",
  "how to set up omni-channel routing": "Enable Omni-Channel from Setup, then configure four key components: Service Channels (turn Salesforce objects into work items), Routing Configurations (set priority and capacity rules), Presence Configurations (manage agent availability statuses), and Queue Associations. Finally, add the Omni-Channel widget to your Service Console app.",
  "what is field service lightning": "Salesforce Field Service (formerly Field Service Lightning) manages mobile workforce operations including work order management, intelligent scheduling, real-time dispatching, and mobile technician support. It features AI-powered schedule optimization, geolocation navigation, asset tracking, image recognition for equipment identification, and proactive maintenance capabilities.",
  "field service lightning features": "Key features include automated work order scheduling based on location, skills, and availability; iOS/Android mobile apps for technicians; Einstein AI image recognition for asset identification; real-time field operations analytics; geolocation routing for optimal paths; and proactive service capabilities for preventive maintenance based on asset condition.",
  "what is einstein case classification": "Einstein Case Classification uses machine learning and NLP to analyze incoming case subject, description, and channel to automatically populate case record fields. It trains on your organization's last six months of closed cases to predict picklist and checkbox values, reducing manual categorization work and helping agents focus on complex issues.",
  "how does einstein case classification work": "When a new case is created, Einstein analyzes the subject and description using ML models trained on your historical closed cases. It recommends or auto-populates picklist and checkbox field values, with performance tracked through Top 3 Recommendations and Top Recommendation charts showing how often predictions match final values at case closure.",
  "salesforce knowledge base setup": "Enable Lightning Knowledge in Setup, assign Knowledge User licenses, then plan your content organization by defining record types for different article categories. Create data category groups to control article visibility, establish authoring guidelines, and enable article feedback (thumbs up/down or stars) to identify the most helpful content.",
  "salesforce knowledge base best practices": "Organize articles by audience type and experience level, establish clear authoring guidelines, and create different record types for distinct content categories. Set up regular audit schedules with subject matter experts, use analytics to identify underperforming content, and enable user feedback to surface the most relevant articles. Note: once Knowledge is enabled, it cannot be disabled.",
  "what is marketing cloud": "Marketing Cloud is Salesforce's digital marketing platform for creating personalized customer journeys across email, SMS, social, ads, and web channels. It includes Journey Builder for automated campaigns, Einstein AI for send time optimization and engagement scoring, and deep integration with Sales Cloud and Service Cloud for unified customer experiences.",
  "marketing cloud pricing": "Marketing Cloud pricing varies by product: Marketing Cloud Engagement (email/journey) starts around $1,250/month for the Basic tier. Marketing Cloud Account Engagement (Pardot) starts at $1,250/month for the Growth tier. Marketing Cloud Personalization and Intelligence are priced separately. Contact Salesforce for exact quotes based on contact volume and feature needs.",
  "what is journey builder": "Journey Builder is Marketing Cloud's visual drag-and-drop tool for creating automated, personalized customer journeys across multiple channels. It supports email, SMS, push notifications, and ads with entry sources, wait steps, decision splits, path optimizer, and dynamic content based on individual behaviors, preferences, and demographics.",
  "journey builder examples": "Common Journey Builder examples include: cart abandonment (email reminder after 1 hour, SMS after 24 hours), welcome series (onboarding emails for new subscribers), post-purchase journeys (thank you email plus personalized product recommendations), and re-engagement campaigns (win-back sequences for inactive customers across email and social ads).",
  "what is marketing cloud account engagement pardot": "Marketing Cloud Account Engagement (formerly Pardot) is Salesforce's B2B marketing automation platform for lead generation, nurturing, and scoring. It features email campaign automation with 36+ templates, drip campaigns triggered by prospect behavior, lead scoring based on engagement and demographics, and native integration with Sales Cloud through the Lightning Experience interface.",
  "pardot features": "Key Pardot features include email marketing with customizable templates, automated drip campaigns, lead scoring and grading, progressive profiling forms, landing page builder, ROI reporting, CRM integration with Sales Cloud, Einstein AI capabilities for automation, Data Cloud integration, and enhanced deduplication tools introduced in recent updates.",
  "what is einstein send time optimization": "Einstein Send Time Optimization (STO) uses machine learning to determine the best time to send messages to each individual subscriber based on 90 days of email engagement data. It analyzes when each person is most likely to engage and sends within your selected time window (such as a 12-hour period), maximizing open and click rates.",
  "marketing cloud einstein features": "Marketing Cloud Einstein includes Send Time Optimization (best send times per subscriber), Engagement Frequency (ideal number of communications to prevent fatigue), Content Selection (most relevant content per person), Copy Insights (subject line performance analysis), and Engagement Scoring (predicting likelihood of message engagement based on historical interactions).",
  "what is salesforce flow builder": "Flow Builder is Salesforce's visual no-code tool for automating business processes using a drag-and-drop interface. It can run in the background, respond to data changes, or guide users through on-screen steps. Flow types include Record-Triggered Flows, Schedule-Triggered Flows, Screen Flows, and Autolaunched Flows for different automation needs.",
  "flow builder use cases": "Common Flow Builder use cases include automatic lead qualification and routing based on industry or deal size, customer onboarding orchestration across departments, case escalation and reassignment, opportunity renewal creation when deals close, data validation and enrichment, cross-team handoffs from marketing to sales, and automated notification sequences.",
  "flow builder vs process builder": "Flow Builder has replaced Process Builder and Workflow Rules as Salesforce's recommended automation tool. All Process Builder and Workflow Rules should be migrated to Flow Builder, which offers more powerful capabilities including screen flows for user interaction, sub-flows for reusability, and better debugging and testing tools.",
  "what are lightning web components": "Lightning Web Components (LWC) is Salesforce's modern framework for building custom UI components using standard HTML, JavaScript, and CSS. Built on native web standards, LWC is lightweight and high-performance, coexisting with legacy Aura components. It includes base components following the Lightning Design System for consistent user experiences.",
  "lwc vs aura components": "LWC uses modern web standards (Web Components, Shadow DOM) and runs natively in browsers for better performance, while Aura is Salesforce's older proprietary framework. LWC is the recommended approach for all new development. Both can coexist and interoperate on the same page, and LWC components can be embedded within Aura components.",
  "what is salesforce data cloud": "Salesforce Data Cloud (renamed Data 360 in October 2025) is Salesforce's real-time customer data platform that unifies data across Sales, Service, Marketing, and Commerce Cloud into a single customer profile. It features zero-copy architecture, 200+ pre-built connectors, real-time data processing, and native Einstein AI integration for predictive analytics.",
  "data cloud features": "Key Data Cloud features include real-time customer profile updates, zero-copy architecture (access data without moving it), 200+ pre-built connectors (SAP, Shopify, Zendesk, Workday), Data Streams for real-time ingestion, identity resolution for unified profiles, segmentation for audience building, and native AI integration with Einstein for predictions and activation.",
  "data cloud vs traditional cdp": "Data Cloud differentiates from traditional CDPs through its zero-copy architecture that eliminates data duplication, native integration with the entire Salesforce ecosystem, and real-time processing capabilities. It's recognized as a Leader in Gartner and Forrester evaluations alongside Treasure Data and Adobe Real-Time CDP for enterprise deployments.",
  "what is mulesoft": "MuleSoft is Salesforce's integration and API management platform that connects any application, data source, or device through API-led connectivity. It provides 450+ pre-built connectors, the Anypoint Platform for building and managing APIs, DataWeave for data transformation, and enterprise-grade security with OAuth 2.0, JWT, and TLS encryption.",
  "mulesoft features": "Key MuleSoft features include API-led connectivity with reusable APIs, 450+ pre-built connectors, DataWeave data transformation language, Visual Builder (no-code interface), event-driven real-time processing, Intelligent Document Processing (IDP) for PDFs and images, and the Anypoint Platform for secure API development, deployment, and management at scale.",
  "mulesoft vs other integration tools": "MuleSoft's advantage is its native Salesforce integration, API-led architecture for building reusable API networks, and enterprise-grade governance. It's best for large organizations with complex multi-system landscapes. Alternatives like Zapier or Workato may be more cost-effective for simpler integrations, but MuleSoft excels at scale and security.",
  "what is salesforce commerce cloud": "Commerce Cloud is Salesforce's ecommerce platform supporting both B2C and B2B commerce with AI-powered features. B2C capabilities include intent-based search, biometric authentication, and AI product discovery. B2B features include account-specific storefronts, negotiated pricing, and complex checkout with PO payments and credit terms.",
  "commerce cloud b2b vs b2c": "B2C Commerce focuses on individual consumer experiences with features like cart abandonment recovery, personalized recommendations, and simple checkout. B2B Commerce handles complex business requirements including account-specific product catalogs, negotiated pricing, purchase orders, credit terms, and multi-level approval workflows. Both share the same underlying platform.",
  "commerce cloud ai features 2026": "In 2026, Commerce Cloud is introducing intent-based search (beyond keywords), AI-powered merchandising tools, and product catalog discoverability for third-party AI platforms like ChatGPT, Gemini, and Claude. Out-of-the-box analytics track AI-driven traffic and conversions, with in-line checkout enabling direct purchases from AI platforms.",
  "what is tableau crm analytics": "Tableau and CRM Analytics are complementary Salesforce analytics products. CRM Analytics provides AI-powered insights embedded directly within Salesforce records, while Tableau is an end-to-end enterprise analytics platform for broader business intelligence. CRM Analytics excels at CRM-specific insights with native actions, while Tableau handles cross-platform data visualization.",
  "tableau crm features": "CRM Analytics features include embedded visual insights and AI predictions on Salesforce record pages, native action menus for scheduling meetings or launching campaigns from insights, Slack integration for sharing analytics, Einstein ML predictions in reports, and the ability to pull data from multiple Salesforce environments and external sources.",
  "why use salesforce benefits": "Salesforce provides a single source of truth across all departments, AI-powered automation that saves hours of manual work weekly, data-driven forecasting, and scalable infrastructure that grows with your business. In 2026, companies using Salesforce benefit from Agentforce AI agents, real-time Data Cloud analytics, and 7,000+ AppExchange integrations.",
  "salesforce benefits for small business": "Small businesses benefit from Salesforce's Starter Suite ($25/user/month) which includes basic sales, marketing, service, and commerce features. It provides contact management, email integration, lead tracking, and customizable dashboards without requiring technical expertise. The free Salesforce Starter trial lets you test features before committing.",
  "salesforce benefits for enterprise": "Enterprise organizations benefit from Salesforce's unlimited customization, advanced AI with Agentforce, multi-cloud integration (Sales + Service + Marketing + Data Cloud), industry-specific solutions, and the AppExchange ecosystem. Forrester found enterprises achieve 417% ROI over three years, with AI-powered CRM delivering 30% ROI versus 20% for traditional systems.",
  "salesforce implementation timeline": "A basic Salesforce implementation takes 3-6 months for mid-size organizations, with simple deployments possible in 4-8 weeks. Complex enterprise implementations with multiple clouds, integrations, and data migration can take 6-12 months or longer. Using a phased approach and starting with core functionality before adding complexity is recommended.",
  "salesforce implementation cost": "Implementation costs vary widely: small businesses may spend $5,000-$25,000, mid-size companies $25,000-$100,000, and enterprises $100,000-$500,000+. Costs include licensing, implementation partner services, data migration, customization, training, and ongoing administration. Budget for 1.5-3x the annual license cost for initial implementation.",
  "salesforce implementation mistakes": "Top mistakes include neglecting data quality before migration, under-investing in user training, over-customizing instead of using native features, lacking clear business objectives, insufficient executive sponsorship, attempting implementation without experienced partners, and underestimating total costs including integrations and ongoing maintenance.",
  "salesforce data migration best practices": "Start with a thorough data audit (reduces scope 20-30%), clean and deduplicate data before migration, create detailed field mapping documents, and migrate in structured sequence (Users then Accounts then Contacts then Opportunities). Use external IDs for relationship preservation, test thoroughly in sandbox before production, and validate completeness post-migration.",
  "salesforce data migration steps": "Key steps: 1) Audit and assess current data, 2) Define project scope and timeline, 3) Clean, deduplicate, and validate data, 4) Create detailed mapping documents, 5) Build data model with consistent naming conventions, 6) Migrate in sandbox first, 7) Execute production migration in sequence, 8) Validate data completeness and relationships, 9) Train users on new structures.",
  "salesforce data migration timeline": "Data migration typically takes 2-8 weeks depending on data volume, complexity, and number of source systems. Simple migrations from one CRM may take 2-3 weeks, while complex migrations from multiple legacy systems with extensive data cleaning can take 2-3 months. Allow sufficient time for testing, which often requires multiple rounds.",
  "salesforce user adoption strategies": "Drive adoption through executive sponsorship (leaders should use Salesforce daily), contextual in-app training rather than manuals, role-specific configurations tailored to different user groups, clear success metrics (login frequency, record updates, report usage), and incentive programs rewarding positive behaviors like accurate case logging.",
  "salesforce user adoption tips": "Key tips: bring training inside Salesforce with guided learning, create user personas to understand different role needs, involve all user groups in UAT testing, establish adoption metrics and gather regular feedback, incentivize early adopters with recognition or rewards, and treat adoption as a continuous cycle of validation, enablement, measurement, and optimization.",
  "salesforce user adoption rate": "Average Salesforce adoption rates range from 26% to 70% across organizations, with best-in-class companies achieving 90%+ adoption. Low adoption is the primary reason CRM projects fail. Organizations that invest in change management, training, and executive sponsorship see adoption rates 2-3x higher than those that don't.",
  "how to choose salesforce edition": "Consider five key factors: business size and user count, required features (automation, reporting, AI), customization needs (Enterprise+ for advanced customization), scalability for future growth, and budget. Start with a free trial of your top choices, and remember that upgrading editions is easier than downgrading.",
  "salesforce edition comparison": "Starter Suite ($25/user/month): basic CRM for up to 10 users. Pro Suite ($100/user/month): growing businesses with forecasting and collaboration tools. Enterprise ($175/user/month): larger businesses with workflow automation and advanced reporting. Unlimited ($350/user/month): all features plus 24/7 support. Einstein 1 ($550/user/month): includes Agentforce AI.",
  "salesforce starter vs pro suite": "Starter Suite ($25/user/month) provides basic CRM with lead and opportunity management for up to 10 users. Pro Suite ($100/user/month) adds forecasting, customizable reports, collaboration tools, greater customization options, and supports more users, making it suitable for growing businesses that have outgrown basic CRM functionality.",
  "salesforce enterprise vs unlimited": "Enterprise ($175/user/month) includes workflow automation, approval processes, advanced reporting, and API access for up to 500 users. Unlimited ($350/user/month) adds unlimited custom apps, 24/7 premier support, full sandbox, and higher API/storage limits. Choose Unlimited if you need extensive customization, premium support, or are approaching Enterprise limits.",
  "salesforce roi statistics": "Forrester found companies see 417% ROI on Salesforce investments over three years. The average ROI period is 13 months with 70% average ROI. Nucleus Research reports CRM delivers $8.71 for every dollar spent when properly adopted. AI-powered CRM shows 30% ROI potential versus 20% for traditional systems.",
  "salesforce roi how to measure": "Measure Salesforce ROI by tracking: revenue growth attributed to CRM, sales cycle reduction time, lead conversion rate improvements, customer retention rates, time saved on manual tasks, case resolution time decreases, and forecast accuracy improvements. Compare these metrics against total cost of ownership including licenses, implementation, training, and administration.",
  "salesforce vs hubspot": "Salesforce offers superior customization, enterprise AI (Agentforce), and 7,000+ AppExchange apps but requires more implementation time (3-6 months) and costs more ($175+/user/month for Enterprise). HubSpot deploys in 2-4 weeks, offers better ease of use, has a free CRM tier, and is ideal for marketing-led small-to-mid-size businesses.",
  "salesforce vs microsoft dynamics 365": "Salesforce leads in CRM customization and AI capabilities with Agentforce, while Dynamics 365 excels in Microsoft ecosystem integration (Outlook, Teams, SharePoint) and offers hybrid cloud/on-premises options. Dynamics scored 100 vs Salesforce's 86 for communication features. Choose based on your existing tech ecosystem and integration requirements.",
  "salesforce vs zoho crm": "Zoho CRM offers the best value at $40/user/month for Enterprise (vs Salesforce at $175+), including AI predictions, advanced automation, and territory management. Salesforce offers a much larger ecosystem, more powerful customization, and superior enterprise AI with Agentforce. Zoho is best for budget-conscious SMBs while Salesforce suits enterprises.",
  "salesforce vs pipedrive": "Pipedrive offers the fastest setup and highest rep adoption for sales-first teams with simple, visual pipeline management. Salesforce provides far more comprehensive functionality across sales, service, marketing, and commerce with advanced AI and customization. Choose Pipedrive for small sales teams prioritizing simplicity; Salesforce for scalable enterprise needs.",
  "salesforce vs freshsales": "Freshsales (by Freshworks) offers a more affordable, easier-to-use CRM with built-in phone, email, and chat. Salesforce provides vastly more customization, a larger app ecosystem, and more powerful AI and automation capabilities. Freshsales suits small businesses wanting quick setup; Salesforce is better for organizations needing enterprise-grade CRM.",
  "salesforce total cost of ownership": "Total Salesforce cost includes: per-user licensing ($25-$550/user/month), implementation services ($5K-$500K+), data migration, training, AppExchange apps, add-ons (CPQ, Field Service), premium support, storage overages ($125/month per 500MB data, $5/month per GB files), and ongoing admin resources. Users switching to alternatives report 42% lower TCO.",
  "salesforce api limits": "API limits depend on edition and license count: Professional Edition gets fewer daily API calls, Enterprise Edition provides a moderate allocation, and Unlimited/Performance Editions offer the most generous limits. Bulk API and Bulk API 2.0 have separate limits for high-volume operations. Use the Limits REST API resource to monitor current consumption.",
  "salesforce storage limits": "Data storage: Professional Edition gets 1 GB + 20 MB/user, Enterprise gets 1 GB + 120 MB/user, Unlimited/Performance get 40 GB base + higher per-user amounts. File storage is typically 10 GB per org (1 GB for Starter). Extra storage costs $125/month per 500 MB (data) and $5/month per GB (files).",
  "salesforce security features": "Salesforce provides enterprise-grade security including multi-factor authentication (MFA), role-based access control, field-level security, IP restrictions, encryption at rest and in transit, Shield Platform Encryption, Event Monitoring, and audit trails. The Einstein Trust Layer adds AI-specific protections including data masking, toxicity detection, and zero data retention with LLMs.",
  "salesforce compliance certifications": "Salesforce maintains SOC 2 Type II, ISO 27001, PCI DSS, and other compliance certifications. It supports HIPAA compliance with Business Associate Agreements for Health Cloud and Service Cloud. GDPR compliance is supported through Binding Corporate Rules for cross-border transfers. Visit compliance.salesforce.com for complete current certification documentation.",
  "salesforce hipaa compliance": "Salesforce can be configured for HIPAA compliance when used with appropriate products (Health Cloud, Service Cloud) and a signed Business Associate Agreement (BAA). Organizations must properly configure security settings, access controls, and audit trails to protect PHI. Salesforce provides the infrastructure, but the customer is responsible for proper configuration.",
  "salesforce gdpr compliance": "Salesforce supports GDPR compliance through data subject access rights features, consent management tools, data deletion capabilities, and Binding Corporate Rules for cross-border data transfers. Organizations must configure proper data handling processes, privacy settings, and consent tracking within Salesforce to meet GDPR requirements.",
  "what is salesforce shield": "Salesforce Shield is a suite of security products including Platform Encryption (encrypt data at rest with customer-managed keys), Event Monitoring (track user activity and API calls in real-time), and Field Audit Trail (retain field history data for up to 10 years). Shield helps meet compliance requirements for regulated industries.",
  "what is einstein trust layer": "The Einstein Trust Layer is Salesforce's security framework for AI that includes data masking (protecting sensitive data before sending to LLMs), zero data retention (LLMs don't store your data), toxicity detection (blocking harmful content), prompt defense (protecting against injection attacks), and complete audit trails tracking every AI interaction.",
  "einstein trust layer how it works": "When a prompt is generated, the Trust Layer masks sensitive data before sending to the LLM, applies guardrail instructions about behavior boundaries, and encrypts data in transit. After the LLM responds, the Trust Layer checks for toxicity, unmasques data for the user, and logs everything in an audit trail. Zero data retention ensures LLMs never store your information.",
  "what is appexchange": "AppExchange (recently rebranded as AgentExchange) is Salesforce's enterprise cloud marketplace with 7,000+ apps, components, and 1,000+ agents/skills. About 40% of solutions are free. It offers ready-to-install apps, Lightning components, Bolt solutions, and Flow solutions that extend Salesforce functionality without requiring custom development.",
  "appexchange best apps": "Top AppExchange apps include Conga Composer (document generation from Salesforce data), TaskRay (post-sales project management), Coefficient (real-time Salesforce data in Google Sheets/Excel), DocuSign (electronic signatures), and various reporting, data management, and productivity tools. Most apps offer free trials, and user reviews help guide selection.",
  "how to install appexchange app": "Browse AppExchange at appexchange.salesforce.com, find your desired app, and click \"Get It Now.\" Choose whether to install in production or sandbox, accept terms, and select user access settings. No third-party consultants or integration specialists are required. After installation, configure the app according to its setup documentation.",
  "salesforce certifications overview": "Salesforce offers 48+ certifications across categories: Associate/Foundation (entry-level, 0-6 months experience), Administrator, App Builder, Developer, Architect, Consultant, Designer, Marketing Cloud, and CPQ. Foundation certifications don't require maintenance, while professional certifications need annual Trailhead maintenance modules.",
  "most valuable salesforce certifications 2026": "The most strategic certifications in 2026 are Agentforce Specialist (validates AI configuration skills for real business scenarios), Data Cloud Consultant (demonstrates understanding of enterprise data value), Platform Developer I, and Salesforce Administrator. These reflect the market's shift toward AI, data, and platform expertise.",
  "salesforce certification cost": "Most Salesforce certification exams cost $200 USD, with Foundation/Associate exams at $75-$100. Retake fees are $100 for professional certifications. Annual maintenance requires completing Trailhead modules (free). Preparation resources include free Trailhead modules, Focus on Force practice exams (~$20), and Salesforce-authorized training courses ($2,000-$5,000).",
  "salesforce admin certification": "The Salesforce Administrator certification validates skills in CRM configuration, security, automation, data management, and user support. It's the most popular starting certification, covering Setup, data modeling, reports/dashboards, Flow automation, and security settings. The exam has 60 multiple-choice questions with a 65% passing score and 105 minutes.",
  "salesforce industry clouds": "Salesforce offers 12+ industry clouds including Health Cloud (patient management), Financial Services Cloud (wealth management, banking, insurance), Manufacturing Cloud (order and revenue visibility), Consumer Goods Cloud, Government Cloud, Nonprofit Cloud, Education Cloud, and more. Each provides pre-built data models, workflows, and compliance features specific to that industry.",
  "salesforce health cloud": "Health Cloud is Salesforce's healthcare-specific platform for managing patient relationships, care coordination, and health records. It includes patient timeline views, care plan management, referral tracking, and HIPAA-compliant infrastructure with BAA support. It helps providers deliver connected patient experiences across the care continuum.",
  "salesforce financial services cloud": "Financial Services Cloud provides tools for banking, wealth management, and insurance including client portfolio views, financial goal tracking, AI-driven cash flow insights, automated client onboarding, compliance management, and relationship mapping. Advisors can anticipate client needs with Einstein-powered triggers and deliver personalized financial advice.",
  "salesforce manufacturing cloud": "Manufacturing Cloud gives manufacturers a unified view of orders and revenue with tools for defining order frequency, negotiating prices, and tracking performance. It bridges the gap between sales and operations by providing accurate demand forecasts, account-based forecasting, and real-time visibility into sales agreements and order volumes.",
  "salesforce nonprofit cloud": "Nonprofit Cloud helps organizations manage fundraising, programs, grants, and constituent relationships. It includes donation management, volunteer tracking, grant management, program delivery tracking, and outcome measurement. Nonprofits get discounted pricing through the Salesforce.org Power of Us program, with 10 free licenses for qualifying organizations.",
  "salesforce for healthcare use cases": "Healthcare use cases include patient relationship management, care coordination across providers, appointment scheduling with Agentforce, insurance verification automation, patient portal self-service, clinical trial management, and population health analytics. Health Cloud ensures HIPAA compliance while integrating with EHR systems through MuleSoft or HL7 FHIR APIs.",
  "salesforce for financial services use cases": "Financial services use cases include wealth management client portals, automated KYC/AML compliance, loan origination workflows, insurance claims processing, financial advisor dashboards, client onboarding automation, and regulatory reporting. Financial Services Cloud with Agentforce enables 24/7 client service and automated investment inquiry responses.",
  "salesforce for retail use cases": "Retail use cases include unified customer profiles across channels, personalized product recommendations via Commerce Cloud, loyalty program management, inventory visibility, order management, returns processing, and Agentforce Personal Shopper for conversational commerce. Marketing Cloud Journey Builder automates cart abandonment and post-purchase engagement campaigns.",
  "salesforce for manufacturing use cases": "Manufacturing use cases include sales agreement management, demand forecasting, account-based forecasting, partner and dealer management, warranty claim processing, field service for equipment maintenance, and IoT-connected asset monitoring. Manufacturing Cloud bridges sales and operations with real-time order and revenue visibility.",
  "what is einstein ai": "Einstein is Salesforce's embedded AI layer that powers predictions, recommendations, and automation across all Salesforce clouds. It includes Lead Scoring, Opportunity Insights, Case Classification, Send Time Optimization, and more. Einstein uses machine learning trained on your organization's data to deliver personalized, context-aware AI without requiring data science expertise.",
  "einstein ai features list": "Einstein features include Lead Scoring, Opportunity Scoring, Activity Capture, Automated Contacts, Forecasting, Sales Emails, Call Summaries, Case Classification, Case Routing, Article Recommendations, Send Time Optimization, Engagement Scoring, Content Selection, Copy Insights, Engagement Frequency, Bot Builder, and the Einstein Trust Layer for AI safety.",
  "einstein copilot what is it": "Einstein Copilot is an AI assistant embedded in Salesforce that allows users to ask questions and request tasks in natural language instead of navigating menus or building reports manually. It can summarize records, draft communications, analyze data, and trigger actions across Salesforce, powered by the Einstein Trust Layer for security.",
  "einstein vs agentforce difference": "Einstein is Salesforce's AI layer that provides predictions, scoring, and recommendations to assist human users in making better decisions. Agentforce takes this further with autonomous AI agents that can independently execute multi-step workflows, make decisions, and complete tasks without human involvement, using the Atlas Reasoning Engine for complex reasoning.",
  "how to enable einstein": "Einstein features are enabled through Salesforce Setup under the specific cloud product settings (e.g., Sales Cloud Einstein, Service Cloud Einstein). Some features like Lead Scoring require Enterprise edition or higher and sufficient historical data (typically 1,000+ records). Einstein AI is included in higher-tier editions or available as paid add-ons.",
  "salesforce slack integration": "Slack is deeply integrated into Salesforce as the collaboration hub, allowing users to share CRM records, receive notifications, collaborate on deals, and take Salesforce actions directly from Slack channels. Agentforce agents can also operate within Slack, and CRM Analytics insights can be shared and discussed in Slack for team decision-making.",
  "salesforce and slack": "Salesforce acquired Slack in 2021, making it the central collaboration platform for the Salesforce ecosystem. Slack connects to all Salesforce clouds, enabling real-time notifications on deal updates, service case alerts, and marketing campaign results. Agentforce SDR and Service agents can engage users directly in Slack channels.",
  "salesforce experience cloud": "Experience Cloud (formerly Community Cloud) lets organizations build branded portals, forums, and sites for customers, partners, and employees. It supports self-service portals, partner relationship management, knowledge bases, and case submission. Experience Cloud integrates with Agentforce to provide AI-powered assistance on community pages.",
  "what is salesforce platform": "The Salesforce Platform (formerly Force.com) is the underlying infrastructure for building custom applications, automations, and integrations. It includes Flow Builder for no-code automation, Lightning Web Components for custom UI, Apex for server-side logic, SOQL for database queries, and Heroku for custom app hosting.",
  "salesforce sandbox types": "Salesforce offers four sandbox types: Developer Sandbox (free, metadata only, 200MB data), Developer Pro Sandbox (metadata only, 1GB data), Partial Copy Sandbox (metadata + sample data), and Full Sandbox (complete copy of production data and metadata). Higher sandbox types require Enterprise edition or above and are used for testing and development.",
  "salesforce release cycle": "Salesforce releases three major updates per year: Spring (January/February), Summer (May/June), and Winter (September/October). Each release includes new features, enhancements, and security updates that are automatically applied to all orgs. Preview sandboxes get updates before production, giving admins time to test and prepare.",
  "salesforce trailhead what is it": "Trailhead is Salesforce's free online learning platform offering guided learning paths (trails), hands-on challenges, and certifications for all skill levels. It covers Salesforce products, development, administration, and business skills through modules, projects, and superbadges. Trailhead is the primary preparation resource for Salesforce certification exams.",
  "salesforce implementation partner how to choose": "Choose a partner with proven experience in your industry and specific use cases, check Salesforce AppExchange consultant listings and reviews, verify their certification levels (Registered, Silver, Gold, Platinum), and request customer references. Evaluate their change management and training approach, not just technical skills, to ensure successful adoption.",
  "salesforce implementation phases": "Standard implementation follows five phases: 1) Discovery (requirements gathering, stakeholder alignment), 2) Design (solution architecture, data model), 3) Build (configuration, customization, integration), 4) Test (UAT, data migration testing, performance testing), and 5) Deploy (go-live, training, hypercare support). Each phase should include stakeholder checkpoints.",
  "salesforce support tiers": "Salesforce offers three support tiers: Standard (included with all licenses, online case submission, 2-day response), Premier ($$ additional, 24/7 phone support, 1-hour critical response, admin assistance), and Signature ($$$ additional, named Technical Account Manager, proactive monitoring, 15-minute critical response). Premier and Signature require additional investment.",
  "what is salesforce free edition": "Salesforce offers a Free Starter edition with limited CRM functionality for very small teams. Additionally, nonprofits can get 10 free licenses through the Power of Us program. All paid editions offer free 30-day trials. Trailhead playground orgs (Developer Edition) are also free for learning and development purposes.",
  "salesforce developer edition": "Developer Edition is a free, fully functional Salesforce org for development, testing, and learning purposes. It includes access to most Salesforce features but with limited data storage (5MB) and API limits. Developers use it to build and test custom apps, Lightning components, Apex code, and integrations before deploying to production.",
  "salesforce mobile app": "The Salesforce Mobile App provides on-the-go access to CRM data on iOS and Android devices, including dashboards, reports, records, notifications, and Chatter collaboration. Sales reps can update opportunities, log calls, and access Einstein insights from their phones. The app supports offline access and can be customized with Lightning pages.",
  "salesforce chatter": "Chatter is Salesforce's built-in enterprise social network that enables collaboration through posts, comments, file sharing, and @mentions directly on records, groups, and profiles. It supports real-time notifications, polls, and knowledge sharing. While functional, many organizations now use Slack as their primary Salesforce collaboration tool.",
  "salesforce reports and dashboards": "Salesforce Reports and Dashboards provide visual analytics with tabular, summary, matrix, and joined report formats. Dashboards display up to 20 components with charts, tables, and metrics. Features include report scheduling, conditional highlighting, cross-filters, bucket fields, and the ability to subscribe users to automated report delivery via email.",
  "salesforce custom objects": "Custom objects are user-defined database tables in Salesforce that store data specific to your business needs beyond standard objects (Accounts, Contacts, Opportunities). Enterprise Edition supports up to 200 custom objects, while Unlimited supports 2,000. Each custom object can have custom fields, page layouts, validation rules, and automation triggers.",
  "salesforce integration options": "Salesforce offers multiple integration approaches: MuleSoft (enterprise API management), REST/SOAP APIs (direct programmatic access), middleware tools (Dell Boomi, Informatica), AppExchange connectors, Salesforce Connect (external data without migration), and Flow Builder external service calls. Choose based on complexity, volume, real-time requirements, and budget.",
  "salesforce training options": "Training options include free Trailhead modules and trails, Salesforce-authorized instructor-led training ($2,000-$5,000 per course), Trailhead Academy certifications, partner-delivered training, in-app guided learning tools, YouTube tutorials, and community resources like Salesforce Ben, SFDC99, and the Trailblazer Community. Combine multiple approaches for best results.",
  "salesforce consultant rates": "Salesforce consultant rates vary by expertise: junior consultants charge $100-$150/hour, mid-level consultants $150-$250/hour, and senior architects $250-$400+/hour. Offshore consultants range from $50-$150/hour. Implementation partner projects are often scoped as fixed-price engagements. Rates also vary by specialization (technical, functional, industry-specific).",
  "how long to learn salesforce": "Basic Salesforce administration skills can be learned in 2-4 months of dedicated study using Trailhead. Preparing for the Admin certification typically takes 3-6 months. Becoming proficient in development (Apex, LWC) takes 6-12 months. Mastering advanced areas like architecture or Data Cloud requires 1-2+ years of hands-on experience.",
  "salesforce market share": "Salesforce holds approximately 21-23% of the global CRM market share, making it the undisputed market leader. Its nearest competitors are Microsoft Dynamics (around 5-6%), Oracle (4-5%), SAP (4-5%), and Adobe (3-4%). Salesforce has maintained its leadership position for over a decade and serves 150,000+ companies worldwide.",
  "salesforce competitors list": "Major Salesforce competitors include Microsoft Dynamics 365, HubSpot CRM, Zoho CRM, Oracle CX, SAP CRM, Pipedrive, Freshsales, SugarCRM, Monday Sales CRM, and Creatio. Each targets different segments: HubSpot and Pipedrive for SMBs, Dynamics for Microsoft shops, Zoho for value-seekers, and Oracle/SAP for large enterprises with existing ERP investments.",
  "what is salesforce customer 360": "Customer 360 is Salesforce's vision of a unified platform connecting Sales, Service, Marketing, Commerce, and Data Cloud to give every team a single, shared view of every customer. It breaks down data silos so sales, service, and marketing teams can collaborate with consistent customer context across all touchpoints and channels.",
  "salesforce vs oracle cx": "Salesforce offers superior CRM flexibility, a larger ecosystem (AppExchange), and more advanced AI with Agentforce and Einstein. Oracle CX is stronger for organizations with existing Oracle ERP/database investments and offers robust back-office integration. Salesforce leads in market share and innovation speed, while Oracle provides tighter financial system integration.",
  "salesforce vs sap crm": "Salesforce is the pure-play CRM leader with superior sales and marketing automation, AI capabilities, and ecosystem. SAP CRM (now SAP CX) is best for manufacturing and supply chain-heavy organizations already running SAP ERP, offering deeper integration with procurement, logistics, and finance modules. Salesforce leads in user experience and innovation pace.",
  "salesforce for small business": "Small businesses benefit from Starter Suite ($25/user/month) or Pro Suite ($100/user/month), which provide essential CRM, marketing, and service tools. The free edition offers basic functionality, and Trailhead provides free training. For budget-conscious SMBs, consider whether Salesforce's capabilities justify the cost versus simpler alternatives like HubSpot Free or Zoho.",
  "salesforce for mid market": "Mid-market companies (100-1,000 employees) typically use Pro Suite or Enterprise edition, benefiting from automation, advanced reporting, and integration capabilities. Enterprise edition ($175/user/month) provides the best value for growing companies needing workflow automation and API access. Consider implementation partner support and plan for 3-4 month deployment timelines.",
  "salesforce for enterprise": "Enterprise organizations use Unlimited ($350/user/month) or Einstein 1 ($550/user/month) editions with multiple clouds (Sales + Service + Marketing + Data Cloud), Agentforce AI agents, MuleSoft integrations, and industry-specific solutions. Expect 6-12 month implementations with ongoing optimization. Forrester reports 417% three-year ROI for enterprise deployments.",
  "salesforce automation tools": "Salesforce automation tools include Flow Builder (no-code visual automation), Apex Triggers (code-based automation), Process Builder (legacy, being retired), Approval Processes, Assignment Rules, Escalation Rules, and Agentforce (AI-powered autonomous automation). Flow Builder is the recommended primary tool for most automation needs without requiring code.",
  "salesforce approval process": "Approval Processes automate record approvals with defined criteria, approval steps, and actions. Configure entry criteria (which records require approval), assign approvers (by hierarchy, queue, or specific users), set approval/rejection actions (field updates, email alerts), and add email templates for notifications. Multiple approval steps can be chained for complex workflows.",
  "salesforce email integration": "Salesforce integrates with email through Einstein Activity Capture (auto-syncs emails/calendar from Outlook and Gmail), Salesforce Inbox (enhanced email features), native email-to-case (auto-creates support cases from emails), and Marketing Cloud for bulk email campaigns. Lightning for Outlook and Gmail add-ins enable CRM access directly from email clients.",
  "salesforce duplicate management": "Salesforce provides built-in duplicate management through Matching Rules (criteria for identifying duplicates) and Duplicate Rules (actions when duplicates are found). Options include blocking duplicates, alerting users, or allowing with reporting. Einstein Duplicate Detection adds AI-powered matching. Third-party tools like DemandTools and Cloudingo offer more advanced deduplication.",
  "salesforce data quality best practices": "Maintain data quality by implementing validation rules (enforce formatting standards), required fields for critical data, duplicate management rules, regular data audits, automated enrichment via Data Cloud or third-party tools, and clear data governance policies. Assign data stewards per department and use dashboards to monitor data completeness and accuracy metrics.",
  "what is salesforce einstein activity capture": "Einstein Activity Capture automatically syncs emails and calendar events from connected Outlook or Gmail accounts to related Salesforce records (contacts, leads, opportunities). It eliminates manual data entry for sales reps, ensures CRM records have complete interaction history, and feeds data to Einstein AI features like Activity Metrics and Relationship Insights.",
  "salesforce territory management": "Territory Management assigns accounts, opportunities, and cases to territories based on rules like geography, industry, revenue, or custom criteria. Enterprise and Unlimited editions support Enterprise Territory Management with territory hierarchies, role-based assignments, and forecasting by territory. It helps ensure balanced workload distribution and coverage.",
  "salesforce forecasting features": "Salesforce Forecasting provides collaborative forecasts with customizable forecast categories, adjustments at multiple levels, and quota tracking. Einstein Forecasting uses AI for more accurate predictions. Pipeline Inspection adds visual pipeline analysis, and Revenue Intelligence enhances forecasting with AI-powered deal scoring and trend analysis.",
  "salesforce pardot vs marketing cloud engagement": "Account Engagement (Pardot) is designed for B2B marketing with lead scoring, nurturing, and sales alignment features. Marketing Cloud Engagement handles B2C marketing at scale with Journey Builder, high-volume email, and cross-channel campaigns. Use Pardot for B2B lead-gen focused teams; Marketing Cloud Engagement for B2C customer journey orchestration.",
  "salesforce data loader": "Data Loader is a free Salesforce tool for bulk importing (insert, update, upsert, delete) up to 5 million records at a time via CSV files. It supports both GUI and command-line interfaces. For smaller imports (up to 50,000 records), the built-in Import Wizard provides a simpler web-based alternative. Both tools are essential for data migration and maintenance.",
  "what is salesforce heroku": "Heroku is Salesforce's cloud application platform (PaaS) for building, deploying, and scaling custom applications using popular programming languages like Node.js, Python, Java, and Ruby. It connects to Salesforce via Heroku Connect for bi-directional data sync. Heroku is ideal for customer-facing apps, microservices, and workloads that extend beyond the Salesforce platform.",
  "salesforce governor limits": "Governor limits are runtime limits that Salesforce enforces to ensure shared multi-tenant platform performance. Key limits include 100 SOQL queries per transaction, 150 DML statements per transaction, 6 MB heap size for synchronous operations, and 10-second CPU time limit. Developers must write efficient code (bulkification) to stay within these boundaries.",
  "salesforce best practices for admins": "Admin best practices include using Flow Builder instead of Process Builder, implementing proper security with role hierarchy and profiles, maintaining clean data with validation rules and duplicate management, documenting all customizations, testing changes in sandbox before production, staying current with three annual releases, and continuously training users.",
  "salesforce change management": "Effective Salesforce change management includes sandbox development and testing, deployment via Change Sets or Salesforce DevOps tools (Gearset, Copado), version control with Git, UAT with stakeholder sign-off, release documentation, and user communication plans. Use Salesforce CLI and scratch orgs for modern development workflows aligned with DevOps principles.",
  "salesforce devops tools": "Popular Salesforce DevOps tools include Gearset (leading deployment and CI/CD), Copado (end-to-end DevOps platform), Salesforce CLI with scratch orgs, AutoRABIT, Flosum, and Prodly. These tools enable version control integration with Git, automated testing, CI/CD pipelines, and environment management for professional Salesforce development teams.",
  "what is salesforce connect": "Salesforce Connect allows users to access external data in real-time without copying it into Salesforce, using external objects that map to data in external systems. It supports OData, cross-org connections, and custom adapters. This is ideal when you need to view external data alongside CRM records without data migration or storage costs.",
  "salesforce integration with erp": "Salesforce integrates with ERP systems (SAP, Oracle, NetSuite, Microsoft Dynamics) through MuleSoft connectors, REST/SOAP APIs, middleware platforms, or AppExchange integrations. Common integration patterns include order-to-cash synchronization, customer master data sync, inventory visibility in CRM, and invoice/payment status updates. Plan for bi-directional sync and conflict resolution.",
  "salesforce multi currency support": "Salesforce supports multi-currency with the ability to set a corporate currency, enable additional currencies, and assign currencies to records. Advanced Currency Management adds dated exchange rates for reporting accuracy. Each user can set a personal currency, and reports can be viewed in any enabled currency using automatic conversion.",
  "salesforce multi language support": "Salesforce supports multiple languages through the Translation Workbench, allowing translation of custom labels, picklist values, field names, and page layouts into 30+ languages. Each user sets their personal language preference. Knowledge articles and Experience Cloud pages can be published in multiple languages for global customer support.",
  "what is salesforce ohana": "Ohana is Salesforce's cultural philosophy borrowed from Hawaiian tradition, meaning \"family.\" It represents the idea that Salesforce employees, customers, partners, and community members are all part of an extended family that supports each other. This culture extends to the Trailblazer Community, Dreamforce conference, and Salesforce's 1-1-1 philanthropic model.",
  "what is dreamforce": "Dreamforce is Salesforce's annual flagship conference held in San Francisco, typically attracting 40,000+ in-person attendees plus millions watching online. It features product announcements, keynotes, hands-on training sessions, certification exams, networking events, and an expo with Salesforce partners. Major Agentforce and Einstein innovations are typically announced at Dreamforce.",
  "salesforce 1-1-1 model": "The 1-1-1 model is Salesforce's integrated philanthropy approach where the company dedicates 1% of equity, 1% of employee time, and 1% of product to charitable causes. This model has been adopted by over 17,000 companies worldwide through Pledge 1% and has resulted in millions of volunteer hours and millions in grants to nonprofits.",
  "salesforce sustainability cloud": "Salesforce Sustainability Cloud (Net Zero Cloud) helps organizations track, analyze, and report on their environmental impact including carbon emissions, energy usage, and waste. It supports ESG reporting frameworks, provides audit-ready environmental data, and helps companies set and track progress toward net-zero emissions goals with AI-powered insights.",
  "agentforce for different industries": "Agentforce can be customized for any industry: healthcare (patient scheduling and triage), financial services (account inquiries and compliance checks), retail (product recommendations and order tracking), manufacturing (warranty claims and parts ordering), education (enrollment and student support), and government (citizen service and case management).",
  "agentforce human handoff": "Agentforce agents are designed to seamlessly hand off to human agents when issues exceed their capabilities or when customers request human assistance. During handoff, the agent prepares full conversation context, case history, and customer data so the human agent can continue without asking the customer to repeat information.",
  "how to measure agentforce success": "Measure Agentforce success through case deflection rate (target 60-90%), resolution time reduction, customer satisfaction scores (CSAT), cost per interaction savings, lead conversion rate improvements, meeting booking rates (for SDR agent), and agent utilization metrics. The Agent Analytics dashboard tracks topic selection, action execution, and escalation patterns.",
  "agentforce data requirements": "Agentforce performs best with clean, structured data including complete customer interaction histories, well-organized knowledge articles, clear case records, and up-to-date product information. Integration with Data Cloud enables real-time profile enrichment. The more comprehensive and accurate your data foundation, the better your agents will perform.",
  "agentforce channels supported": "Agentforce agents can be deployed across multiple channels including web chat, messaging apps (WhatsApp, SMS), email, Slack, self-service portals (Experience Cloud), mobile apps, and voice. The same agent logic works across all channels, providing consistent experiences while adapting to channel-specific interaction patterns.",
  "agentforce testing best practices": "Use the Agent Tester to simulate conversations across different scenarios, examine the Reasoning Log to understand topic selection and action execution, test edge cases and error handling, verify guardrail enforcement, validate human handoff flows, and check persona/tone consistency. Run multiple test rounds and involve stakeholders from each affected department.",
  "agentforce custom actions": "Custom actions extend Agentforce capabilities beyond standard actions by connecting to Flows, Apex classes, or external APIs. Design actions with reusability in mind since they can be used across multiple topics. Always check if a standard action can fulfill the need before building custom. Each action should have clear input parameters and expected outputs.",
  "agentforce topics explained": "Topics define the scope of jobs an Agentforce agent can handle, like \"Order Status\" or \"Password Reset.\" Each topic includes natural language instructions, associated actions, and scope boundaries. When a customer interacts, the Atlas Reasoning Engine matches the request to the most relevant topic and executes the associated actions.",
  "agentforce vs traditional chatbots": "Traditional chatbots follow rigid, rule-based dialog trees with limited responses, while Agentforce agents use generative AI to understand context, reason through problems, and take autonomous action. Agentforce can handle complex multi-step workflows, access real-time CRM data, learn from interactions, and seamlessly escalate to humans when needed.",
  "what is salesforce einstein gpt": "Einstein GPT was Salesforce's generative AI technology that has evolved into the broader Einstein AI and Agentforce platform. It powers features like Sales Emails, Call Summaries, service reply suggestions, and marketing content generation. All generative AI in Salesforce is now protected by the Einstein Trust Layer for data security and responsible AI use.",
  "salesforce pricing overview all products": "Core CRM: $25-$550/user/month depending on edition. Marketing Cloud Engagement: from $1,250/month. CPQ: from $75/user/month. Field Service: from $150/user/month. Agentforce: $0.10/action or $2/conversation. Data Cloud: included in select editions or as add-on. Tableau: separate licensing. MuleSoft: separate licensing. All prices require annual billing commitments.",
  "salesforce hidden costs": "Hidden costs to budget for include: implementation services (1.5-3x license cost), data storage overages ($125/month per 500MB), premium support (20-30% of license fees), AppExchange apps (varies), additional sandboxes, training costs, ongoing admin salaries ($85K-$130K/year), consultant fees for customization, and integration development with MuleSoft or middleware.",
  "salesforce contract terms": "Salesforce contracts require annual billing commitments, typically with 1-3 year terms. Multi-year contracts may offer volume discounts. Auto-renewal clauses are standard, so review cancellation windows (usually 30-60 days before renewal). Negotiate during fiscal year-end (January) or quarter-end for best pricing. User counts can typically be increased but not decreased mid-term.",
  "salesforce scalability": "Salesforce's multi-tenant cloud architecture automatically scales to handle growing user counts, data volumes, and transaction loads. Organizations from 1 to 150,000+ users run on the same platform. Performance is maintained through governor limits, and Data Cloud handles massive real-time data volumes. Storage and API limits increase with higher editions and user counts.",
  "salesforce uptime and reliability": "Salesforce guarantees 99.9%+ uptime through its enterprise-grade infrastructure, with real-time status monitoring at trust.salesforce.com. The platform uses redundant data centers, automatic failover, and disaster recovery capabilities. Planned maintenance windows are communicated in advance and typically occur during off-peak hours.",
  "salesforce backup and recovery": "Salesforce provides limited native backup capabilities, with weekly data exports available through Setup. For robust backup and recovery, most organizations use third-party solutions like OwnBackup, Gearset, or Spanning Backup from the AppExchange. These tools provide daily automated backups, point-in-time recovery, and compliance-ready data retention.",
  "salesforce vs servicenow": "Salesforce excels as a comprehensive CRM platform covering sales, marketing, and customer service with AI (Agentforce). ServiceNow specializes in IT Service Management (ITSM), IT Operations, and enterprise workflow automation. For customer-facing CRM needs, choose Salesforce; for internal IT service desk and operations management, ServiceNow may be stronger.",
  "salesforce vs zendesk for service": "Salesforce Service Cloud offers a more comprehensive, customizable platform with Agentforce AI, Field Service, and deep CRM integration. Zendesk provides a simpler, faster-to-deploy service desk with lower TCO (users report 42% lower TCO vs Salesforce). Choose Salesforce for complex enterprise service needs; Zendesk for straightforward ticket management with quick setup.",
  "data cloud pricing": "Data Cloud is included at no additional cost in select Salesforce editions (Enterprise and above) with basic functionality. Advanced features, higher data volumes, and additional Data Cloud credits require paid add-ons. Pricing is based on data volume ingested and profile counts. Contact Salesforce for specific pricing based on your data requirements.",
  "data cloud use cases": "Key Data Cloud use cases include creating unified customer profiles from disparate sources, real-time audience segmentation for marketing campaigns, powering Agentforce with comprehensive customer context, predictive analytics with Einstein AI, identity resolution across systems, and activating customer data across all Salesforce clouds and external channels.",
  "salesforce einstein bot vs agentforce": "Einstein Bots are rule-based conversational bots with some NLP capabilities for simple, guided interactions like FAQ responses and basic case routing. Agentforce agents are autonomous AI powered by the Atlas Reasoning Engine that can reason, plan, execute multi-step actions, and make decisions independently. Agentforce is the evolution beyond Einstein Bots.",
  "salesforce implementation checklist": "Key checklist items: 1) Define business objectives and KPIs, 2) Identify stakeholders and build team, 3) Select implementation partner, 4) Audit and clean data, 5) Design solution architecture, 6) Configure and customize in sandbox, 7) Build integrations, 8) Conduct UAT testing, 9) Develop training materials, 10) Execute data migration, 11) Go live, 12) Provide hypercare support.",
  "salesforce governance best practices": "Establish a Center of Excellence (CoE) with defined roles for admin, developer, and business analyst responsibilities. Create change management processes with sandbox-to-production deployment procedures, maintain documentation for all customizations, conduct regular security reviews, establish naming conventions, and schedule quarterly platform health checks.",
  "salesforce data model best practices": "Design your data model by mapping business processes first, use standard objects before creating custom ones, establish consistent API naming conventions, plan for reporting needs in your object relationships, avoid excessive custom fields (keep under 500 per object), and use lookup relationships for flexible associations versus master-detail for required parent-child dependencies.",
  "what is salesforce dx": "Salesforce DX (Developer Experience) is a modern development toolset including Salesforce CLI, scratch orgs (temporary development environments), source-driven development with version control, and VS Code extensions. It enables DevOps workflows with Git-based source tracking, CI/CD pipeline integration, and automated testing for professional development teams.",
  "salesforce event monitoring": "Event Monitoring tracks user activity in real-time including login history, report exports, API calls, page views, and data changes. It's part of Salesforce Shield and helps detect security threats, monitor compliance, and troubleshoot performance issues. Events can be analyzed through Event Monitoring Analytics or integrated with SIEM tools for enterprise security monitoring.",
  "salesforce permission sets vs profiles": "Profiles define baseline access (object and field permissions, page layouts, login hours) assigned to every user. Permission Sets layer additional permissions on top of profiles for specific users. Best practice is to use a minimal profile with Permission Set Groups to compose access, as Salesforce is moving toward a permission-set-centric security model.",
  "salesforce record types": "Record Types control the business processes, picklist values, and page layouts available for different categories within the same object. For example, an Account object might have \"Customer\" and \"Partner\" record types, each showing different fields and picklist options. Record Types work with page layouts and business processes to create role-specific experiences.",
  "agentforce for marketing": "Agentforce Campaign Optimizer handles the full marketing campaign lifecycle, from analyzing business goals to generating content, personalizing messaging, and optimizing performance. Marketing teams can deploy agents that autonomously manage email campaigns, segment audiences using Data Cloud, personalize content at scale, and adjust campaign parameters based on real-time engagement data.",
  "agentforce for commerce": "Agentforce powers commerce through Personal Shopper (product recommendations on ecommerce sites), Merchant Agent (inventory and pricing management), and Buyer Agent (procurement assistance). These agents handle order modifications, returns processing, product discovery, and pricing adjustments without manual intervention, operating 24/7 across web and messaging channels.",
  "salesforce migration from classic to lightning": "Migrating from Classic to Lightning Experience involves assessing current customizations using the Lightning Experience Readiness Check, updating incompatible Visualforce pages and JavaScript buttons, retraining users on the Lightning interface, and running Classic and Lightning in parallel during transition. Most organizations now run exclusively on Lightning.",
  "salesforce ecosystem jobs": "The Salesforce ecosystem supports 9+ million jobs worldwide and is projected to grow significantly through 2028. Common roles include Salesforce Administrator ($75K-$130K), Developer ($100K-$160K), Architect ($150K-$250K), Consultant ($90K-$180K), and Business Analyst ($80K-$120K). Demand for Agentforce and Data Cloud skills is growing fastest in 2026.",
  "salesforce spring 26 release": "The Spring '26 release includes enhanced Agentforce capabilities, Data Cloud improvements, new Einstein AI features, Flow Builder enhancements, and Lightning Experience updates. Each release brings 400+ new features across all clouds. Review release notes on Salesforce Help and test in preview sandboxes before features reach production.",
  "agentforce conversation design": "Design effective Agentforce conversations by writing clear, specific topic instructions using natural language, defining explicit scope boundaries so the agent knows what it should and shouldn't handle, creating fallback behaviors for unrecognized requests, maintaining consistent brand voice through persona settings, and testing across diverse conversation scenarios.",
  "salesforce health check": "Salesforce Health Check is a built-in tool that scores your org's security settings against Salesforce baseline recommendations on a 0-100 scale. It evaluates password policies, session settings, network access, and login policies, providing specific recommendations to improve your security posture. Aim for a score of 80+ for strong security.",
  "salesforce optimizer": "Salesforce Optimizer analyzes your org to identify unused features, fields, and customizations, plus security risks and performance issues. It generates a report with actionable recommendations to streamline your org, improve performance, and reduce technical debt. Run Optimizer quarterly as part of your governance best practices.",
  "what is salesforce well architected": "Salesforce Well-Architected is a framework of best practices organized around Trusted, Easy, and Adaptable principles for building scalable, maintainable Salesforce solutions. It provides guidance on security, data architecture, automation design, integration patterns, and user experience to help architects make informed design decisions.",
  "salesforce pricing negotiation tips": "Negotiate during Salesforce's fiscal year-end (January 31) or quarter-end for maximum discounts. Request multi-year pricing for 15-25% discounts, bundle multiple products for better rates, ask for free months or waived implementation fees, and compare competing CRM quotes. Work with a Salesforce-experienced procurement advisor and never accept the first offer.",
  "salesforce renewal best practices": "Start renewal planning 6 months before contract end, audit current license usage to right-size (eliminate unused licenses), benchmark pricing against market rates, negotiate before the auto-renewal window closes, and consider multi-year commitments for discounts. Review new features that may eliminate the need for paid add-ons or AppExchange apps.",
  "salesforce data archiving": "Manage data growth through Salesforce's native Big Objects for archiving historical data, third-party archiving tools (DataArchiva, OwnBackup), and regular data cleanup of obsolete records. Archiving helps stay within storage limits, maintain performance, and reduce costs. Establish data retention policies aligned with compliance requirements and business needs.",
  "agentforce multilingual support": "Agentforce SDR Agent and Service Agent support multi-language interactions, automatically detecting and responding in the customer's language. This enables global organizations to provide 24/7 support across time zones and languages without hiring multilingual staff. Language capabilities depend on the underlying LLM's training data and supported languages.",
  "salesforce einstein analytics vs tableau": "Einstein Analytics (now CRM Analytics) is embedded within Salesforce for CRM-specific insights with native actions on records. Tableau is a standalone enterprise BI platform for cross-platform data visualization and advanced analytics. Use CRM Analytics for Salesforce-centric operational insights and Tableau for broader enterprise analytics across all data sources.",
  "what is salesforce omniStudio": "OmniStudio is a toolkit for building guided digital experiences including OmniScripts (guided processes), FlexCards (dynamic UI components), DataRaptors (data transformation), and Integration Procedures. It's heavily used in Salesforce Industry Clouds to create streamlined, industry-specific workflows without custom code.",
  "salesforce sso single sign on": "Salesforce supports SSO through SAML 2.0, OpenID Connect, and delegated authentication, integrating with identity providers like Okta, Azure AD, and Ping Identity. SSO enables users to log in once and access Salesforce plus other apps. Combined with MFA (required since February 2022), it provides secure, convenient authentication for all users.",
  "salesforce record access": "Salesforce controls record access through a layered model: Organization-Wide Defaults (base access level), Role Hierarchy (upward visibility), Sharing Rules (lateral access), Manual Sharing, Teams, and Territory Management. Start with the most restrictive OWD settings and open access through sharing rules and role hierarchy as needed for security best practices.",
  "salesforce technical debt": "Technical debt accumulates from over-customization, deprecated features (Process Builder, Workflow Rules), unused fields and objects, complex automation chains, and poor naming conventions. Address it through regular Optimizer reports, quarterly cleanup sprints, migration from legacy automation to Flow Builder, and documentation of all active customizations and their business purpose.",
  "agentforce for internal use": "Agentforce isn't limited to customer-facing roles. Internal use cases include IT help desk automation, HR onboarding and policy questions, finance approval workflows, legal document routing, facilities management requests, and employee self-service for benefits inquiries. Internal agents reduce ticket volume and free up specialist teams for complex work.",
  "salesforce ai readiness checklist": "Prepare for Salesforce AI by: 1) Auditing data quality and completeness, 2) Ensuring sufficient historical data (1,000+ records for Einstein features), 3) Cleaning and deduplicating data, 4) Enabling Data Cloud for unified profiles, 5) Defining AI use cases aligned with business goals, 6) Training admins on Einstein and Agentforce, and 7) Establishing AI governance policies.",
  "salesforce commerce cloud pricing": "Commerce Cloud pricing is quote-based and depends on gross merchandise value (GMV), order volume, and required features. B2C Commerce typically ranges from 1-3% of GMV. B2B Commerce pricing is per-user based. Contact Salesforce directly for custom quotes based on your business model, transaction volume, and feature requirements.",
  "salesforce education cloud": "Education Cloud helps K-12 schools and higher education institutions manage student lifecycle from recruitment through alumni engagement. It includes admissions management, student success tracking, academic advising, fundraising, and alumni relations. Education Data Architecture (EDA) provides a standardized data model for educational institutions.",
  "salesforce government cloud": "Government Cloud (Salesforce for Government) meets FedRAMP, ITAR, and other government compliance requirements with dedicated infrastructure. It supports citizen service management, case management, permitting and licensing, grants management, and constituent engagement. Government agencies use it to modernize services while meeting strict security and compliance mandates.",
  "salesforce slack integration features": "Slack integrates with Salesforce for account/deal collaboration in channels, real-time CRM notifications, record previewing and updating from Slack, Agentforce agent interactions, workflow automation via Slack Workflows connected to Salesforce Flows, and huddles/clips for async communication on deals. Slack is now Salesforce's primary real-time collaboration interface.",
  "agentforce future roadmap": "Salesforce continues investing heavily in Agentforce with plans for more autonomous agent capabilities, expanded industry-specific agents, deeper Data Cloud integration, enhanced multi-agent orchestration (agents collaborating with each other), improved voice capabilities, and broader channel support. Agentforce is positioned as Salesforce's primary growth driver through 2026 and beyond.",
  "salesforce vs monday sales crm": "Monday Sales CRM offers visual, intuitive project-management-style CRM with simpler setup and lower cost. Salesforce provides vastly more powerful CRM capabilities, AI, customization, and ecosystem. Choose Monday for small teams wanting simple visual pipeline management; choose Salesforce for organizations needing comprehensive CRM with advanced automation and AI capabilities.",
  "salesforce data retention policies": "Configure data retention through record deletion policies, archival to Big Objects, and Field Audit Trail (retains data up to 10 years with Shield). Standard event log retention is 30 days (1 year with Event Monitoring add-on). Establish retention policies aligned with regulatory requirements (GDPR, HIPAA, SOX) and use third-party backup tools for long-term retention.",
  "salesforce einstein next best action": "Einstein Next Best Action analyzes customer data and business rules to recommend the optimal action for each customer interaction, such as offering a discount, suggesting an upsell, or recommending a service plan. It uses strategies combining business rules and predictive models to display action recommendations directly on Salesforce record pages.",
  "salesforce customer success platform": "Salesforce positions itself as the Customer Success Platform, providing the tools and AI capabilities for organizations to build stronger customer relationships and drive growth. The platform combines CRM data, AI-powered insights (Einstein), autonomous agents (Agentforce), real-time data (Data Cloud), and collaboration (Slack) for comprehensive customer success management.",
  "what is cloudsheer": "Cloudsheer is a specialist Salesforce and Agentforce consulting partner. They help businesses cut costs, close more deals, and scale operations with Salesforce and Agentforce - from strategy to deployment to ongoing optimization.",
  "who is the ceo of cloudsheer": "Tushar Sharma is the CEO of Cloudsheer.",
  "who is the technical delivery head": "Rajat Sharma is the Technical Delivery Head at Cloudsheer.",
  "who is the growth and marketing head": "Shubham Bansal is the Growth & Marketing Head at Cloudsheer.",
  "who are the team members": "Cloudsheer has 27 listed team members including Tushar Sharma (CEO), Rajat Sharma (Technical Delivery Head), Shubham Bansal (Growth & Marketing Head), Ankur Trivedi (Salesforce Developer), Shainkey Pawaiya (Project Manager), Pranay Pandey (Team Lead QA), Arihanta Jain (Assistant Manager HR), Shivam Goel (Strategy & Growth Associate), Prateek Jain (Growth & Marketing Associate), Tammana Gautam (BA), Vishal Yadav (BA), Abhishek Kaplesh, Ishit Bansal, Arun Kumar, Divyansh Sharma, Gaurav Khanna, Piyush Kumar Singh, Rahul Babbar (Salesforce Developers), Vansh Nandan Mathur, Aayush Gupta, Sweety Singh, Bhu Garima Yadav (Associate Salesforce Developers), Himanshu Yadav (QA), Manish Pavadiya (Salesforce Consultant), Alka Yadav (HR Associate), and Utkarsh (Salesforce Developer).",
  "how many team members does cloudsheer have": "Cloudsheer has 40+ team members globally, with 27 listed on the website. The team spans offices in Dallas, Delhi, London, and New York.",
  "where are cloudsheer offices located": "Cloudsheer has 4 office locations: Dallas (USA), Delhi/Noida (India), London (UK), and New York (USA). Their distributed team delivers round-the-clock coverage across 4 time zones.",
  "how many salesforce certifications does cloudsheer have": "Cloudsheer holds 60+ Salesforce certifications across Sales Cloud, Service Cloud, Marketing Cloud, Platform Developer, Agentforce Specialist, and Data Cloud Consultant.",
  "what industries does cloudsheer work with": "Cloudsheer works with financial services, retail/e-commerce, healthcare, B2B SaaS, manufacturing, and professional services.",
  "how many successful projects has cloudsheer completed": "Cloudsheer has completed 250+ successful projects.",
  "what is cloudsheer email address": "The general contact email is hello@cloudsheer.com. For career inquiries and job applications, the email is hr@cloudsheer.com.",
  "how to contact cloudsheer": "You can contact Cloudsheer by emailing hello@cloudsheer.com, submitting the contact form on the website, or booking a free 30-minute discovery call via Cal.com. They respond to form submissions within 4 business hours.",
  "what is the cal.com booking link": "The Cal.com booking link is https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true - it's a free 30-minute discovery call with a Salesforce architect.",
  "what is the discovery call": "The discovery call is a free 30-minute video call with a Salesforce architect (not a sales rep). They review your current setup, identify quick wins, and give you a clear plan with timeline and cost estimate. No commitment, no contract, no pitch.",
  "what is cloudsheer response time": "Cloudsheer responds to form submissions within 4 business hours. For urgent requests, you can book a call directly through their calendar.",
  "what are cloudsheer values": "Cloudsheer has 5 core values: Agentforce-First Thinking (every engagement starts by asking where AI agents create the most value), Excellence (highest standards in code quality, solution design, and communication), True Partnership (long-term relationships, not one-off projects), Relentless Innovation (staying at the frontier of Salesforce and Agentforce), and People-First AI (Agentforce should empower people, not replace them).",
  "what is cloudsheer process": "Cloudsheer follows a 4-step process: (1) Discovery & Org Audit - audit your Salesforce org and identify highest-impact Agentforce use cases; (2) Agent Builder Design - define Topics, Actions, and Instructions with Einstein Trust Layer guardrails; (3) Sandbox Build & Test - build with Flow Builder, Apex, and Knowledge Base with rigorous testing; (4) Deploy & Optimise - go live with Omni-Channel deployment and continuously optimise performance.",
  "how long does implementation take": "Agentforce agents take 3-6 weeks, single cloud implementation takes 4-8 weeks, and multi-cloud implementations take 8-16 weeks. Every project starts with a scoped timeline during the discovery call.",
  "what does pricing look like": "Cloudsheer offers fixed-price packages starting at $2,999 for standard Salesforce implementations. Agentforce deployments are scoped based on complexity and typically range from $9,999 to $50,000+. Every engagement starts with a free discovery call with a detailed estimate.",
  "what happens after go live": "Every project includes 30 days of post-launch support. After that, Cloudsheer offers ongoing managed services including agent monitoring, performance optimization, and new agent deployments as your business scales.",
  "what if we dont see roi": "Cloudsheer sets measurable KPIs before every engagement - case deflection rate, response time, cost per interaction. If not tracking toward targets within 90 days, they work with you to diagnose and fix the issue at no additional cost.",
  "what clients does cloudsheer have": "Cloudsheer's trusted clients include Beta Agency, Trexo Robotics, Green Light Offer, Camp Quality, Mr-Manhole, Airius LLC, Givergy, and Hope-Bio.",
  "what are the case studies": "Cloudsheer shows 3 anonymized case studies: (1) Financial Services - 200+ Service Cloud users, deployed Agentforce Service Agent in 5 weeks achieving 42% case deflection, response time from 4hrs to 10s, CSAT from 3.6 to 4.3; (2) B2B SaaS - 50-person sales team, Agentforce Sales Agent responds to leads in under 5 seconds, reps saved 10+ hrs/week, 35% better forecasts; (3) Retail/E-commerce - 15,000+ monthly tickets, 30% fewer seasonal hires, cost from $12 to $2.40 per interaction, 24/7 coverage.",
  "what stats does cloudsheer claim on the home page": "Key stats on the home page: 40% lower support costs, 3x faster lead response, 24/7 always-on agents, 40% case resolution increase (Wiley), 73% autonomous resolution (OpenTable), <2s Agentforce SDR response, $2 cost per conversation vs $11+ human agent.",
  "what are the hero stats": "The home page hero shows three key metrics: 40% Lower Support Costs, 3x Faster Lead Response, and 24/7 Always-On Agents.",
  "what agentforce agents does cloudsheer offer": "Cloudsheer offers three main Agentforce agents: (1) Service Agent - 78% case deflection, resolves Tier-1 and Tier-2 cases autonomously; (2) Sales Development Agent - 3x faster response, qualifies inbound leads 24/7 and books discovery calls; (3) Operations Agent - saves 12 hrs/week, automates record updates, reports, and data sync workflows.",
  "what is agentforce operations agent": "The Agentforce Operations Agent automates routine record updates and hygiene, generates and distributes scheduled reports, triggers cross-system data sync workflows, monitors pipeline health and alerts on risk, manages approval routing, and tracks SLAs with automatic escalation. It saves 12 hours per week on average.",
  "what agentforce pain points does cloudsheer solve": "Agentforce solves: support teams spending 60%+ on repetitive tickets, leads slipping through cracks due to slow response, $11+ cost per human interaction (reduced to ~$2), scaling teams without scaling payroll, and inconsistent customer answers. The Einstein Trust Layer ensures accurate, grounded responses.",
  "what agentforce results do customers see": "Proven Agentforce results: 40% increase in case resolution (Wiley), 73% of queries handled autonomously (OpenTable), $2 avg cost per conversation vs $11+ human, 10,000+ Agentforce deals closed by Salesforce at launch, 90% reduction in response time, and 83% of customers report measurable productivity gains in the first quarter.",
  "why choose cloudsheer for agentforce": "Cloudsheer specializes exclusively in Agentforce deployments with deep expertise, has a proven deployment playbook across service/sales/ops/commerce, goes live in 4-6 weeks, and offers zero risk to start with a free 30-minute discovery call including a custom deployment plan.",
  "what sales cloud pain points does cloudsheer solve": "Sales Cloud solves: reps wasting 72% of their week on non-selling activities, unreliable forecast calls, leads going cold from slow follow-up, stale deals clogging pipeline, new hires taking 6+ months to ramp, and quoting bottlenecks stalling deals.",
  "what sales cloud capabilities does cloudsheer implement": "Sales Cloud capabilities include: Pipeline & Opportunity Management (Pipeline Inspection, Einstein Opportunity Scoring, Revenue Intelligence), Sales AI & Automation (Einstein Activity Capture, Lead Scoring, Sales Engagement, Agentforce SDR Agent), Forecasting & Revenue Intelligence, and CPQ & Quote-to-Cash.",
  "what is the sales cloud implementation process": "The Sales Cloud implementation follows 4 steps: (1) Sales Process Discovery - interview reps, managers, leadership to map your sales motion; (2) CRM Architecture & Build - objects, fields, layouts, flows tied to revenue outcomes; (3) Data Migration & Integration - clean migration with deduplication, connecting email/calendar/ERP; (4) Training, Adoption & Hypercare - role-based training, adoption dashboards, dedicated hypercare window.",
  "what service cloud pain points does cloudsheer solve": "Service Cloud solves: agents wasting 25% of their day switching tools, customers waiting hours and repeating themselves, Tier-1 tickets consuming 60% of capacity, SLA breaches going undetected, and knowledge base articles being hard to find despite thousands of articles.",
  "what service cloud capabilities does cloudsheer implement": "Service Cloud capabilities include: Omni-Channel Support (Service Console, routing, customer timeline, swarming, incident management), AI-Powered Self-Service (Agentforce Service Agent, Einstein Reply Recommendations, Knowledge Base, Case Classification), Field Service Management (dispatching, remote assistant, mobile app, work orders, inventory), and Service Analytics & SLAs (dashboards, entitlement management, Tableau integration).",
  "what marketing cloud pain points does cloudsheer solve": "Marketing Cloud solves: batch-and-blast emails tanking deliverability, marketing unable to prove pipeline impact, leads sitting untouched without nurture sequences, customer data siloed across tools, and teams wasting hours building emails and pulling lists manually.",
  "what marketing cloud capabilities does cloudsheer implement": "Marketing Cloud capabilities include: Email & Journey Automation (Journey Builder, Email Studio, Content Builder, Einstein STO), Audience Segmentation & Data Cloud (unified profiles, behavioral filters, real-time activation, ad sync), Analytics & Revenue Attribution (Marketing Cloud Intelligence, dashboards, campaign influence), and B2B Marketing with Account Engagement (Pardot scoring, automated nurture, bi-directional CRM sync).",
  "what is commerce cloud": "Commerce Cloud powers B2B and B2C buying experiences with AI-driven personalization. Key results: 29% higher conversion rates, 25% increase in average order value, 32% reduction in cart abandonment, 68% faster time-to-market, 50+ countries supported, and $1B+ in GMV processed by top merchants during peak events.",
  "what commerce cloud capabilities does cloudsheer implement": "Commerce Cloud capabilities include: B2C Storefronts (Composable Storefront, Einstein Product Recommendations, PWA Kit, Page Designer, Headless Commerce), B2B Commerce (negotiated pricing, bulk ordering, role-based access, inventory management, ERP connectors), Order Management (distributed routing, ship-from-store/BOPIS, automated returns, real-time tracking), and AI & Commerce Intelligence (Einstein recommendations, AI-powered search, merchandising optimization).",
  "what is experience cloud": "Experience Cloud turns portals into revenue and retention engines. It deflects up to 48% of support tickets, delivers 3.4x ROI (Forrester), resolves cases 40% faster, cuts partner onboarding costs 50%, and drives 2.6x higher partner engagement. 88% of customers say experience is as important as products.",
  "what experience cloud capabilities does cloudsheer implement": "Experience Cloud capabilities include: Customer Self-Service (Customer Service template, case tracking, knowledge base, Agentforce AI chat), Partner Communities (Partner Central template, deal registration, pipeline dashboards, learning paths), Employee Experience (LWR hub for HR/IT, onboarding, social feeds, embedded Agentforce), and B2B Client Portals (Lightning Web Runtime dashboards, invoices/contracts, secure messaging, branded domains).",
  "what is crm analytics and tableau": "CRM Analytics and Tableau provide AI-powered forecasts, live dashboards, and unified data. Key results: 382% three-year ROI (Forrester), 28% improvement in forecast accuracy, 65% faster report generation, payback in under 6 months, 10M+ Tableau users worldwide, and 3.5x more likely to exceed revenue targets with analytics-driven decisions.",
  "what analytics capabilities does cloudsheer implement": "Analytics capabilities include: Sales & Revenue Operations (CRM Analytics dashboards, Einstein Discovery, SAQL waterfall), Service & Customer Success (SLA/backlog dashboards, CSAT drill-down, health scores), Executive & Finance (Tableau workbooks, scorecards, Data Cloud cohort tracking, board reports), and Marketing & Growth (full-funnel attribution, conversion analytics, segmentation insights, next-best-action).",
  "what platform capabilities does cloudsheer implement": "Platform capabilities include: Custom App Development (Dynamic Forms, Lightning Web Components, Apex, mobile apps, CI/CD), Automation & Flow (Flow Builder, Record-Triggered Flows, Screen Flows, Flow Orchestrator, Platform Events), Integration & APIs (MuleSoft connectors for 400+ systems, Platform Events, Change Data Capture, Big Objects), and AppExchange & Ecosystem (10,000+ pre-built apps, security reviewed, expert evaluation).",
  "what is slack": "Slack connects people, tools, and Salesforce data in one place. Key results: 47% increase in productivity, 29% reduction in meetings, 32% fewer internal emails, 85% of users say it improves communication, 3x faster cross-functional decisions, and 26% improvement in employee satisfaction.",
  "what slack capabilities does cloudsheer implement": "Slack capabilities include: Sales & Revenue (Slack Sales Elevate, Slack Connect, Huddles, Slack AI deal summaries), Operations & IT (Workflow Builder automation, 2,600+ app integrations, Canvas knowledge capture, Slack Lists), Customer Success (Slack Connect client collaboration, churn signal channels, QBR automation), and Leadership & Strategy (centralized updates, AI daily digests, strategy Canvas, KPI dashboards).",
  "what is health cloud": "Health Cloud is purpose-built for healthcare - payers, providers, and life sciences. Key results: 30% improvement in patient satisfaction, 25% reduction in admin costs, 40% faster care coordination, 3x faster patient onboarding, 100% HIPAA compliant, and 50% reduction in provider data management effort.",
  "what health cloud capabilities does cloudsheer implement": "Health Cloud capabilities include: Patient & Member 360 (unified clinical/claims/social data, Care Programs, Clinical Data Model, HL7 FHIR APIs, population health dashboards), Care Coordination (Care Plans, Provider Search, automated escalation, Intelligent Document Automation), Patient Engagement (Experience Cloud portals, medication management, secure messaging, personalized content), and Utilization & Authorization (Prior Authorization, Utilization Management workspace, rules-based routing).",
  "what career positions are open at cloudsheer": "Cloudsheer currently has 2 open positions: (1) Project Manager - Full-Time in Noida, India (Work From Office), in the Delivery department; (2) Salesforce Developer - Full-Time in Noida, India (Work From Office), in the Engineering department. Both are actively hiring.",
  "what are the project manager requirements": "The Project Manager role requires 3+ years of project management experience delivering CRM/enterprise software, experience with Salesforce projects, strong Agile/Scrum/waterfall methodology skills, exceptional communication, proficiency with PM tools (Jira, Monday.com, Asana), and PMP/PRINCE2 certification preferred.",
  "what are the salesforce developer requirements": "The Salesforce Developer role requires 2+ years of hands-on Salesforce development (Apex, LWC, SOQL), solid understanding of data model and governor limits, experience with Flow automation, REST API integration knowledge, at least one Salesforce certification (Platform Developer I minimum), and experience with Salesforce CLI.",
  "how to apply for jobs at cloudsheer": "Send your CV to hr@cloudsheer.com with the role title in the subject line, or click Apply on the role listing on the Careers page. Speculative applications are also welcome - email hr@cloudsheer.com if your role is not listed.",
  "what is the interview process at cloudsheer": "The interview process has 3 steps completed in about 2 weeks: (1) 30-min intro call with hiring lead; (2) Technical/case assessment (short take-home task or technical interview, no whiteboard marathons); (3) Final culture-fit conversation with leadership, followed by a fast decision.",
  "is the role remote": "Current openings at Cloudsheer are Work From Office in Noida, India. They offer flexibility within office hours and support async collaboration across time zones.",
  "does cloudsheer sponsor certifications": "Yes. Cloudsheer covers exam fees and provides study time for all Salesforce certifications. They currently hold 60+ certifications across the team.",
  "what are the perks of working at cloudsheer": "Perks include: Global Exposure (work on real international projects across Dallas/Delhi/London/New York), Career Growth (dedicated training budget, Salesforce cert support, clear progression path), Agentforce-First (work on cutting-edge AI platform), Tight-Knit Team (40+ people who enjoy working together), Flexible Culture (async-friendly, outcome-driven), and Varied Projects (constantly learning across industries).",
  "what blog articles does cloudsheer have": "Cloudsheer publishes 7 blog articles: (1) \"Getting Started with Agentforce: A Practical Guide for 2026\" by Rajat Sharma; (2) \"Agentforce vs Einstein Bots: What's the Difference?\" by Rajat Sharma; (3) \"10-Point Checklist for a Successful Salesforce Implementation\" by Tushar Sharma; (4) \"Measuring the ROI of Agentforce: What Our Clients Actually See\" by Tushar Sharma; (5) \"How Data Cloud Makes Your Agentforce Agents Smarter\" by Shubham Bansal; (6) \"7 Ways Agentforce Drives Salesforce Adoption Across Your Team\" by Shivam Goel; (7) \"Top Agentforce Features in the Salesforce Spring '25 Release\" by Tushar Sharma.",
  "who writes the blog articles": "The blog articles are written by Cloudsheer's team: Rajat Sharma (Technical Delivery Head), Tushar Sharma (CEO), Shubham Bansal (Growth & Marketing Head), and Shivam Goel (Strategy & Growth Associate). All content is based on real implementation experience.",
  "how often does cloudsheer publish blog posts": "Cloudsheer aims for 2-3 articles per month covering Agentforce, Salesforce best practices, and implementation guides.",
  "can i suggest a blog topic": "Yes. Email hello@cloudsheer.com with your topic idea. They prioritize content that helps Salesforce teams solve real problems.",
  "what is the newsletter": "Cloudsheer offers a monthly newsletter called \"Get Agentforce Insights Monthly\" with 2,000+ Salesforce professionals subscribed. No spam - just the most useful Agentforce content delivered once a month.",
  "what services does cloudsheer offer": "Cloudsheer offers: Agentforce Implementation, Service Agent Deployment, Sales Agent Deployment, Salesforce Implementation, Integration & Automation, CRM Strategy & Health Check, Analytics & Einstein AI, Managed Support, and services across Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Experience Cloud, CRM Analytics/Tableau, Platform/AppExchange, Slack, and Health Cloud.",
  "what salesforce clouds does cloudsheer cover": "Cloudsheer covers all major Salesforce clouds: Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Experience Cloud, CRM Analytics & Tableau, Salesforce Platform & AppExchange, Slack, Health Cloud, Data Cloud, and Agentforce.",
  "what solutions page stats are shown": "The Solutions page highlights: Service Agent with 78% average case deflection, Sales Development Agent with 3x faster response, Operations Agent saving 12 hrs/week. Cloud-specific stats include Sales Cloud (29% more deals), Service Cloud (78% case deflection), Marketing Cloud (28% higher ROI), CRM Analytics (382% ROI), and Data Cloud for unified customer profiles.",
  "what is data cloud": "Data Cloud creates unified customer profiles with identity resolution, calculated insights, and real-time segments. It powers smarter Agentforce agents and personalization by unifying CRM, ERP, and external data sources.",
  "how is cloudsheer different from large SIs": "Cloudsheer is a specialist Salesforce firm, not a generalist like Deloitte or Accenture. Every consultant works with Salesforce and Agentforce daily. You get senior architects, not junior consultants learning on your dime. Their size means faster decisions, lower overhead, and direct access to leadership.",
  "can cloudsheer handle multi cloud projects": "Yes. Cloudsheer's 40+ person team spans 4 global offices and covers every major Salesforce cloud. For larger engagements, they scale with certified specialists. They have delivered multi-cloud implementations across Sales, Service, Marketing, and Experience Cloud simultaneously.",
  "how does cloudsheer handle data security": "All work is done within Salesforce's enterprise security framework (SOC 2 Type II, HIPAA-eligible, GDPR compliant). They follow Salesforce Well-Architected principles for data access, sharing rules, and encryption. For regulated industries, they have delivered Health Cloud implementations with full HIPAA compliance.",
  "what if we are not ready for agentforce": "That's what the discovery call is for. Cloudsheer will assess your Salesforce org, data quality, and processes to determine if you are ready or what needs to happen first. Many clients start with a standard Salesforce implementation and add Agentforce later.",
  "which salesforce cloud should i start with": "It depends on your biggest pain point. If support costs are high, start with Service Cloud + Agentforce. If leads are going cold, Sales Cloud + Agentforce SDR Agent. Book a discovery call and Cloudsheer will recommend based on your data.",
  "can cloudsheer implement multiple clouds at once": "Yes. Cloudsheer regularly delivers multi-cloud implementations (Sales + Service + Marketing). Their team of 40+ covers every major Salesforce cloud.",
  "does cloudsheer work with existing salesforce orgs": "Absolutely. Most of Cloudsheer's clients have existing Salesforce orgs. They audit your current setup, identify gaps, and optimize before adding new capabilities.",
  "what contact form fields are required": "The contact form requires First Name, Last Name, Work Email, Company, and Message. Optional fields include Phone and Service Interested In (dropdown with options like Agentforce Implementation, Service Agent Deployment, Sales Agent Deployment, etc.).",
  "what happens after submitting the contact form": "After submitting, your details are sent to the Cloudsheer team via Salesforce Web-to-Lead. They typically respond within 4 business hours. You can also book a call directly if the request is urgent.",
  "what is cloudsheer linkedin": "The Cloudsheer LinkedIn page is at https://www.linkedin.com/company/cloud-sheer/.",
  "can i speak to a specific team member": "Yes. Book a discovery call and Cloudsheer will match you with the architect most relevant to your project. You can also reach out to hello@cloudsheer.com to connect with a specific team member.",
  "what is the cloudsheer website url": "The Cloudsheer website is hosted at cloudsheer-consulting.vercel.app.",
  "what faq questions are on the home page": "The home page FAQs cover: What if we're not ready for Agentforce, How is Cloudsheer different from large SIs, What does pricing look like, What happens after go-live, What if we don't see ROI, What does the discovery call look like, Can you handle large/multi-cloud projects, and How do you handle data security and compliance.",
  "what faq questions are on the about page": "About page FAQs: How many Salesforce certifications does your team hold (60+), What industries do you work with, Where are your offices located, Can I speak to a specific team member before engaging.",
  "what faq questions are on the contact page": "Contact page FAQs: What happens on the discovery call, How quickly do you respond to form submissions (within 4 business hours), Is the discovery call really free (yes), Can I request a specific consultant (yes).",
  "what faq questions are on the solutions page": "Solutions page FAQs: Which Salesforce cloud should I start with, Can you implement multiple clouds at once, How long does a typical implementation take, Do you work with companies that already have Salesforce.",
  "what faq questions are on the careers page": "Careers page FAQs: What is the interview process (3 steps in 2 weeks), Is the role fully remote (current openings are Work From Office in Noida), Do you sponsor Salesforce certifications (yes, exam fees and study time), What if my role is not listed (send CV to hr@cloudsheer.com).",
  "what faq questions are on the blog page": "Blog page FAQs: Who writes the articles (Rajat Sharma, Tushar Sharma, Shubham Bansal, Shivam Goel), How often do you publish (2-3 per month), Can I suggest a topic (yes, email hello@cloudsheer.com).",

}

// Find best matching answer
function findAnswer(input) {
  const q = input.toLowerCase().trim()

  // Direct match
  for (const [key, val] of Object.entries(knowledge)) {
    if (q.includes(key) || key.includes(q)) return val
  }

  // Keyword matching
  const words = q.split(/\s+/).filter(w => w.length > 3)
  let bestMatch = null
  let bestScore = 0

  for (const [key, val] of Object.entries(knowledge)) {
    let score = 0
    for (const word of words) {
      if (key.includes(word)) score += 2
      if (val.toLowerCase().includes(word)) score += 1
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = val
    }
  }

  if (bestScore >= 3) return bestMatch

  // Fallback responses
  if (q.includes('price') || q.includes('cost') || q.includes('pricing'))
    return knowledge['what is your pricing']
  if (q.includes('agent') && (q.includes('force') || q.includes('ai')))
    return knowledge['what is agentforce']
  if (q.includes('help') || q.includes('start') || q.includes('contact') || q.includes('talk') || q.includes('book') || q.includes('call'))
    return knowledge['how do i get started']

  return null
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I\'m the Cloudsheer assistant. Ask me anything about Salesforce, Agentforce, or our services. How can I help?' }
  ])
  const [input, setInput] = useState('')
  const [leadCaptured, setLeadCaptured] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadData, setLeadData] = useState({ name: '', email: '', company: '' })
  const [msgCount, setMsgCount] = useState(0)
  const chatRef = useRef(null)

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [messages])

  const sendMessage = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: userMsg }])
    setMsgCount(c => c + 1)

    setTimeout(() => {
      const answer = findAnswer(userMsg)
      if (answer) {
        setMessages(prev => [...prev, { from: 'bot', text: answer }])

        // Intent detection - buying signals trigger lead capture
        const buyingIntent = /pricing|cost|how much|timeline|how long|can you help|get started|hire|implement|quote|proposal|budget|ready to|need help|looking for/i.test(userMsg)

        if (buyingIntent && !leadCaptured && !showLeadForm) {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              from: 'bot',
              text: 'Sounds like this could be a great fit for your team. I can connect you with one of our Salesforce architects for a detailed assessment. What\'s your name and email?'
            }])
            setShowLeadForm(true)
          }, 1200)
        }
        // Progressive capture - after 3 messages, naturally ask
        else if (msgCount >= 3 && !leadCaptured && !showLeadForm) {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              from: 'bot',
              text: 'By the way, I can send you more detailed info on this. Want me to have our team send you a quick summary? Just drop your email below.'
            }])
            setShowLeadForm(true)
          }, 2000)
        }
      } else {
        setMessages(prev => [...prev, {
          from: 'bot',
          text: "Great question! I don't have the specific details on that, but our Salesforce architects definitely can help. Want me to connect you?"
        }])
        if (!leadCaptured && !showLeadForm) {
          setTimeout(() => {
            setShowLeadForm(true)
          }, 800)
        }
      }
    }, 600)
  }

  const submitLead = () => {
    if (!leadData.email) return

    // Send to Salesforce Web-to-Lead
    const iframe = document.createElement('iframe')
    iframe.name = 'sf_chat_lead'
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=' + SF_ORG
    form.target = 'sf_chat_lead'

    const fields = {
      oid: SF_ORG,
      retURL: window.location.href,
      first_name: leadData.name.split(' ')[0] || '',
      last_name: leadData.name.split(' ').slice(1).join(' ') || leadData.name,
      email: leadData.email,
      company: leadData.company || 'Not provided',
      lead_source: 'Website Chatbot',
      description: 'Lead captured via website chatbot. Conversation: ' + messages.filter(m => m.from === 'user').map(m => m.text).join(' | '),
    }

    Object.entries(fields).forEach(([k, v]) => {
      const inp = document.createElement('input')
      inp.type = 'hidden'
      inp.name = k
      inp.value = v
      form.appendChild(inp)
    })

    document.body.appendChild(form)
    form.submit()
    form.remove()
    setTimeout(() => iframe.remove(), 5000)

    setLeadCaptured(true)
    setShowLeadForm(false)
    setMessages(prev => [...prev, {
      from: 'bot',
      text: 'Thanks ' + (leadData.name.split(' ')[0] || '') + '! Our team will reach out within 4 hours. In the meantime, feel free to keep asking questions!'
    }])
  }

  const quickQuestions = [
    'What is Agentforce?',
    'How much does it cost?',
    'How long does implementation take?',
    'What makes Cloudsheer different?',
  ]

  const agentIcon = import.meta.env.BASE_URL + 'icons/agentforce.svg'
  const [typing, setTyping] = useState(false)

  // Wrap sendMessage to show typing indicator
  const originalSend = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: userMsg }])
    setMsgCount(c => c + 1)
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      const answer = findAnswer(userMsg)
      if (answer) {
        setMessages(prev => [...prev, { from: 'bot', text: answer }])
        const buyingIntent = /pricing|cost|how much|timeline|how long|can you help|get started|hire|implement|quote|proposal|budget|ready to|need help|looking for/i.test(userMsg)
        if (buyingIntent && !leadCaptured && !showLeadForm) {
          setTimeout(() => {
            setMessages(prev => [...prev, { from: 'bot', text: "Sounds like this could be a great fit for your team. I can connect you with one of our Salesforce architects for a detailed assessment. What's your name and email?" }])
            setShowLeadForm(true)
          }, 1200)
        } else if (msgCount >= 3 && !leadCaptured && !showLeadForm) {
          setTimeout(() => {
            setMessages(prev => [...prev, { from: 'bot', text: "By the way, I can send you more detailed info on this. Want me to have our team send you a quick summary? Just drop your email below." }])
            setShowLeadForm(true)
          }, 2000)
        }
      } else {
        setMessages(prev => [...prev, { from: 'bot', text: "Great question! I don't have the specific details on that, but our Salesforce architects definitely can help. Want me to connect you?" }])
        if (!leadCaptured && !showLeadForm) { setTimeout(() => setShowLeadForm(true), 800) }
      }
    }, 800 + Math.random() * 600)
  }

  return (
    <>
      {/* Toggle button with bounce animation */}
      {!open && (
        <div className="fixed bottom-5 right-5 z-50">
          {/* Notification badge */}
          <div className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce"
            style={{ animationDuration: '2s' }}>
            1
          </div>
          <button onClick={() => setOpen(true)} className="group relative" aria-label="Open chat">
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #032D60, #0176D3)', boxShadow: '0 8px 30px rgba(1,118,211,0.4)' }}>
              <img src={agentIcon} alt="Chat" className="w-10 h-10" />
            </div>
            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: '#0176D3' }} />
          </button>
          {/* Teaser message */}
          <div className="absolute bottom-full right-0 mb-3 bg-white rounded-xl shadow-lg px-4 py-2.5 w-56 animate-fade-up"
            style={{ border: '1px solid rgba(1,118,211,0.1)' }}>
            <p className="text-xs font-semibold" style={{ color: '#032D60' }}>Got a Salesforce question?</p>
            <p className="text-[10px] mt-0.5" style={{ color: '#64748B' }}>Ask our AI - instant answers on every cloud</p>
            <div className="absolute bottom-0 right-6 w-3 h-3 bg-white rotate-45 translate-y-1.5" style={{ borderRight: '1px solid rgba(1,118,211,0.1)', borderBottom: '1px solid rgba(1,118,211,0.1)' }} />
          </div>
        </div>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-5 right-5 z-50 w-[340px] sm:w-[380px] rounded-2xl overflow-hidden flex flex-col"
          style={{ height: '520px', boxShadow: '0 25px 80px rgba(3,45,96,0.3)', border: '1px solid rgba(1,118,211,0.08)', backgroundColor: 'white' }}>

          {/* Header with gradient */}
          <div className="shrink-0 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 60%, #0176D3 100%)' }}>
            {/* Animated dots in header */}
            <div className="absolute top-2 right-12 w-1 h-1 rounded-full bg-white/20 animate-pulse" />
            <div className="absolute top-4 right-20 w-1.5 h-1.5 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="px-4 py-3 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                  <img src={agentIcon} alt="Agentforce" className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-tight">Cloudsheer AI</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-[10px] font-medium" style={{ color: 'rgba(186,220,255,0.9)' }}>Online - Powered by Agentforce</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'}
                aria-label="Close chat">
                <X className="w-4 h-4 text-white/80" />
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div ref={chatRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3" style={{ backgroundColor: '#F5F7FB' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`} style={{ animationDuration: '0.3s' }}>
                {msg.from === 'bot' && (
                  <div className="w-7 h-7 rounded-lg shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)', border: '1px solid rgba(1,118,211,0.08)' }}>
                    <img src={agentIcon} alt="" className="w-5 h-5" />
                  </div>
                )}
                <div className={`max-w-[80%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  msg.from === 'user' ? 'text-white rounded-2xl rounded-br-md' : 'rounded-2xl rounded-bl-md'
                }`} style={msg.from === 'user'
                  ? { background: 'linear-gradient(135deg, #0176D3, #032D60)', boxShadow: '0 2px 8px rgba(1,118,211,0.2)' }
                  : { backgroundColor: 'white', color: '#334155', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.04)' }
                }>
                  {msg.text}
                </div>
                {msg.from === 'user' && (
                  <div className="w-7 h-7 rounded-lg shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #0176D3, #032D60)' }}>
                    <User className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-2 items-start">
                <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)', border: '1px solid rgba(1,118,211,0.08)' }}>
                  <img src={agentIcon} alt="" className="w-5 h-5" />
                </div>
                <div className="rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5"
                  style={{ backgroundColor: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#94A3B8', animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#94A3B8', animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#94A3B8', animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* Lead capture form */}
            {showLeadForm && !leadCaptured && (
              <div className="rounded-xl p-4 space-y-2.5 animate-fade-up" style={{ background: 'linear-gradient(135deg, #F0F7FF, #E8F0FE)', border: '1px solid rgba(1,118,211,0.1)', boxShadow: '0 2px 8px rgba(1,118,211,0.06)' }}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: '#0176D3' }}>
                    <User className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-xs font-bold" style={{ color: '#032D60' }}>Connect with our team</p>
                </div>
                <input type="text" placeholder="Your name"
                  value={leadData.name} onChange={e => setLeadData({ ...leadData, name: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 rounded-lg border outline-none focus:border-blue-400 transition-colors" style={{ borderColor: '#D4E2F5', backgroundColor: 'white' }} />
                <input type="email" placeholder="Work email *" required
                  value={leadData.email} onChange={e => setLeadData({ ...leadData, email: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 rounded-lg border outline-none focus:border-blue-400 transition-colors" style={{ borderColor: '#D4E2F5', backgroundColor: 'white' }} />
                <input type="text" placeholder="Company (optional)"
                  value={leadData.company} onChange={e => setLeadData({ ...leadData, company: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 rounded-lg border outline-none focus:border-blue-400 transition-colors" style={{ borderColor: '#D4E2F5', backgroundColor: 'white' }} />
                <button onClick={submitLead}
                  className="w-full text-xs font-bold py-2.5 rounded-lg text-white transition-all hover:shadow-md active:scale-[0.98]"
                  style={{ background: 'linear-gradient(135deg, #0176D3, #032D60)' }}>
                  Get Connected
                </button>
                <p className="text-center text-[9px]" style={{ color: '#94A3B8' }}>We respond within 4 hours</p>
              </div>
            )}

            {/* Quick questions with icons */}
            {messages.length <= 2 && (
              <div className="space-y-2 pt-1">
                <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#94A3B8' }}>Ask me about</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { q: 'What is Agentforce?', icon: '🤖' },
                    { q: 'How much does it cost?', icon: '💰' },
                    { q: 'Implementation timeline?', icon: '⏱️' },
                    { q: 'Who is Cloudsheer?', icon: '☁️' },
                    { q: 'Sales Cloud features?', icon: '📈' },
                    { q: 'Service Cloud features?', icon: '🎧' },
                  ].map(({ q, icon }) => (
                    <button key={q}
                      onClick={() => { setMessages(prev => [...prev, { from: 'user', text: q }]); setMsgCount(c => c + 1); setTyping(true); setTimeout(() => { setTyping(false); const a = findAnswer(q); if (a) setMessages(prev => [...prev, { from: 'bot', text: a }]); }, 800 + Math.random() * 400) }}
                      className="flex items-center gap-1.5 text-[11px] px-2.5 py-2 rounded-lg border transition-all hover:shadow-sm active:scale-[0.97]"
                      style={{ color: '#334155', borderColor: 'rgba(1,118,211,0.1)', backgroundColor: 'white' }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#EFF6FF'; e.currentTarget.style.borderColor = '#0176D3' }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.borderColor = 'rgba(1,118,211,0.1)' }}>
                      <span>{icon}</span> {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="px-3 pb-3 pt-2 shrink-0" style={{ borderTop: '1px solid rgba(0,0,0,0.04)' }}>
            <div className="flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all"
              style={{ backgroundColor: '#F0F4FA', border: '1.5px solid transparent' }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && originalSend()}
                onFocus={e => e.currentTarget.parentElement.style.borderColor = '#0176D3'}
                onBlur={e => e.currentTarget.parentElement.style.borderColor = 'transparent'}
                placeholder="Ask anything about Salesforce..."
                className="flex-1 text-xs outline-none bg-transparent"
                style={{ color: '#334155' }}
              />
              <button onClick={originalSend} className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all active:scale-90"
                style={{ background: input.trim() ? 'linear-gradient(135deg, #0176D3, #032D60)' : '#D4E2F5' }}>
                <Send className="w-3.5 h-3.5" style={{ color: input.trim() ? 'white' : '#94A3B8' }} />
              </button>
            </div>
            <div className="flex items-center justify-center gap-1 mt-1.5">
              <img src={agentIcon} alt="" className="w-3 h-3 opacity-40" />
              <p className="text-[9px]" style={{ color: '#B8C4D0' }}>Powered by Agentforce</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
