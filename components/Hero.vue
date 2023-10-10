<template>
    <div class="hero">
        <div class="container">
            <div class="hero__wrapper">
                <div class="main">
                    <h1>Nazarii Semeniuk</h1>
                    <h2>Full Stack Web Developer</h2>
                    <div class="buttons">
                        <a href="/cv.pdf" class="button">
                            Завантажити CV
                        </a>
                        <a href="#" class="button">
                            Зв'язатися зі мною
                        </a>
                    </div>
                </div>
                <HeroCard />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    background: linear-gradient(45deg, rgba(221,218,249,1) 0%, rgba(195,251,248,1) 50%, rgba(104,74,248,1) 100%);

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100vh;

        .main {
            width: 50%;

            h1 {
                font-weight: 600;
                font-size: 64px;
                line-height: 1;
            }

            h2 {
                font-weight: 600;
                font-size: 40px;
                line-height: 1;
            }

            .buttons {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                
                .button {
                    margin-right: 20px;
                    font-size: 20px;
                    border-radius: 20px;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-transform: uppercase;
                    color: $darkColor;
                    font-weight: 600;
                    padding: 20px;

                    &:last-child {
                        margin-right: 0;
                        background: rgba($accentColor, 0.25);
                        color: #fff;
                    }
                }
            }
        }
    }

}
</style>