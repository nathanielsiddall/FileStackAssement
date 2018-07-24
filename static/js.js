// I aded the api script to the html rather than import because I was getting wierd errors on my machine. could be I don't understtand ES6 well enough.

const client = filestack.init("AmzTJqxaPT1Ch6kK4YvKsz");

const container = document.getElementById('listBox');

const sendIt = (data)=>{
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(data));
    console.log('xhr request process');
};

const displayUploads = (results)=>{

    let fileData = {
        url:"",
        filename:"",
        tranUrl:""

    };
    let postData = [];

    for (let i = 0; i < results.filesUploaded.length; i++){

    const fileData = results.filesUploaded[i];
    console.log(fileData);

    if (['pdf', 'doc'].indexOf(fileData.mimetype.split('/')[1]) !== -1){

        let options = { output: { "format": "png" }};

        const tranURL = client.transform(fileData.handle, options);
        fileData.filename = fileData.filename;
        fileData.url = fileData.url;
        fileData.tranUrl = tranURL;

        container.innerHTML += "<a href=\""+ fileData.url +"\" target=\"_blank\">" +fileData.filename +"<img src=\""+ tranURL +
        "\" height=\"100\" width=\"150\"></div></a>";

    }
    else if (['jpeg', 'png'].indexOf(fileData.mimetype.split('/')[1]) !== -1) {

        fileData.filename = fileData.filename;
        fileData.url = fileData.url;
        fileData.tranUrl ="";
        container.innerHTML += "<a href=\""+ fileData.url +"\" target=\"_blank\">" +fileData.filename +
        "<img src=\""+ fileData.url +"\" height=\"100\" width=\"150\"></a>";

    }
    else container.innerHTML += "<a href=\""+ fileData.url +"\" target=\"_blank\">" +fileData.filename + "</a>"

postData.push(fileData);
}

sendIt(postData);
};

const picker = ()=> {

    client.pick({maxFiles: 5, })
    .then( (results)=> {
        console.log(results);
        console.log(results.filesUploaded.length);
        displayUploads(results);

})};

const tester = document.getElementById('tester');
tester.addEventListener("click", sendIt, false);


const pickerButton = document.getElementById('pickerButton');
pickerButton.addEventListener("click", picker, false);




//heres a copy of the specs

/*
Assignment: Create file uploader and display file list

***done 1. Required: Please integrate Filestack Picker (1.0.x version of our JS SDK https://github.com/filestack/filestack-js) on an HTML page that will allow you to upload any file (or multiple files - max 5). The list of uploaded files should be displayed on the page after the Picker is closed, this should be comprised of the file uploaded in accessible format (showing a thumbnail of an image uploaded for example, like explained below).
No backend is required to keep a list of uploaded files. You can display only files that were uploaded in the given Picker session, not files from other sessions.

***done 2. Required: For each file:
*
*** done - if it is an image a thumbnail should also be displayed next to the file name and both file name and thumbnail should be clickable and open a new tab
with the image.

*** done - if it is a document a thumbnail of the first page should be displayed next to the file name and both file name and thumbnail should be clickable and
open new tab with document Preview.

*** done - if it is not image or document (supported by our transformations) no thumbnail is displayed and just file name links to the file download

***done 3. Optional: Configure simple NodeJS HTTP service that will host HTML page you created in steps 1 and 2.

4. Optional: Display files that were uploaded in the previous sessions of the picker. You will need some kind of database to store information about files you have uploaded previously in order to display them.
You can sign up for a free account here: https://dev.filestack.com/signup/trial/
And access our docs here: https://www.filestack.com/docs
*/





