<template>
    <div class="header-main">
        <div class="header-text">
            <h1>View House</h1>
            <h2>Dubova</h2>
        </div>
        <a href="#home-description"><span></span></a>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .header-main {
        position: relative;
        height: 100vh;
        background: url("/images/dubova.jpg") no-repeat;
        background-size: cover;
        background-position: center;

        display: grid;
        justify-content: center;
        align-content: center;
    }

    span {
        position: absolute;
        bottom: 6%;
        left: 50%;
        z-index: 1000;
        width: 4rem;
        height: 4rem;
        margin-left: -12px;
        border-left: 2px solid #B9A89B;
        border-bottom: 2px solid #B9A89B;
        transform: rotate(-45deg);
        animation: scrollAnim 1.5s infinite;
        box-sizing: border-box;
    }

    .header-text {
        display: grid;
        justify-items: center;
    }

    .header-text h1, h2 {
        color: #fff; 
        letter-spacing: .5rem;
        text-shadow: 0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1);
    }

    .header-text h1 {
        font-size: 7rem;
    }

    .header-text h2 {
        font-size: 5rem;
    }

    @media only screen and (max-width: 340px) {
        .header-text h1 { font-size: 6rem;}
    }
</style>