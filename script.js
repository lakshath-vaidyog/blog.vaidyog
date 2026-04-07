// ===== BLOG DATA — All 9 blogs with correct internal links =====
const blogData = [
    {
        id: 1,
        title: 'Doctor Salary in India 2026 — Complete MBBS to Specialist Pay Guide',
        excerpt: 'MBBS ₹4-8 LPA, MD/MS ₹9-30 LPA, Super-specialists ₹60L+. Government vs private hospital comparison, city-wise breakdown & salary negotiation tips.',
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
        excerpt: 'GNM/B.Sc salaries ₹2.5-6 LPA, MSc Nursing ₹5-12 LPA. Full specializations breakdown, government vs private comparison & career advancement tips.',
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
        title: 'Top 50 Medical Interview Questions for 2026: Clinical, HR & Situational',
        excerpt: 'Complete interview prep guide with model answers for MBBS doctors, MD/MS specialists, nurses and all healthcare professionals.',
        category: 'hospital',
        categoryName: 'Hospital HR',
        readTime: 15,
        author: 'Vaidyog Team',
        authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        date: 'Feb 17, 2026',
        featured: true,
        url: 'blogs/top-50-medical-interview-questions.html'
    },
    {
        id: 4,
        title: 'NEET PG 2026 Preparation Strategy: Complete Month-by-Month Study Plan',
        excerpt: 'Month-by-month study plan, high-yield topics, time management tips and expert strategies for NEET PG aspirants aiming for top ranks.',
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
        title: 'Private vs Government Hospital Jobs 2026: Salary, Benefits & Career',
        excerpt: 'Detailed comparison of salary, work-life balance, job security, benefits and career growth in India\'s healthcare sector.',
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
        title: 'Abroad Nursing Jobs 2026: UK, USA & Middle East Complete Guide',
        excerpt: 'UK (£28K-42K), USA ($60K-90K), Middle East (tax-free). Requirements, salary packages and application process for Indian nurses.',
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
        title: 'Medical Specialization Guide: How to Choose the Right Path',
        excerpt: 'Cardiology, Dermatology, Radiology, Surgery — how to choose your medical specialization based on lifestyle, salary, demand and personality.',
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
        title: 'Nursing Salary Guide 2026: India vs Abroad — Real Numbers',
        excerpt: 'Staff nurse ₹15K-60K/month, ICU nurse ₹32K-60K, MSc Nursing ₹40K-80K. Complete India vs UK vs USA salary comparison.',
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
        title: 'Hospital Management Careers: MBA vs MHA — Which Degree Opens More Doors?',
        excerpt: 'Complete comparison of MBA and MHA degrees for hospital administration in India — salary, scope, top colleges and which is right for you.',
        category: 'hospital',
        categoryName: 'Hospital HR',
        readTime: 11,
        author: 'Vaidyog Team',
        authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        date: 'Mar 23, 2026',
        featured: false,
        url: 'blogs/hospital-management.html'
    },
    {
    id: 10,
    title: 'Will AI Replace Doctors? Future of AI in Healthcare 2026',
    excerpt: 'Will AI replace doctors? Explore how AI is transforming Indian healthcare, benefits in diagnosis, and why doctors will always be essential.',
    category: 'technology',
    categoryName: 'Healthcare Technology',
    readTime: 12,
    author: 'Vaidyog Team',
    authorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
    date: 'Mar 26, 2026',
    featured: true,
    url: 'blogs/ai-in-healthcare-future.html'
    },
    {
    id: 11,
    title: 'Staff Nurse Jobs Private Hospitals 2026: Salary, Guide & Tips',
    excerpt: 'Complete guide to staff nurse jobs in private hospitals 2026. Salary ₹25K-60K/month, top hospital chains, interview tips, and how to get hired fast.',
    category: 'nursing',
    categoryName: 'Nursing Careers',
    readTime: 10,
    author: 'Vaidyog Team',
    authorImg: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    date: 'Mar 30, 2026',
    featured: true,
    url: 'blogs/staff-nurse-jobs-private-hospitals.html'
},
{
    id: 12,
    title: 'Medical Coding Jobs Remote 2026: Fresher Guide & Salary',
    excerpt: 'Find medical coding jobs remote in India 2026. Work from home medical coding jobs for freshers: salary ₹25K-45K, certification guide, top companies hiring.',
    category: 'medical-coding',
    categoryName: 'Medical Coding',
    readTime: 10,
    author: 'Vaidyog Team',
    authorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
    date: 'Mar 31, 2026',
    featured: true,
    url: 'blogs/medical-coding-jobs-remote.html'
},
{
    id: 13,
    title: 'Hospital Vacancies Bangalore 2026: Top Hospitals Hiring',
    excerpt: 'Find hospital vacancies in Bangalore 2026. Latest hospital jobs in Bangalore for nurses, doctors, technicians. Salary ₹25K-1.5L, Apollo, Manipal, Fortis hiring.',
    category: 'healthcare-jobs',
    categoryName: 'Healthcare Jobs',
    readTime: 9,
    author: 'Vaidyog Team',
    authorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
    date: 'Apr 1, 2026',
    featured: true,
    url: 'blogs/hospital-vacancies-bangalore.html'
},
{
    id: 14,
    title: 'Medical Field Jobs List 2026: 50+ Career Options in India',
    excerpt: 'Complete medical field jobs list 2026. Explore 50+ career options in medical field with salary, qualification, and growth. Find your dream medical field job.',
    category: 'medical-careers',
    categoryName: 'Medical Careers',
    readTime: 12,
    author: 'Vaidyog Team',
    authorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
    date: 'Apr 2, 2026',
    featured: true,
    url: 'blogs/medical-field-jobs-list.html'
},
{
    id: 15,
    title: 'Radiologist Jobs India 2026: Salary, Scope & Top Hospitals Hiring',
    excerpt: 'Find radiologist jobs in India 2026. Average salary ₹15L-40L, top hospitals hiring radiologists, MD Radiology scope, and complete career guide.',
    category: 'doctor',
    categoryName: 'Doctor Careers',
    readTime: 9,
    author: 'Vaidyog Team',
    authorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
    date: 'Apr 6, 2026',
    featured: true,
    url: 'blogs/radiologist-jobs-india.html'
},
{
    id: 16,
    title: 'Medical Representative Jobs India 2026: Salary & Top Companies',
    excerpt: 'Find medical representative jobs in India 2026. Average salary ₹3L-8L, top pharma companies hiring, skills required, and complete career guide for MR jobs.',
    category: 'pharma',
    categoryName: 'Pharma Careers',
    readTime: 9,
    author: 'Vaidyog Team',
    authorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
    date: 'Apr 7, 2026',
    featured: true,
    url: 'blogs/medical-representative-jobs-india.html'
}
];

// ===== Config =====
const config = {
    blogsPerPage: 6,
    currentPage: 1,
    currentCategory: 'all',
    currentSort: 'newest',
    currentTimeFilter: 'all',
    currentSearch: ''
};

// ===== Category colours =====
function getCategoryColor(category) {
    return { doctor: '#4ab098', nursing: '#464d79', hospital: '#4ab098', education: '#464d79' }[category] || '#4ab098';
}

// ===== Create Blog Card =====
function createBlogCard(blog) {
    const template = document.getElementById('blogTemplate');
    if (!template) return null;
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector('.blog-card');

    const categorySpan = card.querySelector('.blog-category');
    categorySpan.textContent = blog.categoryName;
    categorySpan.style.backgroundColor = getCategoryColor(blog.category);

    const titleEl = card.querySelector('.blog-title');
    titleEl.textContent = blog.title;

    card.querySelector('.blog-excerpt').textContent = blog.excerpt;
    card.querySelector('.read-time').innerHTML = `<i class="far fa-clock" aria-hidden="true"></i> ${blog.readTime} min read`;

    const img = card.querySelector('.author-img');
    img.src = blog.authorImg;
    img.alt = `${blog.author} profile photo`;
    img.width = 40;
    img.height = 40;

    card.querySelector('.author-name').textContent = blog.author;
    card.querySelector('.post-date').textContent = blog.date;

    const links = card.querySelectorAll('a.read-more, a.blog-link');
    links.forEach(a => {
        a.href = blog.url;
        a.setAttribute('aria-label', `Read ${blog.title}`);
    });

    return clone;
}

// ===== Filter =====
function filterBlogs() {
    let filtered = [...blogData];

    if (config.currentSearch) {
        const q = config.currentSearch.toLowerCase();
        filtered = filtered.filter(b =>
            b.title.toLowerCase().includes(q) ||
            b.excerpt.toLowerCase().includes(q) ||
            b.author.toLowerCase().includes(q) ||
            b.categoryName.toLowerCase().includes(q)
        );
    }

    if (config.currentCategory !== 'all') {
        filtered = filtered.filter(b => b.category === config.currentCategory);
    }

    if (config.currentTimeFilter !== 'all') {
        filtered = filtered.filter(b => {
            if (config.currentTimeFilter === 'short') return b.readTime <= 5;
            if (config.currentTimeFilter === 'medium') return b.readTime >= 6 && b.readTime <= 10;
            if (config.currentTimeFilter === 'long') return b.readTime > 10;
            return true;
        });
    }

    filtered.sort((a, b) => {
        if (config.currentSort === 'newest') return new Date(b.date) - new Date(a.date);
        if (config.currentSort === 'oldest') return new Date(a.date) - new Date(b.date);
        if (config.currentSort === 'reading-time') return a.readTime - b.readTime;
        return 0;
    });

    return filtered;
}

// ===== Render Featured =====
function renderFeaturedBlogs() {
    const container = document.getElementById('featuredBlogs');
    if (!container) return;
    container.innerHTML = '';
    blogData.filter(b => b.featured).forEach(blog => {
        const card = createBlogCard(blog);
        if (card) container.appendChild(card);
    });
}

// ===== Render All =====
function renderAllBlogs() {
    const container = document.getElementById('allBlogs');
    const pagination = document.getElementById('blogPagination');
    if (!container) return;

    container.innerHTML = '';
    const filtered = filterBlogs();

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="grid-column:1/-1;text-align:center;padding:3rem;">
                <i class="fas fa-search" style="font-size:3rem;color:#adb5bd;margin-bottom:1rem;" aria-hidden="true"></i>
                <h3>No blogs found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button onclick="resetAllFilters()" class="btn btn-primary" style="margin-top:1rem;">Reset Filters</button>
            </div>`;
        if (pagination) pagination.style.display = 'none';
        return;
    }

    const total = filtered.length;
    const start = (config.currentPage - 1) * config.blogsPerPage;
    const end = Math.min(start + config.blogsPerPage, total);

    filtered.slice(start, end).forEach(blog => {
        const card = createBlogCard(blog);
        if (card) container.appendChild(card);
    });

    updatePagination(total);
}

// ===== Pagination =====
function updatePagination(total) {
    const pagination = document.getElementById('blogPagination');
    const pageNumbers = pagination && pagination.querySelector('.page-numbers');
    if (!pagination || !pageNumbers) return;

    const totalPages = Math.ceil(total / config.blogsPerPage);
    const startRange = (config.currentPage - 1) * config.blogsPerPage + 1;
    const endRange = Math.min(config.currentPage * config.blogsPerPage, total);

    const cr = document.getElementById('currentRange');
    const tb = document.getElementById('totalBlogs');
    if (cr) cr.textContent = `${startRange}-${endRange}`;
    if (tb) tb.textContent = total;

    pageNumbers.innerHTML = '';
    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = 'page-number' + (i === config.currentPage ? ' active' : '');
            btn.textContent = i;
            btn.setAttribute('aria-label', `Go to page ${i}`);
            if (i === config.currentPage) btn.setAttribute('aria-current', 'page');
            btn.addEventListener('click', () => goToPage(i));
            pageNumbers.appendChild(btn);
        }
        pagination.style.display = 'flex';
    } else {
        pagination.style.display = 'none';
    }

    const prev = document.getElementById('prevPage');
    const next = document.getElementById('nextPage');
    if (prev) prev.disabled = config.currentPage === 1;
    if (next) next.disabled = config.currentPage === totalPages;

    const info = pagination.querySelector('.page-info');
    if (info) info.style.display = 'block';
}

function goToPage(page) {
    config.currentPage = page;
    renderAllBlogs();
    const section = document.getElementById('blogs');
    const nav = document.querySelector('.navbar');
    if (section && nav) {
        window.scrollTo({ top: section.offsetTop - nav.offsetHeight - 20, behavior: 'smooth' });
    }
}

function resetAllFilters() {
    config.currentPage = 1;
    config.currentCategory = 'all';
    config.currentSort = 'newest';
    config.currentTimeFilter = 'all';
    config.currentSearch = '';
    const cf = document.getElementById('categoryFilter');
    const sf = document.getElementById('sortFilter');
    const tf = document.getElementById('timeFilter');
    const bs = document.getElementById('blogSearch');
    if (cf) cf.value = 'all';
    if (sf) sf.value = 'newest';
    if (tf) tf.value = 'all';
    if (bs) bs.value = '';
    renderAllBlogs();
}

// ===== Debounce =====
function debounce(fn, wait) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

// ===== Init =====
function initBlogManager() {
    renderFeaturedBlogs();

    const viewAllBtn = document.getElementById('viewAllBtn');
    const blogFilters = document.getElementById('blogFilters');
    const featuredBlogs = document.getElementById('featuredBlogs');
    const allBlogs = document.getElementById('allBlogs');
    const blogPagination = document.getElementById('blogPagination');

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            const isExpanded = viewAllBtn.classList.toggle('expanded');
            viewAllBtn.setAttribute('aria-expanded', isExpanded);

            if (blogFilters) {
                blogFilters.style.display = isExpanded ? 'block' : 'none';
                blogFilters.setAttribute('aria-hidden', !isExpanded);
            }

            if (isExpanded) {
                if (featuredBlogs) featuredBlogs.style.display = 'none';
                if (allBlogs) allBlogs.style.display = 'grid';
                renderAllBlogs();
                viewAllBtn.innerHTML = 'Show Featured Only <i class="fas fa-chevron-up" aria-hidden="true"></i>';
            } else {
                if (featuredBlogs) featuredBlogs.style.display = 'grid';
                if (allBlogs) allBlogs.style.display = 'none';
                if (blogPagination) blogPagination.style.display = 'none';
                viewAllBtn.innerHTML = 'View All Blogs <i class="fas fa-chevron-down" aria-hidden="true"></i>';
            }
        });
    }

    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', e => {
            config.currentCategory = e.target.value;
            config.currentPage = 1;
            renderAllBlogs();
        });
    }

    const sortFilter = document.getElementById('sortFilter');
    if (sortFilter) {
        sortFilter.addEventListener('change', e => {
            config.currentSort = e.target.value;
            config.currentPage = 1;
            renderAllBlogs();
        });
    }

    const timeFilter = document.getElementById('timeFilter');
    if (timeFilter) {
        timeFilter.addEventListener('change', e => {
            config.currentTimeFilter = e.target.value;
            config.currentPage = 1;
            renderAllBlogs();
        });
    }

    const blogSearch = document.getElementById('blogSearch');
    const clearSearch = document.getElementById('clearSearch');

    if (blogSearch) {
        blogSearch.addEventListener('input', debounce(e => {
            config.currentSearch = e.target.value;
            config.currentPage = 1;
            renderAllBlogs();
        }, 300));
    }

    if (clearSearch) {
        clearSearch.addEventListener('click', () => {
            if (blogSearch) blogSearch.value = '';
            config.currentSearch = '';
            config.currentPage = 1;
            renderAllBlogs();
        });
    }

    const resetFiltersBtn = document.getElementById('resetFilters');
    if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllFilters);

    const prevPage = document.getElementById('prevPage');
    if (prevPage) prevPage.addEventListener('click', () => { if (config.currentPage > 1) goToPage(config.currentPage - 1); });

    const nextPage = document.getElementById('nextPage');
    if (nextPage) nextPage.addEventListener('click', () => {
        const totalPages = Math.ceil(filterBlogs().length / config.blogsPerPage);
        if (config.currentPage < totalPages) goToPage(config.currentPage + 1);
    });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.5s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('.category-card, .blog-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ===== Back to Top =====
function createBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-chevron-up" aria-hidden="true"></i>';
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.style.cssText = 'position:fixed;bottom:30px;right:30px;width:48px;height:48px;background:#4ab098;color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.1rem;box-shadow:0 4px 12px rgba(74,176,152,0.35);z-index:100;opacity:0;transform:translateY(20px);transition:all 0.3s ease;display:flex;align-items:center;justify-content:center;';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        const show = window.scrollY > 400;
        btn.style.opacity = show ? '1' : '0';
        btn.style.transform = show ? 'translateY(0)' : 'translateY(20px)';
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== Animations CSS =====
(function injectAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideIn { from { transform:translateX(100%); opacity:0; } to { transform:translateX(0); opacity:1; } }
        @keyframes slideOut { from { transform:translateX(0); opacity:1; } to { transform:translateX(100%); opacity:0; } }
    `;
    if (document.head) document.head.appendChild(style);
})();

// ===== DOMContentLoaded =====
document.addEventListener('DOMContentLoaded', () => {
    initBlogManager();
    setTimeout(initScrollAnimations, 200);
    setTimeout(createBackToTop, 500);
});