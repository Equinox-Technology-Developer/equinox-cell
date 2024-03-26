// lib/jobs.js
const jobs = [
  // Job 1
  {
    name: 'Finance',
    slug: 'finance',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Finance',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview: `The finance department serves as the financial backbone of the company, meticulously overseeing budgeting, strategic planning, regulatory compliance, and accounting with a keen eye, ensuring every penny is optimized to fuel the company's growth and success.`,
    key_responsibilities: [
      'Managing financial transactions, including accounts payable and receivable.',
      'Generating financial reports and forecasts to support strategic decision-making by company leadership.',
      'Conducting financial analysis to identify trends, risks, and opportunities for improvement.',
      'Monitoring cash flow and liquidity to maintain financial stability and meet financial obligations.',
      'Collaborating with other departments to provide financial insights and support cross-functional initiatives.',
      'Ensuring accurate and timely preparation of tax filings and compliance with tax laws and regulations.',
      'Assessing and mitigating financial risks through the implementation of risk management strategies.',
      'Supporting audits and external financial reporting requirements to maintain transparency and accountability.',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Preferable age is <30 Years Old',
      'Proficient in the use of Microsoft Office, especially Microsoft Excel.',
      'Have adept knowledge regarding Indonesia Taxation Law, and regulations',
      'Able to create and managed Balance sheets, income/revenue, invoices and reconciliations',
      'Strong analytical skills with attention to detail.',
      'Excellent communication and interpersonal abilities.',
      'Ability to thrive in a fast-paced and dynamic environment.',
    ],
    function_of_department: [
      `The finance department serves as the financial backbone of the company, meticulously overseeing budgeting, strategic planning, regulatory compliance, and accounting with a keen eye, ensuring every penny is optimized to fuel the company's growth and success.`,
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 2
  {
    name: 'Human Resource',
    slug: 'human-resource',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Human Capital & Talent Acquisition',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview:
      'Human Resource Department thrive to support Equinox Technology’s Strategic Goals, Manpower Planning,  and setting a positive work environment.',
    key_responsibilities: [
      'Recruiting and Attracting, sourcing, headhunting, and hiring qualified candidates for open positions within the organization.',
      'Facilitating our employee through the process of Onboarding and Offboarding',
      'Encouraging active employee participation and engagement',
      'Able to calculate, know, and adept with bonus and benefits calculations',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Have adept knowledge regarding PPH 21 and Payroll, Attendance, alongside with HRIS',
      'Able to use Ms. Office',
      'Have a good understanding on Indonesian Labor’s Law',
    ],
    function_of_department: [
      'Our HR Department deals with Recruitment, Headhunting, Payroll, Employee Relations, health and welfare, benefits, and compliance to employment laws and regulations.',
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 3
  {
    name: 'Web Developer',
    slug: 'web-developer',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Full Stack Web Developer',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview: `Join our team as a Web Developer and take on the exciting challenge of crafting engaging digital experiences! As a key member of our department, you'll be responsible for designing and developing innovative web solutions that captivate our audience. From conceptualizing and implementing user-friendly interfaces to optimizing website performance, your expertise will drive our online presence forward. If you're passionate about leveraging your skills to create impactful digital solutions, we'd love to hear from you.
`,
    key_responsibilities: [
      'Collaborating with cross-functional teams to understand project requirements and translate them into technical solutions.',
      'Writing clean, efficient, and well-documented code using HTML, CSS, JavaScript, and other programming languages as necessary.',
      'Implementing best practices for web development, including accessibility standards, SEO principles.',
      'Testing and debugging websites and web applications to ensure optimal functionality across various browsers, devices, and screen sizes.',
      'Continuously optimizing website performance and user experience through ongoing analysis and refinement.',
      'Keeping up-to-date with industry trends and emerging technologies to propose innovative solutions and improve development processes.',
      'Providing technical support and troubleshooting assistance as needed to maintain the integrity and stability of our online platforms.',
      'Collaborating with stakeholders to gather feedback and iterate on design and functionality improvements.',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Have adept knowledge regarding PPH 21 and Payroll, Attendance, alongside with HRIS',
      'Able to use Ms. Office',
      'Have a good understanding on Indonesian Labor’s Law',
    ],
    function_of_department: [
      `The web developer plays a pivotal role in designing, developing, and maintaining the company's online presence, ensuring a seamless user experience and leveraging cutting-edge technologies to drive engagement and achieve business objectives
`,
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 4
  {
    name: 'Copywriter',
    slug: 'copywriter',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Marketing & Content Writer',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview: `Join our Copywriting team to create captivating content that resonates with our audience, from innovative campaign concepts to refining brand messaging, ensuring consistency across all channels. If you're passionate about using words to inspire action, join us in shaping memorable experiences.`,
    key_responsibilities: [
      'Crafting compelling and persuasive content for various platforms and mediums, including website copy, social media posts, emails, advertisements, and marketing collateral.',
      'Collaborating with cross-functional teams, including marketing, design, and product development, to ensure alignment of messaging and brand voice across all communication channels.',
      'Researching industry trends, target audience preferences, and competitor strategies to inform content development and maintain relevance.',
      'Generating creative ideas and concepts for marketing campaigns and promotions that effectively engage and resonate with our target audience.',
      'Editing and proofreading content to ensure accuracy, clarity, and adherence to brand guidelines, grammar, and style standards.',
      'Optimizing content for search engines (SEO) to improve visibility and drive organic traffic to our digital assets.',
      'Monitoring and analyzing the performance of content initiatives, using data and analytics to inform future content strategies and optimizations.',
      'Staying abreast of emerging trends and best practices in copywriting, digital marketing, and content creation to continuously enhance our content quality and effectiveness.',
      'Adhering to project timelines and deadlines, managing multiple priorities effectively, and maintaining high standards of professionalism and productivity.',
      'Contributing to brainstorming sessions, creative meetings, and content strategy discussions to generate innovative ideas and solutions that support our overall business objectives.',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Preferable age is <30 Years Old',
      'Have ability to adapt towards diverse writing content topic and understand persuasive manners to provoke conversions through copywriting',
      'Able to apply and incorporate SEO best practices in copywriting and enhance the article performance through the use of analytics tools.',
      'Have a proven track record in copywriting industry',
    ],
    function_of_department: [
      'Copywriting with us  entails crafting persuasive and engaging content across various platforms to effectively communicate brand messages, engage target audiences, and drive desired actions or outcomes.',
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 5
  {
    name: 'Personal Assistant',
    slug: 'personal-assistant',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Personal Assistant',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview:
      'Human Resource Department thrive to support Equinox Technology’s Strategic Goals, Manpower Planning,  and setting a positive work environment.',
    key_responsibilities: [
      'Recruiting and Attracting, sourcing, headhunting, and hiring qualified candidates for open positions within the organization.',
      'Facilitating our employee through the process of Onboarding and Offboarding',
      'Encouraging active employee participation and engagement',
      'Able to calculate, know, and adept with bonus and benefits calculations',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Have adept knowledge regarding PPH 21 and Payroll, Attendance, alongside with HRIS',
      'Able to use Ms. Office',
      'Have a good understanding on Indonesian Labor’s Law',
    ],
    function_of_department: [
      'Our HR Department deals with Recruitment, Headhunting, Payroll, Employee Relations, health and welfare, benefits, and compliance to employment laws and regulations.',
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 6
  {
    name: 'Affiliate',
    slug: 'affiliate',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Ads, Affiliate & Social Media',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview:
      'Human Resource Department thrive to support Equinox Technology’s Strategic Goals, Manpower Planning,  and setting a positive work environment.',
    key_responsibilities: [
      'Recruiting and Attracting, sourcing, headhunting, and hiring qualified candidates for open positions within the organization.',
      'Facilitating our employee through the process of Onboarding and Offboarding',
      'Encouraging active employee participation and engagement',
      'Able to calculate, know, and adept with bonus and benefits calculations',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Have adept knowledge regarding PPH 21 and Payroll, Attendance, alongside with HRIS',
      'Able to use Ms. Office',
      'Have a good understanding on Indonesian Labor’s Law',
    ],
    function_of_department: [
      'Our HR Department deals with Recruitment, Headhunting, Payroll, Employee Relations, health and welfare, benefits, and compliance to employment laws and regulations.',
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 7
  {
    name: 'CRM',
    slug: 'crm',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'CRM',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview: `We're seeking a dedicated individual who excels in managing customer interactions and leveraging CRM tools to drive engagement and loyalty. As a pivotal member of our customer-focused team, you'll play a key role in optimizing our CRM strategies to cultivate meaningful connections and drive business growth.`,
    key_responsibilities: [
      'Assist Customer in the Pre-sales and Post-Sales activities',
      'Manage and optimize CRM systems to maximize efficiency and effectiveness in customer interactions.',
      'Collaborate with cross-functional teams to develop and implement CRM strategies that align with business objectives and enhance the customer journey on our website.',
      'Segment and analyze customer data to identify trends, preferences, and opportunities for targeted communication and engagement.',
      'Design and execute email marketing campaigns, including newsletters, promotions, and automated workflows, to nurture leads and drive conversions.',
      'Implement and monitor website personalization tactics to deliver tailored content and recommendations based on user behavior and preferences.',
      'Continuously evaluate and refine CRM processes and workflows to improve user experience and optimize performance metrics.',
      'Stay informed about industry trends and best practices in CRM technology and methodologies, and recommend innovative approaches to enhance our CRM capabilities.',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Preferable age is <30 Years Old',
      'Proficient to use Ms. Office',
      'Proven experience in CRM management, preferably within a digital marketing or e-commerce environment.',
      'Proficiency in CRM software and tools, with a strong understanding of database management and segmentation techniques.',
      'Analytical mindset with the ability to interpret data and derive actionable insights to drive decision-making.',
      'Excellent communication and interpersonal skills, with a customer-centric approach to problem-solving.',
      'Ability to multitask and prioritize in a fast-paced environment, while maintaining a high level of attention to detail.',
    ],
    function_of_department: [
      `The CRM Department at Equinox Technology is dedicated to building and maintaining strong relationships with our customers through personalized interactions and experiences. We leverage CRM tools and strategies to capture, analyze, and utilize customer data to deliver targeted communication and drive engagement across various touchpoints, including our website. By implementing effective CRM practices, we aim to enhance customer satisfaction, increase retention rates, and foster long-term loyalty. As a CRM Specialist, you'll have the opportunity to contribute to our customer-centric approach and play a key role in shaping the overall success of our business.`,
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 8
  {
    name: 'Purchasing',
    slug: 'purchasing',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Purchasing',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview: `Join our team as a Purchasing Specialist and play a vital role in optimizing our procurement processes! As a key member of our team, you'll be responsible for sourcing, negotiating, and managing the acquisition of goods and services essential to our operations. Your expertise will ensure timely delivery, cost efficiency, and quality standards, contributing to our company's success. If you have a keen eye for detail, strong negotiation skills, and a passion for streamlining supply chain operations, we invite you to apply and be part of our dynamic team.`,
    key_responsibilities: [
      `Sourcing and selecting suppliers: Identifying potential vendors, evaluating their capabilities, and selecting those that best meet the company's needs in terms of quality, price, and reliability.`,
      'Negotiating contracts and terms: Negotiating pricing, payment terms, delivery schedules, and other contract terms with suppliers to achieve favorable agreements while minimizing costs and risks.',
      'Managing supplier relationships: Building and maintaining strong relationships with suppliers to ensure open communication, resolve issues promptly, and collaborate on continuous improvement initiatives.',
      'Procurement process management: Overseeing the entire procurement process, from requisition to payment, ensuring compliance with company policies, procedures, and legal requirements.',
      `Inventory management: Monitoring inventory levels, optimizing stock levels to meet demand while minimizing excess or obsolete inventory, and ensuring timely replenishment of goods.`,
      'Cost control and savings: Implementing cost-saving strategies, such as bulk purchasing, negotiating discounts, and identifying alternative suppliers or materials to reduce procurement costs without sacrificing quality.',
      'Quality assurance: Ensuring that purchased goods and services meet quality standards and specifications through vendor evaluation, inspection, and quality control processes.',
      'Data analysis and reporting: Utilizing procurement software and systems to analyze spending patterns, track supplier performance, and generate reports to support decision-making and identify opportunities for improvement.',
      'Compliance and risk management: Ensuring compliance with relevant regulations, standards, and ethical practices, as well as identifying and mitigating risks associated with procurement activities.',
      'Cross-functional collaboration: Collaborating with internal stakeholders, such as finance, operations, and supply chain management, to align procurement activities with business goals, optimize processes, and support overall organizational success.',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Age < 30 Years Old is preferable',
      'Proficiency in Mandarin (spoken and written) to communicate with Mandarin-speaking suppliers.',
      'Proven experience in procurement or supply chain management.',
      'Strong negotiation skills and cost analysis expertise.',
      'Excellent communication and interpersonal skills.',
      'Attention to detail and a strong sense of organization.',
      'Available for international business travel',
    ],
    function_of_department: [
      'Purchasing team within our company involves strategically sourcing, negotiating, and managing the acquisition of goods and services essential for operations, ensuring timely availability, cost optimization, and quality standards adherence to support organizational objectives and growth.',
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 9
  {
    name: 'Graphic Designer',
    slug: 'graphic-designer',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Design & UX',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview: `We're seeking a creative individual with a passion for visual storytelling and a keen eye for design to enhance our online presence. As a pivotal member of our marketing team, you'll have the opportunity to shape the visual identity of our brand and create engaging user experiences on our website.`,
    key_responsibilities: [
      'Collaborate with cross-functional teams to understand project requirements and objectives.',
      'Design visually compelling graphics, illustrations, and layouts for website pages, banners, and other digital assets',
      'Create and optimize images and multimedia content for web and mobile platforms.',
      'Ensure brand consistency and adherence to design guidelines across all digital touchpoints.',
      'Stay updated on industry trends and best practices in web design and user experience.',
      'Participate in brainstorming sessions and contribute innovative ideas to elevate our online presence.',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Experienced min. 1 year in related field',
      'Proven experience in graphic design with a focus on website design and optimization.',
      'Adept in photography technique and sensibility',
      'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign) and other relevant design tools (CapCut, etc).',
      'Strong understanding of web design principles, typography, color theory, and layout techniques.',
      'Knowledge of HTML, CSS, and responsive design principles is a plus.',
      'Excellent communication and collaboration skills with the ability to work effectively in a team environment.',
      'Strong attention to detail and ability to manage multiple projects simultaneously',
    ],
    function_of_department: [
      `The Graphic Design Department at Equinox Technology plays a critical role in shaping our brand identity and conveying our message effectively to our target audience. We are responsible for creating visually engaging designs that capture the essence of our brand while ensuring a seamless user experience on our website and other digital platforms. From concept development to final execution, we work closely with various teams to bring creative ideas to life and drive engagement and conversion. As a Website Graphic Designer, you'll have the opportunity to contribute to our ongoing success by creating captivating visuals that resonate with our audience and elevate our online presence.`,
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 10
  {
    name: 'Google Ads Specialist',
    slug: 'google-ads-specialist',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Marketing',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview: `We're seeking a skilled individual with expertise in Google Ads management to optimize our online advertising campaigns and elevate our digital presence. As a key member of our marketing team, you'll have the opportunity to leverage your analytical skills and strategic mindset to deliver measurable results and contribute to our company's growth.`,
    key_responsibilities: [
      'Develop and execute Google Ads campaigns across search, display, and video networks to drive website traffic, conversions, and revenue.',
      'Conduct keyword research and analysis to identify relevant search terms and optimize ad targeting and bidding strategies.',
      'Create compelling ad copy and visual assets that resonate with our target audience and drive engagement.',
      'Monitor campaign performance, analyze key metrics, and optimize campaigns for maximum efficiency and ROI.',
      'Implement A/B testing and experimentation to identify high-performing ad variations and refine campaign strategies.',
      'Collaborate with cross-functional teams including content creators, designers, and web developers to align advertising efforts with overall marketing objectives.',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Proven experience managing Google Ads campaigns with a focus on website optimization and performance.',
      'In-depth knowledge of Google Ads platform, including campaign setup, targeting options, and bidding strategies.',
      'Strong analytical skills with the ability to interpret data and draw actionable insights to optimize campaign performance.',
      'Excellent communication and collaboration skills to work effectively with internal teams and external partners.',
      'Detail-oriented mindset with a passion for staying up-to-date on industry trends and best practices in digital advertising.',
    ],
    function_of_department: [
      'While the Graphic Design Department primarily focuses on creating visually compelling assets for various marketing channels, their role is crucial in supporting Google Ads campaigns aimed at driving traffic to our website. From designing engaging display ads to crafting captivating video content, the graphic design team ensures that our advertising materials effectively communicate our brand message and capture the attention of our target audience. By collaborating closely with the Google Ads Specialist and other marketing stakeholders, the graphic design department contributes to the success of our online advertising efforts and helps us achieve our marketing goals.',
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 11
  {
    name: 'Backend Developer',
    slug: 'backend-developer',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Full Stack Web Developer',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview:
      'Human Resource Department thrive to support Equinox Technology’s Strategic Goals, Manpower Planning,  and setting a positive work environment.',
    key_responsibilities: [
      'Recruiting and Attracting, sourcing, headhunting, and hiring qualified candidates for open positions within the organization.',
      'Facilitating our employee through the process of Onboarding and Offboarding',
      'Encouraging active employee participation and engagement',
      'Able to calculate, know, and adept with bonus and benefits calculations',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Have adept knowledge regarding PPH 21 and Payroll, Attendance, alongside with HRIS',
      'Able to use Ms. Office',
      'Have a good understanding on Indonesian Labor’s Law',
    ],
    function_of_department: [
      'Our HR Department deals with Recruitment, Headhunting, Payroll, Employee Relations, health and welfare, benefits, and compliance to employment laws and regulations.',
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 12
  {
    name: 'Recruiter',
    slug: 'recruiter',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Human Capital & Talent Acquisition',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview:
      'Human Resource Department thrive to support Equinox Technology’s Strategic Goals, Manpower Planning,  and setting a positive work environment.',
    key_responsibilities: [
      'Recruiting and Attracting, sourcing, headhunting, and hiring qualified candidates for open positions within the organization.',
      'Facilitating our employee through the process of Onboarding and Offboarding',
      'Encouraging active employee participation and engagement',
      'Able to calculate, know, and adept with bonus and benefits calculations',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Have adept knowledge regarding PPH 21 and Payroll, Attendance, alongside with HRIS',
      'Able to use Ms. Office',
      'Have a good understanding on Indonesian Labor’s Law',
    ],
    function_of_department: [
      'Our HR Department deals with Recruitment, Headhunting, Payroll, Employee Relations, health and welfare, benefits, and compliance to employment laws and regulations.',
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 13
  {
    name: 'Front End Developer',
    slug: 'front-end-developer',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Full Stack Web Developer',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview:
      'Human Resource Department thrive to support Equinox Technology’s Strategic Goals, Manpower Planning,  and setting a positive work environment.',
    key_responsibilities: [
      'Recruiting and Attracting, sourcing, headhunting, and hiring qualified candidates for open positions within the organization.',
      'Facilitating our employee through the process of Onboarding and Offboarding',
      'Encouraging active employee participation and engagement',
      'Able to calculate, know, and adept with bonus and benefits calculations',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Have adept knowledge regarding PPH 21 and Payroll, Attendance, alongside with HRIS',
      'Able to use Ms. Office',
      'Have a good understanding on Indonesian Labor’s Law',
    ],
    function_of_department: [
      'Our HR Department deals with Recruitment, Headhunting, Payroll, Employee Relations, health and welfare, benefits, and compliance to employment laws and regulations.',
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 14
  {
    name: 'Business Development',
    slug: 'business-development',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Full Stack Web Developer',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview: `we are seeking a proactive and strategic individual to lead our efforts in leveraging our website as a powerful tool for business growth and expansion. This role offers an exciting opportunity to drive revenue generation and cultivate partnerships through innovative digital strategies`,
    key_responsibilities: [
      'Develop and execute a comprehensive business development strategy focused on maximizing the potential of our website as a key revenue driver.',
      'Identify and pursue new business opportunities through strategic partnerships, collaborations, and innovative digital initiatives.',
      'Collaborate with cross-functional teams to optimize website functionality, user experience, and conversion rates to drive business objectives.',
      'Build and maintain relationships with potential clients, partners, and stakeholders through effective communication, networking, and negotiation.',
      'Analyze market trends, competitor activities, and customer feedback to identify growth opportunities and inform strategic decision-making.',
      'Monitor website performance metrics, sales data, and other key performance indicators to track progress towards business development goals.',
      'Prepare and present business proposals, reports, and presentations to senior management and key stakeholders to drive decision-making and support business development efforts',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Preferable age is <30 Years Old',
      'Able to use Ms. Office',
      'Proven experience in business development, sales, or marketing, with a strong track record of success in driving revenue growth',
      'Deep understanding of digital marketing strategies, and e-commerce sales channels.',
      'Exceptional communication, negotiation, and interpersonal skills, with the ability to build and maintain relationships with diverse stakeholders.',
      'Strong analytical skills with the ability to interpret data, identify trends, and derive actionable insights to drive business objectives.',
      'Strategic thinker with a results-driven mindset and the ability to thrive in a fast-paced and dynamic environment.',
    ],
    function_of_department: [
      `The Business Development Department at Equinox Technology is responsible for identifying and pursuing opportunities to drive growth, expand market reach, and enhance revenue generation. We work closely with various internal teams to develop and execute strategic initiatives that align with the company's overall objectives. Our focus spans across various channels, including partnerships, sales, marketing, and digital platforms such as the company website. As a Website Business Development Specialist, you'll play a critical role in leveraging our online presence to unlock new business opportunities and drive sustainable growth`,
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
  // Job 15
  {
    name: 'SEO',
    slug: 'seo',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'SEO',
    location: 'Jakarta, Indonesia',
    availability: 2,
    overview: `We're seeking a talented individual with expertise in website optimization to enhance our search engine presence and drive sustainable growth. As an integral member of our digital marketing team, you'll play a key role in maximizing our website's performance and expanding our reach to target audiences`,
    key_responsibilities: [
      'Conduct keyword research and analysis to identify opportunities for website optimization.',
      'Develop and implement on-page and off-page SEO strategies to improve search engine rankings.',
      'Optimize website content, including copywriting, meta tags, headings, and images, for targeted keywords and user intent.',
      'Monitor website performance using SEO tools and analytics platforms to track key metrics and identify areas for improvement.',
      'Collaborate with content creators, web developers, and designers to ensure SEO best practices are integrated into website updates and new launches.',
      'Stay informed about industry trends, algorithm updates, and emerging technologies to continuously refine and adapt SEO strategies.',
    ],
    key_qualifications: [
      'Bachelors degree With min GPA 3.2 from reputable university',
      'Preferable age is <30 Years Old',
      'Able to use Ms. Office',
      'Proven experience as an SEO Specialist with a focus on website optimization',
      'In-depth knowledge of search engine algorithms, ranking factors, and SEO best practices.',
      'Proficiency in SEO tools such as Ahrefs, Screaming Frog, Google Tag Manager, Google Analytics, Google Search Console, SEMrush, or Moz.',
      'Able to do On-PAge Search Engine Optimization and Schema Markup',
      'Strong analytical skills with the ability to interpret data and draw actionable insights.',
      'Excellent communication and collaboration skills to work effectively across teams.',
      'Detail-oriented mindset with a passion for staying up-to-date on the latest trends and techniques in SEO.',
    ],
    function_of_department: [
      `The SEO Department at Equinox Technology plays a crucial role in driving organic traffic and improving online visibility for our website. We are responsible for developing and implementing SEO strategies to optimize website content, improve search engine rankings, and attract qualified traffic. By staying abreast of search engine algorithms and industry trends, we ensure that our website remains competitive and effectively reaches our target audience. As an SEO Specialist, you'll have the opportunity to contribute to our digital marketing efforts and drive measurable results through strategic optimization initiatives.`,
    ],
    equinox_technology:
      'Equinox Technology is a dynamic retail & SaaS enterprise, spearheading innovation in the e-commerce retail space. Specializing in a diverse range of products including home & garden essentials, cutting-edge electronics, and exquisite art pieces, we are committed to enriching the online shopping experience for our customers.',
  },
];

const getAllJob = () => {
  return jobs;
};

const getJobsBySlug = (slug) => {
  return jobs.find((job) => job.slug === slug);
};

module.exports = {
  getAllJob,
  getJobsBySlug,
};
