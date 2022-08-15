<template>
    <v-main>
        <v-card light flat>

        <vue-typer text="Hello World!"></vue-typer>
        <v-card-text>
            <v-theme-provider root>
        <v-list>
            <v-header>My Projects</v-header>
            <v-subheader>Here is a list of projects i did!</v-subheader>

            <v-list-item>
            <v-list-item-title>Rainbow Lottery</v-list-item-title>
            </v-list-item>

            <v-list-item>
            <v-list-item-title>Candy Crush Replicate</v-list-item-title>
            </v-list-item>

            <v-list-item>
            <v-list-item-title>Snowy Discord Bot</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-theme-provider>

        <v-divider class="mb-y"></v-divider>

        </v-card-text>
    </v-card>
    </v-main>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default 
{
  name: 'HomePage',

};

</script>

<style>
.vue-typer
{
    font-size: xx-large;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.custom.char 
{
    color: rgb(135, 127, 127);
}

</style>
