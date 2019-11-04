function showBiodata()
{
    document.getElementById("Clicked").innerHTML = 
    "<button onclick='hideBiodata()'>Hide Biodata</button>"+
    "<div class='mantap1'><br>"+
    "<b>Nama</b>   <pre>Bryan Lumbantobing</pre><br>"+
    "<b>Email</b>  <pre>bryantobing0@gmail.com</pre><br>"+
    "<b>Prodi</b>  <pre>D3 Teknologi Informasi</pre><br>"+
    "<b>Job</b>  <pre>FullStack Web Developer</pre>"+
    "</div>";
}

function hideBiodata()
{
    document.getElementById("Clicked").innerHTML = 
    "<button onclick='showBiodata()'>Show Biodata</button>";
}