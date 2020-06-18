class Form {
    constructor() {
        this.injectHTML();
        this.openFormButton = document.querySelector('.open');
        this.closeFormButton = document.querySelector('.close');
        this.form = document.querySelector('.form-wrapper');
        this.events();
    }

    events(){
        //listen for open click
        this.openFormButton.addEventListener('click', (e) => this.openTheForm(e));

        //listen for close click
        this.closeFormButton.addEventListener('click', () => this.closeTheForm());

        //close form with escape key
        document.addEventListener('keyup', (e) => {
            if(e.keyCode == 27){
                this.closeTheForm();
            }
            console.log(e.keyCode)
        })
    }

    openTheForm(e){
        e.preventDefault();
        this.form.classList.add('form-is-visible');
    }

    closeTheForm(){
        this.form.classList.remove('form-is-visible');
    }

    injectHTML(){
        document.body.insertAdjacentHTML('beforeend', `
        <div class="form-wrapper">
 
    <form name="contact" method="POST" data-netlify="true">
    <header class="banner">
    <img src="logo-pic.jpg" alt="logo">
    <div>
    <h1 class="banner-title">A Joyful Balance Reiki</h1>
    <h2 class="banner-subtitle">Intake Form</h2>
    </div>
</header>

    <p><label for="name">Name:</label>
    <input type="text" id="name"></p>
    
    <p><label for="phone">Phone number:</label>
    <input type="tel" id="phone"></p>

    <p><label for="address">Mailing Address:</label>
    <input type="text" id="address"></p>

    <p><label for="name">Would like to be added to our mailing list?</label>
    <input type="email" id="email" placeholder="Please provide your email"></p>
    
    <p><label for="occupation">Occupation:</label>
    <input type="text" id="phone"></p>

    <p><label for="emergency-name">Emergency Contact Name:</label>
    <input type="text" id="emergency-name"></p>
    
    <p><label for="emergency=phone">Emergency Contact Phone Number:</label>
    <input type="tel" id="emergency-phone"></p>

    <p><label for="referral">How did you hear about us?</label>
    <input type="text" id="referral"></p>
    
    <p><label for="accomplish-info">What do you hope to accomplish with this Reiki session?</label>
    <textarea name="accomplish-info" id="" cols="30" rows="10"></textarea></p>

    <p><label for="pain-info">What are your common areas of pain or tenstion?</label>
    <textarea name="pain-info" id="" cols="30" rows="10"></textarea></p>

    <p><label for="health-info">Have you ever had any accidents or surgeries?</label>
    <textarea name="health-info" id="" cols="30" rows="10"></textarea></p>

    <p><label for="sign-info">What would be a sign to you that you are feeling better?</label>
    <textarea name="sign-info" id="" cols="30" rows="10"></textarea></p>

    <p><label for="concerns-info">Do you have any concerns about this session or is there anything else we should know?</label>
    <textarea name="concerns-info" id="" cols="30" rows="10"></textarea></p>

    <button type="submit">Send</button>

    </form>

    <div class="close">
        <i class="fas fa-window-close close-icon"></i>
     </div>

     
</div>
        `)
    }
}

new Form();