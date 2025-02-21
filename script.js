// Image data structure with expanded content
const galleryData = {
    cars: [
        { src: 'https://i.pinimg.com/736x/3a/5b/59/3a5b59ad138a7accc346f3550547bf57.jpg', title: 'Hindustan Ambassador', category: 'Vintage Cars' },
        { src: 'https://gomechanic.in/blog/wp-content/uploads/2020/04/314ebd175423f8fe4aa45ade0ec629a5-1000x720.jpg', title: 'Premier Padmini', category: 'Vintage Cars' },
        { src: 'https://i.pinimg.com/736x/3f/41/60/3f4160b1bb55965c871906ab67fbf2d7.jpg', title: 'Contessa Classic', category: 'Vintage Cars' },
        { src: 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/93871/right-front-three-quarter0.jpeg?wm=0', title: 'The first generation Maruti 800 DX', category: 'Vintage Cars' },
        { src: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-left-rear-three-quarter.jpeg?isig=0&q=80', title: 'Mahindra Scorpio N', category: 'Modern Cars' },
        { src: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/121335/avinya-concept-exterior-left-side-view-5.jpeg?isig=0&q=80', title: 'Tata Avinya EV', category: 'Electric Cars' },
        { src: 'https://live.staticflickr.com/48/118259910_a9c0e04a0f_b.jpg', title: 'Standard Herald', category: 'Vintage Cars' },
        { src: 'https://www.cartoq.com/wp-content/uploads/2023/06/standard-2000-featured.jpg.webp', title: 'Standard 2000', category: 'Vintage Cars' },
        { src: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80', title: 'Mahindra XUV700', category: 'Modern Cars' },
        { src: 'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-21744,resizemode-75,msid-116466754/industry/auto/cars-uvs/kia-syros-revealed-check-specifications-features-of-the-new-sub-compact-suv-here.jpg', title: 'Kia Syros', category: 'Modern Cars' }
    ],
    places: [
        { src: 'https://img.veenaworld.com/wp-content/uploads/2021/10/Mehrangarh.jpg', title: 'Mehrangarh Fort', category: 'Forts' },
        { src: 'https://vagatrip.com/storage/blogs/March2023/panorama-amer-amber-fort-rajasthan-india-famous-landmark-344664462.jpg', title: 'Amber Fort', category: 'Forts' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Chittorgarh_fort.JPG/800px-Chittorgarh_fort.JPG', title: 'Chittorgarh Fort', category: 'Forts' },
        { src: 'https://www.fodors.com/wp-content/uploads/2018/12/5.jpg', title: 'Brihadeshwara Temple', category: 'Temples' },
        { src: 'https://www.holidify.com/images/bgImages/HAMPI.jpg', title: 'Hampi Temples', category: 'Temples' },
        { src: 'https://www.mystreal.com/_next/image/?url=%2Ftemple%2Fkonark-sun-temple%2Fhero-konark-sun-temple.jpg&w=3840&q=75', title: 'Konark Sun Temple', category: 'Temples' },
        { src: 'https://aurangabadtourism.in/images/places-to-visit/header/ajanta-caves-aurangabad-tourism-entry-fee-timings-holidays-reviews-header.jpg', title: 'Ajanta Caves', category: 'Caves' },
        { src: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Kailash_temple_%28Ellora_cave_no_15%29_at_Verul.png', title: 'Ellora Caves', category: 'Caves' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREduGVvl_i52knUmb0ZDRr1PxJsLdEGHg0kqOatO0dFnj93BsaFzLBGYzHiqOOkywtog0&usqp=CAU', title: 'Elephanta Caves', category: 'Caves' },
        { src: 'https://imvoyager.com/wp-content/uploads/2022/01/Rani-Ki-Vav-Gujarat-11.15.jpg', title: 'Rani Ki Vav', category: 'Architecture' }
    ],
    kings: [
        { src: 'https://i.pinimg.com/736x/a4/f0/63/a4f0632050cba628a31c3f1e8c84366e.jpg', title: 'Chhatrapati Shivaji Maharaj', category: 'Maratha Empire' },
        { src: 'https://cdn11.bigcommerce.com/s-x49po/products/50500/images/67062/Maharana_Pratap_option_Fizdi_Vimanika_Arts__72204.1589018860.500.659.jpg?c=2', title: 'Maharana Pratap', category: 'Rajput Kingdom' },
        { src: 'https://dvncorestorageprod.blob.core.windows.net/files/page/147/Image/Maharaja_Ranjit_Singh%2C_Emperor_of_the_Sikh_Empire_20250114102353816.jpg', title: 'Maharaja Ranjit Singh', category: 'Sikh Empire'},
        { src: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63cbc782062fcf001dcef133.jpg', title: 'Rajaraja Chola',category: 'Chola Dynasty' },
        { src: 'https://c.ndtvimg.com/2020-11/8hhkr9f8_lachit-borphukan_625x300_24_November_20.jpg', title: 'Lachit Borphukan', category: 'Ahom Kingdom' },
        { src: 'https://i.pinimg.com/736x/02/14/95/0214957264bb1b5db958152d89a6127c.jpg', title: 'Prithviraj Chauhan', category: 'Rajput Kingdom' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8mWuhb9jj6Mw_-kQmrKI2iOpZn6wm3HOsw&s', title: 'Krishnadevaraya', category: 'Vijayanagara Empire' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sambhaji_Maharaj.JPG/512px-Sambhaji_Maharaj.JPG', title: 'Chhatrapati Sambhaji Maharaj ', category: 'Maratha Empire' }
    ],
    tourism: [
        { src: 'https://i0.wp.com/asianmail.in/wp-content/uploads/2023/11/F_ovrO_XsAADKil.jpg?fit=1280%2C853&ssl=1', title: 'Gulmarg', category: 'Hill Station' },
        { src: 'https://indiathrills.com/wp-content/uploads/2020/07/Sunset-from-Nahargarh-Fort-70190498-768x512.jpg', title: 'Jaipur City', category: 'Cities' },
        { src: 'https://www.taleof2backpackers.com/wp-content/uploads/2020/05/Brijrama-Palace-at-Darbhanga-Ghat-Varanasi.jpg', title: 'Varanasi Ghats', category: 'Religious Sites' },
        { src: 'https://www.holidify.com/images/bgImages/ALLEPPEY.jpg', title: 'Kerala Backwaters', category: 'Nature' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Manali_City.jpg/800px-Manali_City.jpg', title: 'Manali', category: 'Hill Stations' },
        { src: 'https://www.trawell.in/blog/wp-content/uploads/2024/03/ooty-main-730x410.jpg', title: 'Ooty', category: 'Hill Stations' },
        { src: 'https://static.toiimg.com/thumb/113194873/Darjeeling-West-Bengal.jpg?width=636&height=358&resize=4', title: 'Darjeeling', category: 'Hill Stations' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4-x_b8wfiaFAX27G64UP53-gOYhoISzvAg&s', title: 'Goa Beaches', category: 'Beaches' },
        { src: 'https://deih43ym53wif.cloudfront.net/elephant-walking-on-beach-andaman-islands-india-shutterstock_774152350.jpg_ebe87e3377.jpg', title: 'Andaman Islands', category: 'Islands' },
        { src: 'https://static.toiimg.com/photo/105293415.cms', title: 'Ladakh', category: 'Adventure' }
    ]
};

// DOM Elements
const gallery = document.getElementById('gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeMenu = document.querySelector('.close-menu');
const searchInput = document.getElementById('searchInput');
const scrollTopBtn = document.getElementById('scrollTop');
const categoryButtons = document.querySelectorAll('.sidebar nav ul li');

// Current state
let currentCategory = 'all';
let currentImageIndex = 0;
let currentImages = [];

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});

// Menu Toggle
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Lazy Loading
const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
};

const imageObserver = new IntersectionObserver(lazyLoad, {
    root: null,
    threshold: 0.1
});

// Create Gallery Item
function createGalleryItem(image) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.dataset.src = image.src;
    img.alt = image.title;
    img.className = 'lazy';
    
    const info = document.createElement('div');
    info.className = 'gallery-item-info';
    info.innerHTML = `
        <h3>${image.title}</h3>
        <p>${image.category}</p>
    `;
    
    div.appendChild(img);
    div.appendChild(info);
    
    imageObserver.observe(img);
    
    div.addEventListener('click', () => openLightbox(image));
    
    return div;
}

// Load Gallery
function loadGallery(category = 'all') {
    gallery.innerHTML = '';
    currentImages = [];
    
    if (category === 'all') {
        Object.values(galleryData).forEach(categoryImages => {
            currentImages.push(...categoryImages);
        });
    } else {
        currentImages = galleryData[category] || [];
    }
    
    currentImages.forEach(image => {
        gallery.appendChild(createGalleryItem(image));
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredImages = currentImages.filter(image => 
        image.title.toLowerCase().includes(searchTerm) ||
        image.category.toLowerCase().includes(searchTerm)
    );
    
    gallery.innerHTML = '';
    filteredImages.forEach(image => {
        gallery.appendChild(createGalleryItem(image));
    });
});

// Lightbox functionality
function openLightbox(image) {
    lightbox.classList.add('active');
    lightboxImg.src = image.src;
    currentImageIndex = currentImages.indexOf(image);
}

function closeLightboxFn() {
    lightbox.classList.remove('active');
}

function navigateImage(direction) {
    currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
    lightboxImg.src = currentImages[currentImageIndex].src;
}

closeLightbox.addEventListener('click', closeLightboxFn);
prevBtn.addEventListener('click', () => navigateImage(-1));
nextBtn.addEventListener('click', () => navigateImage(1));

// Category selection
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentCategory = button.dataset.category;
        loadGallery(currentCategory);
        sidebar.classList.remove('active');
    });
});

// Scroll to top
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Rating system
const stars = document.querySelectorAll('.rating i');
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        const rating = this.dataset.rating;
        highlightStars(rating);
    });
    
    star.addEventListener('mouseout', function() {
        highlightStars(currentRating);
    });
    
    star.addEventListener('click', function() {
        currentRating = this.dataset.rating;
        highlightStars(currentRating);
    });
});

function highlightStars(rating) {
    stars.forEach(star => {
        star.style.color = star.dataset.rating <= rating ? '#ffd700' : '#ccc';
    });
}

// Review form submission
document.getElementById('reviewForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the review data to a server
    alert('Thank you for your review!');
    e.target.reset();
    currentRating = 0;
    highlightStars(0);
});

// Initialize gallery
loadGallery();