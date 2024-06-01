import React from 'react'
import Card from './card'

function App() {

  let data = [
    {
    title: "Bali Heavens Gate",
    description: " Lempuyang Temple or Lempuyang Luhur Temple in Karangasem is one of Sad Kahyangan Temples in Bali. In addition, this temple also has many interesting spots to pose, one of which is in the gate or tourists often call it as Gate to Heaven Bali.",
    imageURL :" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4y3zBSezGTJheZfBkLwEnnvuU19QLmXtHqw&s"
  },

  {
    title: "Death Hills",
    description: "The Kolli Hills are featured in several works of classical Tamil literature such a The hills are said to be guarded by Kollipavai also called as Ettukkai Amman, the local deity. According to legend, the sages chose Kolli hills when they were looking for a peaceful place to do their penance. However, the demons invaded the hills to disrupt the penance when the sages began their rituals. The sages prayed to Kollipavai, who according to the myth",
    imageURL :" https://www.holidify.com/images/bgImages/KOLLI-HILLS.jpg"
  },

  {
    title: "Heavens Gate China",
    description: "The Tianmenshan Temple is located on the summit, with chairlift or footpath access. The  Tang dynasty and destroyed during the first part of the 20th century. In 1949, as the Chinese Communist Revolution neared its end, construction of a new temple,  the temple now sits on landscaped grounds covering 2 hectares (4.9 acres).",
    imageURL :" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISqaj36t2VsmXAcCs-9bVZdsJhB1gL8nOUg&s"
  },

  {
    title: "Magnetic Hill",
    description: "Magnet Hill is a gravity hill located, near Leh in Leh district of Ladakh, India. The layout of the area and surrounding slopes create the optical illusion of a hill. The hill road is actually a downhill road.",
    imageURL :" https://i2.wp.com/www.inditrip.in/wp-content/uploads/2019/02/Ladakh-biking-.jpg?fit=1024%2C608&ssl=1"
  },

]


 
  return <>
  
  <div className="container">

  <h1 className="my-4">React Reusable Components
  </h1>

  <div className="row">
    {
      data.map((e,i)=>{
        return   <Card
        
        imageURL =  {e.imageURL}
        description = {e.description}
        title = {e.title}
        key ={i}
        />       
     
      })
    }
   
  </div>

</div>
  </>
    
  
}

export default App


//one of the way  when we have more data///

// function Card (props){
// console.log(props)
// return <div className="col-lg-4 col-sm-6 mb-4">
//  <div className="card h-100">
//     <a href="#"><img className="card-img-top" src={props.data.imageURL} alt={props.data.title}  height={"200px"}  width= {"200px"}/></a>   <div className="card-body">      <h4 className="card-title">        <a href="#">{props.data.title}</a>
//     </h4>
//       <p className="card-text"> {props.data.description}</p>
//     </div>
//    </div>
//     </div>


// }


 
