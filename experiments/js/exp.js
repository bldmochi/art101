
// Attach a click handler to the button within the JS file
// $("#my-button").click()
// When the button is pushed, prompt the user to input their name with var name = prompt("Name please:") 
// Use this input to change the text of the h1 using $('#title').html(‘Hello’ + name)


$("#my-button").click(sayMyname) 

function sayMyname() {
//When the button is pushed, prompt the user to input their name
    let name = prompt("name please");
// Use this input to change the text of the h1  
    $('#title').html("Hello there... " + name + ";)");
}

