// Products data
const products = [
    {
        id: 1,
        name: "كروت شخصية فاخرة",
        description: "كروت شخصية عالية الجودة بتصاميم أنيقة ومواد فاخرة",
        image: "images/p1.jpg"
    },
    {
        id: 2,
        name: "مناديل ورقية",
        description: "مناديل ورقية مطبوعة بشعارك أو تصميمك المفضل",
        image: "images/p2.jpg"
    },
    {
        id: 3,
        name: "فولدرات أوراق رسمية",
        description: "فولدرات احترافية للأوراق الرسمية والمستندات",
        image: "images/p3.jpg"
    },
    {
        id: 4,
        name: "أكواب بلاستيك",
        description: "أكواب بلاستيك مطبوعة بألوان زاهية وتصاميم جذابة",
        image: "images/p4.jpg"
    },
    {
        id: 5,
        name: "أكواب ورقية",
        description: "أكواب ورقية صديقة للبيئة مع طباعة عالية الجودة",
        image: "images/p5.jpg"
    },
    {
        id: 6,
        name: "أكواب سيراميك",
        description: "أكواب سيراميك فاخرة مع طباعة دائمة ومقاومة",
        image: "images/p6.jpg"
    },
    {
        id: 7,
        name: "ستيكر بلوتر",
        description: "ستيكر مقطوع بدقة عالية بتقنية البلوتر",
        image: "images/p7.jpg"
    },
    {
        id: 8,
        name: "شرائط هدايا",
        description: "شرائط هدايا أنيقة مطبوعة بألوان وتصاميم متنوعة",
        image: "images/p8.jpg"
    },
    {
        id: 9,
        name: "ستيكر تغليف سيارات",
        description: "ستيكر عالي الجودة لتغليف السيارات مقاوم للعوامل الجوية",
        image: "images/p9.jpg"
    },
    {
        id: 10,
        name: "أكياس بلاستيك",
        description: "أكياس بلاستيك مطبوعة بشعارك وتصميمك الخاص",
        image: "images/p10.jpg"
    },
    {
        id: 11,
        name: "أكياس تغليف",
        description: "أكياس تغليف أنيقة للهدايا والمنتجات",
        image: "images/p11.jpg"
    },
    {
        id: 12,
        name: "أكياس ورقية",
        description: "أكياس ورقية صديقة للبيئة بتصاميم احترافية",
        image: "images/p12.jpg"
    },
    {
        id: 13,
        name: "أكياس كرتون",
        description: "أكياس كرتون قوية ومتينة للاستخدام التجاري",
        image: "images/p13.jpg"
    },
    {
        id: 14,
        name: "أكياس قماش",
        description: "أكياس قماش قابلة لإعادة الاستخدام مع طباعة دائمة",
        image: "images/p14.jpg"
    },
    {
        id: 15,
        name: "أكياس عبايات",
        description: "أكياس خاصة للعبايات بتصميم أنيق وعملي",
        image: "images/p15.jpg"
    },
    {
        id: 16,
        name: "رول اب ستاند",
        description: "رول اب ستاند احترافي للمعارض والفعاليات",
        image: "images/p16.jpg"
    },
    {
        id: 17,
        name: "بوكس عباية",
        description: "علب أنيقة لتغليف العبايات والملابس الفاخرة",
        image: "images/p17.jpg"
    },
    {
        id: 18,
        name: "بوكس كرتون",
        description: "علب كرتون مطبوعة بجودة عالية لجميع الاستخدامات",
        image: "images/p18.jpg"
    },
    {
        id: 19,
        name: "زي موحد",
        description: "طباعة على الزي الموحد والملابس المهنية",
        image: "images/p19.jpg"
    },
    {
        id: 20,
        name: "بوب اب بنر",
        description: "بنر بوب اب سهل التركيب للمعارض والفعاليات",
        image: "images/p20.jpg"
    },
    {
        id: 21,
        name: "إعلانات",
        description: "طباعة جميع أنواع الإعلانات والمواد الترويجية",
        image: "images/p21.jpg"
    },
    {
        id: 22,
        name: "أوراق رسمية",
        description: "طباعة الأوراق الرسمية والمراسلات بجودة احترافية",
        image: "images/p22.jpg"
    },
    {
        id: 23,
        name: "بنر",
        description: "بنرات إعلانية بأحجام مختلفة وجودة عالية",
        image: "images/p23.jpg"
    },
    {
        id: 24,
        name: "بروفايل",
        description: "طباعة بروفايل الشركات والمؤسسات بتصميم احترافي",
        image: "images/p24.jpg"
    },
    {
        id: 25,
        name: "شريط اي دي",
        description: "أشرطة تعريفية للموظفين والفعاليات",
        image: "images/p25.jpg"
    },
    {
        id: 26,
        name: "أكياس قهوة",
        description: "أكياس قهوة مطبوعة بتصاميم جذابة ومواد عالية الجودة",
        image: "images/p26.jpg"
    },
    {
        id: 27,
        name: "اختام اوتوماتيك",
        description: "أختام أوتوماتيكية عالية الجودة بتصاميم مخصصة",
        image: "images/p27.jpg"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
    
    // Generate products
    generateProducts();
    
    // Setup navigation
    setupNavigation();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup floating message
    setupFloatingMessage();
    
    // Setup header scroll effect
    setupHeaderScrollEffect();
});

// Initialize website
function initializeWebsite() {
    console.log('مطابع النجوم المميزة - Website Initialized');
}

// Generate products grid
function generateProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-aos', 'fade-up');
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-placeholder" style="display: none; width: 100%; height: 100%; background: linear-gradient(135deg, var(--primary-red), var(--primary-gold)); align-items: center; justify-content: center; color: white; font-size: 3rem;">
                <i class="fas fa-image"></i>
            </div>
        </div>
        <div class="product-content">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <a href="https://wa.me/966501234567?text=مرحباً، أرغب في طلب ${product.name}" class="product-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                <span>اطلب الآن</span>
            </a>
        </div>
    `;
    
    return card;
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .product-card, .feature, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Setup floating message
function setupFloatingMessage() {
    const floatingMessage = document.getElementById('floatingMessage');
    if (floatingMessage) {
        // Show message after 2 seconds, hide after 6 seconds
        setTimeout(() => {
            floatingMessage.style.opacity = '1';
            floatingMessage.style.transform = 'translateY(-50%) translateX(0)';
        }, 2000);
        
        setTimeout(() => {
            floatingMessage.style.opacity = '0';
            floatingMessage.style.transform = 'translateY(-50%) translateX(-10px)';
        }, 6000);
    }
}

// Setup header scroll effect
function setupHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let scrollThreshold = 100; // البدء في إخفاء الهيدر بعد 100px
    
    window.addEventListener('scroll', function() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // إذا كان التمرير أقل من العتبة، أظهر الهيدر دائماً
        if (currentScrollTop <= scrollThreshold) {
            header.classList.remove('hidden');
            header.classList.add('visible');
            header.classList.remove('scrolled');
        } else {
            // إضافة كلاس scrolled للخلفية المعتمة
            header.classList.add('scrolled');
            
            // إذا كان المستخدم يتمرر لأسفل، أخف الهيدر
            if (currentScrollTop > lastScrollTop && currentScrollTop > scrollThreshold) {
                header.classList.add('hidden');
                header.classList.remove('visible');
            } 
            // إذا كان المستخدم يتمرر لأعلى، أظهر الهيدر
            else if (currentScrollTop < lastScrollTop) {
                header.classList.remove('hidden');
                header.classList.add('visible');
            }
        }
        
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // للتعامل مع الـ bounce في iOS
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(15px);
    }
    
    .nav-link.active {
        background: linear-gradient(135deg, var(--primary-red), var(--primary-gold));
        color: var(--white);
    }
    
    .nav-link.active i {
        color: var(--white);
    }
    
    .product-placeholder {
        display: flex !important;
    }
`;
document.head.appendChild(style);

// Create placeholder images for products
function createPlaceholderImages() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 300;
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#DC2626');
    gradient.addColorStop(1, '#F59E0B');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('مطابع النجوم المميزة', canvas.width / 2, canvas.height / 2);
    
    return canvas.toDataURL();
}

// Handle image loading errors
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        const placeholder = e.target.nextElementSibling;
        if (placeholder && placeholder.classList.contains('product-placeholder')) {
            e.target.style.display = 'none';
            placeholder.style.display = 'flex';
        }
    }
}, true);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for loading
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

