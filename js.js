
const resultsData = {
    name: "",
    imgURL: ""
};

const client = filestack.init("AmzTJqxaPT1Ch6kK4YvKsz");

 function picker() {

client.pick({maxFiles: 5})
    .then( (results)=> {
        console.log(results);
        console.log(results.filesUploaded.length);
        let output = "";

            for(let i = 0; i < results.filesUploaded.length; i++){
                resultsData.name = results.filesUploaded[i].filename;
                resultsData.imgURL = results.filesUploaded[i].url;

                console.log(resultsData.name);
                console.log(resultsData.imgURL);

                output +=  "<a href=\"" + results.filesUploaded[i].url+ "\">" + results.filesUploaded[i].filename +  "</a> \n";
            listBox.innerHTML = output;
        }});}

const listBox = document.getElementById('listBox');
const pickerButton = document.getElementById('pickerButton');

pickerButton.addEventListener("click", picker, false);





