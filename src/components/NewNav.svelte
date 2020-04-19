<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { faMap, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
    // export let segment;
</script>

<style>
    nav {
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 3px 0px #333333;
        border-left: 1px solid #222222;
        height: 100vh;
        width: 240px;
    }

    .title-square {
        padding: 10px;
        display: flex;
        flex-direction: column-reverse;
        /* align-items: center; */
        /* height: 240px; */
        height: 180px;
        width: 240px;
        background-color: #2255aa;
        box-sizing: border-box;
        /* text-align: end; */
        /* vertical-align: bottom; */
    }

    .text-content {
        overflow: auto;
        height: calc(100vh - 180px);
    }

    .my-name {
        justify-self: end;
        display: block;
        color: white;
        font-size: 36px;
        text-align: end;
        font-weight: bold;
    }

    .info-header {
        background-color: #ffcc00;
        color: black;
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .info-text {
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .nav-header {
        background-color: #66ddaa;
        color: black;
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .icon {
        vertical-align: center;
    }
</style>

<nav>
    <div class="title-square">
        <div class="my-name">
            Christian
            Meredith
        </div>
    </div>
    <div class="text-content">
        <div>
            <div class="info-header">
                <Icon data={faInfoCircle} class="icon" />
                Info
            </div>
            <div class="info-text">
                <p>
                    Software developer
                    in Adelaide,
                    South Australia.
                </p>
                <p>
                    Applications, games,
                    programming languages,
                    natural languages.
                    <!-- Interested in UIs, video games,
                    natural language,
                    programming languages,
                    and other miscellany. -->
                </p>
            </div>
        </div>
        <div>
            <div class="nav-header">
                <Icon data={faMap} class="icon" />
                Navigation
            </div>
            <div>
                <ul>
                    <li>
                        <a href="about">About me</a>
                    </li>
                    <li>
                        <a href="blog">Blog</a>
                    </li>
                    <li>
                        <a href="portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="resources">Resources</a>
                    </li>
                    <li>
                        <a href="links">Links</a>
                    </li>
                    <li>
                        <a href="contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>