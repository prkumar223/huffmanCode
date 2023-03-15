
	
	
	<!DOCTYPE html>
<html>
<body>
<form action="PayslipServlet" method="get">
<h1>Huffman Code</h1>


  <label for="fname">Give some Input</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="button" value="Submit" onClick="myFunction()">
  
<p>Click the "Submit" button to generate the Huffman Code of given input".</p>

<span id="result"></span><br>
</form>

<script>


function myFunction() {
  //document.getElementById("result").innerHTML = document.getElementById("fname").value;
  var arr = [];
  var inputValue = document.getElementById("fname").value;
  var strInput = inputValue.toString();
  
  document.write("your Input: <h3>"+document.getElementById("fname").value+'</h3><br><br>');
  
  for(var k=0;k<strInput.length;k++){
  
  arr.push(strInput[k]);
  
  //document.write("Hi");
  
}

document.write(arr);
var n=arr.length

function countFreq(arr, n) {
        let visited = Array.from({ length: n }, (_, i) => false);
 
        // Traverse through array elements and
        // count frequencies
        for (let i = 0; i < n; i++) {
 
            // Skip this element if already processed
            if (visited[i] == true)
                continue;
 
            // Count frequency
            let count = 1;
            for (let j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    visited[j] = true;
                    count++;
                }
            }
            document.write("<br><br>"+arr[i] + " : " + count);
			var testArr = {arr[i]:count}
        }
    }
 
    // Driver Code
	countFreq(arr, n);
	}
</script>

</body>
</html>
