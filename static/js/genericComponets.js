const nav = document.querySelector('#defaultHeader');
nav.innerHTML =
` 
    <nav class="navbar navbar-expand-md navbar-light"
    style="background-color:#f4f4f4; box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 20px -20px;">


    <!-- Icone do Site / redirecionador para mainpage - via bootstrap -->
    <a href="index.html" class="navbar-brand  h1 ">
      <img class="d-inline-block align-items-center"
        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147793639/settings_images/t93fIpiQtiqOtxIRovQA_logo_dh_01.png"
        width="160px" alt="Logo marca DigitalHouse" />
    </a>
    <!-- ----------- -->


    <!-- botão sanduiche do menu responsivo - via bootstrap -->
    <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" class="navbar-toggler"
      aria-controls="navbarNav" area-expended="false" aria-label="toggle-navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <!-- ----------- -->


    <!-- Menu de itens -via bootstrap  -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="nav navbar-nav">
        <li class="navItem active">
          <a href="./../index.html" class="navLink">
            Home
          </a>
        </li>
        <li class="navItem active">
          <a href="#catalogo" class="navLink">
            Catálogo
          </a>
        </li>
        <li class="navItem active">
          <a href="./pages/sobre.html" class="navLink">
            Sobre
          </a>
        </li>
        <li class="navItem active">
          <a href="./pages/login.html" class="navLink">
            Login
          </a>
        </li>
      </ul>
    </div>
  </nav>
  `;
  


const foot = document.querySelector('#defaultFooter');
foot.innerHTML = 
`
<footer class="container-fluid">
<section class="teamSection">

    <div class="aluno">
        <p>Tiago Pincer</p>

        <a target="_blank" href="https://github.com/tpincer" class="social">
            <i class="bi bi-github"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/tiago-pincer-b48a11174/" class="social">
            <i class="bi bi-linkedin"></i></a>
    </div>

    <div class="aluno">
    <p>João Marcelo</p>

    <a target="_blank" href="https://github.com/JoaoMarceloAlmeida" class="social">
        <i class="bi bi-github"></i>
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/jo%C3%A3omarceloalmeidasouza/" class="social">
        <i class="bi bi-linkedin"></i></a>
</div>

<div class="aluno">
<p>Leonardo Barcellos</p>

<a target="_blank" href="https://github.com/LeoFelino" class="social">
    <i class="bi bi-github"></i>
</a>
<a target="_blank" href="https://www.linkedin.com/in/leofelino" class="social">
    <i class="bi bi-linkedin"></i></a>
</div>

   

</section>
<!--teamsection-->



<section class="copyrightSection">
    <p>Checkpoint desenvolvido em 2022</p>

</section>
<!--copyright-->

</footer>
`;



