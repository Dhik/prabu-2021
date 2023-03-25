<template>
    <section>
        <img src="./img/latar.png" id="bg" />
        <button id="text_2">Mountains</button>
        <img src="./img/broklyn1.png" id="mountain_left" />
        <img src="./img/broklyn2.png" id="mountain_right" />
    </section>
    <img src="./img/broklyn2.png" class="rounded mx-auto d-block" alt="...">
    <div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>
</template>

<script>
    import "../assets/babad.css";
    export default {
        mounted: function () {
            this.scrollAnimation();
        },
        methods: {
            scrollAnimation() {
                gsap.to("#bg", {
                    scrollTrigger: {
                        scrub: 1,
                    },
                    scale: 1.5,
                });
                gsap.to("#man", {
                    scrollTrigger: {
                        scrub: 1,
                    },
                    scale: 0.5,
                });
                gsap.to("#mountain_left", {
                    scrollTrigger: {
                        scrub: 1,
                    },
                    x: -500,
                });
                gsap.to("#mountain_right", {
                    scrollTrigger: {
                        scrub: 1,
                    },
                    x: 500,
                });
                gsap.to("#cloud_1", {
                    scrollTrigger: {
                        scrub: 1,
                    },
                    x: 200,
                });
                gsap.to("#cloud_2", {
                    scrollTrigger: {
                        scrub: 1,
                    },
                    x: -200,
                });
                gsap.to("#text", {
                    scrollTrigger: {
                        scrub: 1,
                    },
                    y: 500,
                });
            },
        },
    };
</script>
<style>
    .fade-in {
        animation: fadeIn ease 10s;
        -webkit-animation: fadeIn ease 10s;
        -moz-animation: fadeIn ease 10s;
        -o-animation: fadeIn ease 10s;
        -ms-animation: fadeIn ease 10s;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @-o-keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @-ms-keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>