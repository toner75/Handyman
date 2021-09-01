import sliders from "./sliders";
const serviceTabs = () => {
    const serviceDB = [
        {
            name: "Engine Repair",
            imgSrc: "./assets/img/services/main/1.jpg",
            header1: `Pellentesque efficitur risus vel libero.`,
            main1: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            header2: `Sed the feugiat enim tincidunt.`,
            main2: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            gallery: [
                `./assets/img/services/gallery/1.jpg`,
                `./assets/img/services/gallery/2.jpg`,
                `./assets/img/services/gallery/3.jpg`,
                `./assets/img/services/gallery/4.jpg`,
            ],
        },

        {
            name: "Electrical",
            imgSrc: "./assets/img/services/main/2.jpg",
            header1: `Electrical efficitur risus vel libero.`,
            main1: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            header2: `Sed the feugiat enim tincidunt.`,
            main2: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            gallery: [
                `./assets/img/services/gallery/5.jpg`,
                `./assets/img/services/gallery/6.jpg`,
                `./assets/img/services/gallery/7.jpg`,
                `./assets/img/services/gallery/8.jpg`,
            ],
        },

        {
            name: "Plumbing",
            imgSrc: "./assets/img/services/main/3.jpg",
            header1: `Plumbing efficitur risus vel libero.`,
            main1: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            header2: `Sed the feugiat enim tincidunt.`,
            main2: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            gallery: [
                `./assets/img/services/gallery/9.jpg`,
                `./assets/img/services/gallery/10.jpg`,
                `./assets/img/services/gallery/11.jpg`,
                `./assets/img/services/gallery/12.jpg`,
            ],
        },

        {
            name: "Repair House",
            imgSrc: "./assets/img/services/main/4.jpg",
            header1: `Repair House efficitur risus vel libero.`,
            main1: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            header2: `Sed the feugiat enim tincidunt.`,
            main2: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            gallery: [
                `./assets/img/services/gallery/13.jpg`,
                `./assets/img/services/gallery/14.jpg`,
                `./assets/img/services/gallery/15.jpg`,
                `./assets/img/services/gallery/16.jpg`,
            ],
        },

        {
            name: "Wall Paint",
            imgSrc: "./assets/img/services/main/5.jpg",
            header1: `Wall Paint efficitur risus vel libero.`,
            main1: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            header2: `Sed the feugiat enim tincidunt.`,
            main2: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            gallery: [
                `./assets/img/services/gallery/1.jpg`,
                `./assets/img/services/gallery/6.jpg`,
                `./assets/img/services/gallery/8.jpg`,
                `./assets/img/services/gallery/12.jpg`,
            ],
        },

        {
            name: "Home Maintenance",
            imgSrc: "./assets/img/services/main/6.jpg",
            header1: `Home Maintenance efficitur risus vel libero.`,
            main1: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            header2: `Sed the feugiat enim tincidunt.`,
            main2: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            gallery: [
                `./assets/img/services/gallery/11.jpg`,
                `./assets/img/services/gallery/2.jpg`,
                `./assets/img/services/gallery/7.jpg`,
                `./assets/img/services/gallery/15.jpg`,
            ],
        },

        {
            name: "Installation",
            imgSrc: "./assets/img/services/main/7.jpg",
            header1: `Installation efficitur risus vel libero.`,
            main1: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            header2: `Sed the feugiat enim tincidunt.`,
            main2: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            gallery: [
                `./assets/img/services/gallery/5.jpg`,
                `./assets/img/services/gallery/3.jpg`,
                `./assets/img/services/gallery/8.jpg`,
                `./assets/img/services/gallery/14.jpg`,
            ],
        },

        {
            name: "Garden Repairs",
            imgSrc: "./assets/img/services/main/8.jpg",
            header1: `Garden Repairs efficitur risus vel libero.`,
            main1: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            header2: `Sed the feugiat enim tincidunt.`,
            main2: ` Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras vitae pharetra massa.
                Praesent sed nunc tortor. Proin sed sem pellentesque, aliquet
                dui eu, aliquet nunc. Etiam ac elit eu libes pharetra sit amet
                vel nibh. Integer metus augue, fermentum eu est in, porttitor
                tincidunt arcu. Curabitur cursus pellente q blandit. Suspendisse
                placerat sit amet diam at facilisis. In eleifend ligula non odio
                pulvinar congue. Rivamus tinc ac eleif mollis. Nulla placerat,
                sem id bibendum faucibus, ante metus porta nisl, non pretium
                odio quam sed magna. In molestie vel odio nec faucibus. Integer
                viverra non risus ut viverra. Sed egestas at ipsum a consequat.`,
            gallery: [
                `./assets/img/services/gallery/6.jpg`,
                `./assets/img/services/gallery/4.jpg`,
                `./assets/img/services/gallery/9.jpg`,
                `./assets/img/services/gallery/13.jpg`,
            ],
        },
    ];

    const btns = document.querySelectorAll(
        ".services-item > .services-item__btns button"
    );

    const addActive = (selected) => {
        btns.forEach((item) => {
            item.classList.remove("active");
        });

        btns[selected].classList.add("active");
    };

    const render = ({
        name,
        imgSrc,
        header1,
        header2,
        main1,
        main2,
        gallery,
    }) => {
        document.querySelector(".services-item__content").innerHTML = `
        <h3>${name}</h3>

        <div class="services-item__img">
            <img src=${imgSrc} alt="services" />
        </div>

        <div class="services-item__text">
            <h3>${header1}</h3>

            <span>${main1}</span>
        </div>

        <div class="services-item__text">
            <h3>${header2}</h3>

            <span>${main2}</span>
        </div>

        <div class="services-item__gallery">
            <h3>GALLERY</h3>

            <div class="slider">
                <div id="slider-gallery__wrapper">
                    ${gallery.map((item) => {
                        return `<div>
                                <div class="services-item__item">
                                    <img
                                        src=${item}
                                        alt="gallery"
                                    />
                                </div>
                            </div>`;
                    })}
                </div>

                <div
                    id="slider-gallery__nav"
                    class="slider__nav slider__nav--static"
                >
                    <button id="slider-gallery__prev" class="slider__prev">
                        <svg class="icon">
                            <use xlink:href="#right-arrow"></use>
                        </svg>
                    </button>

                    <button id="slider-gallery__next" class="slider__next">
                        <svg class="icon">
                            <use xlink:href="#right-arrow"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        `;
    };

    const onTabs = () => {
        btns.forEach((btn, btnIndex) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                addActive(btnIndex);
                render(serviceDB[btnIndex]);
                sliders();
            });
        });
    };

    addActive(0);
    render(serviceDB[0]);

    onTabs();
};

export default serviceTabs;
