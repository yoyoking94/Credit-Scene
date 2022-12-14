import { useState } from 'react'
import './App.css'

import img from './assets/YM.png'

function App() {

  /* Data */
  const directed = "Michael Bay"
  const screenPlay = ['Art Marcum', 'Matt Holloway', 'Ken Nolan']
  const screenBy = ['Akiva Goldsman', 'Art Marcum', 'Matt Holloway', 'Ken Nolan']
  const producedBy = ['Lorenzo di Donaventura', 'Tom Desanto', 'Don Murphy', 'Ian Bryce']
  const executiveProducers = ['Steven Spielberg', 'Michael bay', 'Brian Goldner', 'Mark Vahradian']
  const editedBy = ['Mark Sanger', 'John Refoua', 'Debra Neil-fisher', 'Roger Barton', 'Adam gerstel', 'Calvin wimmer']

  return (
    <div className="App">
      <div className='scrollAuto'>
        <div className='blanck'></div>
        <div className='centerCredit'>
          <div>
            <div className='headline'>Directed by</div>
            <div>{directed}</div>
          </div>
          <div>
            <div className='headline'>Screenplay by</div>
            <div>{screenPlay[0]}</div>
            <div>{screenPlay[1]}</div>
            <div>{screenPlay[2]}</div>
          </div>
          <div>
            <div className='headline'>Story by</div>
            <div>{screenBy[0]}</div>
            <div>{screenBy[1]}</div>
            <div>{screenBy[2]}</div>
            <div>{screenBy[3]}</div>
          </div>
          <div>
            <div className='headline'>Based on</div>
            <div>Hasbro's Transformers™ Action Figures</div>
          </div>
          <div>
            <div className='headline'>Produced by</div>
            <div>
              <div>{producedBy[0]}</div>
              <div>{producedBy[1]}</div>
              <div>{producedBy[2]}</div>
              <div>{producedBy[3]}</div>
            </div>
          </div>
          <div>
            <div className='headline'>Executive producers</div>
            <div>
              <div>{executiveProducers[0]}</div>
              <div>{executiveProducers[1]}</div>
              <div>{executiveProducers[2]}</div>
              <div>{executiveProducers[3]}</div>
            </div>
          </div>
          <div>
            <div className='headline'>Director of photography</div>
            <div>Jonathan Sela</div>
          </div>
          <div>
            <div className='headline'>Production Designer</div>
            <div>Jeffrey Beecroft</div>
          </div>
          <div>
            <div className='headline'>Edited by</div>
            <div>
              <div>{editedBy[0]}</div>
              <div>{editedBy[1]}</div>
              <div>{editedBy[2]}</div>
              <div>{editedBy[3]}</div>
              <div>{editedBy[4]}</div>
              <div>{editedBy[5]}</div>
            </div>
          </div>
          <div>
            <div className='headline'>Music by</div>
            <div>Styve Jablonsky</div>
          </div>
          <div>
            <div className='headline'>Visual effects supervisor</div>
            <div>Scott Farrar</div>
          </div>
          <div>
            <div className='headline'>Costume designer</div>
            <div>Lisa Nora Lovaas</div>
          </div>
          <div>
            <div className='headline'>Casting by</div>
            <div>Denise Chamian</div>
          </div>
          <div>
            <div className='headline'>Mark Wahlberg</div>
          </div>
          <div>
            <div className='headline'>josh Duhamel</div>
          </div>
          <div>
            <div className='headline'>Stanley Tucci</div>
          </div>
          <div>
            <div>And</div>
            <div className='headline'>Anthony Hopkins</div>
          </div>
          <div>
            <div className='headline'>Laura Haddock</div>
            <div className='headline'>Jerrod Carmichael</div>
            <div className='headline'>Isabela Moner</div>
          </div>
          <div>
            <div className='headline'>Santiago Cabrera</div>
            <div className='headline'>Glenn Morshower</div>
          </div>
          <div>
            <div className='headline'>John Turturro</div>
            <div className='headline'>Tony Hale</div>
          </div>
          <div>
            <div>A</div>
            <div className='headline'>{producedBy[2]} / {producedBy[1]}</div>
            <div>Production</div>
          </div>
          <div>
            <div>A</div>
            <div className='headline'>di Bonaventura Pictures</div>
            <div>Production</div>
          </div>
          <div>
            <div>A</div>
            <div className='headline'>{executiveProducers[1]}</div>
            <div>Film</div>
          </div>
          <div>
            <div>Unit Production Manager</div>
            <div className='headline'>Samson Mucke</div>
          </div>
          <div>
            <div>First Assistant Directors</div>
            <div className='headline'>K.C. Hodenfield</div>
            <div className='headline'>Jett Okabayashi</div>
            <br />
            <div>Second Assistant Directors</div>
            <div className='headline'>Jason Roberts</div>
          </div>
          <div>
            <div>co-Producers</div>
            <div className='headline'>Matthew Cohan</div>
            <div className='headline'>K.C.Hodenfield</div>
            <div className='headline'>Michael Kase</div>
            <br />
            <div>Associate Producers</div>
            <div className='headline'>JJ Hook</div>
            <div className='headline'>Daren Hicks</div>
            <div className='headline'>Harry Humphries</div>
          </div>
          <div>
            <div>co-Producers</div>
            <div className='headline'>Matthew Cohan</div>
            <div className='headline'>K.C.Hodenfield</div>
            <div className='headline'>Michael Kase</div>
            <br />
            <div>Associate Producers</div>
            <div className='headline'>JJ Hook</div>
            <div className='headline'>Daren Hicks</div>
            <div className='headline'>Harry Humphries</div>
          </div>
          <div>
            <div>Ilm Visual Effects</div>
            <div>Effective Producer</div>
            <div className='headline'>Wayne BillHeimer</div>
            <br />
            <div>Associate Producers</div>
            <div className='headline'>Jason Smith</div>
            <br />
            <div>Ilm Animation Supervisors</div>
            <div className='headline'>Paul Kavanagh</div>
            <div className='headline'>Rick O'Connor</div>
          </div>
          <div>
            <div>Additional Editing By</div>
            <div className='headline'>Julie Monroe</div>
            <br />
            <div>Second Unit Directors</div>
            <div className='headline'>Mike Gunther</div>
            <div className='headline'>Spird Raratos</div>
            <br />
            <div>Special Effects</div>
            <div className='headline'>John R.Frazier</div>
          </div>
        </div>
        <div className='container'>
          <div style={{ marginTop: 10 + 'px', marginBottom: 10 + 'px' }}>Cast</div>
          <div className='middle d-flex'>
            <div>Cade Yeager</div>
            <div>Mark Wahlberg</div>
          </div>
          <div className='middle d-flex'>
            <div>Sir Edmond Burton</div>
            <div>Anthony Hopkins</div>
          </div>
          <div className='middle d-flex'>
            <div>Col William Lennox</div>
            <div>Josh Duhamel</div>
          </div>
          <div className='middle d-flex'>
            <div>Viviane Wembly</div>
            <div>Laura Haddock</div>
          </div>
          <div className='middle d-flex'>
            <div>Santos</div>
            <div>Santiago Cabrera</div>
          </div>
          <div className='middle d-flex'>
            <div>Izabella</div>
            <div>Isabella Moner</div>
          </div>
          <div className='middle d-flex'>
            <div>Jimmy</div>
            <div>Jerrod Carmichael</div>
          </div>
          <div className='middle d-flex'>
            <div>Merlin</div>
            <div>Stanley Tucci</div>
          </div>
          <div className='middle d-flex'>
            <div>Arthur</div>
            <div>Liam Garrigan</div>
          </div>
          <div className='middle d-flex'>
            <div>Lancelot</div>
            <div>Martin McCreadie</div>
          </div>
          <div className='middle d-flex'>
            <div>Percival</div>
            <div>Rob Witcomb</div>
          </div>
          <div className='middle d-flex'>
            <div>Gawain</div>
            <div>Marcus Fraser</div>
          </div>
          <div className='middle d-flex'>
            <div>Tristan</div>
            <div>John Holligworth</div>
          </div>
          <div className='middle d-flex'>
            <div>Saebert</div>
            <div>Daniel Adegroyega</div>
          </div>
          <div className='middle d-flex'>
            <div>Hengist</div>
            <div>Trent Seven</div>
          </div>
          <div className='middle d-flex'>
            <div>General Morshower</div>
            <div>Clenn Morshower</div>
          </div>
          <div className='middle d-flex'>
            <div>Quintessa</div>
            <div>Gemma Chan</div>
          </div>
          <div className='middle d-flex'>
            <div>Agent Simmons</div>
            <div>John Turturro</div>
          </div>
          <div className='middle d-flex'>
            <div>Jpl Engineer</div>
            <div>Tony Hale</div>
          </div>
          <div className='middle d-flex'>
            <div>Jpl Director</div>
            <div>Claude Knowlton</div>
          </div>
          <div className='middle d-flex'>
            <div>Young Jpl Engineer</div>
            <div>Jacob Zachar</div>
          </div>
          <div className='middle d-flex'>
            <div>Viviane's Grandmum</div>
            <div>Maggie Steed</div>
          </div>
          <div className='middle d-flex'>
            <div>Aunt Helen</div>
            <div>Phoebe nicholls</div>
          </div>
          <div className='middle d-flex'>
            <div>Aunt Marie</div>
            <div>Rebecca Front</div>
          </div>
          <div className='middle d-flex'>
            <div>Viviane's Father</div>
            <div>Stephan Hogan</div>
          </div>
          <div className='middle d-flex'>
            <div>Young Viviane</div>
            <div>Minti Gorne</div>
          </div>
          <div className='middle d-flex'>
            <div>Kids</div>
            <div>
              <div>Benjamin Flores, Jr</div>
              <div>Juliocesar Chavez</div>
              <div>Samuel Parker</div>
              <div>Daniel Iturriaga</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Lawyers</div>
            <div>
              <div>Aisha Kabia</div>
              <div>Andy Bean</div>
              <div>Sam Yim</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>U.K. Prime Minister</div>
            <div>Mark Dexter</div>
          </div>
          <div className='middle d-flex'>
            <div>Downing Street Policeman</div>
            <div>Rob Jarvis</div>
          </div>
          <div className='middle d-flex'>
            <div>Polo Player</div>
            <div>Tim Downie</div>
          </div>
          <div className='middle d-flex'>
            <div>High Society Women</div>
            <div>
              <div>Elizabeth Croft</div>
              <div>Emily Tierney</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Saxon Knight</div>
            <div>Wolfgang Young</div>
          </div>
          <div className='middle d-flex'>
            <div>Scientists</div>
            <div>
              <div>Nicholas Khan</div>
              <div>Leighton Sharpe</div>
              <div>Christina Tam</div>
              <div>Aiyaz Ahmed</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Female Researcher</div>
            <div>Pauline McLynn</div>
          </div>
          <div className='middle d-flex'>
            <div>Students</div>
            <div>
              <div>Matthew Caster</div>
              <div>Mia Maria</div>
              <div>Poppu Carter</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>News Reporters</div>
            <div>
              <div>Seeta Indrani</div>
              <div>Phill Langhorne</div>
              <div>Simon Harrison</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Submarine Ticket Agent</div>
            <div>wendy Albiston</div>
          </div>
          <div className='middle d-flex'>
            <div>Pentagon Colonels</div>
            <div>
              <div>John Burke</div>
              <div>Barbara Eve Harris</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Pentagon Official</div>
            <div>Granville Ames</div>
          </div>
          <div className='middle d-flex'>
            <div>Government Suit</div>
            <div>Jim Wisniewski</div>
          </div>
          <div className='middle d-flex'>
            <div>TRF Group Leader</div>
            <div>Mitchell Craig Pileggi</div>
          </div>
          <div className='middle d-flex'>
            <div>TRF Lieutenant</div>
            <div>Remi Adeleke</div>
          </div>
          <div className='middle d-flex'>
            <div>TRF Operators</div>
            <div>
              <div>Perry T. Yee</div>
              <div>Brian William Price</div>
              <div>Vincent Jerome</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>F-35 Pilot</div>
            <div>Alan Pietruszewski</div>
          </div>
          <div className='middle d-flex'>
            <div>F-16 Pilots</div>
            <div>
              <div>Christopher Vaskey</div>
              <div>Drew B. Waters</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Osprey Pilot</div>
            <div>Krista Schaeffer</div>
          </div>
          <div className='middle d-flex'>
            <div>American Serviceman</div>
            <div>Walles Hamonde</div>
          </div>
          <div className='middle d-flex'>
            <div>Military Attaches</div>
            <div>
              <div>Tom Wright</div>
              <div>Dan Warner</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Namibian Scientists</div>
            <div>
              <div>Michael Richard</div>
              <div>Charlie Bouguenon</div>
              <div>Jandre Le Roux</div>
            </div>
          </div>
        </div>
        <div className='container' style={{ marginTop: 100 + 'px' }}>
          <div style={{ marginTop: 10 + 'px', marginBottom: 10 + 'px' }}>Voices</div>
          <div className='middle d-flex'>
            <div>Optimus Prime</div>
            <div>Peter Cullen</div>
          </div>
          <div className='middle d-flex'>
            <div>Megatron</div>
            <div>Frank Welker</div>
          </div>
          <div className='middle d-flex'>
            <div>Bumblebee</div>
            <div>Erik Aadahl</div>
          </div>
          <div className='middle d-flex'>
            <div>Hound</div>
            <div>John Goodman</div>
          </div>
          <div className='middle d-flex'>
            <div>Drift</div>
            <div>Ken Watanabe</div>
          </div>
          <div className='middle d-flex'>
            <div>Cogman</div>
            <div>Jim Carter</div>
          </div>
          <div className='middle d-flex'>
            <div>daytrader</div>
            <div>Steve Buscemi</div>
          </div>
          <div className='middle d-flex'>
            <div>Hot Rod</div>
            <div>Omar Sy</div>
          </div>
          <div className='middle d-flex'>
            <div>Mohawk / Sqweeks</div>
            <div>Rend Wilson</div>
          </div>
          <div className='middle d-flex'>
            <div>Nitro Zeus / Crosshairs</div>
            <div>John Dimaggio</div>
          </div>
          <div className='middle d-flex'>
            <div>Wheels</div>
            <div>Tom Kenny</div>
          </div>
          <div className='middle d-flex'>
            <div>Barricade</div>
            <div>Jess Harnell</div>
          </div>
          <div className='middle d-flex'>
            <div>WWI Tank / Lieutenant</div>
            <div>Mark Ryan</div>
          </div>
          <div className='middle d-flex'>
            <div>Nitro Zeus / Volleybot</div>
            <div>Steven Barr</div>
          </div>
          <br />
          <div className='middle d-flex'>
            <div>Stunt Coordinator</div>
            <div>Mike Gunther</div>
          </div>
          <br />
          <div className='middle d-flex'>
            <div>Battle Coordinator</div>
            <div>Rob Inch</div>
          </div>
          <br />
          <div className='middle d-flex'>
            <div>Autobot / Decepticon driver</div>
            <div>
              <div>Corey Eubanks</div>
              <div>Mike Johnson</div>
              <div>Kyle Woods</div>
              <div>Sli Lewis</div>
              <div>Spencer Sand</div>
              <div>Randy Peters</div>
              <div>Joey Freitas</div>
              <div>Scott Philbrick</div>
              <div>Webster P. Whinery, Jr.</div>
            </div>
          </div>
          <br />
          <div className='middle d-flex'>
            <div>Purshuit systems driver</div>
            <div>Michael Majesky</div>
          </div>
          <div className='middle d-flex'>
            <div>Go Cart Drivers</div>
            <div>
              <div>Ken Bates</div>
              <div>Tom Erickson</div>
            </div>
          </div>
        </div>
        <div className='container' style={{ marginTop: 100 + 'px' }}>
          <div style={{ marginTop: 10 + 'px', marginBottom: 10 + 'px' }}>Stunts</div>
          <div className='middle'>
            <span>
              Andy Arrabito &#x2022;
              Ele Bardha &#x2022;
              Chick Bernhard &#x2022;
              Michael Sean Birdwell &#x2022;
              Kial Butler &#x2022;
              Peter Bianco &#x2022;
              Phil Blackaby &#x2022;
              Andrew DeCesare &#x2022;
              Casey Eubanks &#x2022;
              Alice Ford &#x2022;
              Raul D. Gutierrez &#x2022;
              Jessica Harbeck &#x2022;
              Jt Holt &#x2022;
              Zachary Hudson &#x2022;
              Antal Kalik &#x2022;
              Kevin L.kent &#x2022;
              Cody Bo Kruger &#x2022;
              efka Kvaraciejus &#x2022;
              Scott Alexender Lang &#x2022;
              Danny Lang &#x2022;
              Billy Lucas &#x2022;
              Dan Mast &#x2022;
              Antony Matos &#x2022;
              Richard Nunez &#x2022;
              Timothy Cali Parrish &#x2022;
              David W. Phillips &#x2022;
              Jade Quon &#x2022;
              Dieter Rauter &#x2022;
              David Rodriguez &#x2022;
              Alex Schdenauer &#x2022;
              Tony Van Silva &#x2022;
              Jose Luis Vasquez &#x2022;
              Torrey Vogel &#x2022;
              David Wald &#x2022;
              Kofi Yiadom &#x2022;
              Vanessa Zamarripa
            </span>
          </div>
          <div className='middle d-flex' style={{ marginTop: 50 + 'px' }}>
            <div>Aerial Director Of Photography</div>
            <div>David B. Nowell</div>
          </div>
          <div className='middle d-flex'>
            <div>Aerial Coordinator / Pilot</div>
            <div>Fred North</div>
          </div>
          <div className='middle d-flex'>
            <div>Helicopter Pilot</div>
            <div>Ben Skorstad</div>
          </div>
          <div className='middle d-flex'>
            <div>Aerial Camera System Technician</div>
            <div>Peter Graf</div>
          </div>
          <div className='middle d-flex'>
            <div>Drone Director Of Photography</div>
            <div>Michael Fitzmaurice</div>
          </div>
          <div className='middle d-flex'>
            <div>Drone / Lear Jet Pilot</div>
            <div>Kevin LaRosa II</div>
          </div>
          <div className='middle d-flex'>
            <div>Drone Techniciens</div>
            <div>
              <div>Eric Oversky</div>
              <div>Stephen Scherba</div>
            </div>
          </div>
        </div>
        <div className='container' style={{ marginTop: 100 + 'px' }}>
          <div style={{ marginTop: 10 + 'px', marginBottom: 10 + 'px' }}>Crew</div>
          <div className='middle d-flex'>
            <div>Supervising Art Director</div>
            <div>Tom Reta</div>
          </div>
          <div className='middle d-flex'>
            <div>Set Decorators</div>
            <div>
              <div>Karen Frick</div>
              <div>Richard Roberts</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Senior Art Director</div>
            <div>Sebastian Schrdeder</div>
          </div>
          <div className='middle d-flex'>
            <div>Art Director</div>
            <div>David E. Scott</div>
          </div>
          <div className='middle d-flex'>
            <div>"A" Camera / Steadicam Operator</div>
            <div>Jacques Jouffret</div>
          </div>
          <div className='middle d-flex'>
            <div>"B" Carema Operator</div>
            <div>Lukasz Bielan</div>
          </div>
          <div className='middle d-flex'>
            <div>"C" Camera Operators</div>
            <div>
              <div>Coy Aune</div>
              <div>Nikhil Paniz</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Pursuit Camera Operator</div>
            <div>Brooks P. Guyer</div>
          </div>
          <div className='middle d-flex'>
            <div>First Assistant Photographers</div>
            <div>
              <div>Jimmy Jensin</div>
              <div>John Kairis</div>
              <div>John Rex Woodward</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Second Assistant Photographers</div>
            <div>
              <div>Casey Howard</div>
              <div>Justin Zaffird</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Film Loaders</div>
            <div>
              <div>Zachary Blosser</div>
              <div>Alex Nystrom</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Still Photographer</div>
            <div>Andrew Cooper</div>
          </div>
          <div className='middle d-flex'>
            <div>3D Live Action Steregrapher</div>
            <div>Matthew Blute</div>
          </div>
          <div className='middle d-flex'>
            <div>3D Additional Live Action Stereographer</div>
            <div>Don Presley</div>
          </div>
          <div className='middle d-flex'>
            <div>3D Engineer</div>
            <div>Rafiel Chait</div>
          </div>
          <div className='middle d-flex'>
            <div>3D IMAX Technicien</div>
            <div>Jamie Alac</div>
          </div>
          <div className='middle d-flex'>
            <div>3D Camera Utility</div>
            <div>Grace Thomas</div>
          </div>
          <div className='middle d-flex'>
            <div>Digital Imaging Technicians</div>
            <div>
              <div>Steve Freebairn</div>
              <div>Zach Hilton</div>
            </div>
          </div>
          <div className='middle d-flex'>
            <div>Omni Head Technicien</div>
            <div>Alex Bunin</div>
          </div>
        </div>
        <div className='centerCredit'>
          <div>
            <div className='headline'>The end</div>
          </div>
        </div>
        <div className='blanck'></div>
      </div>
    </div>

  )
}

export default App

