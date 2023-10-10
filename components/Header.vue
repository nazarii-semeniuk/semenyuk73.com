<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <ul class="menu">
                    <li>
                        <nuxt-link to="/">Головна</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/experience/">Досвід</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/pet-projects/">Власні проєкти</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">Про мене</nuxt-link>
                    </li>
                </ul>
                <a href="/cv.pdf" class="cv">
                    Завантажити CV
                </a>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 0;
    background: rgba(#fff, 0.5);
    backdrop-filter: blur(5px);

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .menu {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            li {
                margin-right: 20px;

                &:last-child {
                    margin-right: 0;
                }

                a {
                    font-size: 24px;
                    color: inherit;
                    font-weight: 500;
                }
            }
        }

        .cv {
            font-size: 24px;
            padding: 10px;
            border-radius: 20px;
            font-weight: 600;
            text-transform: uppercase;
            color: #fff;
        }
    }
}
</style>