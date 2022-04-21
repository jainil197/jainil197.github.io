// atyar 6udhi apde design banavi nakhi have apde chalo logic bnaviae
// pela button par click kariae aetle navi note male te kariae


// ahi addlistener vapri6u apde have

const addbtn=document.querySelector('.btn')



// apde updatedata function ne data ne leva mate banavaiae 6e
updatedata=()=>{

    const textarea=document.querySelectorAll('#a')
     const notes=[]
// console.log(textarea);
     textarea.forEach((note)=>{

        return notes.push(note.value)



     })
    //  console.log(notes);
// have data lai lidho tene local ma store karava mate
// store karva 

localStorage.setItem('notes' ,JSON.stringify(notes))


}



 let addnote=(text="")=>{
    // alert `Want to add note ?
    //        Click " OK "`

    

// have add function  thi aek navo div(note) add karvo  6e mare to

 const note=document.createElement('div');
// have class mate je apde andar lidho 6e note namno

note.classList.add('note');
// avi rite badhu lakhvanu nai 
// niche mujb kavanu

const htmldata=`


    <div class="operation">
        <button class="edit"><i class="fa" id="s" >&#xf044</i></button>
        <button class="delete"> <i class="fa" id="s1">&#xf1f8</i></button>
    </div>
        <div  id="main">

        <textarea class="" id="a"  rows="9">  </textarea>
    </div>

`;
// aa data have apde have apda div ma button click kari medvi 6akiae 
// ae mate apde tene div ma call karaviae
// div nu naam note 6e 

note.insertAdjacentHTML('afterbegin',htmldata)

// console.log(note);



// apde call karavyo but aene print karava 

document.body.appendChild(note)

// append aetle add kar6e data ne body ma 



// have delete and edit joiae apde

 const del=note.querySelector('.delete')
 const edit=note.querySelector('.edit')
 const main=note.querySelector('#main')
 const a=note.querySelector('#a')

 
// //  delete mate
//  del.addEventListener('click',()=>{
// note.remove();


const dele=()=>{

    note.remove()
console.log("deleted");
updatedata()
alert `want to delete ?
       Click  " OK "`
}
del.addEventListener('click',dele)

//  })

// edit mate
a.innerHTML= text



 const togg=()=>{

    main.classList.toggle('hidden')
    console.log(main);
    a.classList.toggle('hidden')
    console.log(a);

}
edit.addEventListener('click',togg)

a.addEventListener('change',(event)=>{

    let value=event.target.value
    console.log(value);
a.innerHTML=value
// main.innerHTML=value


updatedata()
    

})
// aa upar vadu je lahyu 6e tenathi hu je typr karu te value medvi 6akaay 
// aetle k je type karyu 6e  te medvi 6akaay 6e

}
// have je data apde  store karavyotene call karava mate
 let notes=JSON.parse(localStorage.getItem('notes'))

 if(notes){

    notes.forEach((note)=>addnote(note))
 }


addbtn.addEventListener('click',addnote)
//  delete 



// have delete and edit mate mate

// del=document.querySelector('.delete')
// avi rite nai thay and tha6e to document delete tha6e
// but mare note delete karvi 6e mate
// mare have tene je addnote function banavelu tema j run karavu pad6e



