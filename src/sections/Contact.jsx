import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //service_9ftm2qm
      await emailjs.send(
        "service_9ftm2qm",
        "template_r7dcfx3",
        {
          from_name: form.name,
          to_name: "Hashan Athurugiriya",
          from_email: form.email,
          to_email: "hello@hashanathurugiriya.me",
          message: form.message,
        },
        "JieZyxPRxBhszLABm"
      );

      setLoading(false);
      alert("Your Message has been sent successfully");
      setForm({
        name:'',
        email:'',
        message:''
      })
    } catch (error) {
      setLoading(false);
      console.log(error.text);
      alert("Something went wrong. Please try again");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let&apos;s Talk</h3>
          <p className="text-lg text-white-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            consequatur molestias dolor, harum deserunt atque qui placeat, dicta
            molestiae quis delectus, necessitatibus maxime eaque facilis totam
            doloribus dolore quae laboriosam!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@yourmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Hi, I am interested in your work...."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-aup"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
