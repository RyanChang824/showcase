const addedBtn = document.getElementById('addedBtn')
const text1 = document.getElementById('address1')
const text2 = document.getElementById('address2')

const imf=JSON.parse(localStorage.getItem('title'))

   if(imf){
        redirect(imf[0],imf[1])
   }

function myFunction() {
          var x = document.getElementById("myID");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }

function showForm() {
  var x = document.getElementById("editmail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//這次改的
function myFunction1() {
  let a456 = document.getElementById('456');
  a456.addEventListener('click', function(){
      $("#123").css("display", "block");
      $("#img3").css("display", "none");})
}

function changepic() {
    $("#123").css("display", "none");
    var reads = new FileReader();
    f = document.getElementById('file').files[0];
    reads.readAsDataURL(f);
    reads.onload = function(e) {
    document.getElementById('img3').src = this.result;
    $("#img3").css("display", "block");
    };
   }

addedBtn.addEventListener('click',()=>redirect())

function redirect(title='',note=''){
text1.value=title
text2.value=note
}

text1.addEventListener('input',(e)=>{
  updateLS()
})

text2.addEventListener('input',(e)=>{
  updateLS()
})

function updateLS(){

    const titletext=document.querySelectorAll('.form-control.form-username.ng-untouched.ng-pristine.ng-valid')

    console.log(titletext)

    const title=[]
   
    titletext.forEach(note=>title.push(note.value))

    localStorage.setItem('title',JSON.stringify(title))

}







