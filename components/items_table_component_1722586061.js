/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1722586061", {
    template: `
    <section id="items-table-component" class="py-8 bg-gradient-to-br from-pink-400 to-purple-600">
        <div class="container mx-auto px-4">
            <h2 id="costs-title" class="text-2xl font-semibold mb-6 text-white">Ethereum Transaction Analysis</h2>
            <div id="costs-table-container" class="overflow-x-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
                <table id="costs-table" class="table-auto w-full text-sm">
                    <thead id="costs-table-header" class="text-white">
                        <tr>
                            <th id="description-header" class="px-4 py-3 text-left">Description</th>
                            <th id="cost-header" scope="col" class="px-4 py-3 text-right">Cost</th>
                        </tr>
                    </thead>
                    <tbody id="costs-table-body">
                        <tr v-for="(item, index) in items" :key="index" class="group transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-30">
                            <th scope="row" class="relative text-left font-normal px-4 py-5 text-white">
                                <div class="font-semibold mb-0.5">
                                    <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg hover:text-pink-300" href="details.html">
                                        {{ item.name }}
                                    </a>
                                </div>
                                <p class="text-purple-200">{{ item.description }}</p>
                            </th>
                            <td class="relative font-semibold text-right px-4 py-5 text-white">
                                <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">{{ item.price }}</a>
                                <span class="absolute inset-0 flex items-center justify-end pr-4 text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity">Details -></span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot id="costs-table-footer">
                        <tr>
                            <th id="total-description" scope="row" class="relative text-left font-normal px-4 py-5 text-purple-200">
                                <p id="total-description-text" class="italic">TOT in USD dollar</p>
                            </th>
                            <td id="total-cost" class="relative font-semibold text-right text-base underline px-4 py-5 text-pink-300">View Pricing</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            items: [
                { name: "Basic Analysis", description: "Track new transactions and get basic insights", price: "$99/month" },
                { name: "Advanced Analysis", description: "In-depth analysis of transaction patterns", price: "$499/month" },
                { name: "Premium Analysis", description: "Comprehensive reporting and data visualization", price: "$999/month" },
                { name: "Wallet Monitoring", description: "24/7 monitoring of specified Ethereum wallets", price: "$199/wallet/month" },
                { name: "On-Chain Forensics", description: "Trace funds and investigate suspicious activity", price: "$5000/investigation" },
                { name: "Consulting Services", description: "Expert guidance from our blockchain analysts", price: "$250/hour" }
            ]
        };
    },
});
