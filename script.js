 const button = document.createElement('button')

 button.innerText = 'Click Here'

 button.id = 'mainButton'

 button.addEventListener('click', () => {

   alert('This Button Was Clicked!')
 })

 document.body.appendChild(button)