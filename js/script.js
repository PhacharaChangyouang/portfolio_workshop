class PortfolioWebsite {
    constructor() {
        // --- Translations object containing all language data ---
        this.translations = {
            en: {
                // Page Title
                pageTitle: "Phachara - Portfolio",

                // Navigation
                navHome: "Home",
                navAbout: "About",
                navSkills: "Skills",
                navProjects: "Projects",
                navContact: "Contact",

                // Hero Section
                heroGreeting: "Hello, I'm Phachara",
                heroSubtitle: "Full Stack Developer",
                heroDescription: "I create beautiful and functional web applications using modern technologies",
                viewWorkBtn: "View My Work",
                getInTouchBtn: "Get In Touch",

                // About Section
                aboutTitle: "About Me",
                aboutP1: "I am a passionate Full Stack Developer with experience in creating web applications using modern technologies. I love solving complex problems and learning new technologies to deliver exceptional user experiences.",
                aboutP2: "My journey in web development started during my studies in Software Engineering at RMUTL, where I discovered my passion for creating digital solutions that make a difference.",
                yearsExpCount: "2+",
                yearsExpLabel: "Years Experience",
                projectsCompCount: "15+",
                projectsCompLabel: "Projects Completed",
                clientsCount: "10+",
                clientsLabel: "Happy Clients",
                educationTitle: "Education & Certifications",
                degreeTitle: "Bachelor of Software Engineering",
                university: "Rajamangala University of Technology Lanna (RMUTL)",
                degreeYear: "2024 - 2028",
                bootcampTitle: "Web Development Bootcamp",
                bootcampDesc: "Completed comprehensive full-stack development course",
                bootcampYear: "2025",

                // Skills Section
                skillsTitle: "My Skills",
                skillHTML: "HTML5",
                skillHTMLDesc: "Semantic markup, accessibility best practices, and modern HTML5 features",
                skillCSS: "CSS3",
                skillCSSDesc: "Responsive design, CSS Grid, Flexbox, animations, and modern CSS techniques",
                skillJS: "JavaScript",
                skillJSDesc: "ES6+ features, DOM manipulation, async programming, and modern JavaScript",
                skillReact: "React",
                skillReactDesc: "Component-based architecture, hooks, state management, and modern React patterns",
                skillNode: "Node.js",
                skillNodeDesc: "Server-side development, REST APIs, database integration, and Express.js",
                skillMongo: "MongoDB",
                skillMongoDesc: "NoSQL database design, queries, indexing, and performance optimization",
                profExpTitle: "Professional Experience",
                profExp1: "Built 5+ responsive websites using HTML5/CSS3",
                profExp2: "Developed interactive web applications with JavaScript",
                profExp3: "Implemented RESTful APIs with Node.js and Express",
                profExp4: "Managed databases using MongoDB and SQL",
                profExp5: "Collaborated using Git version control",

                // Projects Section
                projectsTitle: "My Projects",
                filterAll: "All",
                filterWeb: "Web Apps",
                filterMobile: "Mobile",
                filterDesign: "Design",
                project1Title: "E-commerce Platform",
                project1Desc: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
                project2Title: "Task Management App",
                project2Desc: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                project3Title: "Weather Forecast App",
                project3Desc: "A responsive weather application with location-based forecasts, interactive maps, and beautiful weather animations.",
                liveDemoBtn: "Live Demo",
                githubBtn: "GitHub",

                // Contact Section
                contactTitle: "Get In Touch",
                contactSubtitle: "Let's Connect and Explore New Horizons Together",
                contactP1: "As a student with a constant thirst for knowledge and a passion for growth, I'm always eager to hear about exciting new projects and opportunities that offer valuable learning experiences.",
                contactP2: "Whether you're seeking a collaborative mind to grow with, have questions you'd like to explore, or simply want to connect and share interesting ideas – please don't hesitate to reach out! I truly believe that learning from others and working together is the key to deeper understanding and endless innovation.",
                contactEmail: "phachara_ch67@rmutl.live.ac.th",
                contactPhone: "+66 987 45 659",
                contactLocation: "Chaing Mai, Thailand",
                formNameLabel: "Full Name",
                formNamePlaceholder: "Your Name",
                formEmailLabel: "Email Address",
                formEmailPlaceholder: "your.email@example.com",
                formSubjectLabel: "Subject",
                formSubjectPlaceholder: "Project Inquiry",
                formMessageLabel: "Message",
                formMessagePlaceholder: "Tell me about your project...",
                sendMessageBtn: "Send Message",
                formSuccessMsg: "Thank you for your message! I will get back to you soon.",
                formErrorMsg: "Please fill in all fields.",

                // Footer
                footerCopyright: "© 2025 Phachara. Software Engineering, RMUTL. All rights reserved.",
                privacyPolicy: "Privacy Policy",
                termsOfService: "Terms of Service"
            },
            th: {
                // คีย์และข้อความภาษาไทยทั้งหมด
                pageTitle: "พชร - พอร์ตโฟลิโอ",
                navHome: "หน้าหลัก",
                navAbout: "เกี่ยวกับฉัน",
                navSkills: "ทักษะ",
                navProjects: "โปรเจกต์",
                navContact: "ติดต่อ",
                heroGreeting: "สวัสดีครับ/ค่ะ ผม <span class='highlight'>พชร</span>",
                heroSubtitle: "นักพัฒนา Full Stack",
                heroDescription: "ผมสร้างสรรค์เว็บแอปพลิเคชันที่สวยงามและใช้งานได้จริงด้วยเทคโนโลยีสมัยใหม่",
                viewWorkBtn: "ดูผลงาน",
                getInTouchBtn: "ติดต่อฉัน",
                aboutP1: "ผมนเป็นนักพัฒนา Full Stack ที่มีความมุ่งมั่นและมีประสบการณ์ในการสร้างเว็บแอปพลิเคชันด้วยเทคโนโลยีสมัยใหม่ ผมรักการแก้ปัญหาที่ซับซ้อนและเรียนรู้เทคโนโลยีใหม่ๆ เพื่อมอบประสบการณ์ผู้ใช้ที่ยอดเยี่ยม",
                aboutP2: "เส้นทางของผมในการพัฒนาเว็บเริ่มต้นขึ้นระหว่างการศึกษาด้านวิศวกรรมซอฟต์แวร์ที่ RMUTL ซึ่งเป็นที่ที่ผมค้นพบความหลงใหลในการสร้างสรรค์โซลูชันดิจิทัลที่สร้างความแตกต่าง",
                yearsExpCount: "2+",
                yearsExpLabel: "ปีประสบการณ์",
                projectsCompCount: "15+",
                projectsCompLabel: "โปรเจกต์ที่สำเร็จ",
                clientsCount: "10+",
                clientsLabel: "ลูกค้าพึงพอใจ",
                educationTitle: "การศึกษาและใบรับรอง",
                degreeTitle: "ปริญญาตรีวิศวกรรมซอฟต์แวร์",
                university: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา (มทร.ล้านนา)",
                degreeYear: "2567 - 2571", // Adjust years for Thai calendar if needed
                bootcampTitle: "คอร์สพัฒนาเว็บ",
                bootcampDesc: "สำเร็จหลักสูตรการพัฒนา Full-stack แบบครบวงจร",
                bootcampYear: "2568", // Adjust year for Thai calendar if needed
                skillsTitle: "ทักษะของฉัน",
                skillHTML: "HTML5",
                skillHTMLDesc: "การใช้ Semantic markup, แนวปฏิบัติที่ดีด้าน Accessibility และคุณสมบัติ HTML5 สมัยใหม่",
                skillCSS: "CSS3",
                skillCSSDesc: "Responsive design, CSS Grid, Flexbox, animations, และเทคนิค CSS สมัยใหม่",
                skillJS: "JavaScript",
                skillJSDesc: "คุณสมบัติ ES6+, การจัดการ DOM, การเขียนโปรแกรมแบบ Async และ JavaScript สมัยใหม่",
                skillReact: "React",
                skillReactDesc: "สถาปัตยกรรมแบบ Component-based, Hooks, การจัดการสถานะ และรูปแบบ React สมัยใหม่",
                skillNode: "Node.js",
                skillNodeDesc: "การพัฒนาฝั่ง Server-side, REST APIs, การรวมฐานข้อมูล และ Express.js",
                skillMongo: "MongoDB",
                skillMongoDesc: "การออกแบบฐานข้อมูล NoSQL, Queries, Indexing และการเพิ่มประสิทธิภาพ",
                profExpTitle: "ประสบการณ์ทำงาน",
                profExp1: "สร้างเว็บไซต์ responsive มากกว่า 5 เว็บไซต์ด้วย HTML5/CSS3",
                profExp2: "พัฒนาเว็บแอปพลิเคชันแบบโต้ตอบด้วย JavaScript",
                profExp3: "ใช้งาน RESTful APIs ด้วย Node.js และ Express",
                profExp4: "จัดการฐานข้อมูลโดยใช้ MongoDB และ SQL",
                profExp5: "ทำงานร่วมกันโดยใช้ Git version control",
                projectsTitle: "โปรเจกต์ของฉัน",
                filterAll: "ทั้งหมด",
                filterWeb: "เว็บแอป",
                filterMobile: "มือถือ",
                filterDesign: "ออกแบบ",
                project1Title: "แพลตฟอร์มอีคอมเมิร์ซ",
                project1Desc: "โซลูชันอีคอมเมิร์ซ Full-stack ที่สร้างด้วย React, Node.js และ MongoDB คุณสมบัติรวมถึงการยืนยันตัวตนผู้ใช้, แคตตาล็อกสินค้า, ตะกร้าสินค้า และการรวมการชำระเงิน",
                project2Title: "แอปจัดการงาน",
                project2Desc: "แอปพลิเคชันจัดการงานแบบร่วมมือกันพร้อมการอัปเดตแบบเรียลไทม์, ฟังก์ชันลากและวาง และคุณสมบัติการทำงานร่วมกันเป็นทีม",
                project3Title: "แอปพยากรณ์อากาศ",
                project3Desc: "แอปพลิเคชันพยากรณ์อากาศที่ตอบสนองพร้อมการพยากรณ์ตามตำแหน่ง, แผนที่แบบโต้ตอบ และแอนิเมชันสภาพอากาศที่สวยงาม",
                liveDemoBtn: "ดูตัวอย่าง",
                githubBtn: "GitHub",
                contactTitle: "ติดต่อฉัน",
                contactSubtitle: "มาเชื่อมต่อและสำรวจขอบเขตใหม่ๆ ไปด้วยกัน",
                contactP1: "ในฐานะนักศึกษาที่มีความกระหายในการเรียนรู้และหลงใหลในการเติบโตอย่างต่อเนื่อง ผมกระตือรือร้นที่จะรับฟังเกี่ยวกับโปรเจกต์และโอกาสใหม่ๆ ที่น่าตื่นเต้นซึ่งมอบประสบการณ์การเรียนรู้ที่มีคุณค่าเสมอ",
                contactP2: "ไม่ว่าคุณกำลังมองหาสมองที่ร่วมมือกันเพื่อเติบโต มีคำถามที่คุณต้องการสำรวจ หรือเพียงแค่ต้องการเชื่อมต่อและแบ่งปันความคิดที่น่าสนใจ – โปรดอย่าลังเลที่จะติดต่อ! ผมเชื่ออย่างแท้จริงว่าการเรียนรู้จากผู้อื่นและการทำงานร่วมกันคือกุญแจสู่ความเข้าใจที่ลึกซึ้งยิ่งขึ้นและนวัตกรรมที่ไม่มีที่สิ้นสุด",
                contactEmail: "phachara_ch67@rmutl.live.ac.th",
                contactPhone: "+66 987 45 659",
                contactLocation: "เชียงใหม่, ประเทศไทย",
                formNameLabel: "ชื่อเต็ม",
                formNamePlaceholder: "ชื่อของคุณ",
                formEmailLabel: "ที่อยู่อีเมล",
                formEmailPlaceholder: "อีเมลของคุณ@ตัวอย่าง.com",
                formSubjectLabel: "หัวข้อ",
                formSubjectPlaceholder: "สอบถามโปรเจกต์",
                formMessageLabel: "ข้อความ",
                formMessagePlaceholder: "บอกเล่าเกี่ยวกับโปรเจกต์ของคุณ...",
                sendMessageBtn: "ส่งข้อความ",
                formSuccessMsg: "ขอบคุณสำหรับข้อความของคุณ! ผมจะติดต่อกลับไปเร็วๆ นี้",
                formErrorMsg: "กรุณากรอกข้อมูลให้ครบถ้วน",
                footerCopyright: "© 2568 [ชื่อของคุณ]. วิศวกรรมซอฟต์แวร์, มทร.ล้านนา. สงวนลิขสิทธิ์.",
                privacyPolicy: "นโยบายความเป็นส่วนตัว",
                termsOfService: "เงื่อนไขการให้บริการ"
            },
            zh: {
                // คีย์และข้อความภาษาจีนทั้งหมด
                pageTitle: "帕查拉 - 个人作品集",
                navHome: "首页",
                navAbout: "关于我",
                navSkills: "技能",
                navProjects: "项目",
                navContact: "联系",
                heroGreeting: "您好，我是 <span class='highlight'>帕查拉</span>",
                heroSubtitle: "全栈开发人员",
                heroDescription: "我使用现代技术创建美观实用的网络应用程序。",
                viewWorkBtn: "查看我的作品",
                getInTouchBtn: "联系我",
                aboutTitle: "关于我",
                aboutP1: "我是一名充满热情的全栈开发人员，拥有使用现代技术创建网络应用程序的经验。我喜欢解决复杂问题并学习新技术，以提供卓越的用户体验。",
                aboutP2: "我的网络开发之旅始于我在RMUTL学习软件工程期间，在那里我发现了自己对创建数字解决方案的热情，这些解决方案能够有所作为。",
                yearsExpCount: "2+",
                yearsExpLabel: "年经验",
                projectsCompCount: "15+",
                projectsCompLabel: "已完成项目",
                clientsCount: "10+",
                clientsLabel: "满意客户",
                educationTitle: "教育与认证",
                degreeTitle: "软件工程学士",
                university: "兰纳皇家理工大学 (RMUTL)",
                degreeYear: "2024 - 2028",
                bootcampTitle: "网络开发训练营",
                bootcampDesc: "完成全面的全栈开发课程",
                bootcampYear: "2025",
                skillsTitle: "我的技能",
                skillHTML: "HTML5",
                skillHTMLDesc: "语义化标记、可访问性最佳实践和现代HTML5功能",
                skillCSS: "CSS3",
                skillCSSDesc: "响应式设计、CSS Grid、Flexbox、动画和现代CSS技术",
                skillJS: "JavaScript",
                skillJSDesc: "ES6+特性、DOM操作、异步编程和现代JavaScript",
                skillReact: "React",
                skillReactDesc: "基于组件的架构、Hooks、状态管理和现代React模式",
                skillNode: "Node.js",
                skillNodeDesc: "服务器端开发、REST API、数据库集成和Express.js",
                skillMongo: "MongoDB",
                skillMongoDesc: "NoSQL数据库设计、查询、索引和性能优化",
                profExpTitle: "专业经验",
                profExp1: "使用HTML5/CSS3构建了5+个响应式网站",
                profExp2: "使用JavaScript开发了交互式Web应用程序",
                profExp3: "使用Node.js和Express实现了RESTful API",
                profExp4: "使用MongoDB和SQL管理数据库",
                profExp5: "使用Git版本控制进行协作",
                projectsTitle: "我的项目",
                filterAll: "所有",
                filterWeb: "Web应用",
                filterMobile: "移动",
                filterDesign: "设计",
                project1Title: "电子商务平台",
                project1Desc: "一个使用React、Node.js和MongoDB构建的全栈电子商务解决方案。功能包括用户认证、产品目录、购物车和支付集成。",
                project2Title: "任务管理应用",
                project2Desc: "一个具有实时更新、拖放功能和团队协作功能的协作任务管理应用程序。",
                project3Title: "天气预报应用",
                project3Desc: "一个响应式天气应用程序，具有基于位置的预报、交互式地图和精美的天气动画。",
                liveDemoBtn: "在线演示",
                githubBtn: "GitHub",
                contactTitle: "联系我",
                contactSubtitle: "让我们一起连接并探索新视野",
                contactP1: "作为一名对知识充满渴望并热衷于成长的学生，我总是渴望听到令人兴奋的新项目和提供有价值学习经验的机会。",
                contactP2: "无论您是寻求一个共同成长的合作伙伴，有想要探索的问题，还是只是想联系和分享有趣的想法——请随时与我联系！我坚信，向他人学习和共同努力是实现更深入理解和无限创新的关键。",
                contactEmail: "phachara_ch67@rmutl.live.ac.th",
                contactPhone: "+66 987 45 659",
                contactLocation: "清迈, 泰国",
                formNameLabel: "全名",
                formNamePlaceholder: "您的姓名",
                formEmailLabel: "电子邮件地址",
                formEmailPlaceholder: "您的电子邮件@example.com",
                formSubjectLabel: "主题",
                formSubjectPlaceholder: "项目咨询",
                formMessageLabel: "消息",
                formMessagePlaceholder: "告诉我您的项目...",
                sendMessageBtn: "发送消息",
                formSuccessMsg: "感谢您的留言！我会尽快回复您。",
                formErrorMsg: "请填写所有字段。",
                footerCopyright: "© 2025 [您的姓名]。软件工程，RMUTL。保留所有权利。",
                privacyPolicy: "隐私政策",
                termsOfService: "服务条款"
            }
        };

        this.init(); 
    }

    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.setupSkillBars();
        this.setupProjectFilter();
        this.setupTypewriter();
        this.setupScrollAnimations();
        // เรียกใช้การแปลภาษาเริ่มต้นเมื่อ init
        const initialLang = localStorage.getItem('selectedLanguage') || 'en';
        const langSwitcher = document.getElementById('language-switcher');
        if (langSwitcher) { 
            langSwitcher.value = initialLang; 
        }
        this.applyTranslations(initialLang); 
    }

    // ===== EVENT LISTENERS SETUP =====
    setupEventListeners() {
        // Mobile navigation toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // Close mobile menu when clicking on links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            this.handleNavbarScroll();
            this.handleBackToTop();
            this.updateActiveNavLink();
        });

        // Contact form handling
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Back to top button
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Skill items hover effects
        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Language switcher event listener
        const langSwitcher = document.getElementById('language-switcher');
        if (langSwitcher) {
            langSwitcher.addEventListener('change', (e) => {
                this.switchLanguage(e.target.value);
            });
        }
    }

    // ===== NAVBAR SCROLL HANDLING =====
    handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    // ===== BACK TO TOP BUTTON =====
    handleBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    }

    // ===== ACTIVE NAVIGATION LINK =====
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    
                    // Trigger skill bar animations
                    if (entry.target.classList.contains('skills')) {
                        this.animateSkillBars();
                    }
                    
                    // Trigger counter animations
                    if (entry.target.classList.contains('about')) {
                        this.animateCounters();
                    }
                }
            });
        }, observerOptions);

        // Observe sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Observe individual cards and items
        document.querySelectorAll('.skill-item, .project-card, .stat-item').forEach(item => {
            observer.observe(item);
        });
    }

    // ===== SKILL BARS SETUP =====
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            const skillLevel = bar.getAttribute('data-skill');
            bar.style.width = '0%';
            bar.setAttribute('data-target', skillLevel);
        });
    }

    // ===== ANIMATE SKILL BARS =====
    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const targetWidth = bar.getAttribute('data-target');
                bar.style.width = targetWidth + '%';
            }, index * 200);
        });
    }

    // ===== ANIMATE COUNTERS =====
    animateCounters() {
        const counters = document.querySelectorAll('.stat-item h3');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 50;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };
            
            updateCounter();
        });
    }

    // ===== PROJECT FILTER =====
    setupProjectFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // ===== TYPEWRITER EFFECT =====
    setupTypewriter() {
        const typewriterElement = document.querySelector('.hero-subtitle');
        if (typewriterElement) {
            const texts = [
                'Full Stack Developer',
                'Web Designer',
                'Problem Solver',
                'Tech Enthusiast'
            ];
            
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            const typeWriter = () => {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                if (!isDeleting && charIndex === currentText.length) {
                    setTimeout(() => {
                        isDeleting = true;
                    }, 2000);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
                
                const speed = isDeleting ? 50 : 100;
                setTimeout(typeWriter, speed);
            };
            
            // Start typewriter effect after page load
            setTimeout(typeWriter, 1000);
        }
    }

    // ===== SCROLL ANIMATIONS =====
    setupScrollAnimations() {
        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Stagger animation for grid items
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.skill-item, .project-card');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate-on-scroll');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skills-grid, .projects-grid').forEach(grid => {
            staggerObserver.observe(grid);
        });
    }

    // ===== FORM SUBMISSION =====
    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Show loading state
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Get form data
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            if (name && email && subject && message) {
                this.showNotification(this.translations[currentLang].formSuccessMsg, 'success');
                form.reset();
            } else {
                this.showNotification(this.translations[currentLang].formErrorMsg, 'error');
            }
            
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }, 2000);
    }

    // ===== NOTIFICATION SYSTEM =====
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            backgroundColor: type === 'success' ? '#27ae60' : '#e74c3c',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ===== TRANSLATION LOGIC =====
    switchLanguage(lang) {
        localStorage.setItem('selectedLanguage', lang);
        this.applyTranslations(lang);
    }

    applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            // Check for innerHTML if the translation contains HTML tags (like <span> in heroGreeting)
            if (key === 'heroGreeting') {
                if (this.translations[lang] && this.translations[lang][key]) {
                    element.innerHTML = this.translations[lang][key];
                }
            } else {
                if (this.translations[lang] && this.translations[lang][key]) {
                    element.textContent = this.translations[lang][key];
                }
            }
        });

        // Handle placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder-key]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder-key');
            if (this.translations[lang] && this.translations[lang][key]) {
                element.placeholder = this.translations[lang][key];
            }
        });

        // Handle page title
        const pageTitleElement = document.querySelector('title[data-i18n-key="pageTitle"]');
        if (pageTitleElement && this.translations[lang] && this.translations[lang].pageTitle) {
            pageTitleElement.textContent = this.translations[lang].pageTitle;
        }
    }

    // ===== LAZY LOADING FOR IMAGES =====
    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// สร้าง instance ของ PortfolioWebsite class เมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioWebsite();
});
