//Dummy text Array
let dummyText = [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes`,
    `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate`,
    `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    `Quisque tincidunt consectetur aliquam. Sed in malesuada leo. Curabitur volutpat ex nisi, ac auctor lorem sagittis tristique. Morbi nunc magna, pharetra eget sem eu, mattis ultrices mauris. Donec ac tristique nulla, id suscipit turpis. Maecenas non aliquam odio. Maecenas vitae tempus nulla`,
    `Morbi maximus erat ac dignissim suscipit. Suspendisse faucibus urna tortor, tempor efficitur nibh porta sed. Cras scelerisque nibh et dui aliquet bibendum. Donec eget dui nec justo accumsan consequat fringilla quis metus. Proin mattis sagittis nisi. Proin sit amet vestibulum risus. Praesent in augue bibendum, fringilla ex sed, laoreet dui. Vivamus gravida eget massa sit amet consectetur. Proin sapien est, condimentum ac mi et, vulputate sollicitudin nisi.`,
    `Donec in maximus nisl. Suspendisse potenti. Pellentesque fringilla magna ut tempor fermentum. Nullam elementum vulputate elit ullamcorper mollis. Sed rutrum turpis a nisl ornare convallis eu id erat. Mauris consequat elit non dolor tincidunt placerat. Cras a eros justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nunc consequat, feugiat purus a, rutrum augue. Donec tristique purus ante, quis gravida quam maximus ac. Praesent vitae maximus erat. Etiam ut mi interdum, facilisis risus nec, mollis mi. In hac habitasse platea dictumst. Suspendisse porta nisi ut neque consequat euismod.`,
    `Suspendisse lobortis ante non rhoncus semper. Proin urna leo, placerat at tincidunt at, convallis sed nulla. Mauris placerat tempor leo, a volutpat ligula. Nulla urna diam, volutpat ac ullamcorper ac, gravida at lacus. Vestibulum eget fermentum purus. Maecenas feugiat urna mi, a hendrerit est aliquam in. Aliquam in laoreet turpis. Nam porta fringilla ligula, id efficitur ante finibus vitae. Vestibulum ullamcorper, velit ac fringilla imperdiet, quam nibh gravida urna, vestibulum aliquam erat nunc non tellus. Fusce hendrerit scelerisque velit, in tincidunt metus venenatis at. Maecenas tempus ullamcorper hendrerit. Curabitur lorem ante`,
    `maximus quis porttitor malesuada, rutrum vel metus. Nunc lorem orci, tincidunt et augue sollicitudin, hendrerit convallis erat. Duis elementum ante ut sem vehicula vehicula. Integer cursus arcu pharetra nibh laoreet, et suscipit mauris hendrerit. Ut lacinia eget augue vitae cursus.`,
    `lamcorper mollis. Sed rutrum turpis a nisl ornare convallis eu id erat. Mauris consequat elit non dolor tincidunt placerat. Cras a eros justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nunc consequat, feugiat purus a, rutrum augue. Donec tristique purus ante, quis gravida quam maximus ac. Praesent vitae maximus erat. Etiam ut mi interdum, facilisis risus nec, mollis mi. In hac habitasse platea dictumst. Suspendisse porta nisi ut neque consequat euismod.`
]

//Track Element
let form = document.getElementById('form');
let input = document.getElementById('number');
let resultBox = document.getElementById('result');

console.log(dummyText.length);

//Add eventlistener
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    resultBox.innerHTML ='';
    let number = Number.parseInt(input.value);


    //number is NaN ,number < 0 ,number >11;
    if(isNaN(number) || number < 1 || number >11){
        let randomIndex = Math.floor(Math.random()*11);
        resultBox.innerHTML = `<p>${dummyText[randomIndex]}</p>`
    }else{
        //11>number>=1 
        let dummyarray = [...dummyText];
        dummyarray.splice((number-1),(11-number));
        let finaltext = dummyarray.map(item=>{
            return `<p>${item}</p><br />`
        }).join(' ');
        resultBox.innerHTML = finaltext;
    }
})

