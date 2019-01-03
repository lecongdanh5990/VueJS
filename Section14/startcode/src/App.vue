<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <button class="btn btn-primary" v-on:click="show =!show">Show Alert</button>
                <transition>
                    <div class="alert alert-info" v-if="show">Thi