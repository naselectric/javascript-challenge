var x = d3.select("tbody"); 
// where x = the table body in HTML code

data.forEach((y) => {
    var row = x.append('tr');
    Object.entries(y).forEach(([n,z]) => {
      var cell = row.append('td');
      cell.text(z);
    });
  });

// where y = the ufo sighting data in dictionary form as an object.
//       n = the table title
//       z = the title data value 



var i1 = d3.select("#datetime");
var o1 = d3.select("#filter-btn");

i1.on('change',a);
function a(){var input = d3.event.target.value;
   
    console.log('The date that has been entered is',input);
o1.on('click',b);
function b(){console.log(input);
    data.forEach((y) => {
        if (input === y.datetime){console.log(y.datetime);}
         });}
}








