
const resultsData = {
    name: "",
    imgURL: ""
};
const client = filestack.init("AmzTJqxaPT1Ch6kK4YvKsz");
const listBox = document.getElementById('listBox');


client.pick({maxFiles: 5})
    .then( (results)=>{
    // console.log(JSON.stringify(results));
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



    }});


function updateForm (result) {
    const fileData = result.filesUploaded[0];
    fileInput.value = fileData.url;

    // If file is resizable image, resize and embed it as a thumbnail preview
    if (['jpeg', 'png'].indexOf(fileData.mimetype.split('/')[1]) !== -1) {
        const container = document.getElementById('thumbnail-container');
        const thumbnail = document.getElementById('thumbnail') || new Image();
        thumbnail.id = 'thumbnail';
        thumbnail.src = client.transform(fileData.handle, {
            resize: {
                width: 200
            }
        });

        if (!container.contains(thumbnail)) {
            container.appendChild(thumbnail);
        }
    }
};