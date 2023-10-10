<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <ul class="menu">
                    <li>
                        <nuxt-link to="/">{{ $t('menu.homepage') }}</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/experience/">{{ $t('menu.experience') }}</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/pet-projects/">{{ $t('menu.petProjects') }}</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">{{ $t('menu.about') }}</nuxt-link>
                    </li>
                </ul>
                <a href="/cv.pdf" class="cv">
                    {{ $t('downloadCV') }}
                </a>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 20px;

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
            font-size: 20px;
            padding: 20px;
            border-radius: 20px;
            font-weight: 600;
            text-transform: uppercase;
            color: #fff;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                border-radius: 20px;
                background: linear-gradient(45deg, rgba(#fff, 0.5), rgba(#fff, 0.15), rgba(#fff, 0.3) 100%);
            }
        }
    }
}
</style>