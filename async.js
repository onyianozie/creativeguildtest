
// window.onload = function(){

//     let http = new XMLHttpRequest();

//     http.onreadystatechange = function(){

//         if(http.readyState == 4 && http.status == 200){
//             console.log(JSON.parse(http.response));
//         }
//     };

//     http.open("GET", "./landscapes.json", true);
//     http.send();
// };
// 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
      let response = JSON.parse(xhttp.responseText);
      let album = response.album;


      let output = "";

      // loop through all the products
      
      for(let i = 0;i < album.length;i++){
        
        output += '<div class="card"></div>'; 
        output += '<img>' +album[i].img+'</img>';
        output += '<h4>' +album[i].title+'</h4>'
        output += '<p>' +album[i].description+'</p>'
        output += '<p>' +album[i].date+'</p>'
        output += '<p>' +album[i].featured+'</p>'
      }
      document.getElementById('photo').innerHTML = output;
    }
};
xhttp.open("GET", "landscapes.json", true);
xhttp.send();
        {/* <img src="${album[i].img}" alt=""></img> */}
          // <h4 src="${[i].title}" alt=""></h4>
          // <p src="${album[i].description}" alt=""></p>
          // <p src="${album[i].date}" alt=""></p>
          // <p src="${album[i].featured}" alt=""></p>