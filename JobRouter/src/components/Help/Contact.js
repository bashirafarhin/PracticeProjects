import { Form, useActionData, redirect } from "react-router-dom";

export default function Contact() {
    const data=useActionData();
    // it gives the data returned by the action function that is here contactAction
    return (
        <div className="contact">
            <h3>Contact Us</h3>
// react router form , we dont have to track values in each input each as we do in normal form in react using useState
// these Forms on submitting bundle all these values in a req object and pass it to an action function
    
            {/* forms provided by react router known as Form */}
            {/* as we submit this form we will go to the path defined in action and then on going there
            trigger the function which will be present there */}
            <Form method="post" action="/help/contact">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required></input>
                </label>
                <label>
                    <span>Your message:</span>
                    <input name="message" required></input>
                </label>
                <button>Submit</button>
                { data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    );
}

// when the action in form will get to the path defined in it and when it triggers the function
// it also sends request object
export const contactAction = async({request}) => {
    console.log(request);
    const data=await request.formData();
    const submission={
        email : data.get('email'),
        message : data.get('message'),
    }
    console.log(submission);
    //send your data to database and whenever interacting with database always use try catch block

    if(submission.message.length <10){
        return {error : "Message must be over 10 char long"}
    }
    return redirect('/');
}
