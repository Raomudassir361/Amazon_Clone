// // // Swiper container ko HTML se select kiya
// // const swiperEl = document.querySelector('swiper-container');

// // // Swiper ki settings object ke zariye initialize ki
// // const swiperParams = {
// //     loop: true,          // Infinite loop fix karne ke liye true
// //     navigation: true,    // Arrows toggle active
// //     pagination: true,    // Dots active
// //     keyboard: true,      // Keyboard arrows control
// //     mousewheel: true,    // Scroll wheel control
// // };



// // // Settings ko swiper element par apply kar diya
// // Object.assign(swiperEl, swiperParams);

// // // Swiper ko initialize kiya
// // swiperEl.initialize();

// // // --- Dark mode toggle ---
// // const themeToggleBtn = document.getElementById('themeToggle');
// // const themeIcon = document.getElementById('themeIcon');

// // function applyTheme(theme) {
// //     const isDark = theme === 'dark';
// //     document.body.classList.toggle('dark', isDark);

// //     if (themeIcon) {
// //         themeIcon.classList.toggle('fa-sun', !isDark);
// //         themeIcon.classList.toggle('fa-moon', isDark);
// //     }
// // }

// // function getInitialTheme() {
// //     const saved = localStorage.getItem('theme');
// //     if (saved === 'dark' || saved === 'light') return saved;

// //     // Fallback to system preference
// //     const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// //     return prefersDark ? 'dark' : 'light';
// // }

// // applyTheme(getInitialTheme());

// // if (themeToggleBtn) {
// //     themeToggleBtn.addEventListener('click', () => {
// //         const next = document.body.classList.contains('dark') ? 'light' : 'dark';
// //         localStorage.setItem('theme', next);
// //         applyTheme(next);
// //     });
// // }
// // //  slider
// // const track = document.getElementById('sliderTrack');
// // const prevBtn = document.getElementById('prevBtn');
// // const nextBtn = document.getElementById('nextBtn');
// // const thumb = document.getElementById('scrollThumb');

// // const getScrollAmount = () => track.clientWidth * 0.75;

// // nextBtn.addEventListener('click', () => {
// //   track.scrollLeft += getScrollAmount();
// // });

// // prevBtn.addEventListener('click', () => {
// //   track.scrollLeft -= getScrollAmount();
// // });

// // const updateScrollbar = () => {
// //   const scrollPercentage = track.scrollLeft / (track.scrollWidth - track.clientWidth);
// //   const thumbWidthPercentage = (track.clientWidth / track.scrollWidth) * 100;
  
// //   thumb.style.width = `${thumbWidthPercentage}%`;
  
// //   const maxLeft = 100 - thumbWidthPercentage;
// //   thumb.style.left = `${scrollPercentage * maxLeft}%`;
// // };

// // track.addEventListener('scroll', updateScrollbar);
// // window.addEventListener('resize', updateScrollbar);

// // updateScrollbar();
// // //    card

// // document.addEventListener('DOMContentLoaded', () => {
// //     const track = document.getElementById('carouselTrack');
// //     const prevBtn = document.getElementById('prevBtn');
// //     const nextBtn = document.getElementById('nextBtn');
// //     const scrollBar = document.getElementById('scrollBar');
// //     const indicatorBg = document.querySelector('.scrollbar-indicator-bg');

// //     let currentIndex = 0;
// //     const itemWidth = 212; // 200px image width + 12px gap
// //     const totalItems = track.children.length;

// //     function updateCarousel() {
// //         const containerWidth = track.parentElement.offsetWidth;
// //         const visibleItems = Math.floor(containerWidth / itemWidth);
// //         const maxIndex = Math.max(0, totalItems - visibleItems);

// //         // Boundaries secure karein
// //         if (currentIndex < 0) currentIndex = 0;
// //         if (currentIndex > maxIndex) currentIndex = maxIndex;

// //         // Slider track ko move karein
// //         const amountToMove = -currentIndex * itemWidth;
// //         track.style.transform = `translateX(${amountToMove}px)`;

// //         // --- POORE DIV WIDE SCROLLBAR LOGIC ---
// //         const bgWidth = indicatorBg.offsetWidth; // Yeh ab poore div ki width nikalega
        
// //         // Bar ki width screen size ke hisab se select hogi (e.g., agar 50% items screen par hain toh bar 50% wide hogi)
// //         const barWidth = (visibleItems / totalItems) * bgWidth;
// //         const finalBarWidth = Math.min(bgWidth, Math.max(30, barWidth)); 
        
// //         scrollBar.style.width = `${finalBarWidth}px`;

// //         // Bar ko smoothly aage piche move karne ke liye
// //         if (maxIndex > 0) {
// //             const scrollableWidth = bgWidth - finalBarWidth;
// //             const progress = currentIndex / maxIndex;
// //             scrollBar.style.left = `${progress * scrollableWidth}px`;
// //         } else {
// //             scrollBar.style.left = '0px';
// //         }
// //     }

// //     nextBtn.addEventListener('click', () => {
// //         const containerWidth = track.parentElement.offsetWidth;
// //         const visibleItems = Math.floor(containerWidth / itemWidth);
// //         const maxIndex = totalItems - visibleItems;

// //         if (currentIndex < maxIndex) {
// //             currentIndex += 2; // Next karne par 2 items aage
// //             updateCarousel();
// //         }
// //     });

// //     prevBtn.addEventListener('click', () => {
// //         if (currentIndex > 0) {
// //             currentIndex -= 2; // Prev karne par 2 items peeche
// //             updateCarousel();
// //         }
// //     });

// //     // Screen resize hone par scrollbar aur slider responsive khud adjust honge
// //     window.addEventListener('resize', updateCarousel);
// //     updateCarousel(); 
// // });

// // ==========================================
// // 1. SWIPER CONFIGURATION
// // ==========================================
// const swiperEl = document.querySelector('swiper-container');

// if (swiperEl) {
//     const swiperParams = {
//         loop: true,        // Infinite loop true
//         navigation: true,  // Arrows active
//         pagination: true,  // Dots active
//         keyboard: true,    // Keyboard arrows control
//         mousewheel: true,  // Scroll wheel control
//     };

//     Object.assign(swiperEl, swiperParams);
//     swiperEl.initialize();
// }

// // ==========================================
// // 2. DARK MODE TOGGLE
// // ==========================================
// const themeToggleBtn = document.getElementById('themeToggle');
// const themeIcon = document.getElementById('themeIcon');

// function applyTheme(theme) {
//     const isDark = theme === 'dark';
//     document.body.classList.toggle('dark', isDark);

//     if (themeIcon) {
//         themeIcon.classList.toggle('fa-sun', !isDark);
//         themeIcon.classList.toggle('fa-moon', isDark);
//     }
// }

// function getInitialTheme() {
//     const saved = localStorage.getItem('theme');
//     if (saved === 'dark' || saved === 'light') return saved;

//     const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//     return prefersDark ? 'dark' : 'light';
// }

// applyTheme(getInitialTheme());

// if (themeToggleBtn) {
//     themeToggleBtn.addEventListener('click', () => {
//         const next = document.body.classList.contains('dark') ? 'light' : 'dark';
//         localStorage.setItem('theme', next);
//         applyTheme(next);
//     });
// }

// // ==========================================
// // 3. FIRST SLIDER (Scroll Track Slider)
// // ==========================================
// const track = document.getElementById('sliderTrack');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const thumb = document.getElementById('scrollThumb');

// if (track && prevBtn && nextBtn) {
//     const getScrollAmount = () => track.clientWidth * 0.75;

//     nextBtn.addEventListener('click', () => {
//         track.scrollLeft += getScrollAmount();
//     });

//     prevBtn.addEventListener('click', () => {
//         track.scrollLeft -= getScrollAmount();
//     });

//     const updateScrollbar = () => {
//         if (!thumb) return;
//         const scrollPercentage = track.scrollLeft / (track.scrollWidth - track.clientWidth);
//         const thumbWidthPercentage = (track.clientWidth / track.scrollWidth) * 100;
        
//         thumb.style.width = `${thumbWidthPercentage}%`;
        
//         const maxLeft = 100 - thumbWidthPercentage;
//         thumb.style.left = `${scrollPercentage * maxLeft}%`;
//     };

//     track.addEventListener('scroll', updateScrollbar);
//     window.addEventListener('resize', updateScrollbar);
//     updateScrollbar();
// }

// // ==========================================
// // 4. LAST CARD SLIDER (Fixed Conflicts)
// // ==========================================
// document.addEventListener('DOMContentLoaded', () => {
//     const cardTrack = document.getElementById('carouselTrack');
//     // Unique IDs se select kiya taaki upar wale slider se takraaye na
//     const cardPrevBtn = document.getElementById('cardPrevBtn') || document.getElementById('prevBtn'); 
//     const cardNextBtn = document.getElementById('cardNextBtn') || document.getElementById('nextBtn'); 
//     const scrollBar = document.getElementById('scrollBar');
//     const indicatorBg = document.querySelector('.scrollbar-indicator-bg');

//     if (!cardTrack || !indicatorBg || !scrollBar) return;

//     let currentIndex = 0;
//     const itemWidth = 212; // 200px image width + 12px gap
//     const totalItems = cardTrack.children.length;

//     function updateCarousel() {
//         const containerWidth = cardTrack.parentElement.offsetWidth;
//         const visibleItems = Math.floor(containerWidth / itemWidth);
//         const maxIndex = Math.max(0, totalItems - visibleItems);

//         // Boundaries secure karein
//         if (currentIndex < 0) currentIndex = 0;
//         if (currentIndex > maxIndex) currentIndex = maxIndex;

//         // Slider track ko move karein
//         const amountToMove = -currentIndex * itemWidth;
//         cardTrack.style.transform = `translateX(${amountToMove}px)`;

//         // Full width scrollbar logic
//         const bgWidth = indicatorBg.offsetWidth; 
//         const barWidth = (visibleItems / totalItems) * bgWidth;
//         const finalBarWidth = Math.min(bgWidth, Math.max(30, barWidth)); 
        
//         scrollBar.style.width = `${finalBarWidth}px`;

//         if (maxIndex > 0) {
//             const scrollableWidth = bgWidth - finalBarWidth;
//             const progress = currentIndex / maxIndex;
//             scrollBar.style.left = `${progress * scrollableWidth}px`;
//         } else {
//             scrollBar.style.left = '0px';
//         }
//     }

//     if (cardNextBtn) {
//         cardNextBtn.addEventListener('click', () => {
//             const containerWidth = cardTrack.parentElement.offsetWidth;
//             const visibleItems = Math.floor(containerWidth / itemWidth);
//             const maxIndex = totalItems - visibleItems;

//             if (currentIndex < maxIndex) {
//                 currentIndex += 2; // Next par 2 items aage
//                 updateCarousel();
//             }
//         });
//     }

//     if (cardPrevBtn) {
//         cardPrevBtn.addEventListener('click', () => {
//             if (currentIndex > 0) {
//                 currentIndex -= 2; // Prev par 2 items peeche
//                 updateCarousel();
//             }
//         });
//     }

//     window.addEventListener('resize', updateCarousel);
//     updateCarousel(); 
// });



// ==========================================
// 1. SWIPER CONFIGURATION
// ==========================================
const swiperEl = document.querySelector('swiper-container');

if (swiperEl) {
    const swiperParams = {
        loop: true,        
        navigation: true,  
        pagination: true,  
        keyboard: true,    
        mousewheel: true,  
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
}

// ==========================================
// 2. DARK MODE TOGGLE
// ==========================================
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark', isDark);

    if (themeIcon) {
        themeIcon.classList.toggle('fa-sun', !isDark);
        themeIcon.classList.toggle('fa-moon', isDark);
    }
}

function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
}

applyTheme(getInitialTheme());

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const next = document.body.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', next);
        applyTheme(next);
    });
}

// ==========================================
// 3. FIRST SLIDER (Scroll Track Slider)
// ==========================================
const track = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumb = document.getElementById('scrollThumb');

if (track && prevBtn && nextBtn) {
    const getScrollAmount = () => track.clientWidth * 0.75;

    nextBtn.addEventListener('click', () => {
        track.scrollLeft += getScrollAmount();
    });

    prevBtn.addEventListener('click', () => {
        track.scrollLeft -= getScrollAmount();
    });

    const updateScrollbar = () => {
        if (!thumb) return;
        const scrollPercentage = track.scrollLeft / (track.scrollWidth - track.clientWidth);
        const thumbWidthPercentage = (track.clientWidth / track.scrollWidth) * 100;
        
        thumb.style.width = `${thumbWidthPercentage}%`;
        
        const maxLeft = 100 - thumbWidthPercentage;
        thumb.style.left = `${scrollPercentage * maxLeft}%`;
    };

    track.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);
    updateScrollbar();
}

// ==========================================
// 4. SECOND CARD SLIDER (Previous Amazon Card)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const cardTrack = document.getElementById('carouselTrack');
    const cardPrevBtn = document.getElementById('cardPrevBtn'); 
    const cardNextBtn = document.getElementById('nextBtn'); 
    const scrollBar = document.getElementById('scrollBar');
    const indicatorBg = document.querySelector('.scrollbar-indicator-bg');

    if (!cardTrack || !indicatorBg || !scrollBar) return;

    let currentIndex = 0;
    const itemWidth = 212; 
    const totalItems = cardTrack.children.length;

    function updateCarousel() {
        const containerWidth = cardTrack.parentElement.offsetWidth;
        const visibleItems = Math.floor(containerWidth / itemWidth);
        const maxIndex = Math.max(0, totalItems - visibleItems);

        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        const amountToMove = -currentIndex * itemWidth;
        cardTrack.style.transform = `translateX(${amountToMove}px)`;

        const bgWidth = indicatorBg.offsetWidth; 
        const barWidth = (visibleItems / totalItems) * bgWidth;
        const finalBarWidth = Math.min(bgWidth, Math.max(30, barWidth)); 
        
        scrollBar.style.width = `${finalBarWidth}px`;

        if (maxIndex > 0) {
            const scrollableWidth = bgWidth - finalBarWidth;
            const progress = currentIndex / maxIndex;
            scrollBar.style.left = `${progress * scrollableWidth}px`;
        } else {
            scrollBar.style.left = '0px';
        }
    }

    if (cardNextBtn) {
        cardNextBtn.addEventListener('click', () => {
            const containerWidth = cardTrack.parentElement.offsetWidth;
            const visibleItems = Math.floor(containerWidth / itemWidth);
            const maxIndex = totalItems - visibleItems;
            if (currentIndex < maxIndex) {
                currentIndex += 2;
                updateCarousel();
            }
        });
    }

    if (cardPrevBtn) {
        cardPrevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex -= 2;
                updateCarousel();
            }
        });
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel(); 
});

// ==========================================
// 5. THIRD SLIDER (AAPKA NAYA WALA SLIDER)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const newTrack = document.getElementById('newCarouselTrack');
    const newPrevBtn = document.getElementById('newCardPrevBtn'); 
    const newNextBtn = document.getElementById('newCardNextBtn'); 
    const newScrollBar = document.getElementById('newScrollBar');
    // Is card ke andar mojood line background ko select kiya
    const parentCard = document.getElementById('newCarouselTrack').closest('.carousel-card');
    const newIndicatorBg = parentCard ? parentCard.querySelector('.scrollbar-indicator-bg') : null;

    if (!newTrack || !newIndicatorBg || !newScrollBar) return;

    let newCurrentIndex = 0;
    const itemWidth = 212; 
    const totalItems = newTrack.children.length;

    function updateNewCarousel() {
        const containerWidth = newTrack.parentElement.offsetWidth;
        const visibleItems = Math.floor(containerWidth / itemWidth);
        const maxIndex = Math.max(0, totalItems - visibleItems);

        if (newCurrentIndex < 0) newCurrentIndex = 0;
        if (newCurrentIndex > maxIndex) newCurrentIndex = maxIndex;

        const amountToMove = -newCurrentIndex * itemWidth;
        newTrack.style.transform = `translateX(${amountToMove}px)`;

        const bgWidth = newIndicatorBg.offsetWidth; 
        const barWidth = (visibleItems / totalItems) * bgWidth;
        const finalBarWidth = Math.min(bgWidth, Math.max(30, barWidth)); 
        
        newScrollBar.style.width = `${finalBarWidth}px`;

        if (maxIndex > 0) {
            const scrollableWidth = bgWidth - finalBarWidth;
            const progress = newCurrentIndex / maxIndex;
            newScrollBar.style.left = `${progress * scrollableWidth}px`;
        } else {
            newScrollBar.style.left = '0px';
        }
    }

    if (newNextBtn) {
        newNextBtn.addEventListener('click', () => {
            const containerWidth = newTrack.parentElement.offsetWidth;
            const visibleItems = Math.floor(containerWidth / itemWidth);
            const maxIndex = totalItems - visibleItems;
            if (newCurrentIndex < maxIndex) {
                newCurrentIndex += 2; // Move 2 items forward
                updateNewCarousel();
            }
        });
    }

    if (newPrevBtn) {
        newPrevBtn.addEventListener('click', () => {
            if (newCurrentIndex > 0) {
                newCurrentIndex -= 2; // Move 2 items backward
                updateNewCarousel();
            }
        });
    }

    window.addEventListener('resize', updateNewCarousel);
    updateNewCarousel(); 
});
// slider
// ==========================================
// PURE INDEPENDENT BEAUTY SLIDER JAVASCRIPT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const beautyTrack = document.getElementById('beautyCarouselTrack');
    const beautyPrevBtn = document.getElementById('beautyCardPrevBtn'); 
    const beautyNextBtn = document.getElementById('beautyCardNextBtn'); 
    const beautyScrollBar = document.getElementById('beautyScrollBar');
    
    // Poore card ke andar se scrollbar ka background div dhoonda
    const beautyParentCard = beautyTrack ? beautyTrack.closest('.carousel-card') : null;
    const beautyIndicatorBg = beautyParentCard ? beautyParentCard.querySelector('.scrollbar-indicator-bg') : null;

    // Agar HTML elements nahi milte toh code aage run nahi hoga aur error nahi aayega
    if (!beautyTrack || !beautyScrollBar || !beautyIndicatorBg) return;

    let beautyCurrentIndex = 0;
    const beautyItemWidth = 212; // 200px image box width + 12px gap spacing
    const beautyTotalItems = beautyTrack.children.length;

    function updateBeautyCarousel() {
        const containerWidth = beautyTrack.parentElement.offsetWidth;
        const visibleItems = Math.floor(containerWidth / beautyItemWidth);
        const maxIndex = Math.max(0, beautyTotalItems - visibleItems);

        // Limit locks checking
        if (beautyCurrentIndex < 0) beautyCurrentIndex = 0;
        if (beautyCurrentIndex > maxIndex) beautyCurrentIndex = maxIndex;

        // Slide the row horizontally
        const amountToMove = -beautyCurrentIndex * beautyItemWidth;
        beautyTrack.style.transform = `translateX(${amountToMove}px)`;

        // Scrollbar bar logic calculations
        const bgWidth = beautyIndicatorBg.offsetWidth; 
        const barWidth = (visibleItems / beautyTotalItems) * bgWidth;
        const finalBarWidth = Math.min(bgWidth, Math.max(30, barWidth)); // Bar size secure minimum 30px
        
        beautyScrollBar.style.width = `${finalBarWidth}px`;

        // Smooth moving animation positioning
        if (maxIndex > 0) {
            const scrollableWidth = bgWidth - finalBarWidth;
            const progress = beautyCurrentIndex / maxIndex;
            beautyScrollBar.style.left = `${progress * scrollableWidth}px`;
        } else {
            beautyScrollBar.style.left = '0px';
        }
    }

    // Next Button click handler (Moves 2 items ahead)
    if (beautyNextBtn) {
        beautyNextBtn.addEventListener('click', () => {
            const containerWidth = beautyTrack.parentElement.offsetWidth;
            const visibleItems = Math.floor(containerWidth / beautyItemWidth);
            const maxIndex = beautyTotalItems - visibleItems;
            if (beautyCurrentIndex < maxIndex) {
                beautyCurrentIndex = Math.min(beautyCurrentIndex + 2, maxIndex);
                updateBeautyCarousel();
            }
        });
    }

    // Prev Button click handler (Moves 2 items backward)
    if (beautyPrevBtn) {
        beautyPrevBtn.addEventListener('click', () => {
            if (beautyCurrentIndex > 0) {
                beautyCurrentIndex = Math.max(beautyCurrentIndex - 2, 0);
                updateBeautyCarousel();
            }
        });
    }

    // Screen resize dynamic adjustments
    window.addEventListener('resize', updateBeautyCarousel);
    
    // First time call structure
    updateBeautyCarousel(); 
});

// slider
// ==========================================
// PURE INDEPENDENT KITCHEN SLIDER JAVASCRIPT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const kitchenTrack = document.getElementById('kitchenCarouselTrack');
    const kitchenPrevBtn = document.getElementById('kitchenCardPrevBtn'); 
    const kitchenNextBtn = document.getElementById('kitchenCardNextBtn'); 
    const kitchenScrollBar = document.getElementById('kitchenScrollBar');
    
    const kitchenParentCard = kitchenTrack ? kitchenTrack.closest('.carousel-card') : null;
    const kitchenIndicatorBg = kitchenParentCard ? kitchenParentCard.querySelector('.scrollbar-indicator-bg') : null;

    if (!kitchenTrack || !kitchenScrollBar || !kitchenIndicatorBg) return;

    let kitchenCurrentIndex = 0;
    const kitchenItemWidth = 212; // 200px width + 12px gap
    const kitchenTotalItems = kitchenTrack.children.length;

    function updateKitchenCarousel() {
        const containerWidth = kitchenTrack.parentElement.offsetWidth;
        const visibleItems = Math.floor(containerWidth / kitchenItemWidth);
        const maxIndex = Math.max(0, kitchenTotalItems - visibleItems);

        if (kitchenCurrentIndex < 0) kitchenCurrentIndex = 0;
        if (kitchenCurrentIndex > maxIndex) kitchenCurrentIndex = maxIndex;

        const amountToMove = -kitchenCurrentIndex * kitchenItemWidth;
        kitchenTrack.style.transform = `translateX(${amountToMove}px)`;

        const bgWidth = kitchenIndicatorBg.offsetWidth; 
        const barWidth = (visibleItems / kitchenTotalItems) * bgWidth;
        const finalBarWidth = Math.min(bgWidth, Math.max(30, barWidth)); 
        
        kitchenScrollBar.style.width = `${finalBarWidth}px`;

        if (maxIndex > 0) {
            const scrollableWidth = bgWidth - finalBarWidth;
            const progress = kitchenCurrentIndex / maxIndex;
            kitchenScrollBar.style.left = `${progress * scrollableWidth}px`;
        } else {
            kitchenScrollBar.style.left = '0px';
        }
    }

    if (kitchenNextBtn) {
        kitchenNextBtn.addEventListener('click', () => {
            const containerWidth = kitchenTrack.parentElement.offsetWidth;
            const visibleItems = Math.floor(containerWidth / kitchenItemWidth);
            const maxIndex = kitchenTotalItems - visibleItems;
            if (kitchenCurrentIndex < maxIndex) {
                kitchenCurrentIndex = Math.min(kitchenCurrentIndex + 2, maxIndex); // 2 Items aage jayega
                updateKitchenCarousel();
            }
        });
    }

    if (kitchenPrevBtn) {
        kitchenPrevBtn.addEventListener('click', () => {
            if (kitchenCurrentIndex > 0) {
                kitchenCurrentIndex = Math.max(kitchenCurrentIndex - 2, 0); // 2 Items peeche jayega
                updateKitchenCarousel();
            }
        });
    }

    window.addEventListener('resize', updateKitchenCarousel);
    updateKitchenCarousel(); 
});
// SLIDER
// ==========================================
// INDEPENDENT ELECTRONICS SLIDER JAVASCRIPT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const elecTrack = document.getElementById('electronicsTrack');
    const elecPrevBtn = document.getElementById('electronicsPrevBtn'); 
    const elecNextBtn = document.getElementById('electronicsNextBtn'); 
    const elecScrollBar = document.getElementById('electronicsScrollBar');
    
    const elecParentCard = elecTrack ? elecTrack.closest('.electronics-card-container') : null;
    const elecIndicatorBg = elecParentCard ? elecParentCard.querySelector('.electronics-bar-background') : null;

    if (!elecTrack || !elecScrollBar || !elecIndicatorBg) return;

    let elecCurrentIndex = 0;
    const elecItemWidth = 212; // 200px image box + 12px gap
    const elecTotalItems = elecTrack.children.length;

    function updateElectronicsCarousel() {
        const containerWidth = elecTrack.parentElement.offsetWidth;
        const visibleItems = Math.floor(containerWidth / elecItemWidth);
        const maxIndex = Math.max(0, elecTotalItems - visibleItems);

        if (elecCurrentIndex < 0) elecCurrentIndex = 0;
        if (elecCurrentIndex > maxIndex) elecCurrentIndex = maxIndex;

        const amountToMove = -elecCurrentIndex * elecItemWidth;
        elecTrack.style.transform = `translateX(${amountToMove}px)`;

        const bgWidth = elecIndicatorBg.offsetWidth; 
        const barWidth = (visibleItems / elecTotalItems) * bgWidth;
        const finalBarWidth = Math.min(bgWidth, Math.max(30, barWidth)); 
        
        elecScrollBar.style.width = `${finalBarWidth}px`;

        if (maxIndex > 0) {
            const scrollableWidth = bgWidth - finalBarWidth;
            const progress = elecCurrentIndex / maxIndex;
            elecScrollBar.style.left = `${progress * scrollableWidth}px`;
        } else {
            elecScrollBar.style.left = '0px';
        }
    }

    if (elecNextBtn) {
        elecNextBtn.addEventListener('click', () => {
            const containerWidth = elecTrack.parentElement.offsetWidth;
            const visibleItems = Math.floor(containerWidth / elecItemWidth);
            const maxIndex = elecTotalItems - visibleItems;
            if (elecCurrentIndex < maxIndex) {
                elecCurrentIndex = Math.min(elecCurrentIndex + 2, maxIndex); // 2 Items aage jayega
                updateElectronicsCarousel();
            }
        });
    }

    if (elecPrevBtn) {
        elecPrevBtn.addEventListener('click', () => {
            if (elecCurrentIndex > 0) {
                elecCurrentIndex = Math.max(elecCurrentIndex - 2, 0); // 2 Items peeche jayega
                updateElectronicsCarousel();
            }
        });
    }

    window.addEventListener('resize', updateElectronicsCarousel);
    updateElectronicsCarousel(); 
});
// slider
// ==========================================
// PURE INDEPENDENT SPORTS SLIDER JAVASCRIPT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const sportsTrack = document.getElementById('sportsCarouselTrack');
    const sportsPrevBtn = document.getElementById('sportsCardPrevBtn'); 
    const sportsNextBtn = document.getElementById('sportsCardNextBtn'); 
    const sportsScrollBar = document.getElementById('sportsScrollBar');
    
    const sportsParentCard = sportsTrack ? sportsTrack.closest('.carousel-card') : null;
    const sportsIndicatorBg = sportsParentCard ? sportsParentCard.querySelector('.scrollbar-indicator-bg') : null;

    if (!sportsTrack || !sportsScrollBar || !sportsIndicatorBg) return;

    let sportsCurrentIndex = 0;
    const sportsItemWidth = 212; // 200px width + 12px gap (purani CSS ke mutabiq)
    const sportsTotalItems = sportsTrack.children.length;

    function updateSportsCarousel() {
        const containerWidth = sportsTrack.parentElement.offsetWidth;
        const visibleItems = Math.floor(containerWidth / sportsItemWidth);
        const maxIndex = Math.max(0, sportsTotalItems - visibleItems);

        if (sportsCurrentIndex < 0) sportsCurrentIndex = 0;
        if (sportsCurrentIndex > maxIndex) sportsCurrentIndex = maxIndex;

        const amountToMove = -sportsCurrentIndex * sportsItemWidth;
        sportsTrack.style.transform = `translateX(${amountToMove}px)`;

        const bgWidth = sportsIndicatorBg.offsetWidth; 
        const barWidth = (visibleItems / sportsTotalItems) * bgWidth;
        const finalBarWidth = Math.min(bgWidth, Math.max(30, barWidth)); 
        
        sportsScrollBar.style.width = `${finalBarWidth}px`;

        if (maxIndex > 0) {
            const scrollableWidth = bgWidth - finalBarWidth;
            const progress = sportsCurrentIndex / maxIndex;
            sportsScrollBar.style.left = `${progress * scrollableWidth}px`;
        } else {
            sportsScrollBar.style.left = '0px';
        }
    }

    if (sportsNextBtn) {
        sportsNextBtn.addEventListener('click', () => {
            const containerWidth = sportsTrack.parentElement.offsetWidth;
            const visibleItems = Math.floor(containerWidth / sportsItemWidth);
            const maxIndex = sportsTotalItems - visibleItems;
            if (sportsCurrentIndex < maxIndex) {
                sportsCurrentIndex = Math.min(sportsCurrentIndex + 2, maxIndex); // 2 Items aage slide karega
                updateSportsCarousel();
            }
        });
    }

    if (sportsPrevBtn) {
        sportsPrevBtn.addEventListener('click', () => {
            if (sportsCurrentIndex > 0) {
                sportsCurrentIndex = Math.max(sportsCurrentIndex - 2, 0); // 2 Items peeche slide karega
                updateSportsCarousel();
            }
        });
    }

    window.addEventListener('resize', updateSportsCarousel);
    updateSportsCarousel(); 
});
// slider
// ==========================================
// PURE INDEPENDENT TOYS SLIDER JAVASCRIPT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const toysTrack = document.getElementById('toysCarouselTrack');
    const toysPrevBtn = document.getElementById('toysCardPrevBtn'); 
    const toysNextBtn = document.getElementById('toysCardNextBtn'); 
    const toysScrollBar = document.getElementById('toysScrollBar');
    
    const toysParentCard = toysTrack ? toysTrack.closest('.carousel-card') : null;
    const toysIndicatorBg = toysParentCard ? toysParentCard.querySelector('.scrollbar-indicator-bg') : null;

    if (!toysTrack || !toysScrollBar || !toysIndicatorBg) return;

    let toysCurrentIndex = 0;
    const toysItemWidth = 212; // 200px width + 12px gap
    const toysTotalItems = toysTrack.children.length;

    function updateToysCarousel() {
        const containerWidth = toysTrack.parentElement.offsetWidth;
        const visibleItems = Math.floor(containerWidth / toysItemWidth);
        const maxIndex = Math.max(0, toysTotalItems - visibleItems);

        if (toysCurrentIndex < 0) toysCurrentIndex = 0;
        if (toysCurrentIndex > maxIndex) toysCurrentIndex = maxIndex;

        const amountToMove = -toysCurrentIndex * toysItemWidth;
        toysTrack.style.transform = `translateX(${amountToMove}px)`;

        const bgWidth = toysIndicatorBg.offsetWidth; 
        const barWidth = (visibleItems / toysTotalItems) * bgWidth;
        const finalBarWidth = Math.min(bgWidth, Math.max(30, barWidth)); 
        
        toysScrollBar.style.width = `${finalBarWidth}px`;

        if (maxIndex > 0) {
            const scrollableWidth = bgWidth - finalBarWidth;
            const progress = toysCurrentIndex / maxIndex;
            toysScrollBar.style.left = `${progress * scrollableWidth}px`;
        } else {
            toysScrollBar.style.left = '0px';
        }
    }

    if (toysNextBtn) {
        toysNextBtn.addEventListener('click', () => {
            const containerWidth = toysTrack.parentElement.offsetWidth;
            const visibleItems = Math.floor(containerWidth / toysItemWidth);
            const maxIndex = toysTotalItems - visibleItems;
            if (toysCurrentIndex < maxIndex) {
                toysCurrentIndex = Math.min(toysCurrentIndex + 2, maxIndex); // 2 Items aage slide karega
                updateToysCarousel();
            }
        });
    }

    if (toysPrevBtn) {
        toysPrevBtn.addEventListener('click', () => {
            if (toysCurrentIndex > 0) {
                toysCurrentIndex = Math.max(toysCurrentIndex - 2, 0); // 2 Items peeche slide karega
                updateToysCarousel();
            }
        });
    }

    window.addEventListener('resize', updateToysCarousel);
    updateToysCarousel(); 
});












