fetch("https://restcountries.com/v3.1/subregion/europe")
.then(function(response){
    return response.json();
 })
 .then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let product of products){
        out += `
         <tr>
            <td>${product.name.common}</td>
            <td>${product.capital}</td>
            <td>${product.currencies.BYN}</td>
            <td>${product.subregion}</td>
            <td>${product.population}</td>
            <td>${product.timezones}</td>
            <td>${product.flag}</td>
         </tr>
      `;
   }
   placeholder.innerHTML = out;
})