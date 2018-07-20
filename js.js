
const client = filestack.init("AmzTJqxaPT1Ch6kK4YvKsz");


let containerBox = "";
const container = document.getElementById('listBox');
const thumbnail = document.getElementById('thumbnail') || new Image();

    const displayUploads = (results)=>{

        for (let i = 0; i < results.filesUploaded.length; i++){

        const fileData = results.filesUploaded[i];
        console.log(fileData);

        if (['jpeg', 'png'].indexOf(fileData.mimetype.split('/')[1]) !== -1) {
            container.innerHTML += "<a href=\""+ fileData.url +"\">" +fileData.filename +"<img src=\""+ fileData.url +"\" height=\"100\" width=\"150\"></a> \n"
        }
    }};

    const picker = ()=> {

     client.pick({maxFiles: 5})
    .then( (results)=> {
        console.log(results);
        console.log(results.filesUploaded.length);
        // let output = "";
        displayUploads(results);


        //     for(let i = 0; i < results.filesUploaded.length; i++){
        //         resultsData.name = results.filesUploaded[i].filename;
        //         resultsData.imgURL = results.filesUploaded[i].url;
        //
        //         console.log(resultsData.name);
        //         console.log(resultsData.imgURL);
        //
        //         output +=  "<a href=\"" + results.filesUploaded[i].url+ "\">" + results.filesUploaded[i].filename +  "</a> \n";
        //     listBox.innerHTML = output;
    })};

const listBox = document.getElementById('listBox');
const pickerButton = document.getElementById('pickerButton');

pickerButton.addEventListener("click", picker, false);





