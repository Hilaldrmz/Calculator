<script setup>

</script>

<template>
    <div class="content">
        <div class="browser-bar">
            <span class="close button"></span>
            <span class="min button"></span>
            <span class="max button"></span>
        </div>
        <div class="text">
            <p>
                Oops! It looks like you're lost. <br />
                Sorry about that. <br />
                Let me try and help. <br />
                Go back <a href='/'>home</a> and start over.
                </p>
        </div>
    </div>
</template>

<style scoped>

a {
    color: #fdbc40;
    text-decoration: none;
    border-bottom: solid 2px;
}
.text p {
    color: white;
}

@media (min-width: 640px) {

    .content {
        width: 500px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        background-color: #333;
        padding: 45px 20px 20px;
        box-sizing: border-box;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
        border-radius: 5px 5px 0 0;
    }

    .browser-bar {
        background: #f9f9f3;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 5px;
        overflow: hidden;
        border-radius: 5px 5px 0 0;
    }

    .button {
        display: block;
        float: left;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }

    .close {
        background: #fc635d;
    }

    .min {
        background: #fdbc40;
    }

    .max {
        background: #34c84a;
    }
}

</style>