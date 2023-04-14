export async function get_api(){
   try{
      const arr = [];
      for(let i=1; i<10; i++){
         const ulstarwars = await fetch("https://swapi.dev/api/people/"+i);
         const def = await ulstarwars.json();
         console.log(def);
         arr.push(def);
      };
      return arr;

   } catch(error){
      console.log(error);
   }
}

