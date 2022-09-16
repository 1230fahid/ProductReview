let blocks = document.querySelectorAll('.block')
let button = document.querySelector('button')
let body = document.querySelector('body')
let sections = document.querySelectorAll('section');
let div = document.querySelector('.button')
let header = document.querySelector('header')



/*for(let i=0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', (e) => {
        console.log("Here")
        e.preventDefault();
        window.location.href="https://google.com"
        //window.location.href=`${products[i].article}`
    })
}*/


/*button.addEventListener('click', (e) => {
    e.preventDefault();
    let block = document.createElement('div');
    block.classList.add('block');
    let sections = document.querySelectorAll('section');
    block.innerHTML = '<img src="https://cdn.mos.cms.futurecdn.net/Vu4UZU3VKXXqNayCfiLchG.jpg" alt=""><h4>September 4, 2022</h4><h3>iPhone 14</h3><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium incidunt nam odio, tenetur dolorum suscipit beatae voluptatem.</small>';
    block.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href="https://www.bloomberg.com/news/newsletters/2022-09-04/apple-s-far-out-event-iphone-14-pro-airpods-pro-2-and-apple-watch-series-8-l7ndyucj";
    })
    let lastsection = sections[sections.length - 1];
    let numberOfDivs = lastsection.getElementsByTagName('div').length
    //console.log('numberOfDivs is', numberOfDivs);
    if(numberOfDivs != 3){
        lastsection.append(block);
    }
    else{
        let newsection = document.createElement('section');
        lastsection.after(newsection)
        newsection.append(block);
        console.log("newsection is", newsection);
    }
})*/



button.addEventListener('click', (e) => {
    let parentDiv = button.parentElement;
    parentDiv.style.marginBottom = "5px";
    e.preventDefault();
    button.remove(); //here when i rempve, the button still exists, but it's not a part of it's original parent element. It's not part of the HTML at all actually until either it gets reassigned to somewhere, or at the end when everything is destroyed.
    
    let form = document.createElement('form')
    
    //let buttons = document.createElement('div')
    //buttons.display = "block"

    let newButton = document.createElement('button')
    newButton.innerText = "Submit"
    newButton.classList.add('button')
    newButton.style.width = "50%";

    let closeButton = document.createElement('button')
    closeButton.innerText = "Close"
    closeButton.classList.add('button')
    closeButton.style.width = "50%";
    closeButton.type = "reset"
    

    //buttons.append(newButton);
    //buttons.append(closeButton);

    //buttons.display = "flex"
    //buttons.flexDirection = "row"
    //buttons.alignItems = "center"
    

    form.classList.add('block');
    form.style.backgroundColor = 'beige';
    form.style.display = "flex";
    form.style.flexDirection = "column"
    form.style.alignItems = "center";


    let imageLabel = document.createElement('label');
    let imageInput = document.createElement('input');
    imageInput.type = "url"
    imageInput.id = "imageForm";
    imageLabel.innerText = "Image Link: "
    imageLabel.htmlFor = imageInput.id;
    imageInput.name = "item[image]";
    console.log('imageLabel is', imageLabel);
    imageInput.required = true;
    imageInput.style.width = "75%";
    imageInput.style.marginBottom = "10px";


    let dateLabel = document.createElement('label');
    let dateInput = document.createElement('input');
    dateInput.type = "date"
    dateInput.id = "dateForm";
    dateLabel.innerText = "Enter Date: "
    dateLabel.htmlFor = dateInput.id;
    dateInput.name = "item[date]";
    console.log('dateLabel is', dateLabel);
    dateInput.required = true;
    dateInput.style.width = "75%";
    dateInput.style.marginBottom = "10px";


    let prodLabel = document.createElement('label');
    let prodInput = document.createElement('input');
    prodInput.type = "text"
    prodInput.id = "prodForm";
    prodLabel.innerText = "Product Name: "
    prodLabel.htmlFor = prodInput.id;
    prodInput.name = "item[product]";
    console.log('imageLabel is', imageLabel);
    prodInput.required = true;
    prodInput.style.width = "75%";
    prodInput.style.marginBottom = "10px";

    let textLabel = document.createElement('label');
    let textInput = document.createElement('textarea');
    textInput.type = "text"
    textInput.id = "textForm";
    textLabel.innerText = "Small Summary: "
    textLabel.htmlFor = textInput.id;
    textInput.name = "item[desc]";
    console.log('imageLabel is', imageLabel);
    textInput.style.width = "75%";
    textInput.rows = "4";
    textInput.cols = "40";
    textInput.maxLength = "160";
    textInput.required = true;
    textInput.style.marginBottom = "10px";

    
    let linkLabel = document.createElement('label');
    let linkInput = document.createElement('input');
    linkInput.type = "url"
    linkInput.id = "linkForm";
    linkLabel.innerText = "Article Link: "
    linkLabel.htmlFor = linkInput.id;
    linkInput.name = "item[article]";
    console.log('linkLabel is', linkLabel);
    linkInput.style.width = "75%";
    linkInput.required = true;
    linkInput.style.marginBottom = "10px";
    

    form.method = "POST";
    form.append(imageLabel);
    form.append(imageInput);
    form.append(dateLabel);
    form.append(dateInput);
    form.append(prodLabel);
    form.append(prodInput);
    form.append(textLabel);
    form.append(textInput);
    form.append(linkLabel);
    form.append(linkInput);
    form.append(newButton);
    form.append(closeButton);

    closeButton.addEventListener('click', () => {
        form.remove();
        div.append(button);
    })

    /*form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("image is", imageInput.value)
        console.log("date is", dateInput.value)
        console.log("product is", prodInput.value)
        console.log("text is", textInput.value)
        console.log("link is", linkInput.value)
        
        
        
        let block = document.createElement('div');
        block.classList.add('block');
        //block.innerHTML = `<img src="${imageInput.value}" alt=""><h4>${dateInput.value}</h4><h3>${prodInput.value}</h3><small>${textInput.value}</small>`;
        
        let new_a = document.createElement('a');
        let newimg = document.createElement('img');
        let newh4 = document.createElement('h4');
        let newh3 = document.createElement('h3');
        let newsmall = document.createElement('small');

        new_a.href = linkInput.value;
        newimg.srcset = imageInput.value;
        newh4.innerText = dateInput.value;
        newh3.innerText = prodInput.value;
        newsmall.innerText = textInput.value;

        new_a.append(newimg);
        new_a.append(newh4);
        new_a.append(newh3);
        new_a.append(newsmall);
        block.append(new_a);
*/

        /*block.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href= `${linkInput.value}`;
        })*/
        /*let lastsection = sections[sections.length - 1];
        let numberOfDivs = lastsection.getElementsByTagName('div').length
        let last = null
        //console.log('numberOfDivs is', numberOfDivs);
        if(numberOfDivs != 3){
            lastsection.append(block);
            last = lastsection;
        }
        else{
            let newsection = document.createElement('section');
            lastsection.after(newsection)
            newsection.append(block);
            last=newsection
            console.log("newsection is", newsection);
        }*/
    
        //form.remove();
        //sections = document.querySelectorAll('section'); //here to update the amount of sections       
        //div.append(button);
    //})
    

    parentDiv.append(form);
    console.log("parentDiv is", parentDiv)
})

