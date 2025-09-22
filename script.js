document.addEventListener('DOMContentLoaded', function() {
    const eventCard = document.querySelector('.eventcard');
    if (eventCard) {
        const events = [
            {
                img: "kitchen.jpg",
                title: "Radharani's Kitchen Seva",
                desc: "Krishna is most pleased when He honours foodstuff prepared by Srimati Radharani. Receive the blessings of ...",
                date: "7 - 21 Sept 2025",
                link: "#"
            },
            {
                img: "bhagavad.jpg",
                title: "Bhagavad-gita Class",
                desc: "Join our daily Bhagavad-gita class and enrich your spiritual knowledge.",
                date: "Everyday 6:00 PM",
                link: "#"
            },
            {
                img: "gathering.jpg",
                title: "Saturday Feast",
                desc: "Participate in our weekly Saturday Feast with kirtan, lecture, and prasadam.",
                date: "Every Sunday 5:00 PM",
                link: "#"
            }
        ];

        let currentEvent = 0;

        function renderEvent(idx, direction = "right") {
            eventCard.classList.add(direction === "right" ? "slide-out-left" : "slide-out-right");
            setTimeout(() => {
                const event = events[idx];
                eventCard.innerHTML = `
                    <img src="${event.img}" alt="Event" class="event-img rounded">
                    <div class="event-details flex-grow-1 ms-3 text-start">
                        <div class="fw-semibold event-title">${event.title}</div>
                        <div class="event-desc text-muted small">
                            ${event.desc}
                        </div>
                        <div class="event-meta mt-2 d-flex align-items-center gap-3">
                            <span class="event-date text-muted small"><i class="bi bi-calendar-event"></i> ${event.date}</span>
                        </div>
                    </div>
                `;
                eventCard.classList.remove("slide-out-left", "slide-out-right");
                eventCard.classList.add(direction === "right" ? "slide-in-right" : "slide-in-left");
                setTimeout(() => {
                    eventCard.classList.remove("slide-in-right", "slide-in-left");
                }, 400);
            }, 400);
        }

        renderEvent(currentEvent);

        document.querySelector('.left-arrow').onclick = function() {
            const prevEvent = (currentEvent - 1 + events.length) % events.length;
            renderEvent(prevEvent, "left");
            currentEvent = prevEvent;
            resetCarouselInterval();
        };
        document.querySelector('.right-arrow').onclick = function() {
            const nextEvent = (currentEvent + 1) % events.length;
            renderEvent(nextEvent, "right");
            currentEvent = nextEvent;
            resetCarouselInterval();
        };

        let carouselInterval = setInterval(() => {
            const nextEvent = (currentEvent + 1) % events.length;
            renderEvent(nextEvent, "right");
            currentEvent = nextEvent;
        }, 5000);

        function resetCarouselInterval() {
            clearInterval(carouselInterval);
            carouselInterval = setInterval(() => {
                const nextEvent = (currentEvent + 1) % events.length;
                renderEvent(nextEvent, "right");
                currentEvent = nextEvent;
            }, 5000);
        }
    }

    var calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'dayGridMonth,dayGridWeek,dayGridYear',
                center: 'title',
                right: 'today prev,next,dayGridYear'
            },
            views: {
                dayGridYear: {
                    type: 'dayGrid',
                    duration: { years: 1 },
                    buttonText: 'Year'
                }
            },
            height: 'auto',
            events: [
                {
                    title: "Radhastami: Appearance of Srimati Radharani",
                    start: "2025-08-31",
                    className: "fc-event-orange"
                },
                {
                    title: "(Fast today for Vamanadev)",
                    start: "2025-09-03",
                    className: "fc-event-purple"
                },
                {
                    title: "Fasting for Parsva Ekadasi",
                    start: "2025-09-03",
                    className: "fc-event-red"
                },
                {
                    title: "(Fasting is done yesterday)",
                    start: "2025-09-04",
                    className: "fc-event-purple"
                },
                {
                    title: "Break fast 10:19 - 10:33 (Louisville)",
                    start: "2025-09-04",
                    className: "fc-event-purple"
                },
                {
                    title: "Sri Vamana Dvadashi: Appearance of Lord Vamanadev",
                    start: "2025-09-04",
                    className: "fc-event-orange"
                },
                {
                    title: "Srila Jiva Gosvami -- Appearance",
                    start: "2025-09-04",
                    className: "fc-event-orange"
                },
                {
                    title: "Srila Bhaktivinoda Thakura -- Disappearance",
                    start: "2025-09-05",
                    className: "fc-event-orange"
                },
                {
                    title: "Ananta Caturdasi Vrata",
                    start: "2025-09-06",
                    className: "fc-event-purple"
                },
                {
                    title: "Last day of the second Caturmasya",
                    start: "2025-09-06",
                    className: "fc-event-purple"
                },
                {
                    title: "Srila Haridasa Thakura -- Disappearance",
                    start: "2025-09-06",
                    className: "fc-event-orange"
                },
                {
                    title: "(milk fast for one month)",
                    start: "2025-09-07",
                    className: "fc-event-purple"
                },
                {
                    title: "Acceptance of sannyasa by Srila Prabhupada",
                    start: "2025-09-07",
                    className: "fc-event-purple"
                },
                {
                    title: "Bhadra Purnima",
                    start: "2025-09-07",
                    className: "fc-event-purple"
                },
                {
                    title: "Sri Visvarupa Mahotsava",
                    start: "2025-09-07",
                    className: "fc-event-purple"
                }
            ]
        });
        calendar.render();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutImages = [
        {
            src: "worship.jpg",
            caption: "Worship",
        },
        {
            src: "gathering.jpg",
            caption: "Discourse",
        },
        {
            src: "kirtan.jpg",
            caption: "Kirtan",
        },
        {
            src: "prasad.jpg",
            caption: "Prasadam",
        }
    ];
    let aboutCurrent = 0;
    const aboutImg = document.getElementById('about-carousel-img');
    const aboutCaption = document.getElementById('homeinvitcap');
    const aboutWrapper = aboutImg ? aboutImg.closest('.homeinvitimg-wrapper') : null;

    function showAbout(idx) {
        if (!aboutImg || !aboutCaption) return;
        aboutImg.style.opacity = 0;
        setTimeout(() => {
            aboutImg.src = aboutImages[idx].src;
            aboutCaption.textContent = aboutImages[idx].caption;
            aboutImg.style.opacity = 1;
        }, 350);
    }
    if (aboutImg && aboutCaption) {
        showAbout(aboutCurrent);

        document.querySelector('.homeinvitarrowimg-left').onclick = function() {
            aboutCurrent = (aboutCurrent - 1 + aboutImages.length) % aboutImages.length;
            showAbout(aboutCurrent);
            resetAboutInterval();
        };
        document.querySelector('.homeinvitarrowimg-right').onclick = function() {
            aboutCurrent = (aboutCurrent + 1) % aboutImages.length;
            showAbout(aboutCurrent);
            resetAboutInterval();
        };
        if (aboutWrapper) {
            aboutWrapper.onclick = function() {
                window.location.href = aboutImages[aboutCurrent].link;
            };
        }
        let aboutInterval = setInterval(() => {
            aboutCurrent = (aboutCurrent + 1) % aboutImages.length;
            showAbout(aboutCurrent);
        }, 5000);
        function resetAboutInterval() {
            clearInterval(aboutInterval);
            aboutInterval = setInterval(() => {
                aboutCurrent = (aboutCurrent + 1) % aboutImages.length;
                showAbout(aboutCurrent);
            }, 5000);
        }
    }
});