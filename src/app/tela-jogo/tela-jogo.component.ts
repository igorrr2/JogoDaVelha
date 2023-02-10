import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-jogo',
  templateUrl: './tela-jogo.component.html',
  styleUrls: ['./tela-jogo.component.css'],
})
export class TelaJogoComponent implements OnInit {

  div1: string="";
  div2: string="";
  div3: string="";
  div4: string="";
  div5: string="";
  div6: string="";
  div7: string="";
  div8: string="";
  div9: string="";
  Jogador1: string = ""
  Jogador2: string = ""
  jog1:string = ""
  jog2:string = ""
  InicioJogo: boolean = false
  Jogo: any []=[]
  j1 : number = -1
  j2 :number = -1
  VezJogador : string = ""
  ganhador: number = -1
  cont:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  SetDiv1(){
    if(this.div1 == "" && this.ganhador != 0 && this.ganhador !=1){
    if(this.j1 == 1){
      this.div1 = "X"
      this.j1=0;
      this.j2=1;
    this.VezJogador = this.jog2
    this.Jogo[0]=1;
    }
    else if(this.j2 == 1){
      this.div1 = "O"
      this.j2=0;
      this.j1=1;
      this.VezJogador = this.jog1
      this.Jogo[0]=0;
    }
    this.cont++
    this.VerificaGanhador(); 
  }
  }
  SetDiv2(){
    if(this.div2 == "" && this.ganhador != 0 && this.ganhador !=1){
    if(this.j1 == 1){
      this.div2 = "X"
      this.j1=0;
      this.j2=1;
      this.VezJogador = this.jog2
      this.Jogo[1]=1;
    }
    else if(this.j2 == 1){
      this.div2 = "O"
      this.j2=0;
      this.j1=1;
      this.VezJogador = this.jog1
      this.Jogo[1]=0;
    }
    this.cont++
    this.VerificaGanhador();
  }
  }
  SetDiv3(){
    if(this.div3 == "" && this.ganhador != 0 && this.ganhador !=1){
    if(this.j1 == 1){
      this.div3 = "X"
      this.j1=0;
      this.j2=1;
      this.VezJogador = this.jog2
      this.Jogo[2]=1;
    }
    else if(this.j2 == 1){
      this.div3 = "O"
      this.j2=0;
      this.j1=1;
      this.VezJogador = this.jog1
      this.Jogo[2]=0;
    }
    this.cont++
    this.VerificaGanhador();
  }
  }
  SetDiv4(){
    if(this.div4 == "" && this.ganhador != 0 && this.ganhador !=1){
    if(this.j1 == 1){
      this.div4 = "X"
      this.j1=0;
      this.j2=1;
      this.VezJogador = this.jog2
      this.Jogo[3]=1;
    }
    else if(this.j2 == 1){
      this.div4 = "O"
      this.j2=0;
      this.j1=1;
      this.VezJogador = this.jog1
      this.Jogo[3]=0;
    }
    this.cont++
    this.VerificaGanhador();  
  }
  }
  SetDiv5(){
    if(this.div5 == "" && this.ganhador != 0 && this.ganhador !=1){
    if(this.j1 == 1){
      this.div5 = "X"
      this.j1=0;
      this.j2=1;
      this.VezJogador = this.jog2
      this.Jogo[4]=1;
    }
    else if(this.j2 == 1){
      this.div5 = "O"
      this.j2=0;
      this.j1=1;
      this.VezJogador = this.jog1
      this.Jogo[4]=0;
    }
    this.cont++
    this.VerificaGanhador();
  }
  }
  SetDiv6(){
    if(this.div6 == "" && this.ganhador != 0 && this.ganhador !=1){
    if(this.j1 == 1){
      this.div6 = "X"
      this.j1=0;
      this.j2=1;
      this.VezJogador = this.jog2
      this.Jogo[5]=1;
    }
    else if(this.j2 == 1){
      this.div6 = "O"
      this.j2=0;
      this.j1=1;
      this.VezJogador = this.jog1
      this.Jogo[5]=0;
    }
    this.cont++
    this.VerificaGanhador();
  }
  }
  SetDiv7(){
    if(this.div7 == "" && this.ganhador != 0 && this.ganhador !=1){
    if(this.j1 == 1){
      this.div7 = "X"
      this.j1=0;
      this.j2=1;
      this.VezJogador = this.jog2
      this.Jogo[6]=1;
    }
    else if(this.j2 == 1){
      this.div7 = "O"
      this.j2=0;
      this.j1=1;
      this.VezJogador = this.jog1
      this.Jogo[6]=0;
    }
    this.cont++
    this.VerificaGanhador();
  }
  }
  SetDiv8(){
    if(this.div8 == "" && this.ganhador != 0 && this.ganhador !=1){
    if(this.j1 == 1){
      this.div8 = "X"
      this.j1=0;
      this.j2=1;
      this.VezJogador = this.jog2
      this.Jogo[7]=1;
    }
    else if(this.j2 == 1){
      this.div8 = "O"
      this.j2=0;
      this.j1=1;
      this.VezJogador = this.jog1
      this.Jogo[7]=0;
    }
    this.cont++
    this.VerificaGanhador();
  }

  }
  SetDiv9(){
    if(this.div9 == "" && this.ganhador != 0 && this.ganhador !=1){
    if(this.j1 == 1){
      this.div9 = "X"
      this.j1=0;
      this.j2=1;
      this.VezJogador = this.jog2
      this.Jogo[8]=1;
    }
    else if(this.j2 == 1){
      this.div9 = "O"
      this.j2=0;
      this.j1=1;
      this.VezJogador = this.jog1
      this.Jogo[8]=0;
    }
    this.cont++
    this.VerificaGanhador(); 
  }
  }
  StartGame(){
    this.jog1 = this.Jogador1
    this.jog2 = this.Jogador2
    this.InicioJogo = true;
    this.j1=1;
    this.j2=0;
    this.VezJogador = this.jog1
    this.div1 = ""
    this.div2= ""
    this.div3= ""
    this.div4= ""
    this.div5= ""
    this.div6= ""
    this.div7= ""
    this.div8= ""
    this.div9= ""
    this.Jogo = []
    this.ganhador = -1
    this.cont = 0
  }
  VerificaGanhador(){
    
        if(this.Jogo[0] != null && this.Jogo[0] == this.Jogo[1] && this.Jogo[0] == this.Jogo[2]){
          this.VitoriaJogador(this.Jogo[0]);
        }
        else if(this.Jogo[3] != null && this.Jogo[3] == this.Jogo[4] && this.Jogo[3] == this.Jogo[5]){
          this.VitoriaJogador(this.Jogo[3]);
        }
        else if(this.Jogo[6] != null && this.Jogo[6] == this.Jogo[7] && this.Jogo[6] == this.Jogo[8]){
          this.VitoriaJogador(this.Jogo[6]);
        }
        else if(this.Jogo[0] != null && this.Jogo[0] == this.Jogo[3] && this.Jogo[0] == this.Jogo[6]){
          this.VitoriaJogador(this.Jogo[0]);
        }
        else if(this.Jogo[1] != null && this.Jogo[1] == this.Jogo[4] && this.Jogo[1] == this.Jogo[7]){
          this.VitoriaJogador(this.Jogo[1]);
        }
        else if(this.Jogo[2] != null && this.Jogo[2] == this.Jogo[5] && this.Jogo[2] == this.Jogo[8]){
          this.VitoriaJogador(this.Jogo[2]);
        }
        else if(this.Jogo[0] != null && this.Jogo[0] == this.Jogo[4] && this.Jogo[0] == this.Jogo[8]){
          this.VitoriaJogador(this.Jogo[0]);
        }
        else if(this.Jogo[2] != null && this.Jogo[2] == this.Jogo[4] && this.Jogo[2] == this.Jogo[6]){
          this.VitoriaJogador(this.Jogo[2]);
        }
        else if(this.cont == 9){
          this.VitoriaJogador(2);
        }
        
    }
  
  VitoriaJogador(Jogador: number){
    if(Jogador==1){
      this.ganhador = 1
    }
    else if(Jogador == 0){
      this.ganhador = 0
    }
    else if(Jogador==2){
      this.ganhador = 2
    }
  
  }
  


}
