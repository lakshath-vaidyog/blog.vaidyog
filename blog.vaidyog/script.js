// ===== DOM Elements =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const newsletterForm = document.querySelector('.newsletter-form');
const blogCards = document.querySelectorAll('.blog-card');
const searchBtn = document.querySelector('.search-btn');

// ===== Mobile Menu Toggle =====
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

menuToggle.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
});

// ===== Smooth Scrolling for Anchor Links =====
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
    
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    
    const headerHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight - 20;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Update active nav link on scroll
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== Blog Card Hover Effects =====
function addBlogCardHoverEffects() {
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const readMoreBtn = card.querySelector('.read-more');
            if (readMoreBtn) {
                readMoreBtn.style.transform = 'translateX(5px)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const readMoreBtn = card.querySelector('.read-more');
            if (readMoreBtn) {
                readMoreBtn.style.transform = 'translateX(0)';
            }
        });
    });
}

addBlogCardHoverEffects();

// ===== Newsletter Subscription =====
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!email) {
        showNotification('Please enter your email address', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    const submitBtn = newsletterForm.querySelector('.btn-subscribe');
    const originalHtml = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Thank you for subscribing! You will receive our weekly newsletter.', 'success');
        emailInput.value = '';
        submitBtn.innerHTML = originalHtml;
        submitBtn.disabled = false;
    }, 1500);
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
}

// ===== Utility: Email Validation =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== Notification System =====
function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        min-width: 300px;
        max-width: 400px;
    `;
    
    notification.style.backgroundColor = type === 'success' ? '#4ab098' : '#dc3545';
    
    const icon = document.createElement('i');
    icon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    icon.style.marginRight = '10px';
    notification.prepend(icon);
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 0;
    `;
    closeBtn.addEventListener('click', () => notification.remove());
    notification.appendChild(closeBtn);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== Search Functionality =====
function initSearch() {
    if (!searchBtn) return;

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const searchOverlay = document.createElement('div');
        searchOverlay.className = 'search-overlay';
        searchOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const searchContainer = document.createElement('div');
        searchContainer.style.cssText = `
            width: 90%;
            max-width: 600px;
            background: white;
            border-radius: 12px;
            padding: 2rem;
            position: relative;
            transform: translateY(-20px);
            transition: transform 0.3s ease;
        `;
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.style.cssText = `
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #666;
            cursor: pointer;
            padding: 5px;
        `;
        closeBtn.addEventListener('click', () => {
            searchOverlay.style.opacity = '0';
            searchContainer.style.transform = 'translateY(-20px)';
            setTimeout(() => searchOverlay.remove(), 300);
        });
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search for healthcare topics, career advice, or articles...';
        searchInput.style.cssText = `
            width: 100%;
            padding: 15px 20px;
            border: 2px solid #4ab098;
            border-radius: 8px;
            font-size: 1.1rem;
            margin-bottom: 1rem;
            outline: none;
        `;
        
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';
        resultsContainer.style.cssText = `max-height: 400px; overflow-y: auto;`;
        
        searchContainer.appendChild(closeBtn);
        searchContainer.appendChild(searchInput);
        searchContainer.appendChild(resultsContainer);
        searchOverlay.appendChild(searchContainer);
        document.body.appendChild(searchOverlay);
        
        setTimeout(() => {
            searchOverlay.style.opacity = '1';
            searchContainer.style.transform = 'translateY(0)';
            searchInput.focus();
        }, 10);
        
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        
        document.addEventListener('keydown', function closeOnEscape(e) {
            if (e.key === 'Escape') {
                searchOverlay.style.opacity = '0';
                searchContainer.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    searchOverlay.remove();
                    document.removeEventListener('keydown', closeOnEscape);
                }, 300);
            }
        });
    });
}

function handleSearch() {
    const searchInput = document.querySelector('.search-overlay input');
    const resultsContainer = document.querySelector('.search-results');
    
    if (!searchInput || !resultsContainer) return;
    
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length < 2) {
        resultsContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Start typing to search...</p>';
        return;
    }
    
    const mockResults = [
        { title: 'Doctor Salary Negotiation Guide', category: 'Doctor Careers', match: 95 },
        { title: 'ICU Nurse Career Progression', category: 'Nursing Careers', match: 85 },
        { title: 'Medical Interview Questions 2026', category: 'Hospital HR', match: 75 },
        { title: 'NEET PG Preparation Strategy', category: 'Medical Education', match: 65 },
        { title: 'Private vs Government Hospital Jobs', category: 'Doctor Careers', match: 60 }
    ];
    
    const filteredResults = mockResults.filter(result => result.match > 50).sort((a, b) => b.match - a.match);
    
    if (filteredResults.length > 0) {
        resultsContainer.innerHTML = filteredResults.map(result => `
            <div class="search-result-item" style="
                padding: 15px;
                border-bottom: 1px solid #eee;
                cursor: pointer;
                transition: background-color 0.2s;
            ">
                <h4 style="margin: 0 0 5px 0; color: #333;">${result.title}</h4>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: #4ab098; font-size: 0.875rem; font-weight: 600;">${result.category}</span>
                    <span style="color: #666; font-size: 0.75rem;">${result.match}% match</span>
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                showNotification('Search functionality demo. In a real app, this would navigate to the article.', 'success');
            });
            item.addEventListener('mouseenter', function() { this.style.backgroundColor = '#f8f9fa'; });
            item.addEventListener('mouseleave', function() { this.style.backgroundColor = 'transparent'; });
        });
    } else {
        resultsContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">No results found. Try different keywords.</p>';
    }
}

// ===== Utility Functions =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== Animations on Scroll =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.category-card, .blog-card').forEach(card => {
        observer.observe(card);
    });
}

// ===== Page Load Animation =====
function initPageLoad() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    initPageLoad();
    initScrollAnimations();
    initSearch();
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .search-overlay { backdrop-filter: blur(5px); }
    `;
    document.head.appendChild(style);
});

// ===== Back to Top Button =====
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #4ab098;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(74, 176, 152, 0.3);
        z-index: 100;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.transform = 'translateY(0)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.transform = 'translateY(20px)';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

setTimeout(createBackToTopButton, 1000);


// ===== BLOG MANAGEMENT SYSTEM =====
const blogManager = (function() {
    const blogData = [
        {
            id: 1,
            title: 'How to Negotiate Your Doctor Salary in 2026',
            excerpt: 'Learn proven strategies for MBBS doctors and specialists to maximize earning potential in private and government hospitals across India.',
            category: 'doctor',
            categoryName: 'Doctor Careers',
            readTime: 10,
            author: 'Vaidyog Team',
            authorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 10, 2026',
            featured: true,
            url: 'blogs/doctor-salary.html'
        },
        {
            id: 2,
            title: 'Nursing Career Guide 2026: Complete Salary, Specializations & Path',
            excerpt: 'Complete nursing career guide 2026: GNM/B.Sc salaries ₹2.5-6 LPA, MSc Nursing ₹5-12 LPA, specializations breakdown, government vs private comparison & career advancement tips by Vaidyog Team.',
            category: 'nursing',
            categoryName: 'Nursing Careers',
            readTime: 12,
            author: 'Vaidyog Team',
            authorImg: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 12, 2026',
            featured: true,
            url: 'blogs/nursing-career-guide-2026.html'
        },
        {
            id: 3,
            title: 'Top 50 Medical Interview Questions for 2026',
            excerpt: 'Comprehensive guide with sample answers for doctors, nurses and technicians preparing for hospital interviews.',
            category: 'hospital',
            categoryName: 'Hospital HR',
            readTime: 10,
            author: 'Vaidyog Team',
            authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 17, 2026',
            featured: true,
            url: 'blogs/top-50-medical-interview-questions.html'
        },
        {
            id: 4,
            title: 'NEET PG 2026: Complete Preparation Strategy',
            excerpt: 'Month-by-month study plan, important topics, and time management tips for NEET PG aspirants aiming for top ranks.',
            category: 'education',
            categoryName: 'Medical Education',
            readTime: 15,
            author: 'Vaidyog Team',
            authorImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 18, 2026',
            featured: true,
            url: 'blogs/neet-pg-2026-preparation-strategy.html'
        },
        {
            id: 5,
            title: 'Private vs Government Hospital Jobs: Pros & Cons',
            excerpt: 'Detailed comparison of salary, work-life balance, career growth, and job security in India\'s healthcare sector.',
            category: 'doctor',
            categoryName: 'Doctor Careers',
            readTime: 11,
            author: 'Vaidyog Team',
            authorImg: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 19, 2026',
            featured: true,
            url: 'blogs/private-vs-government-hospital-jobs.html'
        },
        {
            id: 6,
            title: 'Abroad Nursing Jobs: UK, USA, Middle East Guide',
            excerpt: 'Requirements, salary packages, and application process for Indian nurses seeking international career opportunities.',
            category: 'nursing',
            categoryName: 'Nursing Careers',
            readTime: 5,
            author: 'Vaidyog Team',
            authorImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 21, 2026',
            featured: true,
            url: 'blogs/abroad-nursing-jobs-guide.html'
        },
        {
            id: 7,
            title: 'Medical Specialization Guide: Choosing the Right Path',
            excerpt: 'How to choose between cardiology, neurology, orthopedics and other medical specializations based on your interests and market demand.',
            category: 'doctor',
            categoryName: 'Doctor Careers',
            readTime: 9,
            author: 'Vaidyog Team',
            authorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 23, 2026',
            featured: false,
            url: 'blogs/medical-specialization-guide.html'
        },
        {
            id: 8,
            title: 'Nursing Salary Guide 2026: India vs Abroad',
            excerpt: 'Comprehensive salary comparison for staff nurses, ICU nurses, and nursing superintendents across different countries.',
            category: 'nursing',
            categoryName: 'Nursing Careers',
            readTime: 7,
            author: 'Vaidyog Team',
            authorImg: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 24, 2026',
            featured: false,
            url: 'blogs/nursing-salary-guide-2026.html'
        },
        {
            id: 9,
            title: 'Hospital Management Careers: MBA vs MHA',
            excerpt: 'Which degree is better for hospital administration roles? Complete comparison of career paths, salaries, and opportunities.',
            category: 'hospital',
            categoryName: 'Hospital HR',
            readTime: 11,
            author: 'Arun Sharma',
            authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 22, 2026',
            featured: false,
            url: 'blogs/hospital-management.html'
        },
        {
            id: 10,
            title: 'AIIMS vs Private Medical Colleges: Career Impact',
            excerpt: 'How your medical college affects residency opportunities, specialization choices, and long-term career growth.',
            category: 'education',
            categoryName: 'Medical Education',
            readTime: 8,
            author: 'Dr. Meena Reddy',
            authorImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 20, 2026',
            featured: false,
            url: 'blogs/medical-colleges.html'
        },
        {
            id: 11,
            title: 'Surgeon Career Guide: From Resident to Consultant',
            excerpt: 'Step-by-step guide to becoming a successful surgeon, including training requirements and subspecialization options.',
            category: 'doctor',
            categoryName: 'Doctor Careers',
            readTime: 10,
            author: 'Dr. Vikram Singh',
            authorImg: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 18, 2026',
            featured: false,
            url: 'blogs/surgeon-career.html'
        },
        {
            id: 12,
            title: 'Medical Coding Jobs: New Career Opportunities',
            excerpt: 'Complete guide to medical coding careers, certification requirements, salary expectations, and job market trends.',
            category: 'hospital',
            categoryName: 'Hospital HR',
            readTime: 6,
            author: 'Neha Gupta',
            authorImg: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            date: 'Feb 15, 2026',
            featured: false,
            url: 'blogs/medical-coding.html'
        }
    ];

    const config = {
        blogsPerPage: 6,
        currentPage: 1,
        currentCategory: 'all',
        currentSort: 'newest',
        currentTimeFilter: 'all',
        currentSearch: ''
    };

    let featuredBlogsContainer, allBlogsContainer, blogTemplate, paginationElement;

    function init() {
        featuredBlogsContainer = document.getElementById('featuredBlogs');
        allBlogsContainer = document.getElementById('allBlogs');
        blogTemplate = document.getElementById('blogTemplate');
        paginationElement = document.getElementById('blogPagination');

        renderFeaturedBlogs();
        setupEventListeners();
    }

    function renderFeaturedBlogs() {
        featuredBlogsContainer.innerHTML = '';
        const featured = blogData.filter(blog => blog.featured);
        featured.forEach(blog => {
            const blogCard = createBlogCard(blog);
            featuredBlogsContainer.appendChild(blogCard);
        });
    }

    function renderAllBlogs() {
        allBlogsContainer.innerHTML = '';
        let filteredBlogs = filterBlogs();
        
        if (filteredBlogs.length === 0) {
            showNoResults();
            return;
        }

        const totalFilteredBlogs = filteredBlogs.length;
        const startIndex = (config.currentPage - 1) * config.blogsPerPage;
        const endIndex = Math.min(startIndex + config.blogsPerPage, totalFilteredBlogs);
        const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);

        paginatedBlogs.forEach(blog => {
            const blogCard = createBlogCard(blog);
            allBlogsContainer.appendChild(blogCard);
        });

        updatePagination(totalFilteredBlogs);
    }

    function filterBlogs() {
        let filtered = [...blogData];

        if (config.currentSearch) {
            const searchTerm = config.currentSearch.toLowerCase();
            filtered = filtered.filter(blog =>
                blog.title.toLowerCase().includes(searchTerm) ||
                blog.excerpt.toLowerCase().includes(searchTerm) ||
                blog.author.toLowerCase().includes(searchTerm) ||
                blog.categoryName.toLowerCase().includes(searchTerm)
            );
        }

        if (config.currentCategory !== 'all') {
            filtered = filtered.filter(blog => blog.category === config.currentCategory);
        }

        if (config.currentTimeFilter !== 'all') {
            filtered = filtered.filter(blog => {
                switch(config.currentTimeFilter) {
                    case 'short': return blog.readTime <= 5;
                    case 'medium': return blog.readTime >= 6 && blog.readTime <= 10;
                    case 'long': return blog.readTime > 10;
                    default: return true;
                }
            });
        }

        filtered.sort((a, b) => {
            switch(config.currentSort) {
                case 'newest': return new Date(b.date) - new Date(a.date);
                case 'oldest': return new Date(a.date) - new Date(b.date);
                case 'reading-time': return a.readTime - b.readTime;
                default: return 0;
            }
        });

        return filtered;
    }

    function createBlogCard(blog) {
        const template = blogTemplate.content.cloneNode(true);
        const blogCard = template.querySelector('.blog-card');
        
        const categorySpan = blogCard.querySelector('.blog-category');
        categorySpan.textContent = blog.categoryName;
        categorySpan.style.backgroundColor = getCategoryColor(blog.category);
        
        blogCard.querySelector('.blog-title').textContent = blog.title;
        blogCard.querySelector('.blog-excerpt').textContent = blog.excerpt;
        blogCard.querySelector('.read-time').innerHTML = `<i class="far fa-clock"></i> ${blog.readTime} min read`;
        blogCard.querySelector('.author-img').src = blog.authorImg;
        blogCard.querySelector('.author-img').alt = blog.author;
        blogCard.querySelector('.author-name').textContent = blog.author;
        blogCard.querySelector('.post-date').textContent = blog.date;
        
        const readMoreBtn = blogCard.querySelector('.read-more');
        readMoreBtn.href = blog.url;
        
        return blogCard;
    }

    function getCategoryColor(category) {
        const colors = {
            'doctor': '#4ab098',
            'nursing': '#464d79',
            'hospital': '#4ab098',
            'education': '#464d79'
        };
        return colors[category] || '#4ab098';
    }

    function updatePagination(totalBlogs) {
        const totalPages = Math.ceil(totalBlogs / config.blogsPerPage);
        const pageNumbers = paginationElement.querySelector('.page-numbers');
        
        const startRange = ((config.currentPage - 1) * config.blogsPerPage) + 1;
        const endRange = Math.min(config.currentPage * config.blogsPerPage, totalBlogs);
        
        document.getElementById('currentRange').textContent = `${startRange}-${endRange}`;
        document.getElementById('totalBlogs').textContent = totalBlogs;
        
        pageNumbers.innerHTML = '';
        
        if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.className = 'page-number';
                if (i === config.currentPage) pageBtn.classList.add('active');
                pageBtn.textContent = i;
                pageBtn.addEventListener('click', () => goToPage(i));
                pageNumbers.appendChild(pageBtn);
            }
            paginationElement.style.display = 'flex';
        } else {
            paginationElement.style.display = 'none';
        }
        
        document.getElementById('prevPage').disabled = config.currentPage === 1;
        document.getElementById('nextPage').disabled = config.currentPage === totalPages;
        document.querySelector('.page-info').style.display = 'block';
    }

    function goToPage(page) {
        config.currentPage = page;
        renderAllBlogs();
        scrollToBlogs();
    }

    function showNoResults() {
        allBlogsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No blogs found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button id="resetFiltersBtn" class="btn btn-primary" style="margin-top: 1rem;">
                    Reset All Filters
                </button>
            </div>
        `;
        document.getElementById('resetFiltersBtn')?.addEventListener('click', resetAllFilters);
        paginationElement.style.display = 'none';
    }

    function resetAllFilters() {
        config.currentPage = 1;
        config.currentCategory = 'all';
        config.currentSort = 'newest';
        config.currentTimeFilter = 'all';
        config.currentSearch = '';
        
        document.getElementById('categoryFilter').value = 'all';
        document.getElementById('sortFilter').value = 'newest';
        document.getElementById('timeFilter').value = 'all';
        document.getElementById('blogSearch').value = '';
        
        renderAllBlogs();
    }

    function scrollToBlogs() {
        const blogsSection = document.getElementById('blogs');
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: blogsSection.offsetTop - headerHeight - 20,
            behavior: 'smooth'
        });
    }

    function setupEventListeners() {
        const viewAllBtn = document.getElementById('viewAllBtn');
        const blogFilters = document.getElementById('blogFilters');
        
        viewAllBtn.addEventListener('click', () => {
            const isExpanded = viewAllBtn.classList.toggle('expanded');
            blogFilters.style.display = isExpanded ? 'block' : 'none';
            
            if (isExpanded) {
                featuredBlogsContainer.style.display = 'none';
                allBlogsContainer.style.display = 'grid';
                paginationElement.style.display = 'flex';
                renderAllBlogs();
                viewAllBtn.innerHTML = 'Show Featured Only <i class="fas fa-chevron-up"></i>';
            } else {
                featuredBlogsContainer.style.display = 'grid';
                allBlogsContainer.style.display = 'none';
                paginationElement.style.display = 'none';
                viewAllBtn.innerHTML = 'View All Blogs <i class="fas fa-chevron-down"></i>';
            }
        });

        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            config.currentCategory = e.target.value;
            config.currentPage = 1;
            renderAllBlogs();
        });

        document.getElementById('sortFilter').addEventListener('change', (e) => {
            config.currentSort = e.target.value;
            config.currentPage = 1;
            renderAllBlogs();
        });

        document.getElementById('timeFilter').addEventListener('change', (e) => {
            config.currentTimeFilter = e.target.value;
            config.currentPage = 1;
            renderAllBlogs();
        });

        const blogSearch = document.getElementById('blogSearch');
        const clearSearch = document.getElementById('clearSearch');
        
        blogSearch.addEventListener('input', debounce((e) => {
            config.currentSearch = e.target.value;
            config.currentPage = 1;
            renderAllBlogs();
        }, 300));

        clearSearch.addEventListener('click', () => {
            blogSearch.value = '';
            config.currentSearch = '';
            config.currentPage = 1;
            renderAllBlogs();
        });

        document.getElementById('resetFilters').addEventListener('click', resetAllFilters);

        document.getElementById('prevPage').addEventListener('click', () => {
            if (config.currentPage > 1) goToPage(config.currentPage - 1);
        });

        document.getElementById('nextPage').addEventListener('click', () => {
            const filteredBlogs = filterBlogs();
            const totalPages = Math.ceil(filteredBlogs.length / config.blogsPerPage);
            if (config.currentPage < totalPages) goToPage(config.currentPage + 1);
        });
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    return {
        init,
        getBlogs: () => blogData,
        getFilteredBlogs: filterBlogs,
        resetFilters: resetAllFilters,
        config
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    blogManager.init();
});


// ===== HAMBURGER MENU (DOMContentLoaded block) =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = 'auto';
            }
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            document.body.style.overflow = 'auto';
        }
    });
});