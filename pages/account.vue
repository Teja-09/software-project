<template>
<section class="hero is-small is-primary is-bold">
    <div class="hero-body">
        <div class="container">
            <h1 class="title is-family-monospace is-size-2 has-tex-centered">{{ name }}</h1>
            <div class="media">
                <div class="media-content is-size-4 is-family-monospace inpad totext">
                    <div class="media inpad">
                        <div class="media-left ">💂 Roll Number:</div>
                        <div class="media-content">{{ rollno }}</div>
                    </div>
                    <div class="media inpad">
                        <div class="media-left">☎️ Phone:</div>
                        <div class="media-content">{{ phoneno }}</div>
                    </div>
                    <div class="media inpad">
                        <div class="media-left">📧 Email:</div>
                        <div class="media-content">{{ email }}</div>
                    </div>
                    <div class="media inpad">
                        <div class="media-left">👫 Gender:</div>
                        <div class="media-content">{{ gender }}</div>
                    </div>

                    <!-- <div class="media inpad">
              <div class="media-left">🎯 Courses:</div>
              <div class="media-content">MBA, CSE, EEE, COA</div>
            </div> -->
                    <!-- <div class="media inpad">Some buttons here if necessary!</div> -->
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
.totext {
    padding-left: 0.5vw;
    padding-right: 0.5vw;
}

.title {
    padding-left: 1vw;
}

.hero {
    padding-top: calc(4rem + 2vh);
    min-height: 100vh;
}

.inpad {
    padding-top: calc(1rem + 1vh);
}
</style>

<script>
import {
    ParticlesBg
} from "particles-bg-vue";
// import { fireDb } from "@/services/firebase";
import {
    mapGetters
} from "vuex";
export default {
    components: {
        ParticlesBg
    },
    computed: {
        ...mapGetters({
            userDetails: "users/getUserDetails"
        })
    },
    data() {
        return {
            name: null,
            email: null,
            rollno: null,
            phoneno: null,
            gender: null
        };
    },
    methods: {},
    async created() {
        let uid = this.$store.state.users.uid;
        // let userDetails = await fireDb
        //   .collection("users")
        //   .doc(uid)
        //   .get();

        // userDetails = userDetails.data();
        // console.log(userDetails);
        this.name = this.userDetails["name"];
        this.email = this.userDetails["email"];
        this.rollno = this.userDetails["registrationNumber"];
        this.phoneno = this.userDetails["phoneNumber"];
        this.gender = this.userDetails["gender"];
    }
};
</script>
