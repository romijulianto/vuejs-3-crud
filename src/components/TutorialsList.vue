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
                    <button class="btn btn-outline-secondary" type="button"
                    @click="searcTitle">
                        Search
                    </button>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <h4>Tutorials List</h4>
            <ul class="list-group">
                <li class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(tutorial, index) in tutorials"
                :key="index"
                @click="setActiveTutorial(tutorial, index)"
                >
                
                {{  tutorial.title }}
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
        return {
            tutorials: [],
            currentTutorial: null,
            currentIndex: -1,
            title: ""
        };
    },
    methods: {
        retrieveTutorials() {
            TutorialDataServices.getAll()
            .then(response => {
                this.tutorials = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },

        resfreshList() {
            this.retrieveTutorials();
            this.currentTutorial = null;
            this.currentIndex = -1;
        },

        setActiveTutorial(tutorial, index) {
            this.currentTutorial = tutorial;
            this.currentIndex = tutorial ? index : -1;
        },

        removeAllTutorials() {
            TutorialDataServices.deleteAll()
            .then(response => {
                console.log(response.data);
                this.resfreshList();
            })
            .catch(e => {
                console.log(e);
            });
        },

        searcTitle() {
            TutorialDataServices.findByTitle(this.title)
            .then(response => {
                this.tutorials = response.data;
                this.setActiveTutorial(null);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        mounted() {
            this.retrieveTutorials();
        }
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