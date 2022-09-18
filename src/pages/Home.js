
import Footer from "./Footer"
import "./style/Home.css"




function Home(){
    return(

        <div>
            <div className= "Home"> <img src='https://www.diversitybiosciences.com/MainImage.jpg' width="100%" alt="img" />

            </div>

            <div className="AboutUs">
                <h1>About Us</h1>
            </div>

            <div className="AboutUsDes">
                <h3>Diversity Bio Sciences is a research organization for Custom synthesis of new products, committed to provide services / solutions to Pharmaceutical & Biotech industries. Based in Hyderabad and spread across the world, Diversity Bio Sciences has fully Developing high quality pharmaceutical impurity standards infrastructure. Diversity Bio Sciences has pioneered in customized Drug Impurities, Drug Metabolites & Complex research products in collaborations with Pharmaceutical companies and Biotechs. Diversity Bio Sciences has developed deep expertise in Custom Synthesis, Intermediates & APl's development and has continuously invested in its people resources and infrastructure.</h3>

            </div>

            <div className="AboutUsDes1">
                <h1>Why to choose Diversity....?</h1>

            </div>
            <div className="AboutUsDes2">
                <div> <ul> 
                    <li>Capable to synthesize complex molecules from milligrams to multi grams.</li>
                      <br/>
                    <li>Expertise in synthesis of Drug Impurities, Small molecules & scaffold.</li>
                    <br />

                    <li>We supply Impurities / Metabolites.</li>
                    <br />
                    
                    <li>Services with efficient and excellent quality (On Time in Full).</li>
                    <br />
                    <li>Well trained and skilled scientists with diversified experience.</li>
                    <br />
                    <li>Synthesis of intermediates to support on-going medicinal chemistry programs.</li>
                    <br />
                    <li>Final product / intermediates with well-characterized.</li>
                    <br />
                    <li>Our flexible business model (FFS or FTE).</li>
                    </ul >  </div>

         <div> <img src='https://www.diversitybiosciences.com/_next/image?url=%2Fwhytochoosebiodiversityimage.jpg&w=384&q=75' width="100%" alt="img" />

            </div>
               

            </div>

            <div className="Product">
            <h1>Products</h1>
              </div>

              <div className="ProductSlider"></div>

              <div className="AboutMis">
                 <h1>Our Services</h1>
              </div>

              <div className="OurService">

                <div>
                   
                    <h3>Diversity Bio Science to be the most trusted global innovation center <br />
                    
                     of & innovativ soloution for pharma and Bio Tech companies, <br/> 
                    
                     In terms of drugs development and custom synthesis </h3>
                </div>
                <div> <img src=' https://www.diversitybiosciences.com/services1.jpg' alt='img' /> </div>

              </div>

              <div className="ContactUs">

                <h1> Contact Us</h1>

              </div>
              <div className="ContactInput">

              <input placeholder="Name"></input>
              <input placeholder="Email"></input>
              <input placeholder="Phone Numebr"></input>
              </div>

              <div className="ContactInputBtn">
                <button>Contact Us</button>
              </div>

              <div className="Atc">

                <h1>Accreditation</h1>

              </div>

              <div className="AtcPic">
                
                <div> <img src="https://www.diversitybiosciences.com/acrreditation1.jpg" alt="" />  </div>
                <div> <img src="https://www.diversitybiosciences.com/accreditation2.jpg" alt="" />  </div>
                <div> <img src="https://www.diversitybiosciences.com/accreditation3.jpg" alt="" />  </div>
                <div> <img src="https://www.diversitybiosciences.com/accreditation4.jpg" alt="" />  </div>
                

                

                

              </div>
              <Footer />
        </div>

        
    )
}

export default Home
