import React from 'react'

export default function Abt(props) {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className={`accordion-item text-${props.text}`} style={props.style}>
          <h2 className="accordion-header" id="headingOne">
            <button className={`accordion-button bg-${props.mode} text-${props.text}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About TextUtils
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>You can edit your text the way you want.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis, sint alias sit tenetur dolores officia inventore exercitationem repudiandae minus.
            </div>
          </div>
        </div>
        <div className={`accordion-item text-${props.text}`} style={props.style}>
          <h2 className="accordion-header" id="headingTwo">
            <button className={`accordion-button collapsed bg-${props.mode} text-${props.text}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Founder
            </button>
          </h2>
          <div id="collapseTwo" className="`accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This Project is Made by Pratysh Pradhan during Learning React.js</strong> 
            </div>
          </div>
        </div>
        <div className={`accordion-item text-${props.text}`} style={props.style}>
          <h2 className="accordion-header" id="headingThree">
            <button className={`accordion-button collapsed bg-${props.mode} text-${props.text}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Thank You
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Thank you For visiting our Website</strong> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
