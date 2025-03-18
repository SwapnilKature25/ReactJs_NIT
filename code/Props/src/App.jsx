 import Book from './Book'
 import './App.css'
 import image from './assets/invest.jpg'
 import success from './assets/success.jpg'
 import psychology from './assets/psychology.jpeg'
 import rich from './assets/richpoor.webp'
 import mindset from './assets/mindset.jpg'
 import motivate from './assets/motivate.webp'
 import limit from './assets/limit.jpg'


 function App() {
   return (
      <div>
        <header>All You Need A Good MINDSET</header>
      
     <div className='container'>
        {/* <img src={image} alt="" /> */}

              <div className='card'>

                <div className="card-body">
                 <Book
                  name="Mindset" 
                  imgLink= {mindset}
               
                 />
                </div>

                <div className='card-footer'>
                   <button>Add to Cart</button>
                </div>
  
              </div>
              

              <div className='card'>

                <div className="card-body">
                <Book
			          	name='Invest'
			          	imgLink = {image}
			        />
                </div>

                <div className='card-footer'>
                   <button>Add to Cart</button>
                </div>
  
              </div>
               

                <div className='card'>

                <div className="card-body">
                 <Book
			          	name='Limits'
		        	  	imgLink= {limit}
		             />
                </div>

                <div className='card-footer'>
                   <button>Add to Cart</button>
                </div>
  
              </div>
			    
              

               <div className='card'>

                <div className="card-body">
                <Book
			          	name='Psychology'
		        	  	imgLink= {psychology}
		          />
                </div>

                <div className='card-footer'>
                   <button>Add to Cart</button>
                </div>
  
              </div>

              


              
               <div className='card'>

                <div className="card-body">
                <Book
                  name="Mindset" 
                  imgLink= {mindset}
               
                />
                </div>

                <div className='card-footer'>
                   <button>Add to Cart</button>
                </div>
  
              </div>
              


                
               <div className='card'>

                <div className="card-body">
                <Book
			          	name='Success'
			          	imgLink = {success}
			        />
                </div>

                <div className='card-footer'>
                   <button>Add to Cart</button>
                </div>
  
              </div>
              


              <div className='card'>

                <div className="card-body">
                 <Book
                  name="Mindset" 
                  imgLink= {mindset}
               
                 />
                </div>

                <div className='card-footer'>
                   <button>Add to Cart</button>
                </div>
  
              </div>
              

              <div className='card'>

                <div className="card-body">
                <Book
			          	name='Invest'
			          	imgLink = {image}
			        />
                </div>

                <div className='card-footer'>
                   <button>Add to Cart</button>
                </div>
  
              </div>
               

                <div className='card'>

                <div className="card-body">
                 <Book
			          	name='Motivational'
		        	  	imgLink= {motivate}
		             />
                </div>

                <div className='card-footer'>
                   <button>Add to Cart</button>
                </div>
  
              </div>
			    
              

               <div className='card'>

                <div className="card-body">
                <Book
			          	name='Psychology'
		        	  	imgLink= {psychology}
		          />
                </div>

                <div className='card-footer'>
                   <button>Add to Cart</button>
                </div>
  
              </div>

            
     </div>

      <footer>All Copyright @ Swapnil</footer>
     </div>
    
   )
 }
 
 export default App
 