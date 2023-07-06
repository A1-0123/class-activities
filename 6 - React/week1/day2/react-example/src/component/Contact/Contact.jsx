import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <div id='contact'>
      <h1>Contact</h1>
      <p>Non anim occaecat aliquip consectetur sunt ullamco aliqua adipisicing tempor eu. Ea pariatur exercitation pariatur quis laborum non laborum quis cupidatat aute consequat excepteur sunt excepteur. Esse labore ad amet ullamco fugiat cillum dolore aliquip voluptate velit laboris. Occaecat velit tempor culpa ad anim proident nostrud enim esse pariatur anim laboris adipisicing ad. Tempor commodo quis id do sit sint in ipsum occaecat laboris. Fugiat proident adipisicing quis ipsum voluptate quis minim. Esse velit reprehenderit proident sint aute quis excepteur dolor occaecat consectetur dolore qui aliqua.</p>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  )
}

export default Contact