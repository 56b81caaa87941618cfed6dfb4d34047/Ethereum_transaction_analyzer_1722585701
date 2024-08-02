/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1722586068", {
    template: `
    <section id="items-table-component" class="py-8 bg-gradient-to-br from-pink-400 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        <h2 id="costs-title" class="text-2xl font-bold mb-5 text-white text-center">Ethereum Transaction Analysis</h2>
        <div id="costs-table-container" class="overflow-x-auto px-4">
            <table id="costs-table" class="table-auto w-full text-sm bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg">
                <thead id="costs-table-header" class="text-white">
                    <tr>
                        <th id="description-header" class="px-4 py-2">Description</th>
                        <th id="cost-header" scope="col" class="px-4 py-2">Cost</th>
                    </tr>
                </thead>
                <tbody id="costs-table-body">
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-1">
                        <th scope="row" class="text-left font-normal px-4 py-5 text-white" id="costs-cell-description-1">
                            <div class="font-semibold mb-0.5" id="costs-link-1">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">
                                    Basic Analysis
                                </a>
                            </div>
                            <p class="text-purple-200" id="costs-description-1">Track new transactions and get basic insights</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white" id="costs-cell-cost-1">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$99/month</a>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-2">
                        <th scope="row" class="text-left font-normal px-4 py-5 text-white" id="costs-cell-description-2">
                            <div class="font-semibold mb-0.5" id="costs-link-2">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">
                                    Advanced Analysis
                                </a>
                            </div>
                            <p class="text-purple-200" id="costs-description-2">In-depth analysis of transaction patterns</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white" id="costs-cell-cost-2">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$499/month</a>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-3">
                        <th scope="row" class="text-left font-normal px-4 py-5 text-white" id="costs-cell-description-3">
                            <div class="font-semibold mb-0.5" id="costs-link-3">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">Premium Analysis</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-3">Comprehensive reporting and data visualization</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white" id="costs-cell-cost-3">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$999/month</a>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-4">
                        <th scope="row" class="text-left font-normal px-4 py-5 text-white" id="costs-cell-description-4">
                            <div class="font-semibold mb-0.5" id="costs-link-4">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">Wallet Monitoring</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-4">24/7 monitoring of specified Ethereum wallets</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white" id="costs-cell-cost-4">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$199/wallet/month</a>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-5">
                        <th scope="row" class="text-left font-normal px-4 py-5 text-white" id="costs-cell-description-5">
                            <div class="font-semibold mb-0.5" id="costs-link-5">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">On-Chain Forensics</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-5">Trace funds and investigate suspicious activity</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white" id="costs-cell-cost-5">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$5000/investigation</a>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-6">
                        <th scope="row" class="text-left font-normal px-4 py-5 text-white" id="costs-cell-description-6">
                            <div class="font-semibold mb-0.5" id="costs-link-6">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">Consulting Services</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-6">Expert guidance from our blockchain analysts</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white" id="costs-cell-cost-6">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$250/hour</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot id="costs-table-footer">
                    <tr>
                        <th id="total-description" scope="row" class="text-left font-normal px-4 py-5 text-white">
                            <p id="total-description-text" class="italic text-purple-200">TOT in USD dollar</p>
                        </th>
                        <td id="total-cost" class="relative font-semibold text-right text-base underline px-4 py-5 text-pink-300 hover:text-white transition-colors duration-300">
                            <a href="#" class="hover:text-white transition-colors duration-300">View Pricing</a>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
