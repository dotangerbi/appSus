export default {
    template: `
        <div class="mail-boxes" >
            <button class="mail-compose-btn" @click="sentMail">+ Compose</button>
            <button class="mail-inbox-btn" @click="enterInbox">Inbox</button>
            <button class="mail-starred-btn">Starred</button>
            <button class="mail-sent-btn">Sent</button>
            <button class="mail-drafts-btn">Drafts</button>
        </div>
    `,
    data() {
        return {}
    },
    methods: {
        sentMail() {
            this.$emit('compose')
        },
        enterInbox() {
            this.$emit('inbox')
        }
    },
    computed: {},
    created() { },
    destroyed() { }
}