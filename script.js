const url = "https://run.mocky.io/v3/d53400a3-6126-495e-9d16-0b4414b537b3";

let response = fetch(url);

fetch(url)
//There is a syntax error with EOF in json fetched from the URL. Hence, hardcoding the response with correct syntax;
    .then(response => {
        data = {

		   "clients": [
				{ 
				   "name": "Nandha",
				   "id" : "1",
				   "company" : "BooksApp",
				   "orderId": "1", 
				   "invoicepaid": "250",
				   "invoicePending": "280"
			   },
			   { 
				   "name": "Ashley",
				   "id" : "2",
				   "company" : "NotarizedDocs",
				   "orderId": "13", 
				   "invoicepaid": "150",
				   "invoicePending": "180"
			   },
			   { 
				   "name": "Rajal",
				   "id" : "4",
				   "company" : "Conneqtly",
				   "orderId": "14", 
				   "invoicepaid": "500",
				   "invoicePending": "580"
			   }

		   ]}
		   
	console.log(data);
    if (data.clients.length > 0) {

          var temp = "";
          data.clients.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td style=\"color: blue;\"><b>" + itemData.id + "</b></td>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.company + "</td>";
            temp += "<td>" + itemData.orderId + "</td>";
            temp += "<td>" + itemData.invoicepaid + "</td>";
            temp += "<td>" + itemData.invoicePending + "</td>";
              temp+="<td><i class=\"ni ni-credit-card ni-2x\"></i></tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
    })
    .catch(error => {
        // handle the error
		console.log("error");
    });

