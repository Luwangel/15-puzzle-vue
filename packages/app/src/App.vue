<script>
    import Header from "./components/layout/Header.vue";
    import Menu from "./components/layout/Menu.vue";
    import Content from "./components/layout/Content.vue";
    import Footer from "./components/layout/Footer.vue";

    import Game from "./components/puzzle/Game.vue";

    import Link from "./components/ui/Link";
    import Github from "./components/ui/icons/Github";
    import Twitter from "./components/ui/icons/Twitter";

    export default {
        name: "App",
        components: {
            Header,
            Menu,
            Content,
            Footer,
            Game,
            Link,
            Github,
            Twitter
        },
        data() {
            return {
                title: "Play the 15 Puzzle Game",
                footer: {
                    twitter: {
                        href: "https://twitter.com/luwangel",
                        title: "@Luwangel"
                    },
                    github: {
                        href: "https://github.com/luwangel/15-puzzle-vue",
                        title: "luwangel/15-puzzle-vue"
                    },
                    licence: "Released under the MIT License",
                    copyright: "Copyright ©2019 Luwangel"
                }
            };
        }
    };
</script>

<template>
    <div id="#app">
        <Header>
            <template v-slot:logo>
                <img class="logo-img" alt="Vue logo" src="./assets/images/logo.svg">
                <span class="logo-label">{{title}}</span>
            </template>
            <template v-slot:menu>
                <Menu/>
            </template>
        </Header>
        <Content>
            <Game/>
        </Content>
        <Footer class="footer">
            <template v-slot:links>
                <Link :href="footer.github.href" :title="footer.github.title">
                    <Github :title="footer.github.title"/>
                </Link>
                <Link :href="footer.twitter.href" :title="footer.twitter.title">
                    <Twitter :title="footer.twitter.title"/>
                </Link>
            </template>
            <template v-slot:legal>
                <span>{{footer.licence}}</span>
                <span>{{footer.copyright}}</span>
            </template>
        </Footer>
    </div>
</template>

<style>
    body {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: #fff;
        color: #2c3e52;

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        font-size: 1rem;
    }

    .logo-img {
        margin: 0 10px;
        width: 30px;
        height: 30px;
    }

    .logo-label {
        font-size: 1em;
        line-height: 1em;
        color: #2c3e50;
        font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        font-weight: 500;
    }

    .footer {
        color: #999;
    }

    .footer span svg path {
        fill: #999;
    }

    .footer span:hover svg path {
        fill: #000;
    }
</style>

<style src="./assets/styles/normalize.css"></style>
