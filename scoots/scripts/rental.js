document.addEventListener("DOMContentLoaded", () => {
    const rentalTableContainer = document.getElementById("rental-table-container");

    
    fetch("data/data.json")
        .then(response => response.json())
        .then(data => {
            
            const table = document.createElement("table");
            table.classList.add("rental-table");

            
            const caption = document.createElement("caption");
            caption.textContent = "Max Rental Pricing";
            table.appendChild(caption);

            
            const thead = document.createElement("thead");
            thead.innerHTML = `
                <tr>
                    <th>Photo</th>
                    <th>Rental Type</th>
                    <th>Max. Persons</th>
                    <th>Reservation (Half Day)</th>
                    <th>Reservation (Full Day)</th>
                    <th>Walk-In (Half Day)</th>
                    <th>Walk-In (Full Day)</th>
                </tr>
            `;
            table.appendChild(thead);

            
            const tbody = document.createElement("tbody");
            data.rentalPricing.forEach(rental => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${rental.photo}" alt="${rental.type}" class="rental-photo"></td>
                    <td>${rental.type}</td>
                    <td>${rental.maxPersons}</td>
                    <td>${rental.reservation.halfDay}</td>
                    <td>${rental.reservation.fullDay}</td>
                    <td>${rental.walkIn.halfDay}</td>
                    <td>${rental.walkIn.fullDay}</td>
                `;
                tbody.appendChild(row);
            });
            table.appendChild(tbody);

            
            rentalTableContainer.appendChild(table);
        })
        .catch(error => {
            console.error("Error loading rental data:", error);
            rentalTableContainer.innerHTML = "<p>Unable to load rental data.</p>";
        });
});