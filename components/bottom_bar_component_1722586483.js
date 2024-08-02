/* Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
*/
Vue.component("bottom_bar_component_1722586483", {
    template: `
    <section id="bottom-bar-component" class="fixed bottom-0 z-30 w-full lg:w-1/2 bg-gradient-to-r from-pink-400 to-purple-600 bg-opacity-30 backdrop-blur-lg backdrop-filter rounded-t-2xl shadow-lg">
        <div id="bottom-bar-component-content" class="w-full max-w-xl mx-auto px-6 py-4">
            <div id="action-buttons" class="flex space-x-4 justify-center">
                <a id="contact-button" class="btn flex items-center justify-center w-1/2 h-14 p-3 text-white bg-pink-500 bg-opacity-50 hover:bg-opacity-70 rounded-xl border border-white border-opacity-30 transition duration-300 ease-in-out shadow-md hover:shadow-xl" href="contact.html">
                    <i class='bx bx-envelope mr-2'></i>Contact
                </a>
                <a id="pay-button" class="btn flex items-center justify-center w-1/2 h-14 p-3 text-white bg-purple-500 bg-opacity-50 hover:bg-opacity-70 rounded-xl border border-white border-opacity-30 transition duration-300 ease-in-out shadow-md hover:shadow-xl animate-pulse">
                    <i class='bx bx-credit-card mr-2'></i>Pay
                </a>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null
        }
    },
});
