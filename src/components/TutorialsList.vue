<template>
    <div class="list row">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input 
                type="text" 
                class="form-control" 
                placeholder="Search by Title"
                v-model="title"
                />

                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                        Search
                    </button>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <h4>Tutorials List</h4>
            <ul class="list-group">
                <li class="list-group-item">
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TutorialDataServices from '@/services/TutorialDataServices';

export default {
    name: "tutorials-list",
    data() {

    },
    methods: {

    }
};
</script>

<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>