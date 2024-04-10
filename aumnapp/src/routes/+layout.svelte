<script>
</script>

<body>
<div class="app">
    <div class="wallpaperContainer">
        <div class="pageContainer">
            <main>
                <div class="blurLayer"></div>
                <slot />
            </main>
        </div>
        <div class="wallpaper" />
    </div>
</div>
</body>
<style>

    .wallpaper {
        /*background-image: linear-gradient(#56588c 1px, transparent 1px), linear-gradient(to right, #6f5480 1px, #e5e5f7 1px);*/
        position: absolute;
        /*background-size: 20px 20px;*/
        background-color: #171717;
        opacity: 0.3;
        background-image: linear-gradient(#444cf7 4px, transparent 4px), linear-gradient(to right, #444cf7 4px, #e5e5f7 4px);
        background-size: 80px 80px;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-repeat: repeat;
        animation: move 1000s linear infinite;
        z-index: -1;
    }

    .wallpaperContainer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    @keyframes move {
        100% {
            background-position: 1000% 4000%;
        }
    }

    .pageContainer {
        flex: auto;
        display: flex;
        justify-content: center;
        position: relative;
        overflow-y: auto;
    }

    main {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 30em;
        margin: auto;
        box-sizing: border-box;
        border-radius: 1em;
        background: rgb(26, 26, 26);
    }


    /*footer {*/
    /*	display: flex;*/
    /*	flex-direction: column;*/
    /*	justify-content: center;*/
    /*	align-items: center;*/
    /*	padding: 12px;*/
    /*}*/

    /*footer a {*/
    /*	font-weight: bold;*/
    /*}*/

    /*@media (min-width: 480px) {*/
    /*	footer {*/
    /*		padding: 12px 0;*/
    /*	}*/
    /*}*/
</style>
