/* considere a quantidade de alunos presentes na sala e percorra do 0 ate o total de alunos e retorne:

   se o numero for par escreva "par" e o numero conrrespondente 
   se o numero for impar escreva "impar" e o numero correspondente
   se o numero for zero escreva "zero" e o numero correspondente
*/

let quantidadeA = 17;
for( i = 0; i <= quantidadeA; i++){
    if( i == 0){
        console.log(`zero ${i}`)
    }
    if(i % 2 ==0){
        console.log(`numero: ${i} é par`)
    } else{
        console.log(`numero: ${i} é impar`)
    }
}