document.addEventListener("DOMContentLoaded", function () {
  const priceTable = document.getElementById("priceTable");

  const apiURL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070";
  const apiKey = "579b464db66ec23bdd0000016c374087e5214bd649c7784149615739"; // Make sure this key is valid

  // Corrected fetch call using template literals
  fetch(`${apiURL}?api-key=${apiKey}&format=json&limit=100`)
    .then(response => response.json())
    .then(data => {
      priceTable.innerHTML = ""; // Clear “Loading...” message

      data.records.slice(0,25).forEach(item => {
        const row = `
          <tr>
            <td>${item.commodity}</td>
            <td>${item.modal_price}</td>
            <td>${item.state}</td>
            <td>${item.market}</td>
          </tr>
        `;
        priceTable.innerHTML += row;
      });
    })
    .catch(error => {
      console.error("Error fetching market prices:", error);
      priceTable.innerHTML = `<tr><td colspan="4">Failed to load market price data</td></tr>`;
    });
});