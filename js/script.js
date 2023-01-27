(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const back= document.querySelector('.back')
    let deg = 0;
  
  
    startButton.addEventListener('click', () => {
     // Désactiver le bouton pendant l'essorage
      startButton.style.pointerEvents = 'none';
      // Calcule une nouvelle rotation entre 5000 et 10 000
      deg = Math.floor(2000 + Math.random() * 5000);
      //deg =40 ;
       // Définit la transition sur la roue
      wheel.style.transition = 'all 5s ease ';
      back.style.transition = 'all 7s ease-out';
      
      // Faire tourner la Roulette
      wheel.style.transform = `rotate(${deg}deg)`;
     // Appliquer  blur
      wheel.classList.add('blur');
      back.classList.add('rainbow');
    });
    wheel.addEventListener('transitionend', () => {
      // Supprimer blur
      wheel.classList.remove('blur');
      back.classList.remove('rainbow');
      //Activer le bouton lorsque spin est terminé
      startButton.style.pointerEvents = 'auto';
      // Besoin de définir la transition sur aucune car nous voulons faire pivoter instantanément
      wheel.style.transition = 'none';
      // Calculez le degré sur une base de 360 degrés pour obtenir la rotation réelle "naturelle"
      const actualDeg = deg % 360;
      // Définissez la rotation réelle instantanément sans animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      
      
      var element = document.getElementById("result");
     
      
      
      if (actualDeg>=0 && actualDeg<10 ){
        document.getElementById("result").textContent="26 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=10 && actualDeg<20 ){
        document.getElementById("result").textContent="3 Rouge";
        element.classList.remove("Vert");
         element.classList.remove("Noir");
        element.classList.add("Rouge");
      }
      if (actualDeg>=20 && actualDeg<30 ){
        document.getElementById("result").textContent="35 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=30 && actualDeg<39 ){
        document.getElementById("result").textContent="12 Rouge";
        element.classList.remove("Vert");
         element.classList.remove("Noir");
        element.classList.add("Rouge");
      }
      if (actualDeg>=39 && actualDeg<49 ){
        document.getElementById("result").textContent="28 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=49 && actualDeg<59 ){
        document.getElementById("result").textContent="7 Rouge";
        element.classList.remove("Vert");
         element.classList.remove("Noir");
        element.classList.add("Rouge");
      }
      if (actualDeg>=59 && actualDeg<69 ){
        document.getElementById("result").textContent="29 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=69 && actualDeg<78 ){
        document.getElementById("result").textContent="18 Rouge";
        element.classList.remove("Vert");
         element.classList.remove("Noir");
        element.classList.add("Rouge");
      }
      if (actualDeg>=78 && actualDeg<88 ){
        document.getElementById("result").textContent="22 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=88 && actualDeg<98 ){
        document.getElementById("result").textContent="9 Rouge";
        element.classList.remove("Vert");
         element.classList.remove("Noir");
        element.classList.add("Rouge");
      }
      if (actualDeg>=98 && actualDeg<107 ){
        document.getElementById("result").textContent="31 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=107 && actualDeg<117 ){
            document.getElementById("result").textContent="14 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=117 && actualDeg<127 ){
        document.getElementById("result").textContent="20 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=127 && actualDeg<137 ){
            document.getElementById("result").textContent="1 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=137 && actualDeg<146 ){
        document.getElementById("result").textContent="33 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=146 && actualDeg<156 ){
            document.getElementById("result").textContent="16 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=156 && actualDeg<166 ){
        document.getElementById("result").textContent="24 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=166 && actualDeg<176 ){
            document.getElementById("result").textContent="5 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=176 && actualDeg<185 ){
        document.getElementById("result").textContent="10 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=185 && actualDeg<195 ){
            document.getElementById("result").textContent="23 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=195 && actualDeg<205 ){
        document.getElementById("result").textContent="8 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=205 && actualDeg<215 ){
            document.getElementById("result").textContent="30 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=215 && actualDeg<224 ){
        document.getElementById("result").textContent="11 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=224 && actualDeg<234 ){
            document.getElementById("result").textContent="36 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=234 && actualDeg<244 ){
        document.getElementById("result").textContent="13 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=244 && actualDeg<253 ){
            document.getElementById("result").textContent="21 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=253 && actualDeg<263 ){
        document.getElementById("result").textContent="6 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=263 && actualDeg<273 ){
            document.getElementById("result").textContent="34 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=273 && actualDeg<283 ){
        document.getElementById("result").textContent="17 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=283 && actualDeg<292 ){
            document.getElementById("result").textContent="25 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=292 && actualDeg<302 ){
        document.getElementById("result").textContent="2 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=302 && actualDeg<312 ){
            document.getElementById("result").textContent="21 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=312 && actualDeg<322 ){
        document.getElementById("result").textContent="4 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
      }
      if (actualDeg>=322 && actualDeg<331 ){
            document.getElementById("result").textContent="19 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=331 && actualDeg<341 ){
        document.getElementById("result").textContent="15 Noir";
        element.classList.remove("Vert");
         element.classList.remove("Rouge");
        element.classList.add("Noir");
       }
      if (actualDeg>=341 && actualDeg<350 ){
            document.getElementById("result").textContent="32 Rouge";
            element.classList.remove("Vert");
             element.classList.remove("Noir");
            element.classList.add("Rouge");
      }
      if (actualDeg>=350 && actualDeg<360 ){
        document.getElementById("result").textContent="0 Vert";
        element.classList.remove("Noir");
        element.classList.remove("Rouge");
        element.classList.add("Vert");
      }
  
    
      console.log(actualDeg);
    }
    );
  })();