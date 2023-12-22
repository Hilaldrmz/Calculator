<template>
    <div class="calculator">
        <div class="display">{{ current || '0' }}</div>
        <div @click="clear" class="btn">AC</div>
        <div @click="sign" class="btn">+/-</div>
        <div @click="parsent" class="btn">%</div>
        <div @click="divide" class="btn operator">÷</div>
        <div @click="append(7)" class="btn">7</div>
        <div @click="append(8)" class="btn">8</div>
        <div @click="append(9)" class="btn">9</div>
        <div @click="times" class="btn operator">X</div>
        <div @click="append(4)" class="btn">4</div>
        <div @click="append(5)" class="btn">5</div>
        <div @click="append(6)" class="btn">6</div>
        <div @click="minus" class="btn operator">-</div>
        <div @click="append(1)" class="btn">1</div>
        <div @click="append(2)" class="btn">2</div>
        <div @click="append(3)" class="btn">3</div>
        <div @click="plus" class="btn operator">+</div>
        <div @click="append(0)" class="btn zero">0</div>
        <div @click="dot" class="btn">.</div>
        <div @click="equal" class="btn operator">=</div>

    </div>
</template>


<script setup>
import { ref } from 'vue'


const previous = ref(null);
const current = ref('');
const operator = ref(null);
const operatorClicked = ref(false);

function clear() {
    current.value = ''
}

function sign() {
    current.value = current.value.charAt(0) === '-' ?
        current.value.slice(1) : `-${current.value}`;
}

function parsent() {
    current.value = `${parseFloat(current.value) / 100}`
}

function append(number) {
if (operatorClicked.value) {
    current.value = '';
    operatorClicked.value = false;
}

current.value = `${current.value}${number}`;
}

function dot() {
    if (current.value.indexOf('.') === -1) {
        append('.');
    }
}
function setPrevious() {
    previous.value = current.value;
    operatorClicked.value = true;
}

function divide() {
    operator.value = (a, b) => a / b;
    setPrevious();
}
function times() {
    operator.value = (a, b) => a * b;
    setPrevious();
}
function minus() {
    operator.value = (a, b) => a - b;
    setPrevious();
}
function plus() {
    operator.value = (a, b) => a + b;
    setPrevious();
}

function equal() {
    current.value= `${operator.value(parseFloat(current.value), parseFloat(previous.value))}`;
    previous.value = null;
}

</script>

<style lang="scss" scoped>
.calculator {
    width: 200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    .display {
        grid-column: 1/5;
        background: #33333361;
        color: white;
        text-align: center;
        font-weight: 600;
    }

    .zero {
        grid-column: 1/3;
        font-weight: 600;
    }

    .btn {
        background: #eee;
        color: #333;
        border: 1px solid #999;
        font-weight: 600;

    }

    .operator {
        background-color: orange;
        color: white;
        font-weight: 600;
    }
}
</style>